import React from 'react';
import axios from 'axios';
import useEffect from 'react';

function HomePage(){
    return (
        <div>
            <div className = 'intro_container'>
                <div className = 'intro_header'>
                    welcome to <span className="bold-and-colored">boxd.ai</span>, a love-project of a reindition of the hit website letterboxd!
                </div>                
                <div className = 'intro_desc'>
                    we aim to create boxd.ai, utilizing machine-learing techniques to 
                    recommend you movies based on your input as well as implementing more features to the website
                    that we think would be nice from letterboxd itself!
                </div>
            </div>
            
        </div>
    );
}

export default HomePage;