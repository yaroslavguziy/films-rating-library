import React, {useState} from "../../../_snowpack/pkg/react.js";
import {Nav} from "../Nav/index.js";
import {Search} from "../Search/index.js";
import {Logo} from "../Logo/index.js";
export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavOpen = () => setIsNavOpen(!isNavOpen);
  return /* @__PURE__ */ React.createElement("header", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header__wrapper"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement(Nav, {
    handleNavOpen,
    isNavOpen
  }), /* @__PURE__ */ React.createElement(Search, null), /* @__PURE__ */ React.createElement("div", {
    className: `header__burger ${isNavOpen ? "active" : ""}`,
    onClick: handleNavOpen
  }, /* @__PURE__ */ React.createElement("span", null))));
};
