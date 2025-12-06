import { Suspense, lazy } from 'react';

import Knowledge from './Knowledge';
import Skills from './Skills';
import Summary from './Summary';

const Experience = lazy(() => import('./Experience'));
const Education = lazy(() => import('./Education'));
const Links = lazy(() => import('./Links'));
const Samples = lazy(() => import('./Samples'));

function LoadingSection() {
	return (
		<section className='flex justify-center items-center border-b h-32'>
			<div className='text-accent text-lg'>Loading...</div>
		</section>
	);
}

export default function Body() {
	return (
		<main className='Body'>
			<Summary />
			<Skills />
			<Knowledge />
			<Suspense fallback={<LoadingSection />}>
				<Experience />
			</Suspense>
			<Suspense fallback={<LoadingSection />}>
				<Education />
			</Suspense>
			<Suspense fallback={<LoadingSection />}>
				<Links />
			</Suspense>
			<Suspense fallback={<LoadingSection />}>
				<Samples />
			</Suspense>
		</main>
	);
}
