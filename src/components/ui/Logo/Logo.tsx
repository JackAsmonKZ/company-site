import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import clsx from 'clsx';

type LogoTypes = {
	title: string;
};
export const Logo = ({ title }: LogoTypes) => {
	return (
		<Link to="/" className={clsx(styles.logo)}>
			{title}
		</Link>
	);
};
