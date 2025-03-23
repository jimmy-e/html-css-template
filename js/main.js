const button = document.getElementById('sample-button');

console.log('button', button);
console.log('button', button);
console.log('button', button);

button.addEventListener('click', function(event) {
  console.log("Clicked button ID: " + event.target.id);
});
