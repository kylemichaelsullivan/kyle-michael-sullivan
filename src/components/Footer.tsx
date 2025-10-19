import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className='Footer flex flex-col justify-between gap-1 items-center border-t border-black p-4 sm:flex-row'>
			<p className='flex gap-1'>
				{`© ${currentYear}`}
				<a href='/' rel='home' title='Kyle Michael Sullivan'>
					Kyle Michael Sullivan
				</a>
			</p>

			<button type='button' className='button' title='To Top' onClick={scrollToTop}>
				Top <FontAwesomeIcon icon={faArrowUp} />
			</button>
		</footer>
	);
}
