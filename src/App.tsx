import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';

import '@assets/scss/main.scss';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { PortfolioPage } from './pages/PortfolioPage/PortfolioPage';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="services" element={<ServicesPage />} />
					<Route path="portfolio" element={<PortfolioPage />} />
					<Route path="contacts" element={<ContactsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
