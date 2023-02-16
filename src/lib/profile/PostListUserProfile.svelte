<script lang="ts">
	import { postsList, authStore } from '../../stores/dataUsers';
</script>

<div>
	<h4>Mes publications :</h4>
	<div class="posts">
		{#each $postsList as item}
			{#if $authStore.uid === item.idUser && item.img !== ''}
				<a href={`/home/profile/${item.idPost}`}><img src={item.img} alt="imgPosts" /></a>
			{/if}
		{/each}
	</div>
</div>

<style>
	div {
		width: 800px;
		margin: 70px 50px 0 0;
	}

	h4 {
		text-decoration: underline;
	}

	.posts {
		margin: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	img {
		height: 80px;
		margin: 5px;
		cursor: pointer;
		border-radius: 5px;
	}
</style>
