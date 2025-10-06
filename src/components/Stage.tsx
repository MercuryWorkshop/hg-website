import { Component, css } from "dreamland/core";

const Stage: Component<{ pageHue: number; pageSat: string }, {}> = function () {
    return (
        <div
            class="stage"
            style={{
                "--page-hue": this.pageHue,
                "--page-sat": this.pageSat,
            }}
        >
            <div class="stage__beam"></div>
        </div>
    );
};

Stage.style = css`
    .stage {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 120vh;
        min-height: 100vh;
        overflow: hidden;
        transform-origin: center top;
        rotate: -1deg;
        z-index: -10;
        --color: hsla(var(--page-hue), var(--page-sat), 75%, 0.2);
        background: linear-gradient(
            to bottom,
            hsl(var(--page-hue), var(--page-sat), 4%) 0%,
            hsl(var(--page-hue), var(--page-sat), 6%) 100%
        );
    }

    .stage__beam {
        position: absolute;
        inset: 0;
        top: -15vh;
        width: 100%;
        height: 100%;
        background:
            conic-gradient(
                at 50% 5%,
                transparent 30%,
                var(--color) 40%,
                var(--color) 60%,
                transparent 70%
            ),
            50% -25px / 100% 100%;
        background-blend-mode: overlay;
        background-repeat: no-repeat;
        mix-blend-mode: screen;
        opacity: 1;
        filter: blur(10px);
        -webkit-mask-image: radial-gradient(
            circle at 50% 0%,
            black 5%,
            transparent 80%
        );
        mask-image: radial-gradient(
            circle at 50% 0%,
            black 5%,
            transparent 80%
        );
    }
`;

export default Stage;
