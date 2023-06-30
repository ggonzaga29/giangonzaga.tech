import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { create } from 'domain';



/*
data: {
				name: data.name,
				description: data.description,
				language: data.language,
				created_at: data.created_at,
				owner: {
					login: data.owner.login,
					avatar_url: data.owner.avatar_url,
				},
				stars: data.stargazers_count,
				forks: data.forks_count,
			}
*/
interface ProjectCardProps {
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
}

const ProjectCard = ({
	name,
	description,
	language,
	created_at,
	owner,
	stars,
	forks,
	htmlUrl,
	time_since,
}: ProjectCardProps) => {

	return (
		<>
			<Card className='cursor-pointer mb-3'>
				<CardHeader>
					<CardTitle>{name && "Repo Name"}</CardTitle>
					<CardDescription>{time_since}</CardDescription>
				</CardHeader>
				<CardContent>
					<p> {description}</p>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</>
	);
};

export default ProjectCard;
