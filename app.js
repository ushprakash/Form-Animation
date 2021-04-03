function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            
            if(input.type === "text" && validateUser(input)){
                nextSlide(parent,nextForm);
            }else if(input.type === 'email' && validateEmail(input)){
                nextSlide(parent,nextForm);
            }else if(input.type === "password" && validateUser(input)){
                nextSlide(parent,nextForm);
            }else{
                parent.style.animation = "shake 0.5s ease";
            }
            
        });
    });
}

function validateUser(user){
    if(user.value.length < 6){
        error('red');
    }else{ 
        error('green');
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error('green');
        return true;
    }else{
        error('red');
    }
}

function nextSlide(parent,nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color){
    document.body.style.backgroundColor = color;
}

animatedForm();