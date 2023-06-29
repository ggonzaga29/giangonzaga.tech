import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
	const technologies = [
		{
			name: 'React',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
			url: 'https://reactjs.org/',
		},
		{
			name: 'Next.js',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
			url: 'https://nextjs.org/',
		},
		{
			name: 'TypeScript',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
			url: 'https://www.typescriptlang.org/',
		},
		{
			name: 'SASS',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
			url: 'https://sass-lang.com/',
		},
		{
			name: 'Tailwind CSS',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
			url: 'https://tailwindcss.com/',
		},
		{
			name: 'Python',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			url: 'https://www.python.org/',
		},
		{
			name: 'NodeJS',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
			url: 'https://nodejs.org/en/',
		},
		{
			name: 'ExpressJS',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
			url: 'https://expressjs.com/',
		},
		{
			name: 'Docker',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
			url: 'https://www.docker.com/',
		},
		{
			name: 'PostgreSQL',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
			url: 'https://www.postgresql.org/',
		},
	];

	return (
		<div>
			<div>
				<h2 className='font-bold text-5xl mb-2 '>Technologies</h2>
				<div className='grid grid-cols-6 mt-7 gap-5'>
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
									/>
									<span className='mt-2'>{technology.name}</span>
								</div>
							</Card>
						</Link>
					))}
				</div>
			</div>
			<div className='mt-20'>
				<h2 className='font-bold text-5xl mb-2 '>Projects</h2>
			</div>
		</div>
	);
};

export default Portfolio;
