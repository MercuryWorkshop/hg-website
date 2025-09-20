import { Component, css } from "dreamland/core";
import { Member } from "../types/Member";

const MemberView: Component<{member: Member},{}> = function () {
    return (
        <article>
            <h2 class="name">{this.member.name}</h2>
            <p class="bio">{this.member.bio}</p>
            {this.member.profileLinks.length > 0 && 
                <table>
                    <thead>
                        <tr>
                            <th>Platform</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.member.profileLinks.map(link => (
                            <tr>
                                <td>{link.title}</td>
                                <td><a href={link.url} target="_blank" rel="noopener noreferrer">{link.content}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            }
        </article>
    );
};

MemberView.style = css`
    :scope {
        --page-hs: 215, 20%;
    }

    .card {
        width: 100%;
        height: auto;
    }
`;

export default MemberView;
