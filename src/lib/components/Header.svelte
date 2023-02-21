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

<header
	class=" mx-auto flex max-w-screen-2xl items-center justify-between p-6 dark:bg-zinc-800 md:my-6 md:rounded-lg md:py-4 md:px-6"
>
	<a class="whitespace-nowrap" href="/">
		<Icon type="logo" mainColor="fill-red-600" accentColor="fill-red-500" width="w-7" />
		<h1
			class="ml-1.5 inline-block align-middle text-2xl font-semibold text-zinc-400 md:hidden lg:inline-block "
		>
			bingify
		</h1>
	</a>

	<nav class="fixed bottom-0 left-0 w-full bg-zinc-800 py-3 px-10 md:static md:w-fit md:p-0">
		<ul class="mx-auto flex w-fit items-center gap-10 md:gap-4">
			{#each menuItems as { label, url }}
				<li>
					<a
						class={`${
							$page.url.pathname === url ? 'bg-red-400/10' : ''
						} ${'flex aspect-square items-center rounded-md p-2'} ${
							$page.url.pathname === url ? '' : 'hover:bg-zinc-400/10'
						}`}
						href={url}
					>
						<Icon
							type={label}
							mainColor={$page.url.pathname === url ? 'fill-red-400' : 'fill-zinc-400'}
							accentColor={$page.url.pathname === url ? 'fill-red-500' : 'fill-zinc-500'}
							width="w-6"
						/>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<button class="p-2 hover:bg-zinc-400/10 rounded-md">
		<Icon type="search" mainColor="fill-zinc-500" accentColor="fill-zinc-400" width="w-6" />
	</button>
</header>
