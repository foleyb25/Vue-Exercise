<template>
	<header>
		<div class="header-content">
			<div class="logo-container"><img src="/logo.svg" alt="" /></div>
			<div class="link-container">
				<div>
					<ul>
						<li><router-link to="/">Home</router-link></li>
						<li><router-link to="/about">About</router-link></li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const count = ref(0);

		// expose to template and other options API hooks
		return {
			count,
		};
	},

	mounted() {
		console.log(this.count); // 0
	},
};
</script>

<style scoped>
.header-content {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 90%;
}

.link-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: right;
	width: 50%;
	margin: 10px;
}

.logo-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: left;
	width: 50%;
}

img {
	height: 40px;
	width: 40px;
}

ul {
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
}

ul li {
	margin-right: 20px;
}

ul li:last-child {
	margin-right: 0px;
}

header {
	padding: 20px;
	margin: 0px 10px;
	text-align: center;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

li a {
	color: black;
}

h1 {
	margin: 0;
	font-size: 48px;
}

p {
	margin-top: 10px;
	font-size: 24px;
}
</style>
