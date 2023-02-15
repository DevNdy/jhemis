<script lang="ts">
	import { doc, updateDoc } from 'firebase/firestore';
	import { authStore, usersList } from '../../../stores/dataUsers';
	import { db } from '../../fb';

	let avatarEdit = '';

	const upadateImg = (id: string) =>
		updateDoc(doc(db, 'Users', id), {
			avatar: avatarEdit
		});
</script>

<main>
	<section>
		<h2>Mon compte</h2>
		<div>
			{#await $usersList then items}
				{#each items as item}
					{#if item.id === $authStore.uid}
						<span>
							<img src={item.avatar} alt="avatar" />
							<i on:click={() => upadateImg(item.id)} on:keypress class="fa-solid fa-pen" />
						</span>
						<input type="text" placeholder="change img" bind:value={avatarEdit} />
						<h3>{item.firstName + ' ' + item.lastName}</h3>
						<h3>{item.email}</h3>
						<h3>Date création compte: {item.date}</h3>
						<p>{item.description}</p>
					{/if}
				{/each}
			{/await}
		</div>
	</section>
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	section {
		margin: 0 0 0 250px;
		height: 100vh;
		width: 1200px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		margin-top: 35px;
		width: 100%;
		text-align: start;
	}

	div {
		margin-top: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;

		span {
			display: flex;
			flex-direction: row;
			align-items: flex-start;

			img {
				height: 250px;
				border-radius: 50%;
			}

			i {
				margin-top: 20px;
				background-color: #373435;
				color: #bf9b58;
				padding: 6px;
				font-size: 12px;
				border-radius: 50%;
				cursor: pointer;
			}
		}

		h3 {
			font-weight: 400;
		}

		p {
			height: 150px;
			width: 400px;
			border: 0.5px solid #373435;
			border-radius: 5px;
		}
	}
</style>
