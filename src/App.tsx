import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';

import '@assets/scss/main.scss';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
