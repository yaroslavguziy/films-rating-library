import React from "../../../_snowpack/pkg/react.js";
import {useIntl} from "../../../_snowpack/pkg/react-intl.js";
import {useParams, Link, generatePath} from "../../../_snowpack/pkg/react-router-dom.js";
import {List} from "../../components/List/index.js";
import {ENTITY_TYPE} from "../../constants/entities.js";
import {ROUTES} from "../../constants/routes.js";
const TV_ARRAY = [
  {category: "top_rated", key: "TOP_RATED"},
  {category: "popular", key: "POPULAR"}
];
const MOVIE_ARRAY = [
  {category: "top_rated", key: "TOP_RATED"},
  {category: "popular", key: "POPULAR"},
  {category: "upcoming", key: "UPCOMING"}
];
const MAP_TYPE_TO_ARRAY = {
  [ENTITY_TYPE.TV]: TV_ARRAY,
  [ENTITY_TYPE.MOVIE]: MOVIE_ARRAY
};
export const Entities = () => {
  const {formatMessage} = useIntl();
  const {type} = useParams();
  return MAP_TYPE_TO_ARRAY[type].map(({category, key}) => /* @__PURE__ */ React.createElement("div", {
    className: "content__item",
    key
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content__header"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: generatePath(ROUTES.ENTITIES_CATEGORIES, {
      type,
      category
    })
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "content__title"
  }, formatMessage({id: `MOVIE.${key}`})))), /* @__PURE__ */ React.createElement("div", {
    className: "content__body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "cards"
  }, /* @__PURE__ */ React.createElement(List, {
    category,
    type
  })))));
};
