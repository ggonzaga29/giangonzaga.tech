import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] });

import Navbar from '@/components/navbar/Navbar';

export const metadata = {
	title: 'Gian Gonzaga | Portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem
				>
					<Navbar />
					<div className='max-w-[67%] mx-auto mt-24 '>{children}</div>
					<Toaster/>
				</ThemeProvider>
			</body>
		</html>
	);
}
