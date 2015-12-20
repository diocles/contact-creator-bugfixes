var classes = ["MainMenuButton", "MainMenuDDButton"];
for (var i=0; i<classes.length; i++) {
	var elements = document.getElementsByClassName(classes[i]);
	for (var j=0; j<elements.length; j++) {
		if (typeof(elements[j].href) !== 'undefined') {
			elements[j].href = elements[j].href.replace( /javascript:MenuClick\('(.*)'\)/, "$1");
		}
	}
}
