import "../../../_snowpack/pkg/intl.js";
import React, {useMemo} from "../../../_snowpack/pkg/react.js";
import {node} from "../../../_snowpack/pkg/prop-types.js";
import {IntlProvider as NativeIntlProvider} from "../../../_snowpack/pkg/react-intl.js";
import {flattenMessages} from "../../utils/flattenMessages.js";
import {EN, RU} from "../../constants/languages.js";
import en from "../../translations/en.json.proxy.js";
import ru from "../../translations/ru.json.proxy.js";
const messages = {en, ru};
export const IntlProvider = ({children}) => {
  const flattenMsgs = useMemo(() => Object.entries(messages).reduce((acc, [key, value]) => {
    acc[key] = flattenMessages(value);
    return acc;
  }, {}), [messages]);
  return /* @__PURE__ */ React.createElement(NativeIntlProvider, {
    locale: EN,
    messages: flattenMsgs[EN],
    defaultLocale: EN
  }, children);
};
IntlProvider.propTypes = {
  children: node.isRequired
};
