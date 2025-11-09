interface ProfileLink {
	title: string;
	content: string;
	url: string | undefined;
}

interface Member {
	name: string;
	bio: string;
	avatarName: string;
	profileLinks: ProfileLink[];
}

export default Member;
