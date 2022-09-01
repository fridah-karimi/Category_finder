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
