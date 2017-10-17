<template>
	<div class="test subtest">
		<div class="card" style="width: 20rem;">
			<img class="card-img-top" alt="Card image cap">
			<div class="card-body">
				<h4 class="card-title">Card title</h4>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	</div>
</template>
<script>
	let Home = {
		data() {
			return {

			};
		},
		mounted() {
			console.log("Hi, from the console.");
		}
	}
	export default Home;
</script>