  const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const riddleURL = "https://api.api-ninjas.com/v1/riddles";
  let gridContainer = document.getElementById("category_container");
  let riddleContainer = document.getElementById("riddle");
  let answer = document.getElementById("riddle_answer");

  function getRandomRiddle() {
    let options = {
      metthod: "GET",
    };

    fetch(riddleURL, options)
      .then((response) => response.json())
      .then((data) => {
        riddleContainer.innerHTML = data[0].question;
        answer.innerHTML = data[0].answer;
      });
  }
  //create aa function to retrive the category from the api

  function getCategory() {
    let options = {
      metthod: "GET",
    };

    fetch(URL, options)
      .then((response) => response.json())
      .then((data) => {
        data.categories.forEach((category) => {
          displayCategory(category);
        });
      });
  }

  function displayCategory(category) {
    const categoryCard = `
          <div class="post_box">
          <div class="header">
              <h2><a href="#">${category.strCategory}</a></h2>
              <div class="tag"></div>
              
          </div>
          <img src="${category.strCategoryThumb}" alt="image" />
          <div class="pb_right">
              <p>${category.strCategoryDescription}</p>
          </div>
          <div class="cleaner"></div>
      </div>
     `;

    gridContainer.innerHTML += categoryCard;
  }
