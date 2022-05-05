import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML =navbar();


let create = (a)=>{
    return document.createElement(a)
}
let randondish = async ()=>{
    try{
        let url = "https://www.themealdb.com/api/json/v1/1/random.php";
    let res = await fetch(url);
    let data = await res.json();
    console.log("data :", data.meals[0])
    appendrandomdish(data.meals[0])
    }
    catch(err)
    {
        console.log("err :",err)
    }
}

randondish();
let appendrandomdish = (el)=>{
    console.log(el.strMealThumb)
 let box = create("div");
 box.setAttribute("class","box");
 
 let name = create("h3");
 let cat = create("h3")
 let img = create("img");
 img.style.width = "100%";
 img.src = el.strMealThumb;
 name.innerText = `Item Name : ${el.strMeal}`;
 cat.innerText = `Category :${el.strCategory}`;
 box.append(img,name,cat);
 document.getElementById("container").append(box)
}