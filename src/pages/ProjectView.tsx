import { Component, css } from "dreamland/core";
import Header from "../components/Header";
import Project from "../types/Project";
import Stage from "../components/Stage";

const ProjectView: Component<{ project: Project }, {}> = function () {
	return (
		<main>
			<Stage pageHue={215} pageSat="60%" />
			<article>
			<Header />
			<div class="card">
				<h2 class="name">{this.project.name}</h2>
				<p class="description">{this.project.description}</p>
				{this.project.url && (
					<p>
						Website:{" "}
						<a
							href={this.project.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{this.project.url}
						</a>
					</p>
				)}
				<p>
					Repository:{" "}
					<a href={this.project.repo} target="_blank" rel="noopener noreferrer">
						{this.project.repo}
					</a>
				</p>
			</div>
			</article>
		</main>
	);
};

ProjectView.style = css`
	article h2 {
		margin-top: 0;
	}

	.card {
		width: 100%;
		height: auto;
		margin-top: 1rem;
	}
`;

export default ProjectView;
