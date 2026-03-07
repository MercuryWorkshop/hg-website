import { Component, css } from "dreamland/core";
import Header from "../components/Header";
import Stage from "../components/Stage";
import Logo from "../components/Logo"

import MemberCell from "../components/MemberCell";
import { members } from "../Members";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../Projects";

const Homepage: Component<{}, {}> = function () {
	return (
		<main>
			<Stage pageHue={310} pageSat="35%" />
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
				<footer class="card">
						<Logo />
						<div>
							<p>
								Legal request? Contact{" "}
								<a href="mailto:legal@mercurywork.shop">legal@mercurywork.shop</a>
							</p>
							<p>
								Found a security issue? Contact{" "}
								<a href="mailto:security@mercurywork.shop">security@mercurywork.shop</a>
							</p>
							<p>
								Need help or just want to contact the team? Email us at{" "}
								<a href="mailto:support@mercurywork.shop">support@mercurywork.shop</a>
							</p>
						</div>
				</footer>
				<span class="konami">
					<svg xmlns="http://www.w3.org/2000/svg" height="0.5em" viewBox="0 0 1021.2 71.6">
						<path
							fill="#fff4"
							d="M808.7 70.7H773v-9.6h9.4V10.3H773V.7h35.5q6.3 0 11 2.15a18.3 18.3 0 0 1 4.859 3.188 16.4 16.4 0 0 1 2.491 2.912q2.65 3.95 2.65 9.35v1a21 21 0 0 1-.252 3.353q-.29 1.792-.913 3.269a11 11 0 0 1-.635 1.278q-1.8 3.1-4.35 4.8t-4.85 2.4V36a13 13 0 0 1 2.079.745q1.014.456 2.087 1.108a25 25 0 0 1 .784.497q2.65 1.75 4.5 4.85 1.53 2.564 1.795 6.427a25 25 0 0 1 .055 1.673v1a20.8 20.8 0 0 1-.535 4.829A15.8 15.8 0 0 1 827.1 62.2q-2.7 4.1-7.45 6.3a23.4 23.4 0 0 1-6.46 1.884 31 31 0 0 1-4.49.316m-776.4 0h-10V18.9l.7-4.4-1.5-.5-2.4 3.7L6.6 30.3 0 23.7 23.7 0h7.2l23.7 23.7-6.6 6.6-12.5-12.6-2.4-3.7-1.5.5.7 4.4zm87.5 0h-10V18.9l.7-4.4-1.5-.5-2.4 3.7-12.5 12.6-6.6-6.6L111.2 0h7.2l23.7 23.7-6.6 6.6L123 17.7l-2.4-3.7-1.5.5.7 4.4zm86.1.7h-7.2L175 47.7l6.6-6.6 12.5 12.6 2.4 3.7 1.5-.5-.7-4.4V.7h10v51.8l-.7 4.4 1.5.5 2.4-3.7L223 41.1l6.6 6.6zm87.5 0h-7.2l-23.7-23.7 6.6-6.6 12.5 12.6 2.4 3.7 1.5-.5-.7-4.4V.7h10v51.8l-.7 4.4 1.5.5 2.4-3.7 12.5-12.6 6.6 6.6zm87.1-6.3-6.6 6.5-23.2-23.1v-6.8l23.2-23.2 6.6 6.6-12.2 12.1-3.7 2.4.5 1.5 4.4-.7h51.8v9.4h-51.8l-4.4-.7-.5 1.5 3.7 2.4zm146.9-16.6-23.2 23.1-6.6-6.5L509.8 53l3.7-2.4-.5-1.5-4.4.7h-51.8v-9.4h51.8l4.4.7.5-1.5-3.7-2.4-12.2-12.1 6.6-6.6 23.2 23.2zm64.1 16.6-6.6 6.5-23.2-23.1v-6.8l23.2-23.2 6.6 6.6-12.2 12.1-3.7 2.4.5 1.5 4.4-.7h51.8v9.4h-51.8l-4.4-.7-.5 1.5 3.7 2.4zm146.9-16.6-23.2 23.1-6.6-6.5L720.8 53l3.7-2.4-.5-1.5-4.4.7h-51.8v-9.4h51.8l4.4.7.5-1.5-3.7-2.4-12.2-12.1 6.6-6.6 23.2 23.2zm133.7 22.2h-11.2l20-70h19l19.9 70h-11.1l-4.6-16.5h-27.4zm17.5-63.3-10.2 36.8h22L891.2 7.4zm-96.3 33v20.5h14.1a18 18 0 0 0 3.423-.304q1.981-.381 3.538-1.242A9.7 9.7 0 0 0 815.9 58.3q3.1-2.6 3.1-7.2v-.9a11.1 11.1 0 0 0-.411-3.108A8.3 8.3 0 0 0 815.95 43q-3.05-2.6-8.55-2.6zm0-29.9v20h14.1a16.6 16.6 0 0 0 3.407-.329q2.237-.468 3.952-1.601a10 10 0 0 0 .841-.62 8.33 8.33 0 0 0 3.068-6.075A12 12 0 0 0 818.7 21v-1q0-4.4-3.05-6.95a10.4 10.4 0 0 0-3.979-2.026q-1.915-.524-4.271-.524zm187.1 54.6-6.6 6.5-23.2-23.1v-6.8l23.2-23.2 6.6 6.6-12.2 12.1-3.7 2.4.5 1.5 4.4-.7h42.4V18.5h9.4v31.3h-51.8l-4.4-.7-.5 1.5 3.7 2.4z"
						/>
					</svg>
				</span>
			</article>
		</main>
	);
};

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

	footer {
		margin-block: 1.66rem;
		display: flex;
		justify-content: space-between;
	}

	footer > div {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-size: 1.1rem;
		text-align: right;
	}

	.konami {
		display: flex;
		justify-content: center;
	}
`;

export default Homepage;
