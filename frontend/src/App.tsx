import { Route, Routes } from 'react-router-dom';
import Main from '@/pages/Main/Main';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';
import Mypage from '@/pages/Mypage/Mypage';
import Register from '@/pages/Register/Register';

const App = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
};

export default App;
