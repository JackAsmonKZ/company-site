import clsx from 'clsx';

import styles from './styles.module.scss';
import { Tabs } from '@/components/ui/Tabs/Tabs';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';

const tabs = [
	{
		title: 'Главная',
		href: '/',
	},
	{
		title: 'О нас',
		href: '/about',
	},

	{
		title: 'Услуги',
		href: '/services',
	},

	{
		title: 'Портфолио',
		href: '/portfolio',
	},

	{
		title: 'Контакты',
		href: '/contacts',
	},
];

const projects = [
	'Проект 1',
	'Проект 2',
	'Проект 3',
	'Проект 4',
	'Проект 5',
	'Проект 6',
];
export const Projects = () => {
	return (
		<section className={clsx(styles.projects)}>
			<h2 className={clsx(styles.title)}>Наши работы</h2>
			<div className={clsx(styles.subtitle)}>
				Ознакомьтесь с нашими лучшими проектами в различных категориях
			</div>
			<Tabs tabs={tabs} />
			<div className={clsx(styles.projectsWrapper)}>
				{projects.map((title) => {
					return <ProjectCard title={title} />;
				})}
			</div>
		</section>
	);
};
