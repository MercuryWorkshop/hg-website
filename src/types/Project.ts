interface Project {
	name: string;
	description: string;
	longDescription?: string;
	screenshotURL?: string;
	url: string | undefined;
	repo: string;
}

export default Project;
