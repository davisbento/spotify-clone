import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const clientId = process.env.SPOTIFY_CLIENT_ID;
	const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

	// call the Spotify API to get the access token
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
		},
		body: 'grant_type=client_credentials'
	});

	const { access_token } = await response.json();

	const nextResponse = NextResponse.json({
		access_token
	});

	const oneDay = 24 * 60 * 60 * 1000;

	nextResponse.cookies.set('access_token', access_token, {
		httpOnly: true,
		sameSite: 'lax',
		expires: new Date(Date.now() + oneDay),
		path: '/'
	});

	return nextResponse;
}
