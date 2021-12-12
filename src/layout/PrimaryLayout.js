import React, { Fragment, Suspense, useMemo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { history } from '@helpers';

import { Layout, Loader } from '@components';

import { RenderRoutes } from './RenderRoutes';

import { Container } from './styles';

export const PrimaryLayouts = () => {
  const { renderList } = useSelector(state => state.language);
  const [currentPath, setCurrentPath] = useState(null);

  useEffect(() => {
    return history.listen(location => {
      setCurrentPath(location.pathname);
    });
  }, [history]);

  const sectionTitle = useMemo(
    () =>
      renderList.filter(item => item.path === (currentPath || history.location.pathname))[0]?.title,
    [currentPath, history],
  );

  return (
    <Fragment>
      <Layout>
        {/* <Sidebar /> */}
        <Container>
          {/* <Navbar name="Jose Wang" section={sectionTitle} /> */}
          <Suspense fallback={<Loader />}>
            <RenderRoutes routes={renderList} />
          </Suspense>
        </Container>
        {/* <div
          // className={'container'}
          // style={{ paddingTop: fixedHeader ? 72 : 0 }}
          id="primaryLayout">
          <Suspense fallback={<div>Loading</div>}>
            {matchPath && <Renders list={renderList} />}
          </Suspense>
          <BackTop className={'backTop'} target={() => document.querySelector('#primaryLayout')} />
          <Footer />
        </div> */}
      </Layout>
    </Fragment>
  );
};
