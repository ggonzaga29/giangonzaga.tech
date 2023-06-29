import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex gap-16'>
			<section className='flex-1'>
				<div className='mb-5 -ml-1'>
					<h1 className='font-bold text-5xl mb-2 '>Gian Gonzaga </h1>
					<span className='font-bold text-muted text-3xl'>
						Web Developer
					</span>
				</div>
				<div>
					<p className='leading-loose'>
						Hey there! I'm Gian Gonzaga, your friendly web developer
						extraordinaire! I live and breathe JavaScript, TypeScript,
						PHP, and React, and I'm here to create the most awesome
						user experiences ever.
						<br />
						<br />
						I'm all about delivering clean code that makes your
						website shine. I'm a continuous learner, always hungry for
						knowledge and eager to collaborate with fellow
						enthusiasts. Together, we can bring exciting projects to
						life!
						<br />
						<br />
						Got a project in mind or just want to chat? Feel free to
						reach out and let's connect! I'm always excited to meet
						new people and explore new opportunities.
					</p>
				</div>
			</section>
			<section className='flex-1 relative mx-auto'>
				<Image src='/profile.jpg' width={300} height={300} />
			</section>
		</main>
	);
}
