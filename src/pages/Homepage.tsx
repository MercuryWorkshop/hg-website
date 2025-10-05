import { Component, css } from "dreamland/core";
import Header from "../components/Header";

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
				<p>
					We're an organization of developers dedicated to writing free and
					open-source software for everyone.
				</p>
			</section>
			<h2>Our Projects</h2>
			<section id="projects">
				{projects.map((project) => (
					<ProjectCard project={project} />
				))}
			</section>
			<h2>Members</h2>
			<section id="members">
				{members.map((member) => (
					<MemberCell member={member} />
				))}
			</section>
		</article>
	);
};

Homepage.style = css`
	:global(*) {
		--page-hue: 340;
		--page-sat: 45%;
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
`;

export default Homepage;
