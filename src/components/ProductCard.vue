<template>
	<div class="product-card">
		<div class="product-image">
			<img :src="product.image" :alt="product.title" />
		</div>
		<div class="product-info">
			<h3>{{ product.title }}</h3>
			<p>{{ product.description }}</p>
			<p>{{ product.price }}</p>
			<p>{{ product.rating }}</p>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		/*
        TODO: Setup props to accept a product object
        */
	},
};
</script>
