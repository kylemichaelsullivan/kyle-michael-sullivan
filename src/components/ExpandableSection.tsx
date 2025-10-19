import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type ExpandableSectionProps = {
	title: string;
	items: string[];
	isExpanded: boolean;
	onToggle: () => void;
};

export default function ExpandableSection({
	title,
	items,
	isExpanded,
	onToggle,
}: ExpandableSectionProps) {
	return (
		<div className='w-full mx-auto'>
			<h3
				className='flex flex-row flex-nowrap justify-between cursor-pointer border-b border-transparent text-accent text-2xl font-semibold transition-colors hover:border-accent'
				title={isExpanded ? 'Collapse' : `Expand ${title}`}
				onClick={onToggle}
			>
				<span>{title}</span>
				<FontAwesomeIcon
					className='transition-transform duration-300'
					icon={faChevronDown}
					style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
				/>
			</h3>
			<div
				className='grid overflow-hidden transition-all duration-300'
				style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
			>
				<ul className='list-disc overflow-hidden pl-8'>
					{items.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
