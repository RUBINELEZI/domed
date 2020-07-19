const wp = document.querySelectorAll('#wp')
const gen = document.querySelector('#general')

gen.addEventListener('click' , () =>{
    wp.forEach(w =>{
        if(w.classList.contains('show')){
            w.classList.remove('show')
        }else{
            w.classList.add('show')
        }
    })
    console.log(wp);
})