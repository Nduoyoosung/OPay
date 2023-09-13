// header dropdown

const dropBtn = document.getElementById('dropbtn');
const dropContent = document.getElementById('dropcontent');

dropBtn.addEventListener('click', () => {
  dropContent.classList.toggle('show');
  dropC.classList.remove('show');
});

const dropB = document.getElementById('dropbtn2');
const dropC = document.getElementById('dropcontent2');

dropB.addEventListener('click', () => {
  dropContent.classList.remove('show');
  dropC.classList.toggle('show');
});

// for scroll to top arrow
window.onscroll = () => {
  const scroll = document.getElementById("go-up");
  scroll.classList.toggle('sticky', window.scrollY > 1000);
}
