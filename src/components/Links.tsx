import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinksData } from '../data';

export default function Links() {
	return (
		<section className='Links flex flex-col flex-nowrap gap-4 border-b p-4'>
			<h2 className='text-center text-3xl font-bold'>Links</h2>
			<div className='flex flex-row flex-wrap justify-center gap-4'>
				{LinksData.map(({ href, icon, label }, index) => (
					<a
						href={href}
						className='button'
						rel='noopener noreferrer'
						target='_blank'
						title={label}
						key={`${label}-${index}`}
					>
						{icon && <FontAwesomeIcon icon={icon} />}
						<span>{label}</span>
					</a>
				))}
			</div>
		</section>
	);
}
