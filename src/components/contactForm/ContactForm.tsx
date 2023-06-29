'use client';

import React, { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

const ContactForm = () => {
	const { toast } = useToast();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const sendMessage = () => {
		if (message.length == 0) {
		}

		toast({
			title: 'Your message has been sent',
			description: 'I will get back to you soon!',
		});

		console.log('Message sent!');
	};

	return (
		<div className='flex flex-col justify-start items-center gap-3'>
			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<Label htmlFor='name'>Full name</Label>
				<Input
					type='text'
					id='name'
					placeholder='Enter your name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div className='grid w-full max-w-sm  items-center gap-1.5'>
				<Label htmlFor='email'>Email</Label>
				<Input
					type='email'
					id='email'
					value={email}
					placeholder='Enter your email'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div className='grid w-full max-w-sm gap-1.5'>
				<Label htmlFor='message-2'>Your Message</Label>
				<Textarea
					placeholder={`Let's get this conversation started!`}
					id='message-2'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<p className='text-sm text-muted-foreground'>
					I will reply within 24 hours 99% of the time!
				</p>
			</div>

			<div className='grid w-full max-w-sm mt-3'>
				<Button onClick={sendMessage}>
					<Send className='mr-2 h-4 w-4' /> Contact Me!
				</Button>
			</div>
		</div>
	);
};

export default ContactForm;
