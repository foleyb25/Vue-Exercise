<template>
	<Header />
	<main>
		<router-view></router-view>
	</main>
	<Footer />
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
body {
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
	font-size: 16px;
}

main {
	position: absolute;
	top: 100px;
	bottom: 100px;
	left: 0;
	right: 0;
	width: 100%;
	margin: auto;
	margin-top: 16px;
	color: #f1f1f1;
	display: flex;
	justify-content: center;
	align-items: start;
	overflow-y: scroll;
}

main p {
	font-size: 18px;
	line-height: 1.5;
}

Header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	background-color: #f1f1f1;
	z-index: 999;
	color: black;
}

Footer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 40px;
	background-color: #f1f1f1;
	z-index: 999;
	color: black;
}
</style>
