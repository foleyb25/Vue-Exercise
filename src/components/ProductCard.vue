<template>
	<div class="product-image">
		<img :src="product.image" :alt="product.title" />
	</div>
	<div class="product-info">
		<h3>{{ product.title }}</h3>
		<p>{{ product.description }}</p>
		<p>${{ product.price }}</p>
		<p>{{ product.rating.rate }}/5 ({{ product.rating.count }} votes)</p>
	</div>
</template>

<script>
export default {
	// TODO: Setup props to accept a product object
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		/*
        TODO: Expose (return) product prop to the template
        */
		return {
			product: props.product,
		};
	},
};
</script>

<style scoped>
.product-image {
	width: 100%;
	height: 0;
	padding-bottom: 100%; /* This creates a square aspect ratio, adjust as needed */
	position: relative;
	overflow: hidden;
}

.product-image img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: fill; /* This stretches or shrinks the image to fit the container while preserving aspect ratio */
}
</style>
