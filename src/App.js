import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';

import { history } from '@helpers';
import { BaseLayout, PrimaryLayouts } from '@layout';
import { RequireAuth } from '@routes';
import { Login } from '@pages';

export function App() {
  const { language, messages } = useSelector(s => s.language);

  i18n.load(language, messages);
  i18n.activate(language);

  return (
    <BrowserRouter history={history}>
      <I18nProvider i18n={i18n}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </I18nProvider>
    </BrowserRouter>
  );
}
