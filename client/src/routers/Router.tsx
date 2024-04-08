import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import BigLoader from '../components/shared/PageLoader';

const Home = lazy(() => import('../pages/Home/Index'));
// const Product = lazy(() => import('../pages/Product/Index'));
// const Payment = lazy(() => import('../pages/Payment/Index'));

const LazyComponent = ({ element: Component }: any) => {
  return (
    <Suspense fallback={<BigLoader />}>
      <Component />
    </Suspense>
  );
};

const Router: React.FunctionComponent = () => (
  <Routes>
    <Route path='/' element={<LazyComponent element={Home} />} />
    {/* <Route path="/product/:id" element={<LazyComponent element={Product} />} /> */}
  </Routes>
);

export default Router;
