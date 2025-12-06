import ArrowUpIcon from './icons/ArrowUpIcon';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className='Footer flex flex-col justify-between gap-1 items-center border-t border-black sm:flex-row'>
			<p className='flex gap-1'>
				{`© ${currentYear}`}
				<a href='/' rel='home' title='Kyle Michael Sullivan'>
					Kyle Michael Sullivan
				</a>
			</p>

			<button
				type='button'
				className='button'
				title='To Top'
				onClick={scrollToTop}
			>
				Top <ArrowUpIcon className='inline-block w-4 h-4 ml-1' />
			</button>
		</footer>
	);
}
