const form = document.getElementById('contact-form');
const successMsg=document.getElementById('success');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject=document.getElementById('subject');
    const message=document.getElementById('message');
    let isValid=true;
    document.querySelectorAll('.error').forEach(el=> el.textContent='');
    successMsg.textContent='';
    if(!name.value.trim()){
        document.getElementById('error-name').textContent='Full name is required';
        isValid=false;
    }
    if(!email.value.includes('@')||!email.value.includes('.')){
        document.getElementById('error-email').textContent='Enter a valid email';
        isValid=false;
    }
    if(!subject.value.trim()){
        document.getElementById('error-subject').textContent='Subject is requried';
        isValid=false;
    }
    if(message.value.trim().length<10){
        document.getElementById('error-message').textContent='Message must be at least 10 characters';
        isValid=false;
    }
    if(isValid){
        successMsg.textContent='Form submitted successfully!';
        form.reset();
    }
});