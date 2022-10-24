import { Route, Routes, Navigate } from 'react-router-dom';
import Main from '@/pages/Main/Main';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;
