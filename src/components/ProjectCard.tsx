import { Component, css } from "dreamland/core";
import { Project } from "../types/Project";

const ProjectCard: Component<{ project: Project }, {}> = function () {
    return (
        <a class="project-card" href={this.project.url ?? this.project.repo} target="_blank" rel="noopener noreferrer">
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
        padding: 1rem;
        border-radius: 1rem;
        min-height: 8rem;
        background-color: var(--bg2);
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        box-shadow: inset 0 0 0.05rem 0.075rem rgba(255, 255, 255, 0.05);
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }

    :scope:hover {
        transform: translateY(-0.25rem);
        box-shadow: inset 0 0 0.05rem 0.08rem rgba(255, 255, 255, 0.075), 0 0 0.75rem rgba(0, 0, 0, 0.15);
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