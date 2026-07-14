const button = document.querySelector('.menubtn');
const navigation = document.querySelector('#navigation');

if (button && navigation) {
  button.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.textContent = isOpen ? 'Sluiten' : 'Menu';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = 'Menu';
    });
  });
}
