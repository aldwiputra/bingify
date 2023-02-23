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
	class="top-6 flex items-center justify-between bg-gray-800/50 p-4 md:rounded-lg md:p-5 md:py-4 md:px-6 lg:sticky lg:flex-col lg:justify-start lg:gap-32 lg:py-8 lg:px-0">
	<a class="group whitespace-nowrap" href="/">
		<Icon
			type="logo"
			mainColor="fill-red-600 group-hover:fill-red-500"
			accentColor="fill-red-500 group-hover:fill-red-600"
			width="w-6 lg:w-8" />
		<h1
			class="ml-1.5 inline-block align-middle text-xl font-semibold leading-none text-gray-400 group-hover:text-gray-200 md:hidden">
			bingify
		</h1>
	</a>

	<nav
		class="fixed bottom-0 left-0 z-20 w-full bg-gray-800/90 py-4 backdrop-blur-md md:static md:w-fit md:bg-transparent md:p-0">
		<ul class="mx-auto flex w-fit items-center gap-6 sm:gap-8 md:gap-4 lg:flex-col">
			{#each menuItems as { label, url }}
				<li>
					<a
						class={`${
							$page.url.pathname === url ? 'bg-red-400/10' : ''
						} ${'flex aspect-square items-center rounded-md p-2'} ${
							$page.url.pathname === url ? '' : 'hover:bg-gray-400/10'
						}`}
						href={url}>
						<Icon
							type={label}
							mainColor={$page.url.pathname === url ? 'fill-red-400' : 'fill-gray-400'}
							accentColor={$page.url.pathname === url ? 'fill-red-500' : 'fill-gray-500'}
							width="w-6 xl:w-7" />
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<button class="rounded-md p-2 hover:bg-gray-400/10">
		<Icon type="search" mainColor="fill-gray-500" accentColor="fill-gray-400" width="w-6 xl:w-7" />
	</button>
</header>
