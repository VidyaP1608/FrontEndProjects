const cards=document.querySelectorAll(".subClass1")
cards.forEach(card=>{
    card.addEventListener('click', ()=>{
        removeActiveCards();
        card.classList.add('active');   
    })
})
function removeActiveCards()
{
    cards.forEach(card=>{
        card.classList.remove('active');
    })
}
