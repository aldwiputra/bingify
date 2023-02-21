<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { page } from '$app/stores';

	type MenuItem = {
		label: string;
		url: string;
	};

	const menuItems: MenuItem[] = [
		{ label: 'home', url: '/' },
		{ label: 'movie', url: '/movies' },
		{ label: 'tv', url: '/tv-shows' },
		{ label: 'bookmark', url: '/bookmarks' }
	];
</script>

<header class="dark:bg-zinc-800 p-6 flex items-center justify-between">
	<a href="/">
		<Icon type="logo" mainColor="fill-red-600" accentColor="fill-red-500" width="w-7" />
		<h1 class="text-zinc-400 text-2xl font-semibold inline-block align-middle ml-1.5 ">bingify</h1>
	</a>

	<nav class="fixed bottom-0 left-0 w-full bg-zinc-800 py-3 px-10">
		<ul class="flex items-center gap-10 w-fit mx-auto">
			{#each menuItems as { label, url }}
				<li
					class={`${
						$page.url.pathname === url ? 'bg-red-400/10' : ''
					} ${'p-2 rounded-md aspect-square flex items-center'}`}
				>
					<a href={url}>
						<Icon
							type={label}
							mainColor={$page.url.pathname === url ? 'fill-red-400' : 'fill-zinc-400'}
							accentColor={$page.url.pathname === url ? 'fill-red-500' : 'fill-zinc-500'}
							width="w-7"
						/>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<Icon type="search" mainColor="fill-zinc-500" accentColor="fill-zinc-400" width="w-7" />
</header>
