import { Component, css } from "dreamland/core";
import { Header } from "../components/Header";
import { Project } from "../types/Project";

const ProjectView: Component<{project: Project},{}> = function () {
	return (
		<article>
			<Header />
            <div class="card">
                <h2 class="name">{this.project.name}</h2>
                <p class="description">{this.project.description}</p>
                {this.project.url && <p>Website: <a href={this.project.url} target="_blank" rel="noopener noreferrer">{this.project.url}</a></p>}
                <p>Repository: <a href={this.project.repo} target="_blank" rel="noopener noreferrer">{this.project.repo}</a></p>
            </div>
		</article>
	);
};

ProjectView.style = css`
	:scope {
		--page-hs: 215, 20%;
	}

    .card {
        width: 100%;
        height: auto;
    }
`;

export default ProjectView;
