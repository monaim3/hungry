fetch(' https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res=> res.json())
.then(data=>displayItems(data));

 const displayItems = categories =>{
     for (let i = 0; i < categories.length; i++) {
         const element = categories[i];
         
         console.log(element.strCategory);
     }
 }