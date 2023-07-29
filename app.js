let timerInterval;
let totalTime;

function startTimer() {
    let minutesInput = document.getElementById("MM");
    let secondsInput = document.getElementById("SS");

    let minutes = parseInt(minutesInput.value);
    let seconds = parseInt(secondsInput.value);

    if (isNaN(minutes) || isNaN(seconds)) {
        alert("Invalid input. Please enter valid minutes and seconds.");
        return;
    }

    totalTime = (minutes * 60 + seconds) * 1000;

    timerInterval = setInterval(updateTimer, 1000);

    minutesInput.disabled = true;
    secondsInput.disabled = true;
}
function updateTimer() {
    let remainingMinutes = Math.floor(totalTime / 60000);
    let remainingSeconds = Math.floor((totalTime % 60000) / 1000);

    document.getElementById("timer").textContent =remainingMinutes + ":"+ remainingSeconds;
    if(remainingSeconds<10){
        document.getElementById("timer").textContent =remainingMinutes + ":"+"0"+remainingSeconds;

    }
    totalTime -= 1000;

    if (totalTime <-1) {
        clearInterval(timerInterval);
        document.getElementById("timer").textContent = "00:00";
        alert("Thank you for yours idea....:)");
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("MM").value = "";
    document.getElementById("SS").value = "";
    document.getElementById("timer").innerHTML= "00:00";
    document.getElementById("MM").disabled = false;
    document.getElementById("SS").disabled = false;
    document.getElementById("content").value="";
    document.getElementById("ccharacter").innerHTML="0";
    document.getElementById("cword").innerHTML="0";
    // document.getElementById("count").innerHTML="- - -";
}
//Paragraph counter....

const textArea = document.getElementById('content');
const character=document.getElementById('ccharacter');
const word=document.getElementById('cword');
textArea.oninput = () => {
    let characters =  textArea.value;
    // console.log(characters);
    character.textContent= characters.replace(/\s/g,'').length;
    // let replace=textArea.value.replace(/./g,' ');
    let words=textArea.value.split(' ').filter((item)=>{
        return item!='';
    });
    word.textContent= words.length;
};