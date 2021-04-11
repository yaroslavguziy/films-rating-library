import React, {useMemo} from "../../../_snowpack/pkg/react.js";
import {useIntl} from "../../../_snowpack/pkg/react-intl.js";
import {string, oneOf} from "../../../_snowpack/pkg/prop-types.js";
import {generatePath, useHistory} from "../../../_snowpack/pkg/react-router-dom.js";
import {FontAwesomeIcon} from "../../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faStar} from "../../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
import {Img} from "../Img/index.js";
import {ROUTES} from "../../constants/routes.js";
export const Card = ({
  entity,
  type,
  width,
  height,
  direction,
  handleClick,
  isShowOverview
}) => {
  const {formatMessage} = useIntl();
  const {push} = useHistory();
  const title = useMemo(() => entity?.name || entity?.title, [
    entity?.name,
    entity?.title
  ]);
  const release = useMemo(() => entity?.release_date || entity?.first_air_date, [entity?.release_date, entity?.first_air_date]);
  const entityType = useMemo(() => entity?.media_type || type, [
    type,
    entity?.media_type
  ]);
  const handleCardClick = () => {
    if (handleClick) {
      handleClick();
    }
    push(generatePath(ROUTES.ENTITY, {
      type: entityType,
      id: entity.id
    }));
  };
  return /* @__PURE__ */ React.createElement("button", {
    className: `card card-${direction}`,
    onClick: handleCardClick
  }, /* @__PURE__ */ React.createElement(Img, {
    src: entity?.poster_path,
    width,
    height
  }), /* @__PURE__ */ React.createElement("div", {
    className: "card__info"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "card__title"
  }, title), isShowOverview && entity?.overview && /* @__PURE__ */ React.createElement("p", {
    className: "card__overview"
  }, entity.overview), release && /* @__PURE__ */ React.createElement("span", {
    className: "card__release-date"
  }, formatMessage({id: "CARD.RELEASE"}, {release})), (entity?.vote_average || entity?.vote_count) && /* @__PURE__ */ React.createElement("div", {
    className: "card__ratings"
  }, entity?.vote_average && /* @__PURE__ */ React.createElement("div", {
    className: "card__stars"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faStar,
    style: {color: "yellow"}
  }), /* @__PURE__ */ React.createElement("span", {
    className: "card__rating"
  }, entity.vote_average)), entity?.vote_count && /* @__PURE__ */ React.createElement("span", {
    className: "card__vote"
  }, formatMessage({id: "CARD.VOTES"}, {vote: entity.vote_count})))));
};
Card.propTypes = {
  width: string,
  height: string,
  direction: oneOf(["column", "row"])
};
Card.defaultProps = {
  direction: "column",
  isShowOverview: false
};
