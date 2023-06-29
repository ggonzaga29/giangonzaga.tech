import { NextResponse } from 'next/server';

// interface Request {
// 	json(): {
// 		name: string;
// 		email: string;
// 		message: string;
// 	};
// }

export async function POST(req: Request) {
	const reqJSON = await req.json();
	const { name, email, message } = reqJSON;
	console.log(reqJSON);

	const DISCORD_WEBHOOK_URL = `https://discordapp.com/api/webhooks/1123993465785683999/e4gVBSyZEUNWfexlP3QF_nLZh1jT35kxD43Yr4yVi9IhHFEXwlukSMX4VHoxstGaGYlR`;

	const params = {
		username: 'Portfolio Site',
		embeds: [
			{
				title: 'Job Offer',
				description: message,
				color: 0x00ff00,
				footer: {
					text: `🗣 ${name} <${email}>`,
				},
			},
		]
	};

	const res = await fetch(DISCORD_WEBHOOK_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(params)
	});

	if(res && res.ok) {
		return NextResponse.json({
			message: "Sent!"
		}, {
			status: 200,
		});
	} else {
		return NextResponse.json({
			message: "Something went wrong!"
		}, {
			status: 500,
		});
	}
}
