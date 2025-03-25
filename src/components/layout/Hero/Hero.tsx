import clsx from 'clsx';

import styles from './styles.module.scss';
import { SolutionsCard } from '@/components/ui/SolutionsCard/SolutionsCard';

const cards = [
	{
		icon: '✨',
		title: 'Креативный дизайн',
		text: 'Мы создаем уникальные дизайны, которые отражают индивидуальность вашего бренда и привлекают внимание целевой аудитории.',
		rating: '4.9',
		badgeText: 'Дизайн',
	},
	{
		icon: '🚀',
		title: 'Быстрая разработка',
		text: 'Оптимизированный процесс разработки позволяет нам создавать высококачественные продукты в сжатые сроки.',
		rating: '4.8',
		badgeText: 'Разработка',
	},
	{
		icon: '📱',
		title: 'Мобильная оптимизация',
		text: 'Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом экране.',
		rating: '4.7',
		badgeText: 'Оптимизация',
	},
];

export const Hero = () => {
	return (
		<section className={clsx(styles.hero)}>
			<div className={clsx(styles.wrapper)}>
				<h2 className={clsx(styles.title)}>
					Инновационные решения для вашего бизнеса
				</h2>
				<div className={clsx(styles.cardWrapper)}>
					{cards.map(({ icon, text, title, rating, badgeText }) => {
						return (
							<SolutionsCard
								key={title}
								icon={icon}
								title={title}
								text={text}
								rating={rating}
								badgeText={badgeText}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
