import { Component, css } from "dreamland/core";
import { Header } from "../components/Header";

import MemberCell from "../components/MemberCell";
import { members } from "../Members";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../Projects";

const Homepage: Component<{}, {}> = function () {
    return (
        <article>
            <Header />
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
    );
}

Homepage.style = css`
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
`

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

export default Homepage;