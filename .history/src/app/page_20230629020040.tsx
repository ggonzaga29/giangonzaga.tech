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
					My name is Gian Gonzaga, and I am a dedicated web developer with expertise in JavaScript, Typescript, PHP, and React. With a strong focus on delivering clean code and creating the best possible user experiences, I strive to bring efficiency and excellence to every project I undertake. I have a genuine passion for continuous learning, always staying up-to-date with the latest industry trends and techniques. Collaboration is key to my approach, as I thrive in team environments and value the diverse perspectives that come with it. By working on exciting and challenging projects, I am driven to expand my knowledge and skills further, pushing the boundaries of what I can achieve as a web developer.
					</p>
				</div>
			</section>
			<section className='flex-1'></section>
		</main>
	);
}
