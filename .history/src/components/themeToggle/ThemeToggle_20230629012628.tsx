'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<Button variant='outline' size='icon' className='outline-none'>
			<Sun
				className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
				onClick={() => setTheme('dark')}
			/>
			<Moon
				className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
				onClick={() => setTheme('light')}
			/>
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}
