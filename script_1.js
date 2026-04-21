const toggleButtonText = (button) => {
  if (button.textContent === 'Hello World') {
    button.textContent = 'Happy Hacking!';
    button.style.backgroundColor = 'red';
    button.style.color = '#fff';
  } else {
    button.textContent = 'Hello World';
    button.style.backgroundColor = 'blue';
    button.style.color = '#fff';
  }
};