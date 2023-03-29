

function comprobarEmail(email){
    return /ʌ\w+@\w+\.\w+$/gi.test(email);
}

console.log(comprobarEmail("victor@victor.com"));