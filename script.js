const itemsLiderbar = document.querySelectorAll(".cartegory-left-li")
itemsLiderbar.forEach(function(menu,index){
    menu.addEventListener("click", function(){
        menu.classList.toggle("block")
    })
})