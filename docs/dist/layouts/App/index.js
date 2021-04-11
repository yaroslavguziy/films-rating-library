import React from "../../../_snowpack/pkg/react.js";
import {QueryClientProvider} from "../../../_snowpack/pkg/react-query.js";
import {BrowserRouter, Switch, Route} from "../../../_snowpack/pkg/react-router-dom.js";
import {ReactQueryDevtools} from "../../../_snowpack/pkg/react-query/devtools.js";
import {IntlProvider} from "../../components/IntlProvider/index.js";
import {Header} from "../../components/Header/index.js";
import {queryClient} from "../../constants/queryClient.js";
import {Home} from "../Home/index.js";
import {Entities} from "../Entities/index.js";
import {Entity} from "../Entity/index.js";
import {Categories} from "../Categories/index.js";
import {ROUTES} from "../../constants/routes.js";
export const App = () => /* @__PURE__ */ React.createElement(QueryClientProvider, {
  client: queryClient
}, /* @__PURE__ */ React.createElement(IntlProvider, null, /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
  className: "content"
}, /* @__PURE__ */ React.createElement("div", {
  className: "container"
}, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: ROUTES.HOME
}, /* @__PURE__ */ React.createElement(Home, null)), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: ROUTES.ENTITIES
}, /* @__PURE__ */ React.createElement(Entities, null)), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: ROUTES.ENTITY
}, /* @__PURE__ */ React.createElement(Entity, null)), /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: ROUTES.ENTITIES_CATEGORIES
}, /* @__PURE__ */ React.createElement(Categories, null))))))), /* @__PURE__ */ React.createElement(ReactQueryDevtools, {
  initialIsOpen: false
}));
