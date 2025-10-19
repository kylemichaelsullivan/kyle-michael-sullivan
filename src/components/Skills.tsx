import { useState } from 'react';

import ExpandableSection from './ExpandableSection';
import { SkillsData } from '../data';

export default function Skills() {
	const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

	const toggleSection = (title: string) => {
		setExpandedSections(prev => {
			const newSet = new Set(prev);
			if (newSet.has(title)) {
				newSet.delete(title);
			} else {
				newSet.add(title);
			}
			return newSet;
		});
	};

	return (
		<section className='Skills flex flex-col flex-nowrap gap-4 border-b p-4'>
			<h2 className='text-center text-3xl font-bold'>Skills</h2>
			{Object.entries(SkillsData).map(([title, items]) => (
				<ExpandableSection
					isExpanded={expandedSections.has(title)}
					title={title}
					items={items}
					onToggle={() => toggleSection(title)}
					key={title}
				/>
			))}
		</section>
	);
}
