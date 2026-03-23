import { css, type FC } from "dreamland/core";
import { Route,  Router } from "dreamland/router";

import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import MemberView from "./pages/MemberView";
import { members } from "./Members";
import NotFoundView from "./pages/404View";
import { projects } from "./Projects";
import ProjectView from "./pages/ProjectView";


function App(this: FC<{ url?: string }>) {
	return (
		<div id="app">
			<Router initial={this.url ? [this.url, "http://127.0.0.1:5173"] : []}>
				<Route layout={Layout}>
					<Route show={<Homepage />} />
					<Route path="member">
						{...members.map((member) => (
							<Route
								path={member.avatarName}
								show={<MemberView member={member} />}
							/>
						))}
					</Route>
					<Route path="project">
						{...projects.map((project) => (
							<Route
								path={project.name}
								show={<ProjectView project={project} />}
							/>
						))}
					</Route>
				</Route>
				<Route path="*" show={<NotFoundView />} />
			</Router>
		</div>
	);
};

App.style = css`
	:scope {
		margin: 0;
	}
`;

export default (url?: string) => <App url={url} />;