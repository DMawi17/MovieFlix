import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { BsFillPlayFill, BsPlus } from "react-icons/bs";
import { useMovie } from "../context/movie-hooks";

const HeaderCard = () => {
    const { movie } = useMovie();

    return (
        <>
            <Card className="bg-dark text-muted">
                <Card.Header as="h3">Reminiscence</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Reminiscence</Card.Title> */}
                    <div className="d-flex gap-1">
                        <Button
                            disabled
                            style={{ pointerEvents: "none" }}
                            variant="warning"
                            size="sm"
                        >
                            IMDB
                        </Button>
                        <Button
                            disabled
                            style={{ pointerEvents: "none" }}
                            variant="secondary"
                            size="sm"
                        >
                            Crime
                        </Button>
                        <Button
                            disabled
                            style={{ pointerEvents: "none" }}
                            variant="secondary"
                            size="sm"
                        >
                            2021
                        </Button>
                        <Button
                            disabled
                            style={{ pointerEvents: "none" }}
                            variant="secondary"
                            size="sm"
                        >
                            1 h 35 min
                        </Button>
                    </div>
                    <Card.Text className="m-2">
                        Nick Bannister, a private investigator of the mind,
                        navigates the alluring world of the past when his life
                        is changed by new client Mae. A simple case becomes an
                        obsession after she disappears and he fights to learn
                        the truth about her.
                    </Card.Text>
                    <div className="d-flex gap-2">
                        <Button variant="light">
                            <BsFillPlayFill size="25" /> Play
                        </Button>
                        <Button variant="secondary">
                            <BsPlus size="25" /> My List
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            {/* <div>
                {movie.map((m) => (
                    <li>{m.category}</li>
                ))}
            </div> */}
        </>
    );
};

export default HeaderCard;
