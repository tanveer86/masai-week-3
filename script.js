
var nameButton = document.getElementById('submitNames');
var select1 = document.getElementById('select1');
var select2 = document.getElementById('select2');
var select3 = document.getElementById('select3');
var select4 = document.getElementById('select4');
var select5 = document.getElementById('select5');
var select6 = document.getElementById('select6');
var select7 = document.getElementById('select7');
var select8 = document.getElementById('select8');
var select9 = document.getElementById('select9');
var name1 = document.getElementById('name1').value;
var name2 = document.getElementById('name2').value;
var playerNow = document.getElementById('playerTurn');
var user1 = "X";
var user2 = "O";
var user = "";
var allOptions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var playAgain = document.getElementById('playAgain');


function addNames(){
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;

    if (name1.length > 1 && name2.length > 1) {

        var bodyTag = document.querySelector('body');
    
        document.getElementById("playerName1").innerHTML = name1;
        document.getElementById("playerName2").innerHTML = name2;
    
        var inputForm = document.getElementById("playerNames");
        bodyTag.removeChild(inputForm);

    }else{
        alert('Please Enter Player 1 & Player 2 Name');
    }
}

function selecting1(){
    if (select1.innerHTML == '') {
        if (user == "") {
            select1.innerHTML = user1;
            allOptions[0] = user1;
            user = user1;
        }else if(user == user2){
            select1.innerHTML = user1;
            allOptions[0] = user1;
            user = user1;
        }else{
            select1.innerHTML = user2;
            allOptions[0] = user2;
            user = user2;
        }
    }else{
        alert("You Can't Select");
    }
    if (allOptions[0] == "X" && allOptions[1] == "X" && allOptions[2] == "X" ||  allOptions[0] == "O" && allOptions[1] == "O" && allOptions[2] == "O") {

        row1Change();

    }else if(allOptions[0] == "X" && allOptions[3] == "X" && allOptions[6] == "X" ||  allOptions[0] == "O" && allOptions[3] == "O" && allOptions[6] == "O"){

        colum1Change();
    }else if(allOptions[0] == "X" && allOptions[4] == "X" && allOptions[8] == "X" ||  allOptions[0] == "O" && allOptions[4] == "O" && allOptions[8] == "O"){

        oneLastChange();
    }
}

function selecting2(){
    if (select2.innerHTML == '') {
        if (user == "") {
            select2.innerHTML = user1;
            allOptions[1] = user1;
            user = user1;
        }else if(user == user2){
            select2.innerHTML = user1;
            allOptions[1] = user1;
            user = user1;
        }else{
            select2.innerHTML = user2;
            allOptions[1] = user2;
            user = user2;
        }
    }else{
        alert("You Can't Select");
    } 
    if (allOptions[0] == "X" && allOptions[1] == "X" && allOptions[2] == "X" ||  allOptions[0] == "O" && allOptions[1] == "O" && allOptions[2] == "O") {

        row1Change();
        
    }else if(allOptions[1] == "X" && allOptions[4] == "X" && allOptions[7] == "X" ||  allOptions[1] == "O" && allOptions[4] == "O" && allOptions[7] == "O"){

        colum2Change();
    }
}

function selecting3(){
    if (select3.innerHTML == '') {
        if (user == "") {
            select3.innerHTML = user1;
            allOptions[2] = user1;
            user = user1;
        }else if(user == user2){
            select3.innerHTML = user1;
            allOptions[2] = user1;
            user = user1;
        }else{
            select3.innerHTML = user2;
            allOptions[2] = user2;
            user = user2;
        }
    }else{
        alert("You Can't Select");
    } 
    if (allOptions[0] == "X" && allOptions[1] == "X" && allOptions[2] == "X" ||  allOptions[0] == "O" && allOptions[1] == "O" && allOptions[2] == "O") {

        row1Change();
        
    }else if(allOptions[2] == "X" && allOptions[5] == "X" && allOptions[8] == "X" ||  allOptions[2] == "O" && allOptions[5] == "O" && allOptions[8] == "O"){

        colum3Change();

    }else if(allOptions[2] == "X" && allOptions[4] == "X" && allOptions[6] == "X" ||  allOptions[2] == "O" && allOptions[4] == "O" && allOptions[6] == "O"){

        towLastChange();
    }
}

