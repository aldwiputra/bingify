<script lang="ts">
	export let title: string;
	export let wrap: boolean;
</script>

<section
	class={`${!wrap ? 'mt-10 md:mt-14 lg:mt-16' : ''} pl-4 
				 md:pl-0 `}>
	<h3
		class="text-xl font-bold text-gray-200 
					md:text-2xl">
		{title}
	</h3>
	<div
		class={`mt-3 flex ${wrap ? 'flex-wrap' : ''} gap-3 overflow-x-scroll pb-4 
					md:mt-4 md:gap-4 md:pb-6`}>
		<slot />
	</div>
</section>

<style lang="postcss">
	div:not(.flex-wrap) {
		mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%);
		mask-size: 100% 100%;
		scrollbar-width: thin;
	}

	div::-webkit-scrollbar {
		height: 0.4em;
		cursor: pointer;
	}

	div::-webkit-scrollbar:hover {
		@apply bg-gray-800;
	}

	div:hover::-webkit-scrollbar-thumb {
		@apply bg-gray-700;
	}

	div::-webkit-scrollbar-thumb {
		@apply bg-gray-700/0;
		border-radius: 1rem;
	}
	div::-webkit-scrollbar-thumb:hover {
	}
</style>
