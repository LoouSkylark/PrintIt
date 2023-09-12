const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Variable permettant de gérer l'ensemble des slides
let slideIndex = 0;

//Ajout d'un event listener sur la flèche gauche
const prevSlide = document.querySelector(".arrow_left");
prevSlide.addEventListener("click", function () { showSlides(-1);
	console.log(prevSlide);
})

//Ajout d'un event listener sur la flèche droite
const nextSlide = document.querySelector(".arrow_right");
nextSlide.addEventListener("click", function () { showSlides(1);
	console.log(nextSlide);
})
 // Récupération de la div contenant les bullets points
const dotsDiv = document.querySelector(".dots");

// Ajout des bullets
for (let i = 0; i < slides.length; i++) {

	const dot = document.createElement('span'); //création d'un point parent)
    dot.classList.add('dot'); // Ajout de la classe dot
	dotsDiv.appendChild(dot); // Ajout d'un point enfant pour chaque slide

	if (i === slideIndex) {
		 // Ajout de la classe dot_selected sur le point du slide en cours de visionnage
        dot.classList.add('dot_selected');
}
}

showSlides(slideIndex);
// Fonction qui permet d'afficher les slides
function showSlides(n) {
	let dots = document.querySelectorAll(".dot")
    slideIndex = slideIndex + n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; 
	}
    if (slideIndex > slides.length - 1) {
        slideIndex = 0; 
	}
	// Chemin de l'image
	document.getElementById("banner_container").src = "./assets/images/slideshow/" + slides[slideIndex]["image"]
	// Texte correspondant à l'image
	document.getElementById("text").innerHTML = slides[slideIndex]["tagLine"];
	
	// Retrait de la class "dot_selected de tous les points"
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	// Ajout de la class "dot_selected sur le slide en cours"
	dots[slideIndex].classList.add("dot_selected");

}
