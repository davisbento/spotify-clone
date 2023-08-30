import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	// get the access token from the cookie
	const cookieStore = cookies();
	const access_token = cookieStore.get('access_token');
	console.log('access_token: ', access_token);
	return NextResponse.json({});
}
