const slides = [
	{ src: "./assets/images/slideshow/slide1.jpg", alt: "photo banner", text: "Impressions tous formats en boutique et en ligne" },
	{ src: "./assets/images/slideshow/slide2.jpg", alt: "photo banner", text: "Tirages haute définition grand format pour vos bureaux et events" },
	{ src: "./assets/images/slideshow/slide3.jpg", alt: "photo banner", text: "Grand choix de couleurs de CMJN aux pantones" },
	{ src: "./assets/images/slideshow/slide4.png", alt: "photo banner", text: "Autocollants avec découpe laser sur mesure" }
  ];
  

  
  const banner = document.getElementById("banner");
  const arrowG = document.getElementById("arrowG");
  const arrowD = document.getElementById("arrowD");
  
  let i = 0;
  
  function setActiveDot(i){
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
	  if (index === i) {
		dot.classList.add("active");
	  } else {
		dot.classList.remove("active");
	  }
	});
  }
  
 


  
  function showSlide() {
	banner.innerHTML = `<img src="${slides[i].src}" alt="photo banner">`;
	const newtext = document.createElement("p");
	const newContent = document.createTextNode(slides[i].text);
	newtext.appendChild(newContent);
	banner.appendChild(newtext);
	setActiveDot(i);

	  }



  
function prevSlide() {
	i--;
	if (i < 0) {
	  i = slides.length - 1;
	}
	showSlide();
  }
  
  function nextSlide() {
	i++;
	if (i >= slides.length) {
	  i = 0;
	}
	showSlide();
  }
  
  showSlide();
  
  arrowG.addEventListener("click", prevSlide);
  arrowD.addEventListener("click", nextSlide);
  
  showSlide();
