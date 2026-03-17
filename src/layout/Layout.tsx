import { type FC } from "dreamland/core";
import { RouterState } from "dreamland/router";
import Stage from "../components/Stage";
import Header from "./Header";
import Footer from "./Footer";

function Layout(this: FC<{ routerState: RouterState }, { pageHue: number; pageSat: string }>) {
	use(this.routerState.loading).listen((loading) => {
		if (loading) return;
		//@ts-expect-error this is a really stupid hack 
		this.pageHue = this.routerState.outlet.$.pageHue;
		//@ts-expect-error this is a really stupid hack 
		this.pageSat = this.routerState.outlet.$.pageSat;
	})

	return (
		<div id="layout">
			<Stage pageHue={use(this.pageHue)} pageSat={use(this.pageSat)} />
			<main>
				<article>
					<Header />
					{use(this.routerState.outlet)}
					<Footer />
				</article>
			</main>
		</div>
	);
};

export default Layout;
