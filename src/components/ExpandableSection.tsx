import { memo } from 'react';

import { clsx } from 'clsx';
import ChevronDownIcon from './icons/ChevronDownIcon';

type ExpandableSectionProps = {
	title: string;
	items: string[];
	isExpanded: boolean;
	onToggle: () => void;
};

function ExpandableSection({
	title,
	items,
	isExpanded,
	onToggle,
}: ExpandableSectionProps) {
	return (
		<div className='ExpandableSection w-full mx-auto'>
			<h3
				className='flex flex-row flex-nowrap justify-between cursor-pointer border-b border-transparent text-accent text-2xl font-semibold transition-colors hover:border-accent'
				title={isExpanded ? 'Collapse' : `Expand ${title}`}
				onClick={onToggle}
				onKeyUp={onToggle}
			>
				<span>{title}</span>
				<ChevronDownIcon
					className={clsx(
						'w-6 h-6 transition-transform duration-300',
						isExpanded && 'rotate-180'
					)}
				/>
			</h3>
			<div
				className='expandable-content grid overflow-hidden transition-all duration-300'
				data-expanded={isExpanded}
			>
				<ul className='list-disc overflow-hidden pl-8'>
					{items.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default memo(ExpandableSection);
