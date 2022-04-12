const dict = {
	"F": "Against",
	"N": "For"
}

function makeSelection(row, i) {
	document.getElementById(`prop-${dict[row.value]}-Row${i}`).checked = true;
}

const recommendations = document.querySelectorAll('[id=propBoardRecommendation]');

for (let i = 0; i < recommendations.length; i++) {
	makeSelection(recommendations[i], i)
}