import { Component, css } from "dreamland/core";

const Stage: Component<{ pageHue: number; pageSat: string }, {}> = function () {
    return (
        <div
            class="stage"
            style={{
                "--page-hue": this.pageHue,
                "--page-sat": this.pageSat,
            }}
        ></div>
    );
};

Stage.style = css`
    .stage{
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        z-index: 1;
        overflow: hidden;
        min-height:100vh;
        
    }

    /* main light - narrow cone with faint streaks, blurred */
    .stage::before{
        content:"";
        position:absolute;
        left:50%;
        top:-22%;
        width:160vmax;
        height:120vmax;
        transform:translateX(-50%);
        pointer-events:none;
        mix-blend-mode:screen; /* lets the bright beam add to dark background */
        filter:blur(44px);
        background:
            /* bright narrow source near top center */
            radial-gradient(ellipse at 50% 2%,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.95) 0%,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.30) 4%,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.10) 9%,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.04) 14%,
                transparent 28%),

            /* soft cone shape */
            radial-gradient(ellipse at 50% 6%,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.14) 0%,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.07) 10%,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.02) 26%,
                transparent 48%),

            /* directional streaks - twin highlights mirrored across center */
            conic-gradient(from 270deg at 50% 0%,
                transparent 0deg,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.04) 12deg,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.10) 26deg,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.04) 44deg,
                transparent 58deg,
                transparent 302deg,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.04) 316deg,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.10) 334deg,
                hsla(var(--page-hue), var(--page-sat), 70%, 0.04) 348deg,
                transparent 360deg);
    }

    /* global vignette / falloff so sides stay very dark */
    .stage::after{
        content:"";
        position:absolute;
        inset:0;
        pointer-events:none;
        background:
            radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(0,0,0,0.45) 70%),
            linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%);
    }
`;

export default Stage;
