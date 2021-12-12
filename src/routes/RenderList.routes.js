import React from 'react';

import { lazy } from 'react';

export const RenderList = language => {
  return [
    {
      path: `/`,
      component: <>Hello Home</>,
    },
    // {
    //   path: `/${language}/hotels/manage`,
    //   component: Hotels,
    //   title: 'Manage Hotels',
    // },
  ];
};
