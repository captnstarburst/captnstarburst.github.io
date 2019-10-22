particlesJS("particles-js", {
	particles: {
		number: { value: 150, density: { enable: true, value_area: 800 } },
		color: { value: "#ffffff" },
		shape: {
			type: "circle",
			stroke: { width: 1, color: "#FFF" },
		},
		opacity: {
			value: 0.5,
			random: true,
			anim: { enable: false, speed: .5, opacity_min: 0.1, sync: false }
		},
		size: {
			value: 6,
			random: false,
			anim: { enable: false, speed: 1, size_min: 0.1, sync: false }
		},
		line_linked: {
			enable: true,
			distance: 70,
			color: "#ffffff",
			opacity: 0.4,
			width: 3
		},
		move: {
			enable: true,
			speed: 3,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 }
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: true, mode: "repulse" },
			onclick: { enable: false, mode: "push" },
			resize: true
		},
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 80, duration: 1 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
	stats.begin();
	stats.end();
	if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
		count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
	}
	requestAnimationFrame(update);
};
requestAnimationFrame(update);


window.addEventListener("scroll", function(event) {
    let top = this.scrollY;		
    let hideNavPosition = getOffset('#section_about').top;
		let screenSlide = getOffset('#section_stack').top;

		let navBar = document.querySelector('#nav_bar');
		let navHeaders = document.querySelectorAll('.nav-header');
		let icons = document.querySelectorAll('.screen');
	
		// console.log(hideNavPosition+ " : " + Number(top)-200)
		if(top === 0){
			navBar.classList.add("fadeIn");
			navHeaders[0].classList.add("fadeIn");
			navHeaders[1].classList.add("fadeIn");
			navHeaders[2].classList.add("fadeIn");
		}
		if(top > hideNavPosition){
			navBar.classList.add("fadeOut");
			navHeaders[0].classList.add("fadeOut");
			navHeaders[1].classList.add("fadeOut");
			navHeaders[2].classList.add("fadeOut");
			navBar.classList.remove("fadeIn");
			navHeaders[0].classList.remove("fadeIn");
			navHeaders[1].classList.remove("fadeIn");
			navHeaders[2].classList.remove("fadeIn");
		}	else if(top < hideNavPosition){
			
			navBar.classList.add("fadeIn");
			navHeaders[0].classList.add("fadeIn");
			navHeaders[1].classList.add("fadeIn");
			navHeaders[2].classList.add("fadeIn");
			navBar.classList.remove("fadeOut");
			navHeaders[0].classList.remove("fadeOut");
			navHeaders[1].classList.remove("fadeOut");
			navHeaders[2].classList.remove("fadeOut");
		}
	
		if(top > screenSlide-300){
		
			icons[0].classList.add("slideIn");
			icons[1].classList.add("slideIn");
			icons[2].classList.add("slideIn");
			document.querySelector('#test').classList.add("fadeInText");
		}

}, false);

function getOffset(el) {
	const rect = document.querySelector(el).getBoundingClientRect();
	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY
	};
}

function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function doScrolling(element, duration) {
	var startingY = window.pageYOffset;
  var elementY = getElementY(element);
  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
	var diff = targetY - startingY;
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  var start;

  if (!diff) return

	// Bootstrap our animation - it will get called right before next frame shall be rendered.
	window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start;
		// Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1);
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent);

    window.scrollTo(0, startingY + diff * percent);

		// Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

document.querySelector('.bounce').addEventListener('click', doScrolling.bind(null, '#section_about', 2800));

document.querySelector('.portfolio-img').addEventListener('click', lightBox);

function lightBox(){
	// window.onclick = closeLightBox;
	document.querySelector('.modal').style.display = "unset";	
	document.querySelector('.modal').focus();
	
	// 
}

window.onclick = function(event) {
	let modal = document.querySelector('.modal'); 
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function closeLightBox(){
   document.querySelector('.modal').style.display = "none";
}

