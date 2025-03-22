let iFrame = document.getElementById("iFrame");

console.log('iFrame', iFrame);

// iFrame.onload = function () {
//   iFrame.style.height = iFrame.contentWindow.document.body.scrollHeight + 'px';
// }

// let button = document.getElementById("pup-scouts-chatbot-closed-button");
let button = document.getElementsByTagName("button")[0];
console.log(document.getElementsByTagName("button"));
console.log('button', button);

// document.getElementById('toggleButton').addEventListener('click', function() {
//   var content = document.querySelector('.content');
//   content.classList.toggle('expanded');
//
//   var dimensions = {
//     width: content.offsetWidth,
//     height: content.offsetHeight
//   };
//
//   window.parent.postMessage(dimensions, '*');
// });
