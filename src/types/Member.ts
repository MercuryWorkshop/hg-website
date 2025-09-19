import ProfileLink from "./ProfileLink";

export interface Member {
    name: string;
    bio: string;
    avatarName: string;
    profileLinks: ProfileLink[];
}