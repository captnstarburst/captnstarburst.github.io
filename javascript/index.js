// Create a new Particle
var ps = new ParticleSlider({
	ptlGap: 1,
	mouseForce: 200,
	monochrome: true,
	color: "#000",
	ptlSize: 2
});

var ptl = new ps.Particle(ps);

// Set time to live of Particle to20 frames.
ptl.ttl = 20;

lazyload();

window.addEventListener(
	"scroll",
	function(event) {
		let top = this.scrollY;
		let screenSlide = getOffset("#section_about").top;
		let icons = document.querySelectorAll(".screen");

		if (top > screenSlide) {
			icons[0].classList.add("slideIn");
			icons[1].classList.add("slideIn");
			icons[2].classList.add("slideIn");
		}
	},
	false
);

function getOffset(el) {
	const rect = document.querySelector(el).getBoundingClientRect();
	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY
	};
}