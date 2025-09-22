import { Component, css } from "dreamland/core";
import Header from "../components/Header";
import Project from "../types/Project";

const ProjectView: Component<{ project: Project }, {}> = function () {
	return (
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
	);
};

ProjectView.style = css`
	:global(*) {
		--page-hue: 215;
		--page-sat: 90%;
		--page-hs: var(--page-hue), var(--page-sat);
	}

	h2 {
		margin-top: 0;
	}

	.card {
		width: 100%;
		height: auto;
		margin-top: 1rem;
	}
`;

export default ProjectView;
