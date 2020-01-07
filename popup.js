document.getElementById('Firkant').addEventListener('click', square);
document.getElementById('Trekant').addEventListener('click', triangle);
document.getElementById('Cirkel').addEventListener('click', circle);
document.getElementById('clickme').addEventListener('click', oof2);

function square() {
    chrome.tabs.executeScript({
      file: "square.js"
    }); 
  }

function triangle() {
    chrome.tabs.executeScript({
        file: "triangle.js"
      }); 
}
function circle() {
    chrome.tabs.executeScript({
      file: "circle.js"
    }); 
  }

function oof2() {
    chrome.tabs.executeScript({
        file: ""
    })
}