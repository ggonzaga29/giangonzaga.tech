import React from 'react';

import ContactForm from '@/components/contactForm/ContactForm';

const Contact = () => {
	return (
		<div className='flex flex-col justify-center'>
			<div className='text-center'>
				<h2 className='font-bold text-5xl mb-3'>
					Send me a Message!
				</h2>
				<p className='leading-loose md:w-1/2 mx-auto'>
					Get in touch with me today! Whether you have a question,
					feedback, or an exciting project idea, I'd love to hear from
					you. 
					Fill out the contact form below and let's connect!
				</p>
			</div>
			<div className='mt-10'>
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
