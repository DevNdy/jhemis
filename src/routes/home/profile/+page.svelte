<script lang="ts">
	import { goto } from '$app/navigation';
	import EditProfile from '$lib/profile/EditProfile.svelte';
	import { doc, updateDoc } from 'firebase/firestore';
	import { authStore, usersList } from '../../../stores/dataUsers';
	import { db } from '../../fb';

	let avatarEdit: string = '';
	let firstNameEdit: string = '';
	let lastNameEdit: string = '';
	let descriptionEdit: string = '';

	let openEdit: boolean = false;

	const upadateImg = async (
		id: string,
		avatar: string,
		description: string,
		firstName: string,
		lastName: string
	) => {
		try {
			await updateDoc(doc(db, 'Users', id), {
				avatar: avatarEdit === '' ? avatar : avatarEdit,
				description: descriptionEdit === '' ? description : descriptionEdit,
				firstName: firstNameEdit === '' ? firstName : firstNameEdit,
				lastName: lastNameEdit === '' ? lastName : lastNameEdit
			});
			openEdit = false;
			window.location.reload();
			goto('/home/profile');
		} catch (err) {
			console.log(err);
		}
	};
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
							<i on:click={() => (openEdit = true)} on:keypress class="fa-solid fa-pen" />
						</span>
						<h3>{item.firstName + ' ' + item.lastName}</h3>
						<h3>{item.email}</h3>
						<h3>Date création compte: {item.date}</h3>
						<p>{item.description}</p>
						{#if openEdit === true}
							<EditProfile
								bind:urlImg={avatarEdit}
								bind:firstNameEdit
								bind:lastNameEdit
								bind:descriptionEdit
								onClickClose={() => (openEdit = false)}
								onSubmit={() =>
									upadateImg(item.id, item.avatar, item.description, item.firstName, item.lastName)}
							/>
							<div class="filterPageEdit" />
						{/if}
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

	.filterPageEdit {
		position: fixed;
		top: -100px;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #a3a3a38d;
		z-index: 20;
	}
</style>
