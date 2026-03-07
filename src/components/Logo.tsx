import { Component, css } from "dreamland/core";
import { router } from "dreamland/router";

const Logo: Component<{}, {}> = function () {
	return (
		<div class="logo">
			<img
				src="/assets/percury.svg"
				alt="Mercury Workshop Logo"
				width="50"
				height="50"
			/>
			<a
				on:click={(e: MouseEvent) => {
					e.preventDefault();
					router.navigate("/");
				}}
			>
				<h1>
					<span>Mercury</span>
					<span class="thin">Workshop</span>
				</h1>
			</a>
		</div>
	);
};

Logo.style = css`
	:scope {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 1.1rem;
		user-select: none;
	}

	a,
	a:visited {
		text-decoration: none;
		color: var(--fg) !important;
	}

	@media (max-width: 30rem) {
		:scope {
			flex-direction: column;
		}
	}

	@media (max-width: 22rem) {
		:scope h1 {
			display: none;
		}

		:scope {
			gap: 0;
		}
	}

	span {
		transition:
			color 0.25s ease,
			text-shadow 0.25s ease;
		cursor: pointer;
	}

	img {
		transition: filter 0.25s ease;
		width: 4.25rem;
		height: 4.25rem;
	}

	img:hover,
	:scope:has(h1:hover) img {
		filter: drop-shadow(0 0 0.25rem rgba(255, 255, 255, 0.5));
	}

	h1:hover span {
		color: var(--accent);
		text-shadow: 0 0 0.5rem hsla(var(--accent-raw), 0.75);
	}

	h1:hover span.thin {
		color: var(--accent2);
		text-shadow: 0 0 0.5rem hsla(var(--accent2-raw), 0.75);
	}

	.thin {
		font-weight: 400;
	}

	img,
	h1 {
		display: inline;
		margin: 0;
	}
`;

export default Logo;
