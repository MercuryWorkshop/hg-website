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
		</main>
	);
};

App.style = css`
	:scope {
		margin: 0;
		padding: 1.25rem;	
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
`

window.addEventListener("load", () => {
	document.body.appendChild(<App />);
});