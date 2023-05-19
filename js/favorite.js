let favorites = '100';
// like button

function clickButtonLike(event){
      
    const elementBtn = event.currentTarget;
    if(elementBtn.className === 'btnLike' ){
        elementBtn.className = 'removeLike';
        favorites++; 
    }
    else{
        elementBtn.className = 'btnLike';
        favorites--;
}
elementBtn.innerHTML = `${favorites} ❤️`;
};
export function like(){
    // we select the buttons with the class then we add the event listeners to the click we call the function
    document.querySelectorAll('.btnLike').forEach( btnLike => {
        btnLike.addEventListener('click',clickButtonLike);
    })
    }