import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../lazy-load/pages/NoLazy";
// import { Lazy1, Lazy2, Lazy3 } from "../lazy-load/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(/* webpackChunkName:"LazyLayout"*/ "../lazy-load/layout/LazyLayout")
);

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No lazy",
  },
];
