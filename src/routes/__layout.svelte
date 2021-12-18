<script context='module' lang='ts'>
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ session }: LoadInput): Promise<LoadOutput> {
		console.log('index load: ', { session });

		return {
			props: {
				isLoggedIn: !!session.token
			}
		};
	}
</script>

<script lang='ts'>
	export let isLoggedIn;
</script>


<header>
	<p>Header text:
		{#if isLoggedIn}
			User is logged in (token cookie is set)
		{:else}
			User is <i>not</i> logged in (there is no cookie set)
		{/if}
	</p>
</header>

<main>
	<slot />
</main>

<footer>
	Footer text:
	<br>
	<a href='/'>Home</a><br>
	<a href='/login'>Login</a><br>
	<a href='/user'>Profile (protected page)</a>
</footer>

<style lang='scss'>
	header,
	main {
		margin-bottom: 50px;
	}

  main {
		min-height: 50vh;
	}
</style>