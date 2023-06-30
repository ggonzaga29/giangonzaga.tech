import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Send, Facebook, Mail, Github } from 'lucide-react';

import ContactForm from '@/components/contactForm/ContactForm';

const Contact = () => {
	return (
		<div className='flex flex-col justify-center'>
			<div className='text-center'>
				<h2 className='font-bold text-5xl mb-3'>
					Send me a Message!
				</h2>
				<p className='leading-loose md:w-1/2 mx-auto'>
					Get in touch with me today! I'd love to hear from you. Fill
					out the contact form below and let's connect!
				</p>
			</div>
			<div className='mt-3'>
				<ContactForm />
			</div>

			<div className='flex items-center gap-5 max-w-md mx-auto w-full mt-3'>
				<div className='flex-1'>
					<Separator />
				</div>
				<div>
					<span>Or</span>
				</div>
				<div className='flex-1'>
					<Separator />
				</div>
			</div>

			<div className='flex flex-col max-w-md mx-auto w-full mt-3 space-y-2'>
				<Link href='https://www.facebook.com/giangonzaga5947'>
					<Button className='bg-[#3b5998] text-white w-full hover:bg-[#3b5998]'>
						<Facebook className='h-4 w-4 mr-2' /> Facebook
					</Button>
				</Link>
				<Link
					href='https://mail.google.com/mail/?extsrc=mailto&url=mailto:gonzagagianfrancesco@gmail.com'
					target='_blank'
				>
					<Button className='bg-[#DB4437] text-white w-full hover:bg-[#DB4437]'>
						<Mail className='h-4 w-4 mr-2' /> Email
					</Button>
				</Link>
				<Link href='https://github.com/ggonzaga29'>
					<Button className='bg-[#171515] text-white w-full hover:bg-[#171515] dark:invert'>
						<Github className='h-4 w-4 mr-2' /> Github
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Contact;
