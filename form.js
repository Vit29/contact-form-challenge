const form = document.getElementById("form");
const inputsRadios = document.querySelectorAll(".input-radio");

const [equiry, request] = inputsRadios;
inputsRadios.forEach((input) => {
  input.addEventListener("click", () => {
    form.querySelectorAll(".input-radio").forEach((div) => {
      div.classList.remove("selected");
    });
    input.classList.add("selected");
    input.children[0].checked = true;
    equiry.style.border = ' 1px solid var(--Green-600)'
    request.style.border = ' 1px solid var(--Green-600)'
    form.querySelector(".query-type-container .alert").style.display = "none" 
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value.trim()
  const lastName = document.getElementById("last-name").value.trim()
  const querytype = document.querySelector('input[name="query-type"]:checked');
  const email = form.querySelector('input[type="email"]').value.trim()
  const message = document.getElementById('message').value.trim()
  const consent = form.querySelector('input[type="checkbox"]:checked')

  let isValid = true;
  const regex = /^[A-Za-zÀ-ÿ\s]+$/;

  
  console.log(regex.test(lastName))


  if (firstName === "" || !regex.test(firstName)) {
    isValid = false;
    document.querySelector("#first-name + .alert").style.display = "block";
    document.querySelector("#first-name").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector(".alert").style.display = "none";
    document.querySelector("#first-name").style.border ="1px solid var(--Green-600)";
  }

  if (lastName === "" || !regex.test(lastName)) {
    isValid = false;
    document.querySelector("#last-name + .alert").style.display = "block";
    document.querySelector("#last-name").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#last-name + .alert").style.display = "none";
    document.querySelector("#last-name").style.border ="1px solid var(--Green-600)";
  }
 
  if (!emailValidation(email)) {
    form.querySelector('input[type="email"]').style.margin = '0'
    form.querySelector('input[type="email"]').style.border = '1px solid var(--Red)'
    form.querySelector('.email-address .alert').style.display = 'block'  
    form.querySelector('.email-address .alert').style.marginBottom = '0.5rem'  
  } else {
    form.querySelector('input[type="email"]').style.margin = 'initial'
    form.querySelector('input[type="email"]').style.border = '1px solid var(--Green-600)'
    form.querySelector('.email-address .alert').style.display = 'none'  
  }

  if (!querytype) {
    document.querySelector(".query-type-container .alert").style.display = "block" 
    equiry.style.border = "1px solid var(--Red)";
    request.style.border = "1px solid var(--Red)";
  } else {
    document.querySelector(".query-type-container .alert").style.display ="none";
    equiry.style.border = "1px solid var(--Green-600)";
    request.style.border = "1px solid var(--Green-600)";
  }

  if(message === '') {
    form.querySelector('.message .alert').style.display = 'block'
    form.querySelector('.message textarea').style.border = '1px solid var(--Red)'
    
  } else {
    form.querySelector('.message .alert').style.display = 'none'
    form.querySelector('.message textarea').style.border = '1px solid var(--Green-600)'
  }

  if (!consent) {
    form.querySelector('.consent .alert').style.display = 'block'
  } else {
    form.querySelector('.consent .alert').style.display = 'none'
  }

});

function emailValidation (email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email)
}





