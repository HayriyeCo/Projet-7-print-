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
]


const arrowleft = document.querySelector(".arrow_left");
const arrowright  = document.querySelector(".arrow_right");

arrowright.addEventListener("click", function (){
	changementslide(+1);
})



arrowleft.addEventListener("click", function (){
	changementslide(-1);
})

//changement de slide

function changementslide(direction){
	position += direction; 
	verifieposition();
	imageTagline();
	changebullet();
}

let position = 0;

function verifieposition(){
	if (position >= slides.length){
		position = 0;
	}
	else if (position< 0){
		position = slides.length -1;
	}
}
//création des points

const bullet = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++ ){
	const point = document.createElement("div");
	bullet.appendChild(point);
	point.classList.add("dot");
}

//sélection du point en fonction de la postition du slider

let bulletselect = positionbullet();
bulletselect.classList.add("dot_selected");
function positionbullet(){
	return document.querySelector(`.dots .dot:nth-child(${position + 1})`);

}

//changement de points lors du changement du slide

function changebullet(){
	bulletselect.classList.remove("dot_selected");
	bulletselect = positionbullet();
    bulletselect.classList.add("dot_selected");

}

//affichage de l'image et de la tagline

function imageTagline(){
	document.querySelector('.banner-img').src = "./assets/images/slideshow/" + slides[position].image;
	document.querySelector("#banner p").innerHTML = slides[position].tagLine;
}
