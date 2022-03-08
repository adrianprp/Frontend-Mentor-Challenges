const form = document.getElementById('form');
const email =document.getElementById('email');

form.addEventListener('submit',function(e){
  e.preventDefault();
  const email =form['email'];
  const emailValue = email.value;
  const small = form.querySelector('small');

  if(!emailValue){
    email.classList.add('error');
    small.innerText = 'Email field cannot be blank!';
    small.style.display = 'inline-block';
  }else if(!isValidEmail(emailValue)){
    email.classList.add('error');
    small.innerText = 'Please provide a valid email address';
    small.style.display = 'inline-block';
  }else{
    email.classList.remove('error');
    small.innerText = '';
    small.style.display = 'none';
  }
});



const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
