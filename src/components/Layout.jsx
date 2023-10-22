import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LoadingSpinnerComponent from 'react-spinners-components';
import Header from './Header/Header';


export default function Layout() {
  return (
    <div style={{ maxWidth: 600, margin: '8px auto 0', padding: '0 16px' }}>
      <Header />
      <Suspense
        fallback={
          <LoadingSpinnerComponent
            type={'Spinner'}
            color={'teal'}
            size={'200px'}
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}