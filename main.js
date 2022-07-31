let submit_btn = document.querySelector('.submit');
let content = document.querySelector('.content');
let thank_you = document.querySelector('.thank_you');
let rate = document.querySelectorAll('#rate');
let result = document.querySelector('#result');

submit_btn.addEventListener('click',()=>{
    content.style.display = 'none';
    
    thank_you.style.display = "block"
})

rate.forEach( rate_1 =>{
    rate_1.addEventListener('click',()=>{
        result.innerText = rate_1.innerText;
    })
})