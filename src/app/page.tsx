'use client';

export default function Home() {
	const callApi = async () => {
		const res = await fetch('http://localhost:3000/api/auth/login', {
			method: 'POST'
		});
		const data = await res.json();
		console.log(data);
	};

	const callApiGet = async () => {
		const res = await fetch('http://localhost:3000/api/tracks', {
			method: 'GET'
		});

		const data = await res.json();
		console.log(data);
	};

	return (
		<main>
			<button onClick={callApi}>Call API</button>
			<button onClick={callApiGet}>Call GET</button>
		</main>
	);
}
