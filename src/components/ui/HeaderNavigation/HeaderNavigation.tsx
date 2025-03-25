import clsx from 'clsx';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

type HeaderNavigationItem = {
	title: string;
	href: string;
};

type HeaderNavigationProps = {
	navigationItems: HeaderNavigationItem[];
};
export const HeaderNavigation = ({
	navigationItems,
}: HeaderNavigationProps) => {
	return (
		<nav className={clsx(styles.wrapper)}>
			{navigationItems.map((item) => {
				return (
					<Link key={item.href} to={item.href} className={clsx(styles.item)}>
						{item.title}
					</Link>
				);
			})}
		</nav>
	);
};
