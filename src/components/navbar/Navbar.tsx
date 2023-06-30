'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { nanoid } from 'nanoid';

import ModeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
	const currentRoute = usePathname();

	const pages = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Portfolio',
			path: '/portfolio',
		},
		{
			name: 'Contact',
			path: '/contact',
		},
		{
			name: 'Blog',
			path: '/blog',
		},
	];


	return (
		<div className='h-16 md:mt-10 mt-5 select-none '>
			<div className='md:max-w-[67%] mx-auto md:px-0 px-4 h-full flex items-center justify-between'>
				<div>
					<h1 className='font-bold text-3xl '>
						<Link href='/'>
							<Image src="/logo.png" width={64} height={64} alt="logo" className='dark:invert'/>
						</Link>
					</h1>
				</div>
				<div className='flex gap-5 cursor-pointer items-center'>
					{pages.map((page) => (
						<Link
							href={page.path}
							key={nanoid()}
							className={`${
								currentRoute === page.path
									? ""
									: "text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300"
							} transition-all duration-300`}
						>
							{page.name}
						</Link>
					))}

					<ModeToggle />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
