import React, {useState, useMemo} from "../../../_snowpack/pkg/react.js";
import {FontAwesomeIcon} from "../../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faSearch} from "../../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
import {useSearchEntities} from "../../hooks/entities.js";
import {Card} from "../Card/index.js";
import {ENTITY_TYPE} from "../../constants/entities.js";
export const Search = () => {
  const [query, setQuery] = useState("");
  const {data} = useSearchEntities({
    query,
    queryOptions: {enabled: query?.length > 2}
  });
  const list = useMemo(() => data?.total_results ? data.results.filter(({media_type}) => media_type !== ENTITY_TYPE.PERSON).slice(0, 4) : [], [data?.result, data?.total_results]);
  const handleChange = ({target}) => setQuery(target.value);
  const handleClick = () => setQuery("");
  return /* @__PURE__ */ React.createElement("div", {
    className: "search"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "search__form"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faSearch,
    style: {color: "#000"}
  }), /* @__PURE__ */ React.createElement("input", {
    placeholder: "Search",
    className: "search__input",
    value: query,
    onChange: handleChange
  })), /* @__PURE__ */ React.createElement("ul", {
    className: "search__list"
  }, list.length ? list.map(({
    id,
    poster_path,
    media_type,
    name,
    title,
    release_date,
    first_air_date
  }) => /* @__PURE__ */ React.createElement("li", {
    className: "search__item",
    key: id
  }, /* @__PURE__ */ React.createElement(Card, {
    entity: {
      id,
      poster_path,
      media_type,
      name,
      title,
      release_date,
      first_air_date
    },
    width: "60px",
    height: "70px",
    direction: "row",
    handleClick
  }))) : "EMPTY LIST"));
};
