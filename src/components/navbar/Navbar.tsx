'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { nanoid } from 'nanoid';

import ModeToggle from '../themeToggle/ThemeToggle';
import { Button } from '../ui/button';

import { SidebarOpen, SidebarClose, Menu, X } from 'lucide-react';

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
							<Image
								src='/logo.png'
								width={64}
								height={64}
								alt='logo'
								className='dark:invert'
							/>
						</Link>
					</h1>
				</div>
				<div className='flex gap-5 cursor-pointer items-center'>
					<div className='space-x-5 md:block hidden'>
						{pages.map((page) => (
							<Link
								href={page.path}
								key={nanoid()}
								className={`${
									currentRoute === page.path
										? ''
										: 'text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300'
								} transition-all duration-300`}
							>
								{page.name}
							</Link>
						))}
					</div>

					{/* drawer */}
					<div className=''>
						{/* overlay */}
						<div className='absolute w-full h-full inset-0 bg-black bg-opacity-50 z-50 transition-all duration-200' />
						<div
							className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 z-50 transform transition-all duration-300 ${
								currentRoute === '/'
									? '-translate-x-full'
									: 'translate-x-0'
							}`}
						>
							<div className='flex justify-start items-start h-full w-full px-4 py-2'>
								<div className='flex justify-between w-full relative items-center'>
									<h1 className='font-bold text-3xl'>
										<Link href='/'>
											<Image
												src='/logo.png'
												width={64}
												height={64}
												alt='logo'
												className='dark:invert'
											/>
										</Link>
									</h1>
									<Button
										variant='outline'
										size='icon'
										className='flex items-center justify-center absolute left-[120%]'
									>
										<X className='h-6 w-6' />
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div className='flex gap-2 justify-center items-center'>
						<ModeToggle />
						<Button
							variant='outline'
							size='icon'
							className='flex items-center justify-center md:hidden'
						>
							<Menu className='h-6 w-6' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
