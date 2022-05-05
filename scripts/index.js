import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML =navbar();
let id ;
let create = (a)=>{
    return document.createElement(a);
}


let getFoodDetails = async ()=>{
    try{
        let query = document.getElementById("search").value;
       if(query.length == 0)
       {
        document.getElementById("container").innerHTML=null;
       } 
       else{
        let url = `https://themealdb.com/api/json/v1/1/search.php?s=${query}`
        let res = await fetch (url);
        let data = await res.json();
        return data.meals;
       }
    }
    catch(err)
    {
        console.log("err  :", err);
    }
}



let append = (data)=>{
     document.getElementById("container").innerHTML=null;
   
    data.forEach(el => {
        let box = create("div");
  box.setAttribute("class","box");
  let img = create("img");
  img.src = el.strMealThumb;
  img.style.width = "100%";
  let h3 = create("h3");
  h3.innerText = el.strMeal;
  let btn1 = create("button");
  btn1.setAttribute("class","btn1")
  btn1.innerText ="Click Here For More Details"
  btn1.addEventListener("click", function(){
      getDetails(el)
  })
  box.append(img,h3,btn1);
  container.append(box)
 document.getElementById("container").append(box);
    });
  
}

let main = async ()=>{
    let data = await getFoodDetails()
    if(data == undefined)
    {  
        document.querySelector("#container").innerHTML =null;
        return  false;
    }
    append(data)
}

function debounce(func, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay);
}
document.getElementById("search").addEventListener("input",function(){
    debounce(main,1000)
})


let getDetails = (a)=>{
    console.log("aa gya :", a)
    let recipeDetails = a;
    localStorage.setItem("recipeDetails",JSON.stringify(recipeDetails))
    window.location.href = "recipeDetails.html"
}




