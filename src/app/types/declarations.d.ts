declare module "*.module.css";
declare module "*.module.scss";
declare module "*.jpg";
declare module "*.png";
declare module "*.gif";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare const __IS_DEV__: boolean;
