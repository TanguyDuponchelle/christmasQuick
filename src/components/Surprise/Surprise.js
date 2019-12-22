import React from 'react'
import Particles from 'react-particles-js'
import harry1 from './harry1.jpg'
import harry2 from './harry2.jpg'
import harry3 from './harry3.jpg'
import harry4 from './harry4.jpg'
import './Surprise.css'
import harrysound from './harrysound.mp3'
function Surprise() {
    return (
        <div>
            <div class='surprise__maindiv'>
                <img src={harry1} alt='harry1 ' />
                <img src={harry2} alt='harry2' />
                <img src={harry3} alt='harry 3' />
                <img src={harry4} alt='harry 4' />
            </div>
            <div class='surprise__text'>
                <h1>
                    En avant pour le musée Harry Potter à Londres !!!
                    On part quand tu veux !
                </h1>
            </div>
            <audio src={harrysound} autoPlay controls></audio>
            <script>
                document.getElementById('vid').play();
            </script>
        </div >
    )
}

export default Surprise