import { Component, css } from "dreamland/core";
import { Member } from "../types/Member";

const MemberCell: Component<{ member: Member }, {}> = function () {
    return (
        <div class="member-cell">
            <img class="avatar" src={`/assets/pfps/${this.member.avatarName}`} alt={`${this.member.name}'s avatar`} width="100" height="100" />
            <span class="name">{this.member.name}</span>
        </div>
    )
}

MemberCell.style = css`
    :scope {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: left;
        gap: 0.75rem;
        padding: 1rem;
        border-radius: 1rem;
        min-height: 5rem;
        background-color: var(--bg2);
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        box-shadow: inset 0 0 0.05rem 0.075rem rgba(255, 255, 255, 0.05);
        cursor: pointer;
    }

    :scope:hover {
        transform: translateY(-0.25rem);
        box-shadow: inset 0 0 0.05rem 0.08rem rgba(255, 255, 255, 0.075), 0 0 0.75rem rgba(0, 0, 0, 0.15);
    }

    .avatar {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        object-fit: cover;
        box-shadow:  0 0 0 0.025rem rgba(255, 255, 255, 0.2);
    }

    .name {
        font-size: 1.25rem;
        font-weight: bold;
        color: var(--text);
    }
`

export default MemberCell;  