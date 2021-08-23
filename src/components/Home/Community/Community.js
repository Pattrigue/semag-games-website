import React from "react";
import { ReactComponent as DiscordIcon } from "./discord-icon.svg";
import { ReactComponent as YouTubeIcon } from "./youtube-icon.svg";
import { ReactComponent as TwitterIcon } from "./twitter-icon.svg";

import Gradient from "../../Gradient/Gradient";

function Community() {
    return (
        <div className="Community">
            <Gradient className="linear-right"/>
            <div className="relative">
                <div className="header-text">
                    Community
                </div>
                <div className="discord-text">
                    We care a lot about our players. <br/>
                    Have any feedback, ideas or maybe you just want to talk to us?
                </div>
                <a
                    href="https://discord.gg/semag-games"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                    className={`btn discord-btn`}
                    rel="noreferrer"
                >
                    <DiscordIcon className="btn-icon"/>
                    Join the Community
                </a>
                <div className="youtube-twitter-text">
                    You can find devlogs and content related to Vibrant Venture and our projects on YouTube. <br/>
                    We also post important news on Twitter.
                </div>
                <div className="social-media-btns">
                    <a
                        href="https://www.youtube.com/c/SemagGames"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                        className="btn youtube-btn"
                        rel="noreferrer"
                    >
                        <YouTubeIcon className="btn-icon"/>
                        YouTube
                    </a>
                    <a
                        href="https://twitter.com/pattrigue"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                        className="btn twitter-btn"
                        rel="noreferrer"
                    >
                        <TwitterIcon className="btn-icon"/>
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Community;