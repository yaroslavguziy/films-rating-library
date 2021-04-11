import React, {forwardRef} from "../../../_snowpack/pkg/react.js";
import {oneOf, node} from "../../../_snowpack/pkg/prop-types.js";
import Slider from "../../../_snowpack/pkg/react-slick.js";
import {Card} from "../Card/index.js";
import {settings} from "../../constants/slider.js";
const Wrapper = forwardRef(({view, children}, ref) => view === "carousel" ? /* @__PURE__ */ React.createElement(Slider, {
  ref,
  ...settings
}, children) : /* @__PURE__ */ React.createElement("ul", {
  className: `cards cards__${view}-view`
}, children));
Wrapper.propTypes = {
  children: node,
  view: oneOf(["card", "list", "carousel"])
};
export const EntitiesList = forwardRef(({entities, type, view}, ref) => /* @__PURE__ */ React.createElement(Wrapper, {
  view,
  ref
}, entities?.map((entity) => /* @__PURE__ */ React.createElement("li", {
  className: "cards__item",
  key: entity.id
}, /* @__PURE__ */ React.createElement(Card, {
  entity,
  view,
  type
})))));
EntitiesList.propTypes = {
  type: oneOf(["tv", "movie", "person"]),
  view: oneOf(["card", "list", "carousel"])
};
EntitiesList.defaultProps = {
  view: "card"
};
