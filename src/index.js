const base_url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
const pTag = document.createElement('p')

function fetchURL(){
    fetch(base_url)
    .then(res => res.json())
    .then (data=>{
        console.log(data.drinks)
        data.drinks.forEach(renderURL);
        data.drinks.forEach(renderIng)
    })
}

function renderURL(drink) {
    const drinkContainer= document.getElementById('drink-container')
    const ulTag = document.createElement('ul')

    const imgTag = document.createElement('img')
    imgTag.src = drink.strDrinkThumb
    
    pTag.innerText = drink.strDrink
    
    ulTag.append(imgTag, pTag)
    drinkContainer.appendChild(ulTag)
}

const howToBtn = document.getElementById("howToBtn");

// const cheersBtn = document.createElement("button")
// cheersBtn.innerHTML = "🍸 **clink** 🍸";
// cheersBtn.type = "click";
// cheersBtn.id = "cheersBtn";
// document.body.appendChild(cheersBtn);

// function cheersButton(){
//     cheersBtn.addEventListener("click", ()=>{
//         alert("🍻 CHEERS!!! 🥂 ");
//     });
// }

function disableBtn(){
    document.getElementById("howToBtn").disabled = true;
}

function renderIng(e){
    howToBtn.addEventListener('click',function() {
        
        const drinkContainer= document.getElementById('drink-container')
        const ulTag = document.createElement('ul')
    
        const ingTag1 = document.createElement('ul')
        const measTag1 = e.strMeasure1 || ""
        const ing1 = e.strIngredient1 || ""
        ingTag1.innerText = `${measTag1} ${ing1}`
        

        const ingTag2 = document.createElement('ul')
        const measTag2 = e.strMeasure2 || ""
        const ing2 = e.strIngredient2 || ""
        ingTag2.innerText = `${measTag2} ${ing2}`

        const ingTag3 = document.createElement('ul')
        const measTag3 = e.strMeasure3 || ""
        const ing3 = e.strIngredient3 || ""
        ingTag3.innerText = `${measTag3} ${ing3}`

        const ingTag4 = document.createElement('ul')
        const measTag4 = e.strMeasure4 || ""
        const ing4 = e.strIngredient4 || ""
        ingTag4.innerText = `${measTag4} ${ing4}`

        const ingTag5 = document.createElement('ul')
        const measTag5 = e.strMeasure5 || ""
        const ing5 = e.strIngredient5 || ""
        ingTag5.innerText = `${measTag5} ${ing5}`

        const ingTag6 = document.createElement('ul')
        const measTag6 = e.strMeasure6 || ""
        const ing6 = e.strIngredient6 || ""
        ingTag6.innerText = `${measTag6} ${ing6}`

        const insTag = document.createElement('p')
        insTag.innerText = e.strInstructions
    
        ulTag.append(ingTag1, ingTag2, ingTag3, ingTag4, ingTag5, ingTag6, insTag)
        drinkContainer.appendChild(ulTag)

        const cheersBtn = document.createElement("button")
        cheersBtn.innerHTML = "🍸 **clink** 🍸";
        cheersBtn.type = "click";
        cheersBtn.id = "cheersBtn";
        document.body.appendChild(cheersBtn);

        function cheersButton(){
            cheersBtn.addEventListener("click", ()=>{
                alert("🍻 CHEERS!!! 🥂 ");
            });
        }
        
        cheersButton() 
    });
    
}

document.addEventListener("DOMContentLoaded", function(){
fetchURL()
})