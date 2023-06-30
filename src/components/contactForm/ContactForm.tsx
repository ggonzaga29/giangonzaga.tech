'use client';

import React, { useState } from 'react';
import validator from 'validator';

import { Loader2 } from 'lucide-react';
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
	const [isLoading, setIsLoading] = useState(false);

	const sendMessage = async () => {
		setIsLoading(false);

		if (message.length === 0) {
			toast({
				title: 'Message cannot be empty',
				description: 'Please enter a message to send',
				duration: 3000,
			});
			return;
		}

		if (name.length === 0 || email.length === 0) {
			toast({
				title: 'Name or email cannot be empty',
				description:
					'Please enter your name or email so I know how to respond to you :)',
				duration: 3000,
			});
			return;
		}

		if (!validator.isEmail(email)) {
			toast({
				title: 'Invalid email',
				description: 'Please enter a valid email',
				duration: 3000,
			});
			return;
		}

		setIsLoading(true);

		const res = await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({
				name,
				email,
				message,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (res.status === 200) {
			toast({
				title: 'Message sent!',
				description: 'I will get back to you within 24 hours!',
				duration: 3000,
			});
			setName('');
			setEmail('');
			setMessage('');
		} else {
			toast({
				title: 'Error sending message',
				description: 'Please try again later',
				duration: 3000,
			});
		}

		setIsLoading(false);
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
					{!isLoading ? (
						<>
							<Send className='mr-2 h-4 w-4' /> Contact Me!
						</>
					) : (
						<>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please
							wait
						</>
					)}
				</Button>
			</div>
			<Label className='text-sm '>via Discord Webhooks</Label>
		</div>
	);
};

export default ContactForm;
