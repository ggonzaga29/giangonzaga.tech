import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ModeToggle from '@/components/themeToggle/ThemeToggle';

export default function Home() {
	return (
		<main className='flex'>
			<section className='flex-1'>
				<div className='mb-5 -ml-1'>
					<h1 className='font-bold text-5xl mb-2 '>Gian Gonzaga </h1>
					<span className='font-bold text-muted text-3xl'>
						Web Developer
					</span>
				</div>
				<div>
					<p className='leading-relaxed text-justify'>
						My name is Gian Gonzaga, a web developer with expertise in
						JavaScript, Typescript, PHP, and React. I am dedicated to
						delivering clean code and creating the best user
						experiences. With a passion for continuous learning and
						collaboration, I aim to expand my knowledge through
						creating exciting projects.
					</p>
				</div>
			</section>
			<section className='flex-1'></section>
		</main>
	);
}
