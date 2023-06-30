import { NextResponse } from 'next/server';

import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const repo = searchParams.get('repo');

	const BASE_URL = 'https://api.github.com/repos/ggonzaga29';
	const res = await fetch(
		'https://api.github.com/repos/ggonzaga29' + '/' + repo
	);
	const data = await res.json();

	if (res && res.ok) {
		return NextResponse.json(
			{
				name: data.name,
				description: data.description,
				language: data.language,
				created_at: data.created_at,
				owner: {
					login: data.owner.login,
					avatar_url: data.owner.avatar_url,
				},
				stars: data.stargazers_count,
				forks: data.forks_count,
				html_url: data.html_url,
			},
			{
				status: 200,
			}
		);
	} else {
		return NextResponse.json(
			{
				message: 'Something went wrong!',
			},
			{
				status: 500,
			}
		);
	}
}
