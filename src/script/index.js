var link_lists = document.getElementsByClassName('link_nav');
var link_contents = document.getElementsByClassName('link_contente');


/**
 * 
 * @param {string} tablink
 * function de masquer et afficher une element depuis boucle  
 */

// on prend le valeur de la tablink et on change valeur 
function opentab(tablink){

   for(link_list of link_lists){
      link_list.classList.remove("active_nav")
   }

   for(link_content of link_contents){
      link_content.classList.remove("active_list")
   }
   event.currentTarget.classList.add("active_nav");
   document.getElementById(tablink).classList.add("active_list")
}


