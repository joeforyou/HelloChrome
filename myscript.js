var all = document.getElementsByTagName("*")

var re = /\b(?:[A-Z]\.|[A-Z]){2,}/;

var count = 0;

for (var i = 0; i < all.length ; i++) {
	// regex matching goes here
	if (all[0].innerText.match(re)) {
		count += 1
	}
}

chrome.runtime.sendMessage("This page has " + count + " acronyms.");