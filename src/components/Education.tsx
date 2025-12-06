import { EducationData } from '../data/education';

export default function Education() {
	return (
		<section className='Education flex flex-col flex-nowrap gap-4 border-b'>
			<h2 className='text-center text-3xl font-bold'>Education</h2>
			{EducationData.map(({ degree, location, school }) => (
				<div className='flex flex-col gap-2' key={`${school}-${degree}`}>
					<h3 className='text-accent text-2xl font-semibold'>{degree}</h3>
					<div className='flex flex-col gap-2 sm:flex-row'>
						<p className='text-xl'>{school}</p>
						<span className='hidden sm:block'>|</span>
						<p className='text-xl'>{location}</p>
					</div>
				</div>
			))}
		</section>
	);
}
