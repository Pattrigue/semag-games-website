import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as DiscordIcon } from "./discord-icon.svg";
import { ReactComponent as YouTubeIcon } from "./youtube-icon.svg";
import { ReactComponent as TwitterIcon } from "./twitter-icon.svg";

import RadialGradient from "../../RadialGradient/RadialGradient";

function Community() {
    return (
        <div className="Community main-container"
             style={{
                 backgroundImage: `url(${process.env.PUBLIC_URL + '/vibrant-venture-community.png'})`
             }}>
            <div className="text-container community-container">
                <RadialGradient />
                <div className="relative">
                    <div className="header-text">
                        Community
                    </div>
                    <div className="discord-text">
                        We care a lot about our players. <br/>
                        Have any feedback, ideas or maybe you just want to talk to us?
                    </div>
                    <Link to={{ pathname: "https://discord.gg/semag-games" }}
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                        className={`btn discord-btn`}>
                        <DiscordIcon className="btn-icon"/>
                        Join the Community
                    </Link>
                    <div className="youtube-twitter-text">
                        You can find devlogs and content related to Vibrant Venture and our projects on YouTube. <br/>
                        We also post important news on Twitter.
                    </div>
                    <div className="social-media-btns">
                        <Link
                            to={{ pathname: "https://www.youtube.com/c/SemagGames" }}
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                            className="btn youtube-btn">
                            <YouTubeIcon className="btn-icon"/>
                            YouTube
                        </Link>
                        <Link
                            to={{ pathname: "https://twitter.com/pattrigue" }}
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                            className="btn twitter-btn">
                            <TwitterIcon className="btn-icon"/>
                            Twitter
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Community;