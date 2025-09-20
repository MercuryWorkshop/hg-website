import { Component, css } from "dreamland/core";
import { Member } from "../types/Member";

const MemberCell: Component<{ member: Member }, {}> = function () {
    return (
        <div class="member-cell card interactable">
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
        min-height: 5rem;
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