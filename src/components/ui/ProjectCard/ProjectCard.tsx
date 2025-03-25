import clsx from 'clsx';

import styles from './styles.module.scss';
import { Button } from '../Button/Button';
import { useState } from 'react';

interface ProjectCardProps {
	title: string;
}
export const ProjectCard = ({ title }: ProjectCardProps) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onTouchStart={() => setIsHovered(true)}
			className={clsx(styles.cardWrapper, {
				[styles.visible]: isHovered,
			})}
		>
			<div className={clsx(styles.card)}>{title}</div>
			<div className={clsx(styles.cardHover)}>
				<div className={clsx(styles.title)}>E-commerce платформа</div>
				<div className={clsx(styles.text)}>Веб-платформа</div>
				<Button title="Подробнее" />
			</div>
		</div>
	);
};
