import clsx from 'clsx';

import styles from './styles.module.scss';
interface ButtonProps {
	title: string;
}
export const Button = ({ title }: ButtonProps) => {
	return <button className={clsx(styles.button)}>{title}</button>;
};
