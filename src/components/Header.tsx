import { Component, css } from "dreamland/core";
import Logo from "./Logo";

const Header: Component<{}, {}> = function () {
	return (
		<header class="card">
			<Logo />
		</header>
	);
};

Header.style = css`
	:scope {
		display: flex;
		align-items: center;
		// position: sticky;
		top: 1rem;
		z-index: 4;
		background: hsla(var(--bg2-raw), 0.4);
		backdrop-filter: blur(12px) saturate(1.4) brightness(0.8);
	}

	@media (max-width: 30rem) {
		:scope {
			justify-content: center;
		}
	}
`;

export default Header;
