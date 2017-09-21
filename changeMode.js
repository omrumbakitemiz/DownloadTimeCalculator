const mode = document.getElementById('modeChange');

mode.addEventListener('change', () => {
  if (mode.checked) {
    document.body.style.backgroundColor = '#7D7D80';
  } else {
    document.body.style.backgroundColor = 'white';
  }
});
