let card = document.getElementById('card__items');
let cardStyle = document.querySelectorAll('.card__style');

let changeClass = el => {
    for(i = 0; i < card.children.length; i++){
        card.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

console.log(cardStyle);

card.addEventListener('click', e => {
    let currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(i = 0; i < cardStyle.length; i++){
        cardStyle[i].classList.remove('active');
        if(cardStyle[i].dataset.content === currTab) {
            cardStyle[i].classList.add('active');
        }   
    }
})