'use client';

import React from 'react';
import Link from 'next/link';
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
			name: 'About',
			path: '/about',
		},
		{
			name: 'Portfolio',
			path: '/portfolio',
		},
		{
			name: 'Contact',
			path: '/contact',
		},
	]

	return (
		<div className='h-16 mt-5 select-none'>
			<div className='max-w-[67%] mx-auto h-full flex items-center justify-between'>
				<div>
					<h1 className='font-bold text-3xl '>GG</h1>
				</div>
				<div className='flex gap-5 cursor-pointer items-center'>
						
					
					<ModeToggle />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
