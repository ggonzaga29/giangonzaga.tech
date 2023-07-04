import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import { nanoid } from 'nanoid';

type DrawerProps = {
	isSidebarOpen: boolean;
	setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
	currentRoute: string;
	pages: {
		name: string;
		path: string;
	}[];
};

const Drawer = ({
	isSidebarOpen,
	setIsSidebarOpen,
	currentRoute,
	pages,
}: DrawerProps) => {
	return (
		<>
			{/* drawer */}
			<div
			// className={`${isSidebarOpen ? '' : 'hidden'} md:hidden`}
			>
				{/* overlay */}
				<div
					className={`absolute w-full h-full inset-0 bg-black bg-opacity-50 z-50 transition-all duration-200 ${
						isSidebarOpen ? '' : 'opacity-0 pointer-events-none'
					}`}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				/>
				<div
					className={`absolute w-2/3 left-0 top-0 bg-white dark:bg-zinc-950 z-50 h-full transition-all duration-200 ${
						isSidebarOpen ? '' : 'transform -translate-x-full'
					}`}
				>
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
							className={`flex items-center justify-center absolute left-[110%] delay-50 transition-all duration-50 ${
								isSidebarOpen
									? ''
									: 'transform -translate-x-[120%] opacity-0'
							}`}
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
		</>
	);
};

export default Drawer;
