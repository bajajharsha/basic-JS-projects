const closedFace =document.querySelector('.closed')
const openFace =document.querySelector('.open')

// add event listener

closedFace.addEventListener('click', ()=>{     // event listeners adds click, load etc. 
    if (openFace.classList.contains('open')) {   //if open face includes the class 'open' (jo woh karta hai)  then add the class active and closed face me se remove active
        openFace.classList.add('active')
        closedFace.classList.remove('active')
    }
})

// ab open face change ho gaya into closed face. 

openFace.addEventListener('click', ()=>{    //if closed face includes the class 'close' (jo woh karta hai)  then add the class active and open face me se remove active
    if (closedFace.classList.contains('closed')) {
        closedFace.classList.add('active')
        openFace.classList.remove('active')
    }
})