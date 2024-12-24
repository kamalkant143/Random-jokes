let jokes=document.querySelector(".joke")
let btn = document.querySelector(".btn")
let api='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'

let randomJokes=()=>{
    jokes.classList.remove("box")
   fetch(api).then((res)=>res.json())
   .then((data)=>{
   console.log( jokes.textContent=`${data.joke}`);
   jokes.classList.add("box")
}).catch((error)=>{console.log(error);
})

   
}

btn.addEventListener(("click"),randomJokes)
randomJokes()