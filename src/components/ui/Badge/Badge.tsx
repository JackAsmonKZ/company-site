import clsx from 'clsx';

import styles from './styles.module.scss';
interface BadgeProps {
	text: string;
}
export const Badge = ({ text }: BadgeProps) => {
	return <div className={clsx(styles.badge)}>{text}</div>;
};
