document.getElementById('fname').addEventListener('blur', validateFN);
document.getElementById('lname').addEventListener('blur', validateLN);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('mobile').addEventListener('blur', validateMobile);
document.getElementById('zip').addEventListener('blur', validateZip);


function validateFN(){

  const fname = document.getElementById('fname');
  const re = /[a-zA-Z]{2,8}$/;
  if (!re.test(fname.value)) {
    fname.classList.add('invalid');
    fname.classList.remove('valid');
  }else{
    fname.classList.add('valid');
    fname.classList.remove('invalid');
  }

}

function validateLN(){

  const lname = document.getElementById('lname');
  const re = /[a-zA-Z]{2,8}$/;
  if (!re.test(lname.value)) {
    lname.classList.add('invalid');
    lname.classList.remove('valid');
  }else{
    lname.classList.add('valid');
    lname.classList.remove('invalid');
  }

}

function validateEmail(){

  const email = document.getElementById('email');
  const re = /([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.[a-zA-Z]{2,5}$/;
  if (!re.test(email.value)) {
    email.classList.add('invalid');
    email.classList.remove('valid');
  }else{
    email.classList.add('valid');
    email.classList.remove('invalid');
  }

}

function validateMobile(){

  const mobile = document.getElementById('mobile');

  //333 333 3333
  //(333) 333 3333
  //333-333-3333
  //333.333.3333

  //const re = /^\(?\d{3}\)?[.-]?\d{3}[.-]?\d{4}$/;

  //8877952299
  //+91 8877952299
  //91 8877952299
  //(+91)8877952299
  //+91-8877952299
  //(91)8877952299

  const re = /(^\(?[+]?\d{2}\)?)?[\-\w]?\d{10}$/;

  if (!re.test(mobile.value)) {
    mobile.classList.add('invalid');
    mobile.classList.remove('valid');
  }else{
    mobile.classList.add('valid');
    mobile.classList.remove('invalid');
  }

}

function validateZip(){

  const zip = document.getElementById('zip');

  const re = /^[0-9]{6}$/;

  if (!re.test(zip.value)) {
    zip.classList.add('invalid');
    zip.classList.remove('valid');
  }else{
    zip.classList.add('valid');
    zip.classList.remove('invalid');
  }

}
