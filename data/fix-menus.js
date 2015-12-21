var elements = document.querySelectorAll('.MainMenuButton, .MainMenuDDButton');
for (var j=0; j<elements.length; j++) {
	if (typeof(elements[j].href) !== 'undefined') {
		elements[j].href = elements[j].href.replace( /javascript:MenuClick\('(.*)'\)/, "$1");
	}
}
