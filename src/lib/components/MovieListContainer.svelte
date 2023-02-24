<script lang="ts">
	export let title: string;
</script>

<section
	class="mt-10 pl-4 
				md:mt-12 md:pl-0 lg:mt-16">
	<h3
		class="text-xl font-bold text-gray-200 
					md:text-2xl lg:text-[28px]">
		{title}
	</h3>
	<div
		class="mt-4 flex gap-5 overflow-x-scroll pb-4 
					md:mt-6 md:gap-6 md:pb-6">
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
