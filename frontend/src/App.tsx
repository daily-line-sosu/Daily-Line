import { Route, Routes, Navigate } from 'react-router-dom';
import Main from '@/pages/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';

const App = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
};

export default App;
