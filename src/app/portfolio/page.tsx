import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { nanoid } from 'nanoid';
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import ProjectCard from '@/components/projectCard/ProjectCard';

import technologies from '@/data/technologies.json';
import projects from '@/data/projects.json';

const Portfolio = () => {
	const getProject = async (repo: string) => {
		const res = await fetch('/api/github?repo=' + repo);
		const data = await res.json();
		return data;
	};

	return (
		<div>
			<div>
				<h2 className='font-bold text-5xl mb-2'>Technologies</h2>
				<div className='grid md:grid-cols-6 grid-cols-3 mt-7 gap-5'>
					{technologies.map((technology) => (
						<Link
							href={technology.url}
							target='_blank'
							key={technology.name}
							className='col-span-1'
						>
							<Card>
								<div className='flex flex-col items-center py-5'>
									<Image
										src={technology.image}
										width={50}
										height={50}
										alt={technology.name}
										// this is temporary
										className={
											technology.name == 'ExpressJS' ||
											technology.name == 'Next.js'
												? 'dark:invert'
												: ''
										}
									/>
									<span className='mt-2'>{technology.name}</span>
								</div>
							</Card>
						</Link>
					))}
				</div>
			</div>
			<Separator className='my-6' />
			<div className=''>
				<h2 className='font-bold text-5xl mb-7 '>Projects</h2>
				<div>
					{projects.map(async (project) => {
						const repo = await getProject(project);

						const time_since = dayjs(repo.created_at).fromNow();
						repo.created_at = dayjs(repo.created_at).format("DD/MM/YYYY");

						return (
							<ProjectCard
								key={nanoid()}
								name={repo.name}
								description={repo.description}
								language={repo.language}
								created_at={repo.created_at}
								owner={repo.owner}
								stars={repo.stars}
								forks={repo.forks}
								htmlUrl={repo.html_url}
								time_since={time_since}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
