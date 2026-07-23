<script lang="ts">
	import { profile } from '$lib/data/content';
</script>

<div class="profile">
	<figure class="avatar-box">
		<img src={profile.avatar} alt={profile.name} width="80" height="80" />
	</figure>

	<div class="info-content">
		<h1 class="name">{profile.name}</h1>
		<p class="title">{profile.role}</p>
	</div>
</div>

<style>
	.profile {
		display: flex;
		align-items: center;
		gap: 14px;
		min-width: 0;
	}

	.avatar-box {
		overflow: hidden;
		flex-shrink: 0;
		border-radius: 50%;
	}

	.avatar-box img {
		width: 64px;
		height: 64px;
		object-fit: cover;
	}

	.info-content {
		min-width: 0;
	}

	.info-content .name {
		color: var(--text-white);
		font-size: 20px;
		font-weight: var(--fw-600);
		letter-spacing: -0.3px;
		margin-bottom: 4px;
		line-height: 1.2;
	}

	.info-content .title {
		color: var(--text-light-gray);
		font-size: var(--fs-7);
		font-weight: var(--fw-400);
	}

	@media (min-width: 580px) {
		.profile {
			gap: 18px;
		}

		.avatar-box img {
			width: 80px;
			height: 80px;
		}

		.info-content .name {
			font-size: 24px;
			margin-bottom: 6px;
		}

		.info-content .title {
			font-size: var(--fs-6);
		}
	}

	@media (min-width: 1024px) {
		.avatar-box img {
			width: 88px;
			height: 88px;
		}

		.info-content .name {
			font-size: 28px;
		}

		.info-content .title {
			font-size: var(--fs-5);
		}
	}
</style>
