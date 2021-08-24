import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Alien from '../Img/Alien-Ancestors.jpg';
import Anette from '../Img/Annette.jpg';
import BlackWidow from '../Img/Black-Widow.jpg';
import CODA from '../Img/CODA.jpg';
import Cryptozoo from '../Img/Cryptozoo.jpg';
import Demonic from '../Img/Demonic.jpg';
import Extinct from '../Img/Extinct.jpg';
import FastFurious9 from '../Img/Fast-&-Furious-9.jpg';
import HitmansWife from '../Img/Hitmans-Wife\'s-Bodyguard.jpg';
import JungleCruise from '../Img/Jungle-Cruise.jpg';
import JurassicHunt from '../Img/Jurassic-Hunt.jpg';
import LoudHouse from '../Img/Loud-House.jpg';
import MonsterHunter from '../Img/Monster-Hunter-Legends-of-the-Guild.jpg';
import OutOfTime from '../Img/Out-Of-Time.jpg';
import PAWPatrol from '../Img/PAW-Patrol.jpg';
import PosterBoys from '../Img/Poster-Boys.jpg';
import Reminiscence from '../Img/Reminiscence.jpg';
import Risen from '../Img/Risen.jpg';
import ShinyFlakes from '../Img/Shiny-Flakes.jpg';
import SnakeEyes from '../Img/Snake-Eyes.jpg';
import Stillwater from '../Img/Stillwater.jpg';
import SweetGirl from '../Img/Sweet-Girl.jpg';
import TheGirlWho from '../Img/The-Girl-who-Got-Away.jpg';
import TheGreenKnight from '../Img/The-Green-Knight.jpg';
import TheKissingBoothe from '../Img/The-Kissing-Boothe.jpg';
import TheSuicideSquad from '../Img/The-Suicide-Squad.jpg';
import TheSwarm from '../Img/The-Swarm.jpg';
import Vivo from '../Img/Vivo.jpg';

const imageGallery = ['../Img/Alien-Ancestors.jpg', '../Img/Annette.jpg', '../Img/Black-Widow.jpg', '../Img/CODA.jpg', '../Img/Cryptozoo.jpg', '../Img/Demonic.jpg', '../Img/Extinct.jpg', '../Img/Fast-&-Furious-9.jpg' ];
import { useMovie } from "../context/movie-hooks";

const Main = ({category, movie}) => {
    const { movie } = useMovie();

    const categoryParts = category.split("-");
    const categoryUI = 
        categoryParts.map( part => part[0].toUpperCase() + part.substring(1))
        .join(" "); 

    return (  
        <div className="Main">
            <h2>{categoryUI}</h2>
            {movie.map(m => {
                return (
                    <div>{m.title}</div>
                )
            })}
            <div className="d-flex gap-2 gallery">
                {/* {imageGallery.map(image => {
                    return (
                        <img src={`../Img/${image}`} />
                    )
                })} */}
                <img src={SnakeEyes} />
                <img src={Vivo} />
                <img src={Cryptozoo} />
                <img src={Reminiscence} />
                <img src={Demonic} />

            </div>
            
        </div>
    );
}
 
export default Main;