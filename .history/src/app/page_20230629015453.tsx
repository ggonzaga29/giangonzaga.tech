import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ModeToggle from '@/components/themeToggle/ThemeToggle';

export default function Home() {
	return (
		<main className='flex'>
			<section className='flex-1'>
				<div className='mb-5'>
					<h1 className='font-bold text-5xl -ml-1'>Gian Gonzaga <span className='font-bold text-muted text-3xl'>Web Developer</span></h1>
				</div>
				<div>
					<p className='leading-relaxed'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore aliquam atque rerum laborum nobis consequuntur laudantium possimus, ipsam eius voluptas enim quisquam ad nam similique commodi quam! Totam nisi quos eaque. Odit nam eum soluta aut ab. Inventore eaque quia quisquam! Ipsa neque unde saepe consequatur dolorem. Totam, saepe.
					</p>
				</div>
			</section>
			<section className='flex-1'></section>
		</main>
	);
}
