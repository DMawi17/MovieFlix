import React from "react";
import { render } from "react-dom";
import { MovieProvider } from "./context/movie-hooks";
import { UserProvider } from "./context/userContext";
import App from "./App";

render(
    <UserProvider>
        <MovieProvider>
            <App />
        </MovieProvider>
    </UserProvider>,
    document.getElementById("root")
);

/* more json data
{"category": "trending",
"movie": [
    {
      "title": "Sweet-Girl",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "CODA",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Poster-Boys",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Monster-Hunter-Legends-of-the–Guild",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "The-Girl-who-Got-Away",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Out-Of-Time",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Shiny-Flakes",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    }
  ]
},
{"category": "Popular",
"movie": [
    {
      "title": "Jurassic-Hunt",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Black-Widow",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Alien-Ancestors",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "The-Kissing-Booth-3",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Jungle-Cruise",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Risen",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Fast-&-Furious-9",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    }
  ]
},
{
    "category": "Featured",
    "movie": [
    {
      "title": "Hitmans-Wife's-Bodyguard",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "The-Swarm",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "PAW-Patrol",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "The-Suicide-Squad",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Loud-House",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Extinct",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    },
    {
      "title": "Stillwater",
      "sub-title": "",
      "description": "",
      "Genre": [],
      "Director": "",
      "cast": ""
    }
  ]
}
*/
