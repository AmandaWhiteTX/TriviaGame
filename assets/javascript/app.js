//variable is assigned jquery call to html location
var panel = $("#quiz-area");
var countStartNumber = 30;

//create an array of objects - questions, choices, correct answers and gifs
var questions = [{
  question: "What candy that started in Golden, Colorado, was given its name to suggest it is produced by a “hospitable western company”?",
  choices: ["Pay Day", "Jelly Belly", "Jolly Rancher", "Hersheys"],
  correctAnswer: 'Jolly Rancher',
  image: "assets/images/Jolly Rancher.jpg" 
},
{
  question: "Americans are not known for our healthy food choices, what percentage of the American Diet comes from candy?",
  choices: ["25%", "40%", "10%", "less than 2%"],
  correctAnswer: 'less than 2%',
  image: "assets/images/background3.jpg"
},
{
  question: "What sweet treat is also known as Chicken Feed?",
  choices: ["Skittles", "Candy Corn", "m&m's", "Sprees"],
  correctAnswer: 'Candy Corn',
  image: "assets/images/candycorn.jpg"
},
{
  question: "What American Classic Candy Bar made its debut in the year 1894?",
  choices: ["Hershey Chocolate Bar", "100 Grand", "Pay Day", "Snickers"],
  correctAnswer: 'Hershey Chocolate Bar',
  image: "assets/images/hersheys.jpg"
},
{
  question: "What Candy has a Rainbow Colored Zebra named Yipes on their packaging?",
  choices: ["Skittles", "Fruit Stripe Gum", "Sprees", "Starbursts"],
  correctAnswer: 'Fruit Stripe Gum',
  image: "assets/images/FruitStripe.jpg"
},
{
  question: "Every Easter, puffs of marshmallow, called Peeps, line supermarket shelves. Of all the colors and shapes, what is the most popular color?",
  choices: ["white", "blue", "pink", "yellow"],
  correctAnswer: 'yellow',
  image: "assets/images/yellowpeeps.jpg"
},
{
  question: "Taste the Rainbow is the slogan for what candy that produces 200,000,000 of its original variety evry day?.",
  choices: ["Neco Wafers", "Skittles", "Gummy Bears", "Smarties"],
  correctAnswer: 'Skittles',
  image: "assets/images/skittles.jpg"
},
{
  question: "This candy was added to soldiers ration bags during World War II?",
  choices: ["Hershey's", "Werther's Original", "Tootsie Rolls", "Jelly Beans"],
  correctAnswer: 'Tootsie Rolls',
  image: "assets/images/TootsieRolls.jpg"
},
{
  question: "The creator of this candy bar named his popular candy after himself?",
  choices: ["Reeses Peanut Butter Cups", "Toberlone", "Snickers", "Junior Mints"],
  correctAnswer: 'Reeses Peanut Butter Cups',
  image: "assets/images/Reeses.jpg"
},
{
  question: "What Sweet Treat was originally called Fairy Floss, until it was renamed in the 1920's?",
  choices: ["Candy Necklaces", "Twizzlers", "Licorice Stings", "Cotton Candy"],
  correctAnswer: 'Cotton Candy',
  image: "assets/images/CottonCandy.jpg"
},
{
  question: "What popular Candy was inspired by a malted milkshake?",
  choices: ["Whoppers", "Hershey's Candy Bar", "Snickers", "Milkey Way"],
  correctAnswer: 'Milkey Way',
  image: "assets/images/MilkeyWay.jpg"
},
{
  question: "Franklin Mars, the patriarch of the Mars company, named this candy bar after a beloved racehorse his family owned that had just passed away.?",
  choices: ["Snickers", "Whoppers", "Twizzlers", "Kit Kat"],
  correctAnswer: 'Snickers',
  image: "assets/images/Snickers.jpg"
},
{
  question: "This candy has proven to be among the more popular candy requests for astronauts on space missions?",
  choices: ["Skittles", "m&m", "Smarties", "Twizzlers"],
  correctAnswer: 'm&m',
  image: "assets/images/m&m.jpg"
},
{
  question: "This candy with a drawing of a young girl has had the same wrapper for over 100 years.",
  choices: ["m&m's", "Haribo Gummy Bears", "Tootsie Rolls", "Mary Jane"],
  correctAnswer: 'Mary Jane',
  image: "assets/images/MaryJane.jpg"
},
{
  question: "This candy is Gluten-Free and Vegan-friendly.",
  choices: ["Twizzlers", "Skittles", "Smarties", "Dots"],
  correctAnswer: 'Dots',
  image: "assets/images/Dots.jpg"
},
{
  question: "Researchers determined that the jingle for this popular candy is one of the most common earworms.",
  choices: ["Payday", "Snickers", "Kit Kat", "Haribo Gummy Bears"],
  correctAnswer: 'Kit Kat',
  image: "assets/images/KitKat.jpg"
}];



var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function () {
    game.counter--;
    $('#counter-number').text(game.counter);
    if (game.counter === 0) {
     // console.log("TIME'S UP");
      game.timeUp();
    }
  },

  loadQuestion: function () {
    timer = setInterval(game.countdown, 1000);
    panel.html("<h3>" + questions[this.currentQuestion].question + "</h3>");
    for (var i = 0; i < questions[this.currentQuestion].choices.length; i++) {
      panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].choices[i] + "'>" + questions[this.currentQuestion].choices[i] + "</button>");
    }
  },

  nextQuestion: function () {
    game.counter = countStartNumber;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function () {
    clearInterval(timer);
    $("#counter-number").html(game.counter);
    panel.html("<h2>Out of Time!</h2>");
    panel.append("<h3>The Correct Answer is: " + questions[this.currentQuestion].correctAnswer);
    panel.append("<img src='" + questions[this.currentQuestion].image + "' />");
    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 7 * 1000);
    } else {
      setTimeout(game.nextQuestion, 7 * 1000);
    }
  },

  results: function () {
    clearInterval(timer);
    panel.html("<h2>Your results are in.</h2>");
    $("#counter-number").text(game.counter);
    panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.incorrect)) + "</h3>");
    panel.append("<br><button id='start-over'>Wanna play again?</button>");
  },

  clicked: function (e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function () {
    clearInterval(timer);
    game.incorrect++;
    panel.html("<h2>Wrong.</h2>");
    panel.append("<h3>The Correct Answer is: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    panel.append("<img src='" + questions[game.currentQuestion].image + "' />");
    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 4 * 1000);
    } else {
      setTimeout(game.nextQuestion, 4 * 1000);
    }
  },

  answeredCorrectly: function () {
    clearInterval(timer);
    game.correct++;
    panel.html("<h2>Right!</h2>");
    panel.append("<img src='" + questions[game.currentQuestion].image + "' />");
    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 4 * 1000);
    } else {
      setTimeout(game.nextQuestion, 4 * 1000);
    }
  },

  reset: function () {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};


$(document).on("click", "#start-over", function () {
  game.reset();
});

$(document).on("click", ".answer-button", function (e) {
  game.clicked(e);
});

$(document).on("click", "#start", function () {
  $("#time-counter").prepend("<h2>Countdown : <span id='counter-number'>30</span> seconds</h2>");

 

  game.loadQuestion();
});

