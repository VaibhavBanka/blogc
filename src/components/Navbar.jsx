import React from "react";
export default function Navbar(){
    return(
        <nav>
            <ul>
                <li><span className="com">Company</span></li>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li><img src="./image/settings.jpg"/></li>
                <li><img src="./image/noti.jpg"/></li>
                <li><img id="g" src="./image/id.jpg"/></li>
            </ul>
        </nav>
    )
}