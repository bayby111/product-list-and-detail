import React from "react";
import  "./valentineLanding.css";

const beatingHeart = () => {

    return (
        <div >
            {/* heart on righrt */}
            <div class="heart-on-right">
                <div class="base primary">
                    <div class="part left"></div>
                    <div class="part right"></div>
                </div>
                <div class="base secondary">
                    <div class="part left"></div>
                    <div class="part right"></div>
                </div>
                <div class="base tertiary">
                    <div class="part left"></div>
                    <div class="part right"></div>
                </div>
            </div>
             {/* heart on left */}
            <div class="heart-on-left">
                <div class="base primary">
                    <div class="part left"></div>
                    <div class="part right"></div>
                </div>
                <div class="base secondary">
                    <div class="part left"></div>
                    <div class="part right"></div>
                </div>
                <div class="base tertiary">
                    <div class="part left"></div>
                    <div class="part right"></div>
                </div>
            </div>
        </div>
    );
}

export default beatingHeart;