import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const ContactForm = () => {
	return (
		<div className='flex flex-col justify-start gap-3'>
			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<Label htmlFor='name'>Full name</Label>
				<Input type='text' id='name' placeholder='Enter your name' />
			</div>

			<div className='grid w-full max-w-sm  items-center gap-1.5'>
				<Label htmlFor='email'>Email</Label>
				<Input
					type='email'
					id='email'
					placeholder='Enter your email'
				/>
			</div>

			<div className='grid w-full max-w-sm gap-1.5'>
				<Label htmlFor='message-2'>Your Message</Label>
				<Textarea
					placeholder={`Let's get this conversation started!`}
					id='message-2'
				/>
				<p className='text-sm text-muted-foreground'>
					I will reply within 24 hours 99% of the time!
				</p>
			</div>

			<div className='grid w-full max-w-sm mt-3'>
				<Button>
					<Send className='mr-2 h-4 w-4' /> Contact Me!
				</Button>
			</div>
		</div>
	);
};

export default ContactForm;
