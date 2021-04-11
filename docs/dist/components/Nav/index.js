import React from "../../../_snowpack/pkg/react.js";
import {useIntl} from "../../../_snowpack/pkg/react-intl.js";
import {Link, generatePath} from "../../../_snowpack/pkg/react-router-dom.js";
import {ROUTES} from "../../constants/routes.js";
import {ENTITY_TYPE} from "../../constants/entities.js";
export const Nav = ({handleNavOpen, isNavOpen}) => {
  const {formatMessage} = useIntl();
  return /* @__PURE__ */ React.createElement("nav", {
    className: `nav ${isNavOpen ? "active" : ""}`
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "nav__list"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav__item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "nav__link",
    to: ROUTES.HOME,
    onClick: handleNavOpen
  }, formatMessage({id: "NAVIGATION.HOME"}))), /* @__PURE__ */ React.createElement("li", {
    className: "nav__item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "nav__link",
    to: generatePath(ROUTES.ENTITIES, {type: ENTITY_TYPE.TV}),
    onClick: handleNavOpen
  }, formatMessage({id: "NAVIGATION.TV"}))), /* @__PURE__ */ React.createElement("li", {
    className: "nav__item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "nav__link",
    to: generatePath(ROUTES.ENTITIES, {type: ENTITY_TYPE.MOVIE}),
    onClick: handleNavOpen
  }, formatMessage({id: "NAVIGATION.MOVIES"})))));
};
