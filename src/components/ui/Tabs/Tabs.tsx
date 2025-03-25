import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface TabsProps {
	tabs: {
		title: string;
		href: string;
	}[];
}
export const Tabs = ({ tabs }: TabsProps) => {
	const location = useLocation();

	return (
		<div className={clsx(styles.tabs)}>
			<div className={clsx(styles.tabsWrapper)}>
				<ul className={clsx(styles.wrapper)}>
					{tabs.map((item) => {
						return (
							<li
								key={item.href}
								className={clsx(styles.tab, {
									[styles.active]: location.pathname === item.href,
								})}
							>
								<Link className={clsx(styles.link)} to={item.href}>
									{item.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
