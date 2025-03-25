import clsx from 'clsx';

import styles from './styles.module.scss';

interface IconBadgeProps {
	className?: string;
	icon: React.ReactNode;
}

export const IconBadge = ({ icon, className }: IconBadgeProps) => {
	return (
		<div className={clsx(styles.badge, className)}>
			<span className={clsx(styles.icon)}>{icon}</span>
		</div>
	);
};
