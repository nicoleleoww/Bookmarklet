(function() {
  alert('Bookmarklet started.');
  let paragraphs = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = 'cat';
    paragraphs[i].style['background-color'] = '#FFFF00';
  }
})();

