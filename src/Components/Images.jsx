import React from "react";
import '../Styles/Images.css';

export default function Images (props) {

    return(
        <div className="images">
            {/* <img src={require(`../Images/photo${props.image}.png`)} alt={props.alt} /> */}
                <img src={require('../Images/photo1.png')} alt="Photo1" />
                <img src={require('../Images/photo2.png')} alt="Photo2" />
                <img src={require('../Images/photo3.png')} alt="Photo3" />
                <img src={require('../Images/photo4.png')} alt="Photo4" /> 
                <img src={require('../Images/photo5.png')} alt="Photo5" />
                <img src={require('../Images/photo6.png')} alt="Photo6" />
        </div>
    )
}