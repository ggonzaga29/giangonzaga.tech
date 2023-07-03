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
	const { setTheme, theme } = useTheme();

	const toggleTheme = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	return (
		<Button variant='outline' size='icon' className='outline-none' onClick={toggleTheme}>
			<Moon
				className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
			/>
			<Sun
				className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
			/>
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}
