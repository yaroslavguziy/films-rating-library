import React, {useRef, useMemo} from "../../../_snowpack/pkg/react.js";
import {useParams} from "../../../_snowpack/pkg/react-router-dom.js";
import {useIntl} from "../../../_snowpack/pkg/react-intl.js";
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver.js";
import {useEntities} from "../../hooks/entities.js";
import {EntitiesList} from "../../components/EntitiesList/index.js";
export const Categories = () => {
  const {formatMessage} = useIntl();
  const {type, category} = useParams();
  const ref = useRef(null);
  const {data, fetchNextPage, hasNextPage} = useEntities({
    type,
    category
  });
  useIntersectionObserver({
    target: ref,
    onIntersect: fetchNextPage,
    enabled: hasNextPage
  });
  const entities = useMemo(() => data?.pages ? data.pages.flatMap(({results}) => results) : [], [data?.pages]);
  const typeKey = useMemo(() => type.toUpperCase(), [type]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "content__item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content__header"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "content__title"
  }, formatMessage({
    id: `${typeKey}.${category.toUpperCase()}`
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "content__body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "cards"
  }, /* @__PURE__ */ React.createElement(EntitiesList, {
    entities,
    type
  }), /* @__PURE__ */ React.createElement("div", {
    ref
  })))));
};
