import React, {forwardRef, useMemo} from "../../../_snowpack/pkg/react.js";
import {oneOf, string} from "../../../_snowpack/pkg/prop-types.js";
import {EntitiesList} from "../EntitiesList/index.js";
import {useEntities} from "../../hooks/entities.js";
export const List = forwardRef(({type, category, view}, ref) => {
  const {data} = useEntities({
    type,
    category
  });
  const results = useMemo(() => data?.pages ? [...data.pages].reduce((acc, {results: results2}) => acc.concat(results2), []) : [], [data?.pages]);
  return /* @__PURE__ */ React.createElement(EntitiesList, {
    view,
    ref,
    type,
    entities: results
  });
});
List.propTypes = {
  type: oneOf(["tv", "movie", "person"]),
  category: string,
  view: oneOf(["card", "list", "carousel"])
};
List.defaultProps = {
  view: "card"
};
