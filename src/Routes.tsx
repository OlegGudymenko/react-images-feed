import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/photo/:id"
        element={<DetailsPage />}
      />

    </Routes>
  );
}
