import React, { memo } from 'react';
import { Route } from 'react-router-dom';

export const RenderRoutes = memo(({ routes }) => {
  return routes.map((r, key) => {
    return <Route component={r.component} exact={true} key={r.path + key} path={r.path} />;
  });
});
