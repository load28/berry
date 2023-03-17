import React, {Suspense} from "react";

// @ts-ignore
function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    // @ts-ignore
    await __webpack_init_sharing__('default');
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

const urlCache = new Set();
const useDynamicScript = (url: string) => {
  const [ready, setReady] = React.useState(false);
  const [errorLoading, setErrorLoading] = React.useState(false);

  React.useEffect(() => {
    if (!url) return;

    if (urlCache.has(url)) {
      setReady(true);
      setErrorLoading(false);
      return;
    }

    setReady(false);
    setErrorLoading(false);

    const element = document.createElement('script');

    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    element.onload = () => {
      urlCache.add(url);
      setReady(true);
    };

    element.onerror = () => {
      setReady(false);
      setErrorLoading(true);
    };

    document.head.appendChild(element);

    return () => {
      urlCache.delete(url);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    errorLoading,
    ready,
  };
};

const componentCache = new Map();
const useFederatedComponent = (remoteUrl: string, scope: string, module: string) => {
  const key = `${remoteUrl}-${scope}-${module}`;
  const [Component, setComponent] = React.useState(null);

  const { ready, errorLoading } = useDynamicScript(remoteUrl);
  React.useEffect(() => {
    if (Component) setComponent(null);
    // Only recalculate when key changes
  }, [key]);

  React.useEffect(() => {
    if (ready && !Component) {
      const comp = componentCache.get(key) || React.lazy(loadComponent(scope, module));
      componentCache.set(key, comp);
      setComponent(comp as any);
    }
    // key includes all dependencies (scope/module)
  }, [Component, ready, key]);

  return { errorLoading, Component };
};

const CacheDynamicComponent: React.FC<{ module: string }> = (props: {module: string;}) => {
  const {url, module, scope} = {
    url: 'http://localhost:8082/remoteEntry.js',
    scope: 'ui',
    module: props.module,
  }
  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(url, scope, module) as any;

  return (
    <Suspense>
        {errorLoading
          ? `Error loading module "${module}"`
          : FederatedComponent && <FederatedComponent />}
    </Suspense>
  )
}

export default CacheDynamicComponent;
