'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { nanoid } from 'nanoid';

import ModeToggle from '../themeToggle/ThemeToggle';
import { Button } from '../ui/button';

import { SidebarOpen, SidebarClose, Menu, X } from 'lucide-react';

const Navbar = () => {
	const currentRoute = usePathname();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	useEffect(() => {
		setIsSidebarOpen(false);
	}, [currentRoute]);

	useEffect(() => {
		scrollTo(0, 0);

			if (isSidebarOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'unset';
			}
	}, [isSidebarOpen]);

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
		<div className='h-16 mt-2 md:mt-10 select-none'>
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
					<div
						// className={`${isSidebarOpen ? '' : 'hidden'} md:hidden`}
					>
						{/* overlay */}
						<div
							className={`absolute w-full h-full inset-0 bg-black bg-opacity-50 z-50 transition-all duration-200 ${isSidebarOpen ? '' : 'opacity-0 pointer-events-none'}`}
							onClick={() => setIsSidebarOpen(!isSidebarOpen)}
						/>
						<div className={`absolute w-2/3 left-0 top-0 bg-white dark:bg-zinc-950 z-50 h-full transition-all duration-200 ${
							isSidebarOpen ? '' : 'transform -translate-x-full'
						}`}>
							{/* header */}
							<div className='flex justify-between items-center px-2 py-2'>
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
									className={`flex items-center justify-center absolute left-[110%] delay-100 transition-all duration-50 ${isSidebarOpen ? '' : 'transform -translate-y-[120%] opacity-0'}`}
									onClick={() => setIsSidebarOpen(!isSidebarOpen)}
								>
									<X className='h-6 w-6' />
								</Button>
							</div>
							{/* end header */}
							<div className='flex flex-col mt-3'>
								{pages.map((page) => (
									<Link
										href={page.path}
										key={nanoid()}
										className={`${
											currentRoute === page.path
												? 'bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700'
												: ''
										} transition-all duration-300 px-4 py-4`}
									>
										{page.name}
									</Link>
								))}
							</div>
						</div>
					</div>
					{/* drawer end */}
				</div>

				<div className='flex gap-2 justify-center items-center'>
					<ModeToggle />
					<Button
						variant='outline'
						size='icon'
						className='flex items-center justify-center md:hidden'
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					>
						<Menu className='h-6 w-6' />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
