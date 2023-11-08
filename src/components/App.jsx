import { Route, Routes } from 'react-router-dom';
import MainMenu from '../pages/MainMenu/MainMenu';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route to={'/'} element={<MainMenu />} />
      </Routes>
      <MainMenu />
    </div>
  );
};
