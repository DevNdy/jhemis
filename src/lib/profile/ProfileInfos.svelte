<script lang="ts">
	export let onClickEdit: () => void;
	export let firstName: string;
	export let lastName: string;
	export let description: string;
	export let avatar: string;
	export let email: string;
	export let date: string;
</script>

<section>
	<img src={avatar} alt="avatar" />
	<div>
		<h3 class="infosCapitalize"><span>Nom: </span>{firstName + ' ' + lastName}</h3>
		<h3><span>Email:</span> {email}</h3>
		<h3 class="infosCapitalize"><span>Compte crée le:</span>{date}</h3>
		<p><span>Description:</span> <br />{description}</p>
	</div>
	<i on:click={onClickEdit} on:keypress class="fa-solid fa-pen" />
</section>

<style lang="scss">
	section {
		margin: 100px 100px 0 0;
		display: flex;
	}

	img {
		height: 300px;
		width: 300px;
		border-radius: 50%;
		margin-right: 50px;
	}

	i {
		background-color: #373435;
		color: #bf9b58;
		padding: 6px;
		height: 20px;
		width: 20px;
		font-size: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}
	}

	div {
		margin-top: 20px;
		h3 {
			margin-top: 10px;
			font-weight: 400;
			color: #5e5c5d;
			font-size: 16px;
			display: flex;
			flex-direction: column;

			span {
				font-weight: 700;
				font-size: 16px;
				color: black;
				text-transform: none;
			}
		}

		.infosCapitalize {
			text-transform: capitalize;
		}

		p {
			margin-top: 10px;
			padding: 8px;
			width: 400px;
			border: 0.5px solid #a1a1a1;
			border-radius: 5px;
			color: #5e5c5d;

			span {
				font-weight: 700;
				text-decoration: underline;
				color: black;
			}
		}
	}
</style>
