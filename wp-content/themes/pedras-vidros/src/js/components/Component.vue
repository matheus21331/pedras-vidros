<template>
	<p>{{msg}}</p>
</template>
<script>
export default {
	props: ['msg'],
	mounted() {
		console.log('vue working!');
	},
}
</script>