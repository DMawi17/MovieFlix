import Movies from "./Movies";
import { v4 } from "uuid";
import { useMovie } from "../context/movie-hooks";

const Category = () => {
    const { movie } = useMovie();

    return (
        <div>
            {/* {movie.map((m) =>
                m.movie.map((o) => <Movies {...o} key={v4()} />)
            )} */}
            <Movies/>
            <Movies/>

        </div>
    );
};

export default Category;

/*

bfb9d8e3-2da4-4481-bd6c-a5b3d9d278f2

70ce2e4f-5f74-4082-a8d6-677639f5c26c

47a7ece5-c994-4e9f-a841-3dcdd143da98

d67fbdd6-800f-4666-90c0-5f4eb772e2ac

993d47c0-64a2-40a1-be31-eef3d87960b3

3031c06b-fdd2-4a51-bf88-bf810dcc8eca

c9d757d0-0f22-4559-96e3-8629b363f166

9c1901f1-c1f9-4260-a375-f33b55bfd7d9

1641ac73-991e-4546-82bf-7ea7ec32cbf0

bfeff788-ff78-4c4f-b8b0-453c8fa81011

c73c2ebc-e3b6-4ba5-a87b-ef51be9f6ae9

965bbec0-10ad-474f-8830-e2574628d88a

e56e0c14-2d6b-4d43-843a-90736c4e607d

f02d9f93-9e16-483a-803f-46e4023426ab

a6765538-b568-4abb-bed3-67bb523a1720

dece0496-b851-4c9a-b2b1-786d4d5965ff

7e7437d8-f5f2-446d-9aaf-bf08b2d79db9

d944985f-9829-47a7-bd67-db8c77cc6e6f

0b4ec23c-b46c-4822-b364-73fdc242eabe

9558a1df-c1e2-4dae-b496-f1593466f3b8

69ebd904-b7b1-4ca3-ba4e-e36bac02dca2

3c871a7e-7d8a-440d-949f-a436b452e19b

21a88fff-4ea8-4f84-b158-394c1cf2f4da

514855fc-cd34-46a1-94cd-29ec4a62859a

55e25474-3a0a-46b7-a8d2-3354d6e2a2ae
*/
