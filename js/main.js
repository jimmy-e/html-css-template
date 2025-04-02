const button = document.getElementById('chatbot-button');
const pawIcon = document.getElementById('paw-icon');
const xIcon = document.getElementById('x-icon');
const iFrameContainer = document.getElementById('iFrameContainer');

let isOpen = true;

button.addEventListener('click', function(event) {

  if (isOpen) {
    iFrameContainer.style.visibility = 'visible';
    pawIcon.style.visibility = 'hidden';
    xIcon.style.visibility = 'visible';
  } else {
    iFrameContainer.style.visibility = 'hidden';
    pawIcon.style.visibility = 'visible';
    xIcon.style.visibility = 'hidden';
  }

  isOpen = !isOpen;
});
