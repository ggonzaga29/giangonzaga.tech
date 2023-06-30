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

import technologies from '@/data/technologies.json';

import ProjectList from '@/components/projectList/ProjectList';

const Portfolio = () => {


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
					<ProjectList />
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
