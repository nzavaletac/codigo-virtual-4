import axios from "axios";

const saludar = () => {
    console.log("Bienvenidos a NodeJs");
    axios.get("https://pokeapi.co/api/v2/type/1/").then((data) => {
        console.log(data);
    })
}

saludar();