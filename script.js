

var colNb = 20;
var rowNb = 14;
var casesNb = colNb * rowNb;
var Cases = document.getElementsByClassName("case");

for (i=0; i<casesNb;i++) {
    Cases[i].style.backgroundColor = "#666";
    Cases[i].colNum = (i%colNb);
    Cases[i].rowNum = (i-(i%colNb))/colNb;
    Cases[i].type = "normal";
    if (Cases[i].rowNum == 0)  { 
        Cases[i].type = "mur"
        Cases[i].style.backgroundPositionX = 64 +"px";
        Cases[i].style.backgroundPositionY = 32 +"px";
    };
    if (Cases[i].rowNum == (rowNb-1))  { 
        Cases[i].type = "mur"
        Cases[i].style.backgroundPositionX = 64 +"px";
        Cases[i].style.backgroundPositionY = 32 +"px";
    };
    if (Cases[i].colNum == 0)  { 
        Cases[i].type = "mur"
        Cases[i].style.backgroundPositionX = 96 +"px";
        Cases[i].style.backgroundPositionY = 64 +"px";
    };
    if (Cases[i].colNum == (colNb-1))  { 
        Cases[i].type = "mur"
        Cases[i].style.backgroundPositionX = 96 +"px";
        Cases[i].style.backgroundPositionY = 64 +"px";
    };
    if (i == 0) {
        Cases[i].style.backgroundPositionX = 96 +"px";
        Cases[i].style.backgroundPositionY = 96 +"px";}
    if (i == colNb-1) {
        Cases[i].style.backgroundPositionX = 32 +"px";
        Cases[i].style.backgroundPositionY = 96 +"px";}
    if (i == casesNb-1) {
        Cases[i].style.backgroundPositionX = 32 +"px";
        Cases[i].style.backgroundPositionY = 32 +"px";}
    if (i == casesNb - colNb) {
        Cases[i].style.backgroundPositionX = 96 +"px";
        Cases[i].style.backgroundPositionY = 32 +"px";}
    if (Cases[i].type != "mur") {
        Cases[i].style.backgroundPositionX = 64 +"px";
        Cases[i].style.backgroundPositionY = 64 +"px";
    }
    Cases[i].style.left = Cases[i].colNum * 32 + "px";
    Cases[i].style.left = Cases[i].rowNum * 32 + "px";
}

/*for (i=0; i<casesNb;i++) {
    if Cases[i]
}*/




var press = false;

var x = 32;
var y = 32;
var plyr = document.getElementById("pion");
plyr.style.left = x + "px";
plyr.style.top = y + "px";


function deplacer(dx, dy, dt)
{
   x += dx;
   y += dy;
   t = dt;
   plyr.style.left = x + "px";
   plyr.style.top = y + "px";
   if (t>480){
        plyr.style.backgroundPositionX = 32 +"px";
   } else if (t>320){ 
       plyr.style.backgroundPositionX = 0 +"px";
    } else if (t>160){
        plyr.style.backgroundPositionX = 64 +"px";
    } else {plyr.style.backgroundPositionX = 0 +"px";}
}


document.addEventListener('keydown', check);
function check(e) {
    caseAct = (y/32)*colNb+(x/32)
    console.log(Cases[caseAct].type);
    Cases[caseAct].style.backgroundColor = "#388";
    /*console.log(e.key);*/
    if (e.key == 't'){
        if (Cases[caseAct-colNb].type == "mur") {
            console.log("mur en haut")
        }
    }

}



document.addEventListener('keyup', logKey,check);

function logKey(e) {
    if (press == false) {
        press = true;
        /*console.log("debutAnim");*/
        var moveLeft = 640;
        var t= setTimeout(function(){
        /*    console.log("finAnim");*/
            press = false;
            plyr.style.backgroundPositionX = 0 +"px";
        },321);
        if(e.key == 'd'){
            if (Cases[caseAct+1].type == "mur") {
                console.log("mur à droite")
            } else {
            var move = setInterval(function(){
                if (moveLeft>0){
                    plyr.style.backgroundPositionY = 64 +"px";
                    deplacer(1,0,moveLeft);
                    moveLeft = moveLeft -20}
            },20)};
        } else if(e.key == 'q'){
            if (Cases[caseAct-1].type == "mur") {
                console.log("mur à gauche")
            } else {
            var move = setInterval(function(){
                if (moveLeft>0){
                    plyr.style.backgroundPositionY = 96 +"px";
                    deplacer(-1,0,moveLeft);
                    moveLeft = moveLeft -20}
            },20)};
        } else if(e.key == 'z'){
            if (Cases[caseAct-colNb].type == "mur") {
                console.log("mur en haut")
            } else {
            var move = setInterval(function(){
                if (moveLeft>0){
                    plyr.style.backgroundPositionY = 32 +"px";
                    deplacer(0,-1,moveLeft);
                    moveLeft = moveLeft -20}
            },20)};
        } else if(e.key == 's'){
            if (Cases[caseAct+colNb].type == "mur") {
                console.log("mur en bas")
            } else {
            var move = setInterval(function(){
                if (moveLeft>0){
                    plyr.style.backgroundPositionY = 0 +"px";
                    deplacer(0,1,moveLeft);
                    moveLeft = moveLeft -20}
            },20)};
        } 
    } 
}
/*
var play = document.querySelector('#player')


document.addEventListener('click', function(e){
    console.log("Sa a cliqué", e)
})*/


