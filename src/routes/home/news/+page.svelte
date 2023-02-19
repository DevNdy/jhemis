<script lang="ts">
	import Loader from '$lib/ui-reusable/Loader.svelte';
	import { onMount } from 'svelte';

	let newsData: any = [];
	let indexNbr: number = 6;
	let loading: boolean = false;

	const getApiNews = async () => {
		const res = await fetch(
			'https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=df29903951f8497fb88520ada1b3a549'
		);
		const data = await res.json();

		return data.articles;
	};

	onMount(async () => {
		loading = true;
		newsData = await getApiNews();
		console.log(newsData);
		loading = false;
	});
</script>

<main>
	<section>
		<h2>News</h2>
		<div class="news">
			{#each newsData as item, index}
				{#if item.urlToImage !== null && index < indexNbr}
					<div class="article">
						<img src={item.urlToImage} alt="" />
						<div class="description">
							<h3>{item.title}</h3>
							<p>{item.description}</p>
							<div>
								<h5>Source: <span>{item.source.name}</span></h5>
								<a href={item.url} target="_blank" rel="noopener noreferrer">en savoir +</a>
							</div>
						</div>
					</div>
				{/if}
			{/each}
			<div class="divBtn">
				<button class="btnMoreData" on:click={() => (indexNbr = indexNbr + 5)}>+ d'articles</button>
			</div>
		</div>
		{#if loading}
			<div class="load">
				<Loader />
			</div>
		{/if}
	</section>
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		width: 1100px;
		margin: 35px 0 0 200px;
		min-height: 100vh;
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
				display: flex;
				justify-content: space-between;
				align-items: flex-end;

				h5 {
					margin-left: 10px;
					font-style: italic;
					span {
						font-weight: 400;
					}
				}

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

	.divBtn {
		text-align: center;
		.btnMoreData {
			height: 30px;
			width: 100px;
			margin: 20px;
			border: none;
		}
	}

	.load {
		position: fixed;
		top: 0;
		left: 233px;
		bottom: 0;
		right: 0;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 1400px) {
		section {
			width: 900px;
		}

		.article {
			img {
				height: 250px;
			}
			.description {
				h3 {
					width: 400px;
					font-size: 15px;
				}

				p {
					font-size: 14px;
					width: 400px;
				}
			}
		}
	}

	@media (max-width: 1200px) {
		section {
			width: 800px;
		}

		.article {
			img {
				height: 250px;
			}
			.description {
				margin-left: 25px;
				h3 {
					width: 400px;
					font-size: 15px;
					font-weight: 500;
					color: black;
				}

				p {
					font-size: 14px;
					width: 400px;
					color: rgb(60, 60, 60);
					font-weight: 300;
				}
			}
		}
	}

	@media (max-width: 1080px) {
		section {
			margin-left: 100px;
			width: 400px;
		}

		h2 {
			text-align: center;
		}

		.article {
			flex-direction: column;
			max-width: 350px;
			img {
				height: 270px;
				width: 350px;
				max-width: 350px;
			}
			.description {
				height: 300px;
				margin-left: 0px;
				align-items: center;
				h3 {
					width: 320px;
				}

				p {
					margin-top: 10px;
					width: 300px;
					text-align: center;
				}
				div {
					width: 320px;
					margin-bottom: 5px;
					h5 {
						margin-left: 5px;
						font-size: 12px;
					}

					a {
						font-size: 10px;
					}
				}
			}
		}
	}

	@media (max-width: 750px) {
		section {
			margin: 10px 0 0 0;
			width: 360px;
		}

		h2 {
			text-align: end;
			margin: 8px 15px 10px 0;
		}

		.article {
			margin-top: 5px;
			flex-direction: column;
			max-width: 350px;
			img {
				height: 250px;
				width: 320px;
			}
		}
	}

	.load {
		left: 0;
	}
</style>
