import type { Sample } from '../types';

type SampleProps = Sample & {
	index: number;
};

export default function Sample({ image, interactive, source, title, index }: SampleProps) {
	return (
		<div className='flex flex-col gap-2' key={`${title}-${index}`}>
			{image && (
				<a
					href={interactive || source}
					className='cursor-pointer mx-auto'
					target='_blank'
					title={title}
					rel='noopener noreferrer'
				>
					<img
						src={image}
						className='border border-gray-300 shadow-md w-full h-auto max-w-3xl transition-shadow hover:shadow-lg'
						loading='lazy'
						alt={`Screenshot of ${title}`}
					/>
				</a>
			)}
			<div className='flex flex-wrap gap-4 justify-center'>
				{interactive && (
					<a
						href={interactive}
						target='_blank'
						rel='noopener noreferrer'
						title={`Interactive Version of ${title}`}
					>
						Interactive Version
					</a>
				)}
				<a
					href={source}
					target='_blank'
					rel='noopener noreferrer'
					title={`Source Code for ${title}`}
				>
					Source Code
				</a>
			</div>
		</div>
	);
}
