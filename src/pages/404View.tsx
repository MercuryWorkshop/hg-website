import { css, type FC } from "dreamland/core";

function NotFoundView(this: FC) {
	this.cx.pageHue = 340;
	this.cx.pageSat = "45%";
	return (
		<div>
			<h1>404</h1>
			<p>The page you are looking for does not exist.</p>
		</div>
	);
};

NotFoundView.style = css`
	:scope {
		inset: 0;
		overflow: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		font-size: 15vw;
		margin: 1rem;
	}

	p {
		font-size: 1.5rem;
	}
`;

export default NotFoundView;
