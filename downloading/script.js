let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');
let p = document.querySelector('p')

let grow = 0;
btn.addEventListener('click',()=>{
    btn.style.pointerEvents = 'none';
    let num = Math.floor(Math.random()*50)+30;
    let int = setInterval(()=>{
        grow++;
        h2.innerHTML = grow +'%';
        inner.style.width = grow +'%';
        p.innerHTML = 'Downloading.... &#128640;'
    },num);

    setTimeout(()=>{
        clearInterval(int)
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.5;
        p.innerHTML = `Downloaded in ${num/10} seconds `;
    },num*100);
});