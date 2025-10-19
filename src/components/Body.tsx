import Summary from './Summary';
import Skills from './Skills';
import Knowledge from './Knowledge';
import Experience from './Experience';
import Education from './Education';
import Links from './Links';
import Samples from './Samples';

export default function Body() {
	return (
		<main className='Body p-4'>
			<Summary />
			<Skills />
			<Knowledge />
			<Experience />
			<Education />
			<Links />
			<Samples />
		</main>
	);
}
