import "./App.css";
import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import Input from "@mui/material/Input";

const App = () => {
  const [token, setToken] = useState(undefined);

  const [searchWord, setSearchWord] = useState();

  async function getAuthenticated() {
    const CLIENT_ID = "b857553361854529a0106e7bba1dde29";
    const CLIENT_SECRET = "029d9720939446f1a7cce229b3c042ef";

    const formData = new URLSearchParams();
    formData.append("client_id", CLIENT_ID);
    formData.append("client_secret", CLIENT_SECRET);
    formData.append("grant_type", "client_credentials");

    const response = await axios.post("https://accounts.spotify.com/api/token", formData);
    console.log(response);

    setToken(response.data.access_token);
  }

  async function getArtistData() {
    const response = await axios.get(`https://api.spotify.com/v1/search?q=${searchWord}&type=artist&market=US`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
  }

  console.log(searchWord);
  return (
    <div className="App">
      <NavBar />
      <div className="background">
        <Button
          variant="contained"
          color={token === undefined ? "error" : "success"}
          onClick={() => getAuthenticated()}
        >
          Authenticate
        </Button>
        <br />

        <Input placeholder="Type your search term" onChange={(event) => setSearchWord(event.target.value)} />
        <br />
        <Button variant="contained" onClick={() => getArtistData()}>
          Search
        </Button>
        <br />
        <br />
        <PokemonCard title="Charmander" image="https://i.scdn.co/image/ab676161000051744293385d324db8558179afd9" />
      </div>
    </div>
  );
};

export default App;

sky === "blue" ? true : false

  