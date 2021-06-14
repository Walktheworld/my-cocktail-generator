const base_url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
const pTag = document.createElement('p')
const howToBtn = document.getElementById("howToBtn");
const drinkContainer= document.getElementById("drink-container")


function fetchURL(){
    fetch(base_url)
    .then(res => res.json())
    .then (data=>{
        renderURL(data.drinks[0])
        data.drinks.forEach(renderIng)
    })
}

function renderURL(drink) {
    const divTag = document.createElement('div')

    const imgTag = document.createElement('img')
    imgTag.src = drink.strDrinkThumb
    
    pTag.innerText = drink.strDrink
    
    divTag.append(imgTag, pTag)
    drinkContainer.appendChild(divTag)
}

function renderIng(drink){
    howToBtn.addEventListener('click',function(e) {
        e.target.disabled = true
        const ulTag = document.createElement('ul')
    
        const ingTag1 = document.createElement('li')
        const measTag1 = drink.strMeasure1 || ""
        const ing1 = drink.strIngredient1 || ""
        ingTag1.innerText = `${measTag1} ${ing1}`
        

        const ingTag2 = document.createElement('li')
        const measTag2 = drink.strMeasure2 || ""
        const ing2 = drink.strIngredient2 || ""
        ingTag2.innerText = `${measTag2} ${ing2}`

        const ingTag3 = document.createElement('li')
        const measTag3 = drink.strMeasure3 || ""
        const ing3 = drink.strIngredient3 || ""
        ingTag3.innerText = `${measTag3} ${ing3}`

        const ingTag4 = document.createElement('li')
        const measTag4 = drink.strMeasure4 || ""
        const ing4 = drink.strIngredient4 || ""
        ingTag4.innerText = `${measTag4} ${ing4}`

        const ingTag5 = document.createElement('li')
        const measTag5 = drink.strMeasure5 || ""
        const ing5 = drink.strIngredient5 || ""
        ingTag5.innerText = `${measTag5} ${ing5}`

        const ingTag6 = document.createElement('li')
        const measTag6 = drink.strMeasure6 || ""
        const ing6 = drink.strIngredient6 || ""
        ingTag6.innerText = `${measTag6} ${ing6}`

        const insTag = document.createElement('p')
        insTag.innerText = drink.strInstructions
    
        ulTag.append(ingTag1, ingTag2, ingTag3, ingTag4, ingTag5, ingTag6, insTag)
        ulTag.id = "ingredients"
        drinkContainer.appendChild(ulTag)
    });
    
}

const cheersBtn = document.createElement("button")
cheersBtn.innerHTML = "🍸 **CLINK** 🍸";
cheersBtn.type = "click";
cheersBtn.id = "cheersBtn";
document.body.appendChild(cheersBtn);

function cheersButton(){
    cheersBtn.addEventListener("click", ()=>{
        alert("🍻 CHEERS!!! 🥂 ");
    });        
}
cheersButton()

const refreshBtn = document.createElement("button")
refreshBtn.innerHTML = "🍹 New Drink 🍹";
refreshBtn.type = "click";
refreshBtn.id = "refreshBtn";
document.body.appendChild(refreshBtn);

function refreshButton(){
    refreshBtn.addEventListener("click", ()=>{
    
        drinkContainer.innerHTML= "";

        howToBtn.disabled= false;

        fetchURL();
    });      
}
refreshButton();


document.addEventListener("DOMContentLoaded", function(){
fetchURL();
})