function selecting4(){
    if (select4.innerHTML == '') {
        if (user == "") {
            select4.innerHTML = user1;
            allOptions[3] = user1;
            user = user1;
        }else if(user == user2){
            select4.innerHTML = user1;
            allOptions[3] = user1;
            user = user1;
        }else{
            select4.innerHTML = user2;
            allOptions[3] = user2;
            user = user2;
        }
    }else{
        alert("You Can't Select");
    } 
    if (allOptions[3] == "X" && allOptions[4] == "X" && allOptions[5] == "X" ||  allOptions[3] == "O" && allOptions[4] == "O" && allOptions[5] == "O") {

        row2Change();
        
    }else if(allOptions[0] == "X" && allOptions[3] == "X" && allOptions[6] == "X" ||  allOptions[0] == "O" && allOptions[3] == "O" && allOptions[6] == "O"){

        colum1Change();
    }
}

function selecting5(){
    if (select5.innerHTML == '') {
        if (user == "") {
            select5.innerHTML = user1;
            allOptions[4] = user1;
            user = user1;
        }else if(user == user2){
            select5.innerHTML = user1;
            allOptions[4] = user1;
            user = user1;
        }else{
            select5.innerHTML = user2;
            allOptions[4] = user2;
            user = user2;
        }
    }else{
        alert("You Can't Select");
    } 
    if (allOptions[3] == "X" && allOptions[4] == "X" && allOptions[5] == "X" ||  allOptions[3] == "O" && allOptions[4] == "O" && allOptions[5] == "O") {

        row2Change();
        
    }else if(allOptions[1] == "X" && allOptions[4] == "X" && allOptions[7] == "X" ||  allOptions[1] == "O" && allOptions[4] == "O" && allOptions[7] == "O"){

        colum2Change();
    }else if(allOptions[0] == "X" && allOptions[4] == "X" && allOptions[8] == "X" ||  allOptions[0] == "O" && allOptions[4] == "O" && allOptions[8] == "O"){

        oneLastChange();

    }else if(allOptions[2] == "X" && allOptions[4] == "X" && allOptions[6] == "X" ||  allOptions[2] == "O" && allOptions[4] == "O" && allOptions[6] == "O"){

        towLastChange();
    }
}

function selecting6(){
    if (select6.innerHTML == '') {
        if (user == "") {
            select6.innerHTML = user1;
            allOptions[5] = user1;
            user = user1;
        }else if(user == user2){
            select6.innerHTML = user1;
            allOptions[5] = user1;
            user = user1;
        }else{
            select6.innerHTML = user2;
            allOptions[5] = user2;
            user = user2;
        }
    }else{
        alert("You Can't Select");
    } 
    if (allOptions[3] == "X" && allOptions[4] == "X" && allOptions[5] == "X" ||  allOptions[3] == "O" && allOptions[4] == "O" && allOptions[5] == "O") {

        row2Change();
        
    }else if(allOptions[2] == "X" && allOptions[5] == "X" && allOptions[8] == "X" ||  allOptions[2] == "O" && allOptions[5] == "O" && allOptions[8] == "O"){

        colum3Change();
    }
}

function selecting7(){
    if (select7.innerHTML == '') {
        if (user == "") {
            select7.innerHTML = user1;
            allOptions[6] = user1;
            user = user1;
        }else if(user == user2){
            select7.innerHTML = user1;
            allOptions[6] = user1;
            user = user1;
        }else{
            select7.innerHTML = user2;
            allOptions[6] = user2;
            user = user2;
        }
    }else{
        alert("You Can't Select");
    } 
    if (allOptions[6] == "X" && allOptions[7] == "X" && allOptions[8] == "X" ||  allOptions[6] == "O" && allOptions[7] == "O" && allOptions[8] == "O") {

        row3Change();
        
    }else if(allOptions[0] == "X" && allOptions[3] == "X" && allOptions[6] == "X" ||  allOptions[0] == "O" && allOptions[3] == "O" && allOptions[6] == "O"){

        colum1Change();

    }else if(allOptions[2] == "X" && allOptions[4] == "X" && allOptions[6] == "X" ||  allOptions[2] == "O" && allOptions[4] == "O" && allOptions[6] == "O"){

        towLastChange();
    }
}

function selecting8(){
    if (select8.innerHTML == '') {
        if (user == "") {
            select8.innerHTML = user1;
            allOptions[7] = user1;
            user = user1;
        }else if(user == user2){
            select8.innerHTML = user1;
            allOptions[7] = user1;
            user = user1;
        }else{
            select8.innerHTML = user2;
            allOptions[7] = user2;
            user = user2;
        }
    }else{
        alert("You Can't Select");
    } 
    if (allOptions[6] == "X" && allOptions[7] == "X" && allOptions[8] == "X" ||  allOptions[6] == "O" && allOptions[7] == "O" && allOptions[8] == "O") {

        row3Change();
        
    }else if(allOptions[1] == "X" && allOptions[4] == "X" && allOptions[7] == "X" ||  allOptions[1] == "O" && allOptions[4] == "O" && allOptions[7] == "O"){

        colum2Change();
    }
}

