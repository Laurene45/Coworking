//Filtres des images sur les boutons proposés
//Récupérer leurs ID et les dataset 
//Rendre les images inactives ou actives

let filters = document.querySelectorAll("#filters button");

for (let filter of filters ){
    filter.addEventListener("click", function() {
        let tag = this.id;

        let images = document.querySelectorAll('#filters-cards .card_img');
        
        for (let image of images ) {
            image.classList.replace("active", "inactive");

            if(tag in image.dataset || tag === "all"){
                image.classList.replace("inactive","active");
            }
        }
    });
}









// const filterCards = (e) => {
//     document.querySelector("button .active").classList.remove("active");
    
//     e.target.classList.add("active");
    
//     filterableCards.forEach(card => {
//         if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
//             return card.classList.replace("hide", "show")
//         }
//         card.classList.add("hide")
        
        
//     });
// };

// filterButtons.forEach (button => button.addEventListener("click",filterCards));


