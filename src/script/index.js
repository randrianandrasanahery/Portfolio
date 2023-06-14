
// import Typewriter from 'typewriter-effect/dist/core';
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


// demo ecriture text 

// var text_anim = new ResizeObserverEntry((entries) => {
//    for(const entres of entries){
//       if(entres.isIntersecting == true){
//          entres.target.animate(
//             []
//          )
//       }
//    }
// })

// ecriture text 


// var i = 0
// var  text = "DEVELOPPEUR WEB ET DESIGNER";
// var nom = "HERY TANJONA"
// var speed = 100;
// function writeText(){
//    if((i < text.length) || (i< nom.length)){
//       document.getElementById('demo_text').innerHTML += text.charAt(i);
//       document.getElementById("demo_nom").innerHTML += nom.charAt(i);
//       i++;
//       setTimeout(writeText, speed)
      
//    }
// }
// writeText()

function demo_text(tagname, text){
   new Typed(tagname, {
      strings :[text],
      typeSpeed:180,
      backSpeed:100,
      backDelay:1000,
      loop:true
   });
}

demo_text(/* document.getElementById( */'#demo_text'/* ) */, 'DEVELOPPEUR WEB ET DESIGNER');
demo_text(/* document.getElementById( */'#demo_nom'/* ) */, 'HERY TANJONA');



function message(){
   alert("Serveur côté front_end  pas de back_end")

}

//  change background navbar quand on scroll

function changeBackground(){
   var navbar = document.getElementById("navbar");
   var scrollvalleur = window.scrollY;
   // console.log(scrollvalleur)

   if(scrollvalleur < 50){
      navbar.classList.remove("changeBg")
   }else{
      navbar.classList.add("changeBg")
   }
}


// function appele_write(){
//    var scroll = window.scrollY;
//    console.log(scroll)
//    if (scroll == 0){
//       writeText();
//    }
//    else if(scroll == false){
//       writeText()
//    }
// }


window.addEventListener('scroll', changeBackground)

function activeMenu(){
   var clas = document.querySelectorAll('#navi')
   for(element of clas){
      element.classList.remove('active')
   }
   event.currentTarget.classList.add("active");
}

// ScrollReveal({
//    reset:true,
//    distance:'80px',
//    duration:2000,
//    delay:200
// })

// ScrollReveal().reveal('#contact.title', {origin:'top'})


// observation fenetre 
var observer = new IntersectionObserver((entries) => {
   for(const entre of entries){
      if (entre.isIntersecting == true){
         entre.target.animate(
            [
               {opacity:0},
               {opacity:1},
            ],{
               duration:900
            }
         )   
         }
   }
})
document.querySelectorAll('.title').forEach(title => {
   observer.observe(title)
})


var animation = new IntersectionObserver((entries) => {
   for (const entry of entries){
      if (entry.isIntersecting == true){
         entry.target.animate(
            [
               // {display:'none'},
               { transform:'translateY(-500px)'},
               {transition: '0.5s'}
            ]
            ,{
               duration:1600
            }
         )
      }
   }
})

var obse = document.querySelector('.image');
animation.observe(obse)
