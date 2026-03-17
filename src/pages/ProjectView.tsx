import { css, type FC } from "dreamland/core";
import Project from "../types/Project";

function ProjectView(this: FC<{ project: Project }>) {
	this.cx.pageHue = 215;
	this.cx.pageSat = "60%";
	return (
		<div class="card">
			<h2 class="name">{this.project.name}</h2>
			<p class="description">{this.project.description}</p>
			{this.project.url && (
				<p>
					Website:{" "}
					<a href={this.project.url} target="_blank" rel="noopener noreferrer">
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
	);
};

ProjectView.style = css`
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
