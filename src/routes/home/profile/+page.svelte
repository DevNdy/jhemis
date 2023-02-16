<script lang="ts">
	import EditProfile from '$lib/profile/EditProfile.svelte';
	import PostListUserProfile from '$lib/profile/PostListUserProfile.svelte';
	import ProfileInfos from '$lib/profile/ProfileInfos.svelte';
	import { doc, updateDoc } from 'firebase/firestore';
	import { authStore, usersList } from '../../../stores/dataUsers';
	import { db } from '../../fb';

	let avatarEdit: string = '';
	let firstNameEdit: string = '';
	let lastNameEdit: string = '';
	let descriptionEdit: string = '';

	let openEdit: boolean = false;

	const upadateProfile = async (
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
			avatarEdit = '';
			firstNameEdit = '';
			lastNameEdit = '';
			descriptionEdit = '';
		} catch (err) {
			console.log(err);
		}
	};
</script>

<main>
	<section>
		<h2>Mon compte</h2>
		{#await $usersList then items}
			{#each items as item}
				{#if item.id === $authStore.uid}
					<ProfileInfos
						onClickEdit={() => (openEdit = true)}
						firstName={item.firstName}
						lastName={item.lastName}
						date={item.date}
						avatar={item.avatar}
						email={item.email}
						description={item.description}
					/>
					{#if openEdit === true}
						<EditProfile
							bind:urlImg={avatarEdit}
							bind:firstNameEdit
							bind:lastNameEdit
							bind:descriptionEdit
							onClickClose={() => (openEdit = false)}
							onSubmit={() =>
								upadateProfile(
									item.id,
									item.avatar,
									item.description,
									item.firstName,
									item.lastName
								)}
						/>
						<div class="filterPageEdit" />
					{/if}
				{/if}
			{/each}
		{/await}
		<PostListUserProfile />
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
		margin: 35px 0 0 60px;
		width: 100%;
		text-align: start;
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
