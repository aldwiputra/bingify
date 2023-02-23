<script lang="ts">
	export let title: string;
</script>

<section class="mt-4 pl-4 md:pl-0">
	<h3 class="text-lg font-bold text-gray-200">{title}</h3>
	<div class="mt-2 flex gap-4 overflow-x-scroll pb-4">
		<slot />
	</div>
</section>

<style lang="postcss">
	div {
		mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%);
		scrollbar-width: thin;
	}

	div::-webkit-scrollbar {
		width: 0.5em;
	}

	div::-webkit-scrollbar-thumb {
		@apply bg-gray-700;
		/* @apply border border-solid border-gray-500; */
		border-radius: 1rem;
		height: 4px;
	}
</style>
