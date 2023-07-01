"use client"

import React from 'react';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const ProjectCardSkeleton = () => {
	return (
		<Card className='animate-pulse'>
			<CardHeader>
				<CardTitle className='flex justify-between'>
					<div className='w-40 h-3 bg-gray-300 rounded-full mb-3'></div>
					<div className='w-16 h-3 bg-gray-300 rounded-full mb-3'></div>
				</CardTitle>
				<CardDescription>
					<div className='w-20 h-2 bg-gray-300 rounded-full mb-3'></div>
				</CardDescription>
			</CardHeader>
			<CardContent className='-my-2'>
				<div className='h-2 bg-gray-300 rounded-full mb-3'></div>
				<div className='h-2 bg-gray-300 rounded-full mb-3'></div>
			</CardContent>

			<CardFooter>
				<div className='flex gap-3 md:gap-7'>
					<div>
						<div className='w-16 h-2 bg-gray-300 rounded-full mb-3'></div>
					</div>
					<div className='flex gap-3'>
						<div>
							<div className='w-16 h-2 bg-gray-300 rounded-full mb-3'></div>
						</div>
						<div>
							<div className='w-16 h-2 bg-gray-300 rounded-full mb-3'></div>
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
};

export default ProjectCardSkeleton;
