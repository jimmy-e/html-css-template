const button = document.getElementById('chatbot-button');
const pawIcon = document.getElementById('paw-icon');
const xIcon = document.getElementById('x-icon');
const iFrameContainer = document.getElementById('iFrameContainer');

button.addEventListener('click', function(event) {
  iFrameContainer.style.visibility = 'visible';
  pawIcon.style.visibility = 'hidden';
  xIcon.style.visibility = 'visible';
});
