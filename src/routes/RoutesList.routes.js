import React from 'react';
import { Trans } from '@lingui/react';
import {
  overview_white,
  overview,
  product_white,
  product,
  campaign_white,
  campaign,
  setting_white,
  setting,
  payment_white,
  payment,
  statement_white,
  statement,
  schedule,
  schedule_white,
} from '@static/svg';

export const RoutesList = language => {
  return [
    {
      id: '1',
      icon: [overview_white, overview],
      name: <Trans>{'Dashboard'}</Trans>,
      route: `/`,
      group: '',
    },
    // {
    //   id: '2',
    //   icon: [product_white, product],
    //   name: <Trans>{'Manage Hotels'}</Trans>,
    //   route: `/${language}/hotels/manage`,
    //   group: 'hotels',
    // },
  ];
};
