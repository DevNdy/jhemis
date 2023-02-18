<script>
	export let data;
	const { product } = data;
</script>

<main>
	<section>
		<h2>{product.title}</h2>
		<article>
			<img src={product.urlToImage} alt="img" />
			<p>{product.content}</p>
		</article>
	</section>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		height: 100vh;
		width: 1100px;
		margin-left: 200px;
		display: flex;
		flex-direction: column;
		align-items: center;

		h2 {
			margin-top: 35px;
			width: 800px;
			text-align: center;
		}

		article {
			img {
				height: 400px;
			}
		}
	}
</style>
