let numClicks = [numClicksMath, numClicksMathFM, numClicksMathLA, numClicksMathRVF, numClicksMathAS, numClicksMathDM, numClicksMathFSV, numClicksMathLG, numClicksMathMA, numClicksMathNM, numClicksMathCA, numClicksMathDE, numClicksMathDG, numClicksMathGT, numClicksMathP, numClicksMathS, numClicksMathTOP, numClicksMathAT, numClicksMathA, numClicksMathCAL, numClicksMathDS, numClicksMathHA, numClicksMathLM, numClicksMathNC, numClicksMathNIPDE, numClicksMathPDE, numClicksMathRFA, numClicksMathSP];

for (let i = 0; i < numClicks.length; i++) {
  numClicks[i] = localStorage.getItem(numClicks[i] + "_counter");
  if (numClicks[i] == null) {
    numClicks[i] = 0;
    localStorage.setItem(numClicks[i] + "_counter", numClicks[i]);
  }
  numClicks[i] = parseInt(numClicks[i]);
  updateCount(i, numClicks[i]);
}

// function clickFunction(numClick) {
//   switch (numClick) {
//     case "MATH":
//       numClicks = numClicksMath++;
//       break;
//     case "LG":
//       break;
//     // default:
//     // // code block
//   }
//   print("hem entrat");
//   document.getElementById(numClick).innerHTML = numClicks;
//   return false;
// }

function incrementCounter(text) {
  let i = parseInt(text);
  let count = parseInt(localStorage.getItem(numClicks[i] + "_counter"));
  count = count + 1;
  localStorage.setItem(numClicks[i] + "_counter", count);
  updateCount(text, count);
  return true;
}
function updateCount(code, count) {
  document.getElementById(code).innerHTML = "Clicked " + count + " times!";
}

// window.onload = function () {
//   // make an AJAX request to the hitcounter.php script
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "hitcount.txt", true);
//   xhr.send();

//   // when the AJAX request is complete, update the hit count display
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       var count = xhr.responseText;
//       document.getElementById("hitcount").innerHTML = count;
//     }
//   };
// };
// var button = document.getElementById("clickme"), count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };