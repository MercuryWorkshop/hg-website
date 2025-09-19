import { Component, css } from "dreamland/core";
import { Header } from "./components/Header";

import MemberCell from "./components/MemberCell";
import { members } from "./Members";

import ProjectCard from "./components/ProjectCard";
import { projects } from "./Projects";

import "./style.css";

// typescript syntax for defining components
const App: Component<{},{}> = function () {
	return (
		<main>
			<div class="stage"></div>
			<article>
				<Header />
				{/* <p>huge todo. will work on this when i have time - fish</p> */}
				<h2>About Us</h2>
				<section id="about">
					<p>We are an organization of developers dedicated to writing free and open-source software for everyone.</p>
				</section>
				<h2>Our Projects</h2>
				<section id="projects">
					{projects.map(project => <ProjectCard project={project} />)}
				</section>
				<h2>Members</h2>
				<section id="members">
					{members.map(member => <MemberCell member={member} />)}
				</section>
				<div style="width: 0; height: 0; overflow: hidden;">
				<video id="clocks" class="glassy" disablepictureinpicture disableremoteplayback>
					<source src="/assets/clocks.mp4" type="video/mp4" preload="auto" />
				</video>
				</div>
			</article>
		</main>
	);
};

App.style = css`
	:scope {
		margin: 0;
		/* was meaning to explore this beautiful world-style per-page lighting further.
		 basically, the homepage is pink, and project/member subpages are blue (300, 30%) - fish*/
		// --page-hs: 215, 20%;
		--page-hs: 300, 30%;
	}

	#projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 1rem;
	}

	#members {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: 1rem;
	}

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
	}

	#clocks.playing {
		transform: translate(-50%, -50%) rotate(1turn) scale(1);
		visibility: visible;
	}

	#clocks.ending {
		transform: translate(-50%, -50%) rotate(0turn) scale(0);
		visibility: visible;
	}

	article {
		z-index: 3;
		position: relative;
		padding: 1.25rem;
	}

	.stage {
		position: relative;
		min-height: 100vh;
		background: linear-gradient(
			180deg,
			hsl(var(--page-hs), 3%) 0%,
			hsl(var(--page-hs), 7%) 105%
		);
		overflow: hidden;
		inset: 0;
		z-index: 1;
		position: fixed;
		width: 100%;
		height: 100%;
	}

	.stage::before {
		content: "";
		position: absolute;
		left: 50%;
		top: -22%;
		width: 160vmax;
		height: 120vmax;
		transform: translateX(-50%);
		pointer-events: none;
		mix-blend-mode: screen;
		filter: blur(40px);
		--beam-color: var(--page-hs), 67%;
		background: radial-gradient(
				ellipse at 50% 2%,
				hsla(var(--beam-color), 0.475) 0%,
				hsla(var(--beam-color), 0.15) 4%,
				hsla(var(--beam-color), 0.05) 9%,
				hsla(var(--beam-color), 0.02) 14%,
				transparent 28%
			),
			radial-gradient(
				ellipse at 50% 6%,
				hsla(var(--beam-color), 0.07) 0%,
				hsla(var(--beam-color), 0.035) 10%,
				hsla(var(--beam-color), 0.01) 26%,
				transparent 48%
			),
			conic-gradient(
				from 200deg at 50% 0%,
				hsla(var(--beam-color), 0.045) 0deg,
				hsla(var(--beam-color), 0.015) 22deg,
				transparent 80deg,
				hsla(var(--beam-color), 0.01) 200deg,
				transparent 360deg
			);
	}

	.stage::after {
		content: "";
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: radial-gradient(ellipse at 50% 40%, transparent 30%, hsla(0, 0%, 0%, 0.45) 70%),
			linear-gradient(180deg, hsla(0, 0%, 0%, 0.05) 0%, hsla(0, 0%, 0%, 0.35) 100%);
	}
`;

window.addEventListener("load", () => {
	document.getElementById("app")!.replaceWith(<App />);
});

const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', "Enter"];
let current = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === pattern[current]) {
	console.log("Key matched:", e.key);
    current++;
    if (current === pattern.length) {
			const clocks: HTMLVideoElement = document.getElementById("clocks") as HTMLVideoElement;
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
})