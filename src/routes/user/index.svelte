<script context='module' lang='ts'>
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ session }: LoadInput): Promise<LoadOutput> {
		console.log('user profile load: ', { session });

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

<section class='profile'>
	<p>
		{#if isLoggedIn}
			You are now seeing protected information.
		{:else}
			You are not authorised
		{/if}
	</p>

	<a href='/auth/login'>Go back</a>
</section>

