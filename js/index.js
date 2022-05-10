// Aos 
    AOS.init({
        duration: 1000,
    });

///////////////////////////////////////////////////////

let list = document.querySelectorAll('.portfolio li');
let box = Array.from(document.querySelectorAll('.portfolio .box'));

list.forEach((li) =>{
    li.addEventListener('click', removeAct)
    li.addEventListener('click', hideCard)
})
//remove class active
function removeAct(){
    list.forEach((li) =>{
        li.classList.remove('active')
        this.classList.add('active')
    })
}
//hide in cards
function hideCard(){
    box.forEach((img) =>{
        img.style.display = 'none';
        document.querySelectorAll(this.dataset.filter).forEach((e) =>{
            e.style.display = 'flex';
        })
    })
}



