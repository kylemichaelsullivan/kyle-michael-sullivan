import { SampleData } from '../data';
import Sample from './Sample';

export default function Samples() {
	return (
		<section className='Samples flex flex-col flex-nowrap gap-4 border-b p-4'>
			<h2 className='text-center text-3xl font-bold'>Samples</h2>
			<div className='flex flex-col gap-8'>
				{SampleData.map((sample, index) => (
					<Sample {...sample} index={index} key={`${sample.title}-${index}`} />
				))}
			</div>
		</section>
	);
}
