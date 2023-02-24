<template>
	<div class="product-image">
		<img :src="product.image" :alt="product.title" />
	</div>
	<div class="product-info">
		<h3>{{ product.title }}</h3>
		<p>{{ product.description }}</p>
		<p>${{ product.price }}</p>
		<p>{{ product.rating.rate }} out of {{ product.rating.count }} vote(s)</p>
	</div>
</template>

<script>
export default {
	// TODO: Setup props to accept a product object
	setup() {
		// TODO: Expose (return) product prop to the template
	},
};
</script>

<style scoped>
.product-image {
	width: 100%;
	height: 0;
	padding-bottom: 100%;
	position: relative;
	overflow: hidden;
}
.product-image img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: fill;
}
</style>
