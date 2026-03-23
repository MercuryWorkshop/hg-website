import { css, type FC } from "dreamland/core";
import { RouterState } from "dreamland/router";
import Stage from "../components/Stage";
import Header from "./Header";

function Layout(this: FC<{ routerState: RouterState }, { pageHue: number; pageSat: string }>) {
	this.cx.mount = () => {
		const pattern = [
			"ArrowUp",
			"ArrowUp",
			"ArrowDown",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight",
			"ArrowLeft",
			"ArrowRight",
			"b",
			"a",
			"Enter",
		];
		let current = 0;

		document.addEventListener("keydown", (e) => {
			if (e.key === pattern[current] || e.key.toLowerCase() === pattern[current]) {
				console.log("Key matched:", e.key);
				current++;
				if (current === pattern.length) {
					const clocks: HTMLVideoElement = document.getElementById(
						"clocks"
					) as HTMLVideoElement;
					clocks!.classList.add("playing");
					clocks!.play();
					clocks!.addEventListener("ended", () => {
						// clocks.classList.remove("playing");
						clocks!.pause();
						clocks!.classList.remove("playing");
						clocks!.classList.add("ending");
						setTimeout(() => {
							clocks!.classList.remove("ending");
						}, 500);
					});
					current = 0;
				}
			} else {
				current = 0;
			}
		});
	}
	use(this.routerState.loading).listen((loading) => {
		if (loading) return;
		//@ts-expect-error this is a really stupid hack 
		this.pageHue = this.routerState.outlet.$.pageHue;
		//@ts-expect-error this is a really stupid hack 
		this.pageSat = this.routerState.outlet.$.pageSat;
	})

	return (
		<div id="layout">
			<Stage pageHue={use(this.pageHue)} pageSat={use(this.pageSat)} />
			<main>
				<article>
					<Header />
					{use(this.routerState.outlet)}
				</article>
				<div id="clock-container" style="width: 0; height: 0; overflow: hidden;">
					<video id="clocks" disablepictureinpicture disableremoteplayback>
						<source src="/assets/clocks.mp4" type="video/mp4" preload="auto" />
					</video>
				</div>
			</main>
		</div>
	);
};

Layout.style = css`
	#clocks {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(0turn) scale(0);
		transform-origin: center;
		padding: 1px;
		transition: transform 0.5s ease;
		visibility: hidden;
		box-shadow: 0 0 2rem 1rem hsla(var(--fg-raw), 0.2);
		border: none;
		border-radius: 1rem;
		z-index: 10;
	}

	#clocks.playing {
		transform: translate(-50%, -50%) rotate(1turn) scale(1);
		visibility: visible;
	}

	#clocks.ending {
		transform: translate(-50%, -50%) rotate(0turn) scale(0);
		visibility: visible;
	}
`

export default Layout;
