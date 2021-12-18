import * as cookie from 'cookie';

export const post = (request) => {
	return {
		status: 200,
		headers: {
			'set-cookie': cookie.serialize('token', 'VALUE_OF_THE_COOKIE', {
				httpOnly: true,
				path: '/'
			})
		}
	};
};

export const del = (request) => {
	return {
		status: 200,
		headers: {
			'Set-Cookie': cookie.serialize('token', '', {
				httpOnly: true,
				path: '/',
				maxAge: 0
			})
		}
	};
};