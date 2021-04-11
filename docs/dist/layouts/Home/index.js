import React, {useRef} from "../../../_snowpack/pkg/react.js";
import {useIntl} from "../../../_snowpack/pkg/react-intl.js";
import {List} from "../../components/List/index.js";
import {ENTITY_TYPE} from "../../constants/entities.js";
const ARRAY = [
  {type: ENTITY_TYPE.TV, category: "popular", key: "POPULAR_TV"},
  {type: ENTITY_TYPE.MOVIE, category: "popular", key: "POPULAR_MOVIE"}
];
const MAP_NAME_TO_FUNC = {
  prev: "slickPrev",
  next: "slickNext"
};
export const Home = () => {
  const {formatMessage} = useIntl();
  const tvSliderRef = useRef(null);
  const movieSliderRef = useRef(null);
  const MAP_GROUP_TO_REF = {
    tv: tvSliderRef,
    movie: movieSliderRef
  };
  const handleClick = (type) => ({target}) => {
    const ref = MAP_GROUP_TO_REF[type];
    if (ref?.current)
      ref.current[MAP_NAME_TO_FUNC[target.name]]();
  };
  return ARRAY.map(({type, category, key}) => /* @__PURE__ */ React.createElement("div", {
    className: "content__item",
    key
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content__header"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "content__title"
  }, formatMessage({id: `HOME.${key}`})), /* @__PURE__ */ React.createElement("div", {
    className: "arrows"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "arrow arrow__left",
    onClick: handleClick(type),
    name: "prev"
  }, "⮜"), /* @__PURE__ */ React.createElement("button", {
    className: "arrow arrow__right",
    onClick: handleClick(type),
    name: "next"
  }, "⮞"))), /* @__PURE__ */ React.createElement("div", {
    className: "content__body"
  }, /* @__PURE__ */ React.createElement(List, {
    category,
    type,
    view: "carousel",
    ref: MAP_GROUP_TO_REF[type]
  }))));
};
