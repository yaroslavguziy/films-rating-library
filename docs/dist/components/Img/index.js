import React, {useState, useMemo} from "../../../_snowpack/pkg/react.js";
import {string} from "../../../_snowpack/pkg/prop-types.js";
import {FontAwesomeIcon} from "../../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faSpinner} from "../../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
import {IMG_URL} from "../../constants/env.js";
export const Img = ({src, width, height, className}) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgSrc = useMemo(() => src ? `${IMG_URL}${src}` : "", [src]);
  const loadingClass = useMemo(() => `${isLoading ? " img__loading-active" : ""}`, [isLoading]);
  const internalClass = useMemo(() => `${className ? " " + className : ""}`, [
    className
  ]);
  const handleOnLoad = () => setIsLoading(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: `img`,
    width,
    height
  }, /* @__PURE__ */ React.createElement("img", {
    src: imgSrc,
    width,
    height,
    onLoad: handleOnLoad,
    loading: "lazy",
    className: `img__inner${loadingClass}${internalClass}`
  }), /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faSpinner,
    className: `img__loading${loadingClass}`
  }));
};
Img.propTypes = {
  className: string,
  width: string,
  height: string
};
Img.defaultProps = {
  className: "",
  width: "232px",
  height: "300px"
};
