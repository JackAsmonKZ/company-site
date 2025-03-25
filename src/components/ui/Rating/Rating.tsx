import clsx from 'clsx';

import styles from './styles.module.scss';
interface RatingProps {
	rating: string;
}
export const Rating = ({ rating }: RatingProps) => {
	return (
		<div className={clsx(styles.rating)}>
			<span className={clsx(styles.star)}>★</span>
			{rating}
		</div>
	);
};
