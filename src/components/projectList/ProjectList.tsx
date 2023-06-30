'use client';

import React, { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';
import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import projects from '@/data/projects.json';

import ProjectCard from '../projectCard/ProjectCard';

type Repo = {
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

const ProjectList = () => {
	const getProject = async (repo: string) => {
		const res = await fetch('/api/github?repo=' + repo);
		const data = await res.json();
		return data;
	};

	const [repos, setRepos] = useState<any>([]);

	useEffect(() => {
		const getRepos = async () => {
			const repos = await Promise.all(
				projects.map(async (project) => {
					const repo = await getProject(project);
					return repo;
				})
			);
			setRepos((prev: any) => [...prev, ...repos]);
		};
		getRepos();

		return () => {
			setRepos([]);
		}
	}, []);


	return (
		<div>
			{repos.map(async (repo: any) => {
				const time_since = dayjs(repo.created_at).fromNow();
				repo.created_at = dayjs(repo.created_at).format('DD/MM/YYYY');

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
	);
};

export default ProjectList;