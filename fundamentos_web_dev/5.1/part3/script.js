document.getElementById('header-container').style.backgroundColor = '#00b069';
document.getElementById('footer-container').style.backgroundColor = '#003533';
document.querySelector('.emergency-tasks').style.backgroundColor = '#ff9f84';
for (let index = 0; index < document.querySelectorAll('.emergency-tasks h3').length; index += 1) {
  document.querySelectorAll('.emergency-tasks h3')[index].style.backgroundColor = '#a500f3';
}
document.querySelector('.no-emergency-tasks').style.backgroundColor = '#f9db5e';
for (let index = 0; index < document.querySelectorAll('.no-emergency-tasks h3').length; index += 1) {
  document.querySelectorAll('.no-emergency-tasks h3')[index].style.backgroundColor = '#232525';
}