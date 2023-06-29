import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='h-16 mt-5 select-none'>
			<div className='max-w-[67%] mx-auto h-full flex items-center justify-between'>
				<div>
					<h1 className='font-bold text-3xl '>GG</h1>
				</div>
				<div className='flex gap-5 cursor-pointer'>
					<Link href="/" className='hover:underline'>Home</Link>
					<Link href="/about" className='hover:underline'>About</Link>
					<Link href="/projects" className='hover:underline'>Projects</Link>
					<Link href="/contact" className='hover:underline'>Contact</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