function selecting9(){
    if (select9.innerHTML == '') {
        if (user == "") {
            select9.innerHTML = user1;
            allOptions[8] = user1;
            user = user1;
        }else if(user == user2){
            select9.innerHTML = user1;
            allOptions[8] = user1;
            user = user1;
        }else{
            select9.innerHTML = user2;
            allOptions[8] = user2;
            user = user2;
        }
    }else{
        alert("You Can't Select");
    } 
    if (allOptions[6] == "X" && allOptions[7] == "X" && allOptions[8] == "X" ||  allOptions[6] == "O" && allOptions[7] == "O" && allOptions[8] == "O") {

        row3Change();
        
    }else if(allOptions[2] == "X" && allOptions[5] == "X" && allOptions[8] == "X" ||  allOptions[2] == "O" && allOptions[5] == "O" && allOptions[8] == "O"){

        colum3Change();
    }else if(allOptions[0] == "X" && allOptions[4] == "X" && allOptions[8] == "X" ||  allOptions[0] == "O" && allOptions[4] == "O" && allOptions[8] == "O"){

        oneLastChange();
    }
}

function row1Change(){
    select1.setAttribute('class', 'winner');
    select2.setAttribute('class', 'winner');
    select3.setAttribute('class', 'winner');

    disableButtons()
}

function row2Change(){

    select4.setAttribute('class', 'winner');
    select5.setAttribute('class', 'winner');
    select6.setAttribute('class', 'winner');

    disableButtons()
}

function row3Change(){

    select7.setAttribute('class', 'winner');
    select8.setAttribute('class', 'winner');
    select9.setAttribute('class', 'winner');
    
    disableButtons()
}

function colum1Change(){
    select1.setAttribute('class', 'winner');
    select4.setAttribute('class', 'winner');
    select7.setAttribute('class', 'winner');

    disableButtons()
}

function colum2Change(){
    select2.setAttribute('class', 'winner');
    select5.setAttribute('class', 'winner');
    select8.setAttribute('class', 'winner');

    disableButtons()
}

function colum3Change(){
    select3.setAttribute('class', 'winner');
    select6.setAttribute('class', 'winner');
    select9.setAttribute('class', 'winner');

    disableButtons()
}

function oneLastChange(){
    select1.setAttribute('class', 'winner');
    select5.setAttribute('class', 'winner');
    select9.setAttribute('class', 'winner');

    disableButtons()
}

function towLastChange(){
    select3.setAttribute('class', 'winner');
    select5.setAttribute('class', 'winner');
    select7.setAttribute('class', 'winner');

    disableButtons()
}

function disableButtons(){
    select1.disabled = true;
    select2.disabled = true;
    select3.disabled = true;
    select4.disabled = true;
    select5.disabled = true;
    select6.disabled = true;
    select7.disabled = true;
    select8.disabled = true;
    select9.disabled = true;
}

function startAgain(){

    select1.innerHTML = "";
    select2.innerHTML = "";
    select3.innerHTML = "";
    select4.innerHTML = "";
    select5.innerHTML = "";
    select6.innerHTML = "";
    select7.innerHTML = "";
    select8.innerHTML = "";
    select9.innerHTML = "";

    for (var i = 0; i < allOptions.length; i++) {
        allOptions[i] = 0; 
        
    }

    select1.disabled = false;
    select2.disabled = false;
    select3.disabled = false;
    select4.disabled = false;
    select5.disabled = false;
    select6.disabled = false;
    select7.disabled = false;
    select8.disabled = false;
    select9.disabled = false;

    select1.removeAttribute('class');
    select2.removeAttribute('class');
    select3.removeAttribute('class');
    select4.removeAttribute('class');
    select5.removeAttribute('class');
    select6.removeAttribute('class');
    select7.removeAttribute('class');
    select8.removeAttribute('class');
    select9.removeAttribute('class');

    user1 = "X";
    user2 = "O";
    user = "";

}


nameButton.addEventListener('click', addNames);
select1.addEventListener('click', selecting1);
select2.addEventListener('click', selecting2);
select3.addEventListener('click', selecting3);
select4.addEventListener('click', selecting4);
select5.addEventListener('click', selecting5);
select6.addEventListener('click', selecting6);
select7.addEventListener('click', selecting7);
select8.addEventListener('click', selecting8);
select9.addEventListener('click', selecting9);
playAgain.addEventListener('click', startAgain);