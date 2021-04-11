import React, {useRef} from "../../../_snowpack/pkg/react.js";
import {useParams} from "../../../_snowpack/pkg/react-router-dom.js";
import {useEntity, useEntitySimilar} from "../../hooks/entities.js";
import {Card} from "../../components/Card/index.js";
import {EntitiesList} from "../../components/EntitiesList/index.js";
const MAP_NAME_TO_FUNC = {
  prev: "slickPrev",
  next: "slickNext"
};
export const Entity = () => {
  const {type, id} = useParams();
  const ref = useRef(null);
  const {data: entity} = useEntity({
    type,
    id,
    queryOptions: {enabled: !!type && !!id}
  });
  const {data: similar} = useEntitySimilar({
    type,
    id,
    queryOptions: {enabled: !!type && !!id}
  });
  const handleClick = ({target}) => {
    if (ref?.current)
      ref.current[MAP_NAME_TO_FUNC[target.name]]();
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "entity"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "entity__description"
  }, /* @__PURE__ */ React.createElement(Card, {
    entity,
    direction: "row",
    isShowOverview: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "similar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "similar__header"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "similar__title"
  }, "Similar"), /* @__PURE__ */ React.createElement("div", {
    className: "arrows"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "arrow arrow__left",
    name: "prev",
    onClick: handleClick
  }, "⮜"), /* @__PURE__ */ React.createElement("button", {
    className: "arrow arrow__right",
    name: "next",
    onClick: handleClick
  }, "⮞"))), /* @__PURE__ */ React.createElement(EntitiesList, {
    entities: similar?.results,
    view: "carousel",
    type,
    ref
  })));
};
