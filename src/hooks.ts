import * as cookie from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || "")

	console.log('handle: ', {cookies});

	request.locals = cookies

	const response = await resolve(request);

	return {
		...response
	};
};

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
 return {
	 ...request.locals
 }
}