import React, {Suspense} from "react";

// @ts-ignore
const App = React.lazy(() => import('ui/App'));

const Root: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App name="minyoung"/>
    </Suspense>
  )
};

export default Root;
