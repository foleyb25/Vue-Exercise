<template>
	<div class="about-content">
		<h1>Vue Exercises Repository</h1>
		<p>
			Welcome to the Vue Exercises Repository! This repository contains a number
			of exercises and projects to help instructors teach Vue.js to their
			students. You can find different exercises and projects on different
			branches of this repository.
		</p>
		<p>
			To get started, simply checkout branch from the list of branches on this
			page. Each branch contains a different exercise or project.
		</p>
		<div class="branch-list">
			<ul v-for="(key, value) in branches">
				<li>
					git checkout
					<span
						><a :href="key" target="_blank">{{ value }}</a></span
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const branches = ref({
			'e1-passing-props':
				'https://github.com/foleyb25/Vue-Exercise/tree/e1-passing-props',
			'e1-passing-props-solution':
				'https://github.com/foleyb25/Vue-Exercise/tree/e1-passing-props-solution',
		});

		// expose to template and other options API hooks
		return {
			branches,
		};
	},
};
</script>

<style scoped>
.branch-list {
	color: black;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: #f1f1f1;
	padding: 1rem;
	border-radius: 0.25rem;
	width: 50%;
}

.about-content > * {
	margin: 16px 0px;
	text-align: center;
}

.about-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
