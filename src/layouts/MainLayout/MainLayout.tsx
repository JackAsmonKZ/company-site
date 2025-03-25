import { Header } from '@/components/layout/Header/Header';
import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {
	classNames?: {
		root?: string;
		body?: string;
		footer?: string;
	};
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({}) => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
