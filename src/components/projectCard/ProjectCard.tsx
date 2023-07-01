'use client';

import React, { FunctionComponent } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { Star, GitFork } from 'lucide-react';

type ProjectCardProps = {
	name?: string;
	description?: string;
	language?: string;
	created_at?: string;
	owner?: {
		login: string;
		avatar_url: string;
	};
	stars?: string;
	forks?: string;
	htmlUrl?: string;
	time_since?: string;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
	name,
	description,
	language,
	created_at,
	owner,
	stars,
	forks,
	htmlUrl,
	time_since,
}) => {
	const languageColors = new Map();
	languageColors.set('javascript', 'bg-yellow-500');
	languageColors.set('typescript', 'bg-blue-500');

	return (
		<Link href={htmlUrl ? htmlUrl : "#"} target='_blank'>
			<Card className='cursor-pointer mb-3'>
				<CardHeader>
					<CardTitle className='flex justify-between'>
						<span>{name} </span>
						<iframe
							src={`https://ghbtns.com/github-btn.html?user=${owner?.login}&repo=${name}&type=star&count=true&size=large`}
							width='110'
							height='30'
							title='GitHub'
						></iframe>
					</CardTitle>
					<CardDescription>
						{created_at} - {time_since}
					</CardDescription>
				</CardHeader>
				<CardContent className='-my-2'>
					<p>{description}</p>
				</CardContent>
				<CardFooter>
					<div className='flex gap-3 md:gap-7'>
						<div>
							<span className='flex items-center gap-2'>
								<div
									className={`${languageColors.get(
										language?.toLowerCase()
									)} h-4 w-4 rounded-full`}
								></div>
								{language}
							</span>
						</div>
						<div className='flex gap-3'>
							<div>
								<span className='flex items-center gap-1'>
									<Star size={16} />
									{stars}
								</span>
							</div>
							<div>
								<span className='flex items-center gap-1'>
									<GitFork size={16} />
									{forks}
								</span>
							</div>
						</div>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default ProjectCard;
