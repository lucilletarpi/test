let dislike = 50;

// dislike button
function clickButtonDislike(event){

    const elementBtn = event.currentTarget;
    if(elementBtn.className === 'btnDislike' ){
        elementBtn.className = 'removeDislike';
        dislike++; 
        
    }
    else{
        elementBtn.className = 'btnDislike';
        dislike--;
        
}
elementBtn.innerHTML = `${dislike} 👎`;
};
// we select the buttons with the class then we add the event listeners to the click we call the function
export function dislikes(){
    document.querySelectorAll('.btnDislike').forEach( btnDislike => {
        btnDislike.addEventListener('click',clickButtonDislike);
    })
};