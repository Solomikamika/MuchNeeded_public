let btn = document.getElementById('unit');
let dts = document.querySelectorAll('.datas');

let changeClass = el => {
    for(i = 0; i < btn.children.length; i++){
        btn.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

console.log(dts);

btn.addEventListener('click', e => {
    let currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(i = 0; i < dts.length; i++){
        dts[i].classList.remove('active');
        if(dts[i].dataset.content === currTab) {
            dts[i].classList.add('active');
        }   
    }
})