import { useCallback, useState } from 'react';

import { SkillsData } from '../data/skills';
import ExpandableSection from './ExpandableSection';

export default function Skills() {
	const [expandedSections, setExpandedSections] = useState<Set<string>>(
		new Set()
	);

	const toggleSection = useCallback((title: string) => {
		setExpandedSections((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(title)) {
				newSet.delete(title);
			} else {
				newSet.add(title);
			}
			return newSet;
		});
	}, []);

	return (
		<section className='Skills flex flex-col flex-nowrap gap-4 border-b'>
			<h2 className='text-center text-3xl font-bold'>Skills</h2>
			{Object.entries(SkillsData).map(([title, items]) => (
				<ExpandableSection
					isExpanded={expandedSections.has(title)}
					items={items}
					title={title}
					onToggle={() => toggleSection(title)}
					key={title}
				/>
			))}
		</section>
	);
}
