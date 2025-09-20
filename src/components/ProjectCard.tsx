import { Component, css } from "dreamland/core";
import { Project } from "../types/Project";

const ProjectCard: Component<{ project: Project }, {}> = function () {
    return (
        <a class="project-card card interactable" href={`project/${this.project.name}`} target="_self">
            <h3 class="name">{this.project.name}</h3>
            <p class="description">{this.project.description}</p>
        </a>
    )
}

ProjectCard.style = css`
    :scope {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        gap: 0.25rem;
        min-height: 8rem;
        text-decoration: none;
        color: inherit;
    }

    .name {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--fg);
        margin: 0;
    }

    .description {
        font-size: 1rem;
        color: var(--fg2);
        margin: 0;
    }
`

export default ProjectCard;