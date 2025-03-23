const button = document.getElementById('chatbot-button');
const iFrameContainer = document.getElementById('iFrameContainer');

button.addEventListener('click', function(event) {
  iFrameContainer.style.visibility = 'visible';
});
