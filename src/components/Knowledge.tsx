import { useCallback, useState } from 'react';

import ExpandableSection from './ExpandableSection';
import { KnowledgeData } from '../data/knowledge';

export default function Knowledge() {
	const [expandedSections, setExpandedSections] = useState<Set<string>>(
		new Set(Object.keys(KnowledgeData))
	);

	const toggleSection = useCallback((title: string) => {
		setExpandedSections(prev => {
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
		<section className='Knowledge flex flex-col flex-nowrap gap-4 border-b p-4'>
			<h2 className='text-center text-3xl font-bold'>Knowledge</h2>
			{Object.entries(KnowledgeData).map(([title, items]) => (
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
