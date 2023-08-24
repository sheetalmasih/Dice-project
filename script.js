

document.querySelector("button").addEventListener("click", function(){
    Sound();
    var p1=Math.floor(Math.random()*6)+1;
    var p2=Math.floor(Math.random()*6)+1;
    document.querySelector("#p1").src=`${p1}.png`;
    document.querySelector("#p2").src=`${p2}.png`; 
    if(p1==6 && p2!=6)
    {
        document.querySelector("h1").textContent="🥳🎋Player 1 wins🎋🥳";
    }
    else if(p1!=6 && p2==6)
    {
        document.querySelector("h1").textContent="🥳🎋Player 2 wins🎋🥳";
    }
    else if (p1!=p2 && p2!=p1){
        document.querySelector("h1").textContent="🤦🏻‍♂️Please Try Again🤦🏻‍♂️"
    }
    else
    {
        document.querySelector("h1").textContent="🙅‍♂️Oops! It's a DRAW🙅‍♂️";
    }});
    function Sound()
    {
        var audio=new Audio('assets/a.mp3');
        audio.play();
    }



// ************************************************************************************
// const game1=document.querySelector("button");game1.addEventListener("click", function(){
//     Sound();
//     var p1=Math.floor(Math.random()*6)+1;
//     document.querySelector("#p1").src=`assets/${p1}.png`;
//     });
//     function Sound()
//     {
//         var audio=new Audio('assets/a.mp3');
//         audio.play();
//     }
    
// // ******************************************************************************************

// const game2=document.getElementById("button2");game2.addEventListener("click", function(){
//     Sound();
//     var p2=Math.floor(Math.random()*6)+1;
//     document.querySelector("#p2").src=`assets/${p2}.png`;
//     });
//     function Sound()
//     { 
//         var audio=new Audio('assets/a.mp3');
//         audio.play();
//     }
//     if(game1>game2){
//         document.querySelector("h1").textContent="🥳🎋Player 1 wins🎋🥳";
//     }
//     else if (game1<game2){
//         document.querySelector("h1").textContent="🥳🎋Player 2 wins🎋🥳";
//     }
//     else{
//         document.querySelector("h1").textContent="Oops draw the game";
//     }