import React from "react";
import '../Styles/Header.css'

export default function Header () {

    return (
        <div className="header">
            <div className="profile">
                <img src={require('../Images/me.png')} alt="Profile photo" />
                <h3>Andres Diez</h3>
                <p>Colombia, Dabeiba</p>
            </div>
            <div className="information">
                <div className="box">
                    <p className="number">6</p>
                    <p className="text">Posts</p>
                </div>
                <div className="box">
                    <p className="number">321</p>
                    <p className="text">Followers</p>
                </div>
                <div className="box">
                    <p className="number">45</p>
                    <p className="text">Following</p>
                </div>
            </div>
        </div>
    )
}