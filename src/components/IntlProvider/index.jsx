import 'intl';
import React, { useMemo } from 'react';
import { node } from 'prop-types';
import { IntlProvider as NativeIntlProvider } from 'react-intl';

import { flattenMessages } from '#utils/flattenMessages.js';
import { EN, RU } from '#constants/languages.js';
import en from '#translations/en.json';
import ru from '#translations/ru.json';

const messages = { en, ru };

export const IntlProvider = ({ children }) => {
  const flattenMsgs = useMemo(
    () =>
      Object.entries(messages).reduce((acc, [key, value]) => {
        acc[key] = flattenMessages(value);

        return acc;
      }, {}),
    [messages]
  );

  return (
    <NativeIntlProvider
      locale={RU}
      messages={flattenMsgs[RU]}
      defaultLocale={RU}
    >
      {children}
    </NativeIntlProvider>
  );
};

IntlProvider.propTypes = {
  children: node.isRequired,
};
