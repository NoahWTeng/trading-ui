import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { siteName } from '@helpers';

export function BaseLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>{siteName}</title>
      </Helmet>
      {children}
    </Fragment>
  );
}
