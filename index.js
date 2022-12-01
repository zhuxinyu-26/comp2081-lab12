// get the red rect
const path = document.querySelector("rect[y]");
// console.log(path);

//set the height of red rect to 0, make it disappear
path.setAttribute("height", "0");
let percent = document.querySelector("text").textContent;

//get the text number and count the needed height
percent = percent.replaceAll("%", "");
percent = parseInt(percent, 10);
percent = percent / 100;
let barHeight = 200 * percent;

//get the stylesheet
const stylesheet = document.styleSheets[0];
let svgActiveRule;
for (let i = 0; i < stylesheet.cssRules.length; i++) {
  if (stylesheet.cssRules[i].selectorText == "svg:active rect[y]") {
    svgActiveRule = stylesheet.cssRules[i];
  }
}
//set needed value to the height
let propertyValue = String(barHeight);
svgActiveRule.style.setProperty("height", propertyValue + "px");
