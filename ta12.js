function generatePassword(length) {
    const amounts = generateFourNumbers(length);
    const mins = amounts[0];
    const mays = amounts[1];
    const nums = amounts[2];
    const sims = amounts[3];
    const minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];    
    const mayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const simbolos = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '?'];
    let index = 0;
    let password = [];
    for (let i = 0; i < mins; i++) {
        password[index] = getRandomElement(minusculas);
        index++;
    }
    for (let i = 0; i < mays; i++) {
        password[index] = getRandomElement(mayusculas);
        index++;
    }
    for (let i = 0; i < nums; i++) {
        password[index] = getRandomElement(numeros);
        index++;
    }
    for (let i = 0; i < sims; i++) {
        password[index] = getRandomElement(simbolos);
        index++;
    }

    shuffleArray(password);
    console.log(password.join(''));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateFourNumbers(total) {
    const num1 = Math.floor(Math.random() * (total - 3)) + 1;
    const num2 = Math.floor(Math.random() * (total - num1 - 2)) + 1;
    const num3 = Math.floor(Math.random() * (total - num1 - num2 - 1)) + 1;
    const num4 = total - num1 - num2 - num3;
    const result = [num1, num2, num3, num4];
    return result;
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
