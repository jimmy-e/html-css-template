const iframe = document.querySelector('#iFrame');

iframe.addEventListener('load', () => {
  console.log('iframe loaded');
  let iframeHeight = iframe.contentWindow.document.body.scrollHeight;
  let iframeWidth = iframe.contentWindow.document.body.scrollWidth;
  console.log('iframe height', iframeHeight);
  console.log('iframe width', iframeWidth);

  iframe.style.height = iframeHeight + 'px';
  iframe.style.width = iframeWidth + 'px';

  document.body.style.paddingBottom = iframeHeight + 20 + 'px';
  document.body.style.paddingRight = iframeWidth + 20 + 'px';
});
