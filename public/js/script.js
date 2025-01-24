(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// For copying the number

let aTag = document.querySelector(".a-tag");
aTag.removeEventListener('click', textCopy);
aTag.addEventListener('click', textCopy);

function textCopy() {
  let textToCopy = aTag.textContent || aTag.innerText;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      Swal.fire({
        text: "Number has been copied.",
        icon: "success",
        timer: 1000, //show only 1s
        showConfirmButton: false,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}


// For cnfirmation alert after submiting the contact form


let btn = document.querySelector('.form-btn');
let form = document.querySelector('form');
let inputs = document.querySelectorAll('input, textarea');


btn.addEventListener('submit', confirmationMsg);

function confirmationMsg(event) {
  event.preventDefault();
  // let form = event.target.closest('form');
  // let inputs = form.querySelectorAll('input, textarea');
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  });

  if (isValid) {
    swal.fire({
      text: "Form has been submitted.",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    }).then(() => {
      form.submit();
        inputs.forEach((input) => {
          input.value = "";
          form.reset();
        });
    });
  } else {
    swal.fire({
      text: "Please complete the form before submitting.",
      icon: "error",
    });
  }
}



// For trigering submit button when enter cliked

inputs.forEach((input) => {
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      btn.classList.add('ative');
      btn.click();
    }
  });

});



// For fliping the picture after some time

let img1 = document.querySelector('.hideImg1');
let img2 = document.querySelector('.hideImg2');

let divImg = document.querySelector('.imgHover');
let flipImage = document.querySelector('.flipImage');

let intervalId; //Global variable 

function startInterval() {
  intervalId = setInterval(() => {
    img1.classList.toggle('hide');
    img2.classList.toggle('hide');
  }, 2000);
}

function flipImg(event) {
  event.preventDefault();
  img1.classList.add('hide');
  img2.classList.add('hide');
  flipImage.classList.toggle('hide')
  clearInterval(intervalId);
};

function flipOver(event) {
  event.preventDefault();
  img1.classList.toggle('hide');
  img2.classList.add('hide');
  flipImage.classList.add('hide');
  startInterval();
};
