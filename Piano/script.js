let keys = document.querySelectorAll(".key");

function playSong(songPath){

    let audio = new Audio(songPath);

    audio.currentTime = 0;
    audio.play();

}

function animate(key){

    key.classList.add("active");

    setTimeout(()=>{
        key.classList.remove("active");
    },150);

}

keys.forEach((key)=>{

    key.addEventListener("click",()=>{

        playSong(key.dataset.song);
        animate(key);

    });

});

document.addEventListener("keydown",(e)=>{

    let key = document.querySelector(
        `.key[data-key="${e.key.toLowerCase()}"]`
    );

    if(!key) return;

    playSong(key.dataset.song);
    animate(key);

});