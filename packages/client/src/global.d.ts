/**
 * css module type
 */
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

/**
 * 페더레이션으로 가져오는 컴포넌트는 타입을 인지하지 못하므로 아래와 같인 선언해준다
 * module federation LoginPage component
 */
declare module "ui/*" {
  export default function LoginPage(): JSX.Element;
}
