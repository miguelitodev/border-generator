function changeRadius() {
	let object = document.querySelector(".object");
	let final = document.querySelector(".final");
	let leftTop = document.querySelector("#radius-left-top").value;
	let leftBottom = document.querySelector("#radius-left-bottom").value;
	let rightTop = document.querySelector("#radius-right-top").value;
	let rightBottom = document.querySelector("#radius-right-bottom").value;

	if (leftTop == "" || leftTop == null) {
		leftTop = 0;
	}
	if (rightTop == "" || rightTop == null) {
		rightTop = 0;
	}
	if (rightBottom == "" || rightBottom == null) {
		rightBottom = 0;
	}
	if (leftBottom == "" || leftBottom == null) {
		leftBottom = 0;
	}

	final.innerHTML = `border-radius: ${leftTop}px ${rightTop}px ${rightBottom}px ${leftBottom}px;`;
	object.style.borderRadius = `${leftTop}px ${rightTop}px ${rightBottom}px ${leftBottom}px`;
}
