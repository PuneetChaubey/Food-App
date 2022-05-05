import navbar from "../component/navbar.js";
document.querySelector("#navbar").innerHTML= navbar();

let item = JSON.parse(localStorage.getItem("recipeDetails"));
console.log("item :",item)
let create = (a)=>{
        return document.createElement(a);
    }
    let ingred = [item.strIngredient1,item.strIngredient2,item.strIngredient3,item.strIngredient4,item.strIngredient5,item.strIngredient6,item.strIngredient7,item.strIngredient8,item.strIngredient9,item.strIngredient10,item.strIngredient11,item.strIngredient12,item.strIngredient13,item.strIngredient14,item.strIngredient15,item.strIngredient16,item.strIngredient17,item.strIngredient18,item.strIngredient19,item.strIngredient20]
    let meas = [item.strMeasure1,item.strMeasure2,item.strMeasure3,item.strMeasure4,item.strMeasure5,item.strMeasure6,item.strMeasure7,item.strMeasure8,item.strMeasure9,item.strMeasure10,item.strMeasure11,item.strMeasure12,item.strMeasure13,item.strMeasure14,item.strMeasure15,item.strMeasure16,item.strMeasure17,item.strMeasure18,item.strMeasure19,item.strMeasure20]
console.log(ingred,meas)
let str ="";
for(let i=0;i<20;i++)
{  if(ingred[i]==="")
  {
    break;
  }
  str  += ingred[i]+"-"+meas[i] + " , "; 
}
let s =item.strYoutube
let vid =""
for(let i=32; i<s.length ;i++)
{  
vid += s[i];
}
console.log(vid)
console.log(str)
let box0 = create("div");

    let box1 = create("div");
    let box2 = create("div");
    let box3 = create("div");
    box0.setAttribute("class","box0")
    box1.setAttribute("class","box1");
    box2.setAttribute("class", "box2")
    box3.setAttribute("class", "box3")
      let img = create("img");
      img.src = item.strMealThumb;
      
      let name = create("h3");
      let cat = create("h3");
      let inst = create("h4");
      let h4 = create("h4");
      let strIngred = create("p");
      let process = create("p");

      name.innerText = `Item Name : ${item.strMeal}`;
      cat.innerText = `Category :${item.strCategory}`;
      inst.innerText = "Instruction To Prepare"
      let i = create("i");
      i.innerHTML =`<i class="fa-solid fa-arrow-down"></i>`;
      h4.innerText = "Ingredient Used & Their Amount";
      strIngred.innerText=str;
      process.innerText = `Instructions :${item.strInstructions}`
      let iframe = create("iframe");
iframe.src =`https://www.youtube.com/embed/${vid}`
iframe.width = "95%";
 iframe.height = "250px";
iframe.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      box2.append(inst,i)
      box1.append(img,name,cat);
      box3.append(h4,strIngred,process )
      box0.append(box1,box3)
      // container.append(box1,box2,box3)
     document.getElementById("container").append(box2,box0);
     document.getElementById("video").append(iframe)
       




     