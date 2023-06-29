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
						Hey there! I'm Gian Gonzaga, your friendly neighborhood
						web developer extraordinaire! I live and breathe
						JavaScript, TypeScript, PHP, and React, and I'm here to
						create the most awesome user experiences ever. 
						<br />
						I'm all about delivering clean code that makes your website shine.
						I'm a continuous learner, always hungry for knowledge and
						eager to collaborate with fellow enthusiasts. Together, we
						can bring exciting projects to life! Got a project in mind
						or just want to chat? Feel free to reach out and let's
						connect! I'm always excited to meet new people and explore
						new opportunities.
					</p>
				</div>
			</section>
			<section className='flex-1'></section>
		</main>
	);
}
