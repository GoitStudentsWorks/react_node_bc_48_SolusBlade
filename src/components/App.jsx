import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import ModalRegister from './ModalRegister/ModalRegister';
import ModalLogin from './ModalLogin/ModalLogin';

import Loader from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const App = () => {
  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* <Route
              path="/welcome"
              element={<PublicRoute restricted component={<WelcomePage />} />}
            /> */}
            {/* <Route
              path="/auth"
              element={<PublicRoute component={<AuthPage />} />}
            >
              <Route path="login" exact element={<Login />} />
              <Route path="register" exact element={<Register />} />
            </Route> */}
            {/* <Route
              path="/home"
              element={<PrivateRoute component={<HomePage />} />}
            >
              <Route path=":boardName" element={<></>} />
            </Route> */}

            <Route path="*" element={<Navigate to="/welcome" />} />
          </Routes>
        </Suspense>
      )}
      <ToastContainer
        position="center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          width: '700px',
          height: '200px',
          fontSize: '24px',
          lineHeight: '36px',
        }}
      />
    </>
  );
};

export default App;
