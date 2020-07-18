

// let name = document.getElementById('name');
// name.addEventListener('keyup', captureName);
let output = document.getElementById('output');


// function captureName() {
//   output.innerHTML = name.value;
// }

const  formtosubmit = document.getElementById('form');
formtosubmit.addEventListener('submit', logSubmit);

function logSubmit(event) {
  event.preventDefault();
  console.log('event', event);
  output.innerHTML = `<p>${event.target.name.value}</p>
                      <p>${event.target.email.value}</p>`;

}
let emailInput = document.getElementById('email');
emailInput.classList.add('newClassName');