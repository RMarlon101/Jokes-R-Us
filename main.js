let joke =  document.getElementById("joke_container")
let new_joke = document.querySelector("button");


function randInt(upperLimit) {
    return Math.floor(Math.random() * upperLimit);
}

const jokes_container = document.getElementById("joke_container")
const jokeApi = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

displayRandomJoke();

new_joke.onclick = displayRandomJoke;

function displayRandomJoke(){
    fetch(jokeApi)
    .then(function(Response){
       return Response.json();
    }).then( (jokeData) => {
        // console.log(jokeData)
        // console.log(jokeData.setup)
        // console.log(jokeData.delivery)

        if(jokeData.delivery != undefined){
            joke.innerHTML = `<h5>${jokeData.setup}<h5><br><h5>${jokeData.delivery}<h5>`
        }
        else{
            joke.innerHTML = `<h5>${jokeData.joke}<h5>`
        }

    });
}

