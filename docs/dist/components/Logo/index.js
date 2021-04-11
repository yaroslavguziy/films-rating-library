import React from "../../../_snowpack/pkg/react.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
import {ROUTES} from "../../constants/routes.js";
export const Logo = () => /* @__PURE__ */ React.createElement("div", {
  className: "logo"
}, /* @__PURE__ */ React.createElement(Link, {
  className: "logo__link",
  to: ROUTES.HOME
}, "TV&Movies"));
