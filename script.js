let jokes=document.querySelector(".joke")
let btn = document.querySelector(".btn")
let api="https://hindi-jokes-api.onrender.com"

function randomJokes(){
   let datas= fetch(api).then((res)=>res.json()).then((data)=>data.json())
   console.log(datas);
   
}

randomJokes()