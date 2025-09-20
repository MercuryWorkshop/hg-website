import { Component, css } from "dreamland/core";
import { Member } from "../types/Member";
import { Header } from "../components/Header";

const MemberView: Component<{member: Member},{}> = function () {
    return (
        <article>
            <Header />
            <div class="info card">
                <img class="pfp" src={`/assets/pfps/${this.member.avatarName}.webp`} alt={`${this.member.name}'s avatar`} width="90" height="90" />
                <div class="details">
                    <h2 class="name">{this.member.name}</h2>
                    <p class="bio">{this.member.bio}</p>
                </div>
            </div>
            {this.member.profileLinks.length > 0 && (
                <section id="profile-links">
                    {this.member.profileLinks.map(link => (
                        link.url ? (
                            <a
                                class="profile-link card interactable"
                                href={link.url}
                                target="_blank"
                                rel="me"
                            >
                                <span class="title">{link.title}</span>
                                <span class="content">{link.content}</span>
                            </a>
                        ) : (
                            <div class="profile-link card">
                                <span class="title">{link.title}</span>
                                <span class="content">{link.content}</span>
                            </div>
                        )
                    ))}
                </section>
            )}
        </article>
    );
};

MemberView.style = css`
    :scope {
        display: block;
    }
        
    .pfp {
        border-radius: 50%;
    }

    .info {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    h2 {
        margin: 0;
    }
 
    #profile-links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .profile-link {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        text-decoration: none;
        color: var(--text);
    }

    .profile-link .title {
        font-size: 0.9em;
        font-weight: 700;
        font-family: var(--font-display);
        color: var(--fg2);
    }

    .profile-link .content {
        font-size: 0.95rem;
        color: var(--fg)!important;
        word-break: break-word;
    }
`;

export default MemberView;
