import { ExperienceData } from '../data/experience';

export default function Experience() {
	return (
		<section className='Experience flex flex-col flex-nowrap gap-4 border-b px-4 pb-4'>
			<h2 className='text-center text-3xl font-bold'>Experience</h2>
			{ExperienceData.map(({ company, dates, items, location, title }, index) => (
				<div key={index} className='w-full mx-auto'>
					<div className='flex flex-col flex-wrap justify-between gap-2 pt-2 pb-4 sm:flex-row sm:gap-0 sm:items-center'>
						<h3 className='text-accent text-2xl font-semibold sm:order-1 sm:w-7/12'>{title}</h3>
						<h4 className='text-xl pl-1 sm:order-3 sm:w-1/2 sm:pl-0'>{company}</h4>
						<h4 className='text-xl pl-1 sm:order-2 sm:text-right sm:w-5/12 sm:pl-0'>{dates}</h4>
						<h4 className='text-xl pl-1 sm:order-4 sm:text-right sm:w-1/2 sm:pl-0'>{location}</h4>
					</div>
					<ul className='list-disc pl-8'>
						{items.map((item, itemIndex) => (
							<li key={itemIndex}>{item}</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
}
