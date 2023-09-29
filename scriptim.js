const accordions=document.querySelectorAll('.accordion');



accordions.forEach((accordion)=>{
    const buton=accordion.querySelector('.buton');
    buton.addEventListener('click',()=>{
        accordion.querySelector('.plusIcon').classList.toggle('active');
        accordion.querySelector('.minusIcon').classList.toggle('active');
        accordion.querySelector('.accordionText').classList.toggle('active');
        
       
        

    }) 
})