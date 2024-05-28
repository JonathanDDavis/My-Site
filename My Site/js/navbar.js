var navbar = '<ul>\
				<li>\
					<a href="#">Home</a>\
				</li>\
				<li>\
					<a>About</a>\
						<ul>\
							<li>\
							<a href="#">Portfolio</a>\
							</li>\
							<li>\
							<a href="#">Resume</a>\
							</li>\
						</ul>\
				</li>\
				<li>\
				<a href="#">Contact</a>\
				</li>\
			</ul>'
	
function loadNav() {
	document.getElementById('nav').innerHTML = navbar;	
}