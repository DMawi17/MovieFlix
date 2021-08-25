// import Iframe from "react-iframe";
const src = ["https://www.youtube.com/embed/_BggT--yxf0?autoplay=1&mute=1"];

const MoviePlayer = () => {
    return (
        <iframe
            style={{ marginTop: 100 }}
            width="100%"
            height="515"
            src={src[0]}
            title="YouTube video player"
            frameborder="0"
        ></iframe>
    );
};

export default MoviePlayer;
