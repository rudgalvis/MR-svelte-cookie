<script lang='ts'>
	export let message;

	const login = async () => {
		// Hit the endpoint which has set-cookie headers
		const request = await fetch('/auth/login', {
			method: 'POST'
		})

	await request.json()

		message = `Cookie was just    created    (check the cookies in the console).
But it does not seem to be visible by the __layout.svelte -> load() function's -> session variable.

Header will only be updated after page refresh.`
	}

	const logout = async () => {
		// Hit the endpoint which has set-cookie headers with maxAge = 0
		const request = await fetch('/auth/login', {
			method: 'DELETE',
		})

		await request.json()

		message = `Cookie was just    destroyed    (check the cookies in the console).
But it does not seem to be visible by the __layout.svelte -> load() function's -> session variable.

Header will only be updated after page refresh.`
	}
</script>

<section>
	<button on:click={login}>Create cookie</button>
	<button on:click={logout}>Logout</button>

	{#if message}
		<p>{message}</p>

		<p>Protected page is also one page refresh behind. <a href='/user'>Go to protected page</a></p>
	{/if}
</section>

<style>
	p {
			max-width: 360px;
			white-space: pre;
	}
</style>