import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
	return (
		<main>
			<div className='flex md:flex-row-reverse gap-5 flex-col items-start'>
				<section className='flex-1'>
					<Image
						src='/profile.jpg'
						width={500}
						height={500}
						className=' mx-auto rounded-full md:w-[500px] md:h-auto w-1/2 h-1/2'
						alt='Gian Gonzaga'
					/>
				</section>

				<section className='flex-1'>
					<div className='mb-5 -ml-1'>
						<h1 className='font-bold text-5xl mb-2 '>Gian Gonzaga</h1>
						<span className='font-bold text-gray-400 dark:text-slate-500 text-3xl'>
							Web Developer
						</span>
					</div>
					<div>
						<p className='leading-loose'>
							Hey there! I&apos;m Gian Gonzaga, your friendly web
							developer extraordinaire! I live and breathe JavaScript,
							TypeScript, React, and more! I&apos;m here to create the
							most awesome user experiences ever.
							<br />
							<br />
							I&apos;m all about delivering clean code that makes your
							website shine. I&apos;m a continuous learner, always
							hungry for knowledge and eager to collaborate with
							fellow enthusiasts. Together, we can bring exciting
							projects to life!
							<br />
							<br />
							Got a project in mind or just want to chat? Feel free to
							reach out and let&apos;s connect! I&apos;m always
							excited to meet new people and explore new
							opportunities.
						</p>
					</div>
				</section>
			</div>

			<div className='flex flex-col leading-loose text-sm mt-8 mb-5'>
				<span>gonzagagianfrancesco@gmail.com</span>
			</div>

			<div className=' flex gap-5'>
				<SocialIcon
					url='https://www.facebook.com/giangonzaga5947'
					network='facebook'
					style={{ height: 32, width: 32 }}
				/>
				<SocialIcon
					url='https://www.instagram.com/gianfrncsco/'
					network='instagram'
					style={{ height: 32, width: 32 }}
				/>
				<SocialIcon
					url='https://github.com/ggonzaga29'
					network='github'
					style={{ height: 32, width: 32 }}
				/>
			</div>
		</main>
	);
}
