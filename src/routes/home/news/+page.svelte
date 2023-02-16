<script lang="ts">
	import { onMount } from 'svelte';

	let newsData: any = [];

	const getApiNews = async () => {
		const res = await fetch(
			'https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=df29903951f8497fb88520ada1b3a549'
		);
		const data = await res.json();

		return data.articles;
	};

	onMount(async () => {
		newsData = await getApiNews();
		console.log(newsData);
	});
</script>

<main>
	<section>
		<h2>News</h2>
		<div class="news">
			{#each newsData as item}
				{#if item.urlToImage !== null}
					<div class="article">
						<img src={item.urlToImage} alt="" />
						<div class="description">
							<h3>{item.title}</h3>
							<p>{item.content}</p>
							<div>
								<a href="/">en savoir +</a>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		width: 1100px;
		margin: 35px 0 0 200px;
		height: 100vh;
	}

	.news {
		margin-top: 60px;
		display: flex;
		flex-direction: column;
	}

	.article {
		margin: 20px;
		background-color: rgb(251, 251, 251);
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		border-radius: 8px;
		img {
			width: 300px;
			height: 250px;
			border-radius: 8px;
		}

		.description {
			margin-left: 55px;
			height: 240px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			h3 {
				margin-top: 8px;
				width: 600px;
				text-align: center;
			}

			p {
				margin-top: 20px;
				width: 600px;
			}

			div {
				text-align: end;
				a {
					text-decoration: none;
					padding: 1px 8px 1px 8px;
					margin-right: 15px;
					border-radius: 5px;
					font-size: 14px;
					border: 1px solid #bf9b58;
					color: #bf9b58;
					cursor: pointer;

					&:hover {
						opacity: 0.7;
					}
				}
			}
		}
	}
</style>
