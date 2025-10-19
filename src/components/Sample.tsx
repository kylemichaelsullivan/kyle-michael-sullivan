import type { Sample } from '../types';

type SampleProps = Sample & {
	index: number;
};

export default function Sample({
	imagePng,
	imageWebp,
	index,
	interactive,
	source,
	title,
}: SampleProps) {
	return (
		<div className='flex flex-col gap-2' key={`${title}-${index}`}>
			{imagePng ?
				<a
					href={interactive || source}
					className='cursor-pointer mx-auto'
					target='_blank'
					title={title}
					rel='noopener noreferrer'
				>
					<picture>
						{imageWebp && <source srcSet={imageWebp} type='image/webp' />}
						<img
							src={imagePng}
							className='border border-gray-300 shadow-md w-full h-auto max-w-3xl transition-shadow hover:shadow-lg'
							loading='lazy'
							alt={`Screenshot of ${title}`}
						/>
					</picture>
				</a>
			: interactive ?
				<iframe
					src={interactive}
					className='border border-gray-300 shadow-md w-full h-96 max-w-3xl mx-auto'
					title={`Interactive demo of ${title}`}
					loading='lazy'
				/>
			:	null}
			<div className='flex flex-wrap gap-4 justify-center'>
				{interactive && (
					<a
						href={interactive}
						target='_blank'
						title={`Interactive Version of ${title}`}
						rel='noopener noreferrer'
					>
						Interactive Version
					</a>
				)}
				<a
					href={source}
					target='_blank'
					title={`Source Code for ${title}`}
					rel='noopener noreferrer'
				>
					Source Code
				</a>
			</div>
		</div>
	);
}
