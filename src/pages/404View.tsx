import { Component, css } from "dreamland/core";
import Stage from "../components/Stage";

const NotFoundView: Component = function () {
	return (
		<main>
			<Stage pageHue={340} pageSat="45%" />
			<article>
			<h1>404</h1>
			<p>The page you are looking for does not exist.</p>
			</article>
		</main>
	);
};

NotFoundView.style = css`
	article h1 {
		font-size: 15vw;
		margin: 1rem;
	}

	article p {
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
