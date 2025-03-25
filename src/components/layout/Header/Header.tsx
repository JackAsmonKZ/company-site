import { Logo } from '@/components/ui/Logo/Logo';
import clsx from 'clsx';

import styles from './styles.module.scss';
import { HeaderNavigation } from '@/components/ui/HeaderNavigation/HeaderNavigation';

const navigationItems = [
	{ title: 'Главная', href: '/' },
	{ title: 'О нас', href: '/about' },
	{
		title: 'Услуги',
		href: '/services',
	},
	{
		title: 'Портфолио',
		href: '/portfolio',
	},
	{
		title: 'Контакты',
		href: '/contacts',
	},
];
export const Header = () => {
	return (
		<>
			<div className={clsx(styles.headerSubstrate)}></div>
			<header className={clsx(styles.header)}>
				<div className={clsx(styles.wrapper)}>
					<Logo title="CompanyName" />
					<HeaderNavigation navigationItems={navigationItems} />
				</div>
			</header>
		</>
	);
};
