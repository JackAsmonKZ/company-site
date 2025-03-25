import clsx from 'clsx';

import styles from './styles.module.scss';
import { IconBadge } from '../IconBadge/IconBadge';
import React from 'react';
import { Rating } from '../Rating/Rating';
import { Badge } from '../Badge/Badge';

interface SolutionsCardProps {
	icon: React.ReactNode;
	title: string;
	text: string;
	rating: string;
	badgeText: string;
}
export const SolutionsCard = ({
	icon,
	title,
	text,
	rating,
	badgeText,
}: SolutionsCardProps) => {
	return (
		<div className={clsx(styles.card)}>
			<IconBadge icon={icon} className={styles.icon} />
			<div className={clsx(styles.title)}>{title}</div>
			<div className={clsx(styles.text)}>{text}</div>
			<div className={clsx(styles.cardFooter)}>
				<Rating rating={rating} />
				<Badge text={badgeText} />
			</div>
		</div>
	);
};
