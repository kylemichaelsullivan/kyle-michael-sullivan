import { memo } from 'react';

import type { Sample } from '../types';

type SampleProps = Sample & {
	index: number;
};

function Sample({ imagePng, imageWebp, index, interactive, source, title }: SampleProps) {
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
							className='border border-gray-300 shadow-md w-full h-auto transition-shadow hover:shadow-lg'
							loading={index === 0 ? 'eager' : 'lazy'}
							fetchPriority={index === 0 ? 'high' : undefined}
							decoding='async'
							alt={`Screenshot of ${title}`}
						/>
					</picture>
				</a>
			: interactive ?
				<iframe
					src={interactive}
					className='border border-gray-300 shadow-md w-full h-96 mx-auto'
					title={`Interactive demo of ${title}`}
					loading='lazy'
				/>
			:	null}
			<div className='flex flex-wrap gap-4 justify-center'>
				{interactive && (
					<a
						href={interactive}
						className='button'
						target='_blank'
						title={`Interactive Version of ${title}`}
						rel='noopener noreferrer'
					>
						Interactive Version
					</a>
				)}
				<a
					href={source}
					className='button'
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

export default memo(Sample);
