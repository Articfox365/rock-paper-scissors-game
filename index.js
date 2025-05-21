function mainFunction(){
    var randomNum = prompt("Rock, paper, or scissors?")
    var randomNum2 = Math.floor((Math.random()*3)+1);

    if(randomNum=="rock"){
        document.getElementsByClassName("img1")[0].src="images/mossyrock.avif";
    }
    else if(randomNum=="paper"){
        document.getElementsByClassName("img1")[0].src="images/parchment.avif";
    }
    else if(randomNum=="scissors"){
        document.getElementsByClassName("img1")[0].src="images/scissors.jpg";
    }


    if(randomNum2 == 1){
        document.getElementsByClassName("img2")[0].src="images/mossyrock.avif";
    }
    else if(randomNum2==2){
        document.getElementsByClassName("img2")[0].src="images/parchment.avif";
    }
    else if(randomNum2==3){
        document.getElementsByClassName("img2")[0].src="images/scissors.jpg";
    }
    

    if(randomNum=="rock" && randomNum2==1){
        document.getElementsByName("h1").innerHTML="Its a tie!"
    }
    else if(randomNum=="rock" && randomNum2==2){
        document.getElementsByName("h1").innerHTML="You lost :("
    }
    else if(randomNum=="rock" && randomNum2==3){
        document.getElementsByName("h1").innerHTML="You win!!"
    }
    else if(randomNum=="paper" && randomNum2==1){
        document.getElementsByName("h1").innerHTML="You win!!"
    }
    else if(randomNum=="paper" && randomNum2==2){
        document.getElementsByName("h1").innerHTML="It's a tie!"
    }
    else if(randomNum=="paper" && randomNum2==3){
        document.getElementsByName("h1").innerHTML="You lost :("
    }
    else if(randomNum=="scissors" && randomNum2==1){
        document.getElementsByName("h1").innerHTML="You win!!"
    }
    else if(randomNum=="scissors" && randomNum2==2){
        document.getElementsByName("h1").innerHTML="You lose :("
    }
    else if(randomNum=="scissors" && randomNum2==3){
        document.getElementsByName("h1").innerHTML="It's a tie!"
    }
}

function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    switch(buttonInnerHTML){
        case "r":
        var rock1 = new Audio("sounds/rock.mp3");
        rock1.play();
        break;

        case "s":
        var scissors1 = new Audio("sounds/scissors.mp3");
        scissors1.play();
        break;

        case "p":
        var paper1 = new Audio("sounds/paper.mp3");
        paper1.play();
        break;

        default:
        console.log(innerHTML)
        break;
    }
}
for (var i=0;i<document.querySelectorAll("img").length;i++){
    document.querySelectorAll("img")[i].addEventListener("click", handleClick);
}

