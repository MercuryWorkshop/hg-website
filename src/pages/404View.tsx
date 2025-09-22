import { Component, css } from "dreamland/core";

const NotFoundView: Component = function () {
	return (
		<article>
			<h1>404</h1>
			<p>The page you are looking for does not exist.</p>
		</article>
	);
};

NotFoundView.style = css`
	:global(*) {
		--page-hue: 215;
		--page-sat: 90%;
		--page-hs: var(--page-hue), var(--page-sat);
	}

	h1 {
		font-size: 15vw;
		margin: 1rem;
	}

	p {
		font-size: 1.5rem;
	}

	article {
		inset: 0;
		overflow: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export default NotFoundView;
