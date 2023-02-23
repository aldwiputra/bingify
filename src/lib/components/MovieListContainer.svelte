<script lang="ts">
	export let title: string;
</script>

<section
	class="mt-4 pl-4 
				md:mt-8 md:pl-0 lg:mt-10">
	<h3
		class="text-lg font-semibold text-gray-200 
					md:text-xl lg:text-2xl">
		{title}
	</h3>
	<div
		class="mt-2 flex gap-4 overflow-x-scroll pb-3 
					md:mt-4 md:gap-6 md:pb-6">
		<slot />
	</div>
</section>

<style lang="postcss">
	div {
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
