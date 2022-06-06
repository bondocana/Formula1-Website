window.onload = function(){
    
    var img = document.createElement("img");
    img.src = "car_gif.gif";
    //img.classList.add("style_car");

    img.style.width = "450px";
    img.style.left = "0px";
    img.style.position = "absolute";

    var movePixels = 10; // numarul de pixeli
    var delayMs = 50; // numarul de milisecunde
    var dogTimer = null;

    // Muta imaginea pe ecran cu 10px
    function dogWalk() {
        var currentLeft = parseInt(img.style.left);
        img.style.left = currentLeft + movePixels + "px";
        // reseteaza imaginea la pozitia de pornite
        if (currentLeft > window.innerWidth - img.width) {
            img.style.left = "0px";
        }
    }

    // Apeleaza functia dogWalk la fiecare 50 ms
    function startDogWalk() {
        dogTimer = window.setInterval(dogWalk, delayMs);
    }  
    
    startDogWalk();

    var ok = 0;
    // 0 cand merge
    // 1 cand e oprit

    img.addEventListener("click",() =>{
        if(ok == 0){
            clearInterval(dogTimer);
            ok = 1;
        }
        else{
            startDogWalk();
            ok = 0;
        }
    });


    window.onkeydown = function(event){
        if(event.key === "f"){ // fast
            movePixels = movePixels + 10;
        }

        if(event.key === "s"){ // slow
            movePixels = movePixels - 10;
        }
    }


    document.getElementById("div1").appendChild(img);

}