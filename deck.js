const cards = document.querySelectorAll(".card");
const backSides = document.querySelectorAll(".backSide");
const boxCard = document.querySelectorAll(".box-card");
const shuffleBtn = document.querySelector("#shuffle");
const attempst = document.getElementById("attempts");
const burger = document.querySelector(".burger");
const bars = document.querySelectorAll(".bar");
const ulContainer = document.querySelector(".ul");


burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    ulContainer.classList.toggle("active");
})








shuffleBtn.addEventListener("click", () => {
    for(let i = 0; i < cards.length; i++){
        let temp = cards[i].src;
        let randomIndex = Math.floor(Math.random() * cards.length);
        let RandomCard = cards[randomIndex].src;

        cards[i].src = RandomCard;
        cards[randomIndex].src = temp;
    }
}) 






let chosen; // variable in which we'll save the first chosen cardb
firstStep(cards);

function firstStep(array){
    let counter = 0;
    let attemptsLeft = 4; // 4 atempts to flip cards and guess the picked one after shuffled
    if(counter < 1){
        array.forEach(card => card.addEventListener("click", (e) => {
            chosen = card.src; //once clicked on any card -- we'll save the card on this variable
            card.classList.add("border"); //We'll apply on it a border
            setTimeout(()=>{ //after 1s we flip them all down and take off the border on the highlighted 
                cards.forEach(card => card.classList.add("active")); //to the cards we add opacity
                cards.forEach(card => card.classList.add("pointer")); // add pointer-event:none, so that we can click on element behind it
            }, 1000);

            backSides.forEach(back => back.classList.add("pointer")); //for each backside we add pointer-event: auto;
            counter += 1;
            console.log(counter);
        }))
    }

    let arrayBackSides = Array.from(backSides); //we turn the element collections into array
    let arrayCards = Array.from(cards); //we turn the element collections into array

    arrayBackSides.forEach(back => back.addEventListener("click", (e) => { //Once backsides card are visible, we add a event listener on click to each backside 

        if(attemptsLeft > 0){
            back.classList.toggle("opacity"); // once clicked we toggle opacity class 
            arrayCards[arrayBackSides.indexOf(back)].classList.remove("active"); //we'll toggle the classList "active" on the card that has the same index as the backside clicked

            if(arrayCards[arrayBackSides.indexOf(back)].src == chosen){
                setTimeout(() => {
                    alert("You won!");
                    location.reload();
                }, 1000)
            }

            attemptsLeft -= 1;
            attempst.innerHTML = attemptsLeft; // for each click we'll remove 1 from the counter
            counter += 1; // for each click will add 1 to the counter 
        }

        else{
            alert("You lost");
            location.reload();
        }
    }))
    
}


// function saveScore(){
//     localStorage.setItem("wins", wins);
// }

// function showScore(){
//     wins = localStorage.getItem("wins");
//     score.innerHTML = wins;
// }






