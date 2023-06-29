import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='h-16'>
			<div className='max-w-[67%] mx-auto h-full flex items-center justify-between'>
				<div>
					<h1 className='font-bold text-3xl'>GG</h1>
				</div>
				<div>
					<Link href="/">Home</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
