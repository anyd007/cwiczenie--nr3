const pass = document.querySelector('#password2');
const p = document.querySelector('.passinfo');
const copyBtn = document.querySelector('#showPass');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const newPass = () =>{
    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
        p.textContent = 'twoje hasło bije inne hałsa na głowę....i nie jest to 1234'
    } else if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)){
        p.textContent =  'jesteś blsko idealnego hasła....dodaj znak specjalny'
    } else {
        p.textContent = 'dasz radę...stać cię na lepsze hasło'
    }
}

const checkPass = () =>{
    if(pass.value === ''){
        p.textContent = 'pole wyżej nie może być puste'
    }else{
        newPass();
    }
    p.style.textTransform = 'uppercase';
}

const copy = () =>{
    
    if(pass.value !== ''){
        pass.select();
    document.execCommand('copy');
    copyBtn.innerHTML = 'skopiowane'
    setTimeout(() =>{
        copyBtn.innerHTML = 'kopiuj hasło'
    }, 2000)
} else{ copyBtn.innerHTML = 'napisz coś'
    setTimeout(() =>{
    copyBtn.innerHTML = 'kopiuj hasło'
}, 1500)
    }
}


pass.addEventListener('keyup', checkPass);
copyBtn.addEventListener('click', copy);