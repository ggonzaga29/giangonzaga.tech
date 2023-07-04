'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { nanoid } from 'nanoid';

import ModeToggle from '../themeToggle/ThemeToggle';
import { Button } from '../ui/button';

import { SidebarOpen, SidebarClose, Menu, X } from 'lucide-react';

import pages from '@/data/pages';

import Drawer from '../drawer/Drawer';

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

	return (
		<div className='h-16 mt-2 md:mt-10 select-none'>
			<div className='md:max-w-[67%] mx-auto md:px-0 px-4 h-full flex items-center justify-between'>
				{/* Logo */}
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
				{/* End Logo */}

				{/* Navigation Menu */}
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
				</div>
				{/* End Navigation Menu */}

				{/* Mobile Drawer */}
				<Drawer
					isSidebarOpen={isSidebarOpen}
					setIsSidebarOpen={setIsSidebarOpen}
					currentRoute={currentRoute}
					pages={pages}
				/>
				{/* End Mobile Drawer */}

				{/* Mobile Menu and Theme Toggle */}
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
				{/* End Mobile Menu and Theme Toggle */}
			</div>
		</div>
	);
};

export default Navbar;
