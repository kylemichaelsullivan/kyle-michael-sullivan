import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import { LinksData } from '../data/links';

const iconMap = {
	github: GitHubIcon,
	linkedin: LinkedInIcon,
};

export default function Links() {
	return (
		<section className='Links flex flex-col flex-nowrap gap-4 border-b p-4'>
			<h2 className='text-center text-3xl font-bold'>Links</h2>
			<div className='flex flex-row flex-wrap justify-center gap-4'>
				{LinksData.map(({ href, icon, label }, index) => {
					const Icon = icon ? iconMap[icon] : null;
					return (
						<a
							href={href}
							className='button'
							rel='noopener noreferrer'
							target='_blank'
							title={label}
							key={`${label}-${index}`}
						>
							{Icon && <Icon className='inline-block w-5 h-5 mr-2' />}
							<span>{label}</span>
						</a>
					);
				})}
			</div>
		</section>
	);
}
