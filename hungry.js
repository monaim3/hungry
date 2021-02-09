const searchmeals = () => {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);

};


const GetMeal =() =>{
    const search= document.getElementById("SearchMeal").value;
    const url=`https://www.themealdb.com/api/json/v1/1/categories.php/${search}`
    fetch(url)
    .then(res => res.json())
    .then (data => displayMeals(data.categories));
}

const displayMeals = meals =>{
    const newMeal=document.getElementById("list");
    newMeal.innerHTML= ' ';
   meals.forEach(meal => {
      const mealDiv =document.createElement("div");
      mealDiv.className="row"
      mealDiv.innerHTML=
      `<div class="col-lg-4">
      <div class="mealitems">
        <img src="${meal.strCategoryThumb}" onclick="ImageClick()" alt="">
        <h5>${meal.strCategory}</h5>
      </div>
    </div>

    <div class="col-lg-4">
    <div class="mealitems">
      <img src="${meal.strCategoryThumb}" onclick="ImageClick()" alt="">
      <h5>${meal.strCategory}</h5>
    </div>
  </div>

  <div class="col-lg-4">
    <div class="mealitems">
      <img src="${meal.strCategoryThumb}" onclick="ImageClick()" alt="">
      <h5>${meal.strCategory}</h5>
    </div>
  </div>
      `
      newMeal.appendChild(mealDiv);
   })
       
}

const ImageClick = () =>{
    window.alert() ("sometext","defaultText");
}

