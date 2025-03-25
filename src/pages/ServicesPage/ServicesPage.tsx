import { FC } from 'react';

import { Hero } from '@/components/layout/Hero/Hero';
import { Projects } from '@/components/layout/Projects/Projects';
import { Footer } from '@/components/layout/Footer/Footer';

export const ServicesPage: FC = () => {
	return (
		<>
			<Hero />
			<Projects />
			<Footer />
		</>
	);
};
