const input = document.querySelector('input');
const lowerCaseOutput = document.querySelector('#lowercase span');
const upperCaseOutput = document.querySelector('#uppercase span');
const camelCaseOutput = document.querySelector('#camelcase span');
const pascalCaseOutput = document.querySelector('#pascalcase span');
const snakeCaseOutput = document.querySelector('#snakecase span');
const kebabCaseOutput = document.querySelector('#kebabcase span');
const trimOutput = document.querySelector('#trim span');
function capitalizeString(str) {
    if(!str)
    return str;
    return str[0]?.toUpperCase() + str.slice(1, str.length);
}
function camelCase(string) {
    const lowercaseString = string.toLowerCase();
    const wordsArray = lowercaseString.split(" ");
    const finalArray = wordsArray.map((word, i) => {
        if (i === 0) return word;
        return capitalizeString(word);
    })
    return finalArray.join('');
}
function pascalCase(string) {
    const lowercaseString = string.toLowerCase();
    const wordsArray = lowercaseString.split(" ");
    const finalArray = wordsArray.map((word) => {
        return capitalizeString(word);
    })
    return finalArray.join('');
}
function snakeCase(string) {
    return string.replaceAll(' ', '-');
}
function kebabCase(string) {
    return string.replaceAll(' ', '_');
}
function trimCase(string) {
    return string.replaceAll(' ', '');
}
console.log(camelCase("I am pinky"));
input.addEventListener('input', (e) => {
    lowerCaseOutput.innerText = input.value.toLowerCase();
    upperCaseOutput.innerText = input.value.toUpperCase();
    camelCaseOutput.innerText = camelCase(input.value);
    pascalCaseOutput.innerText = pascalCase(input.value);
    snakeCaseOutput.innerText = snakeCase(input.value);
    kebabCaseOutput.innerText = kebabCase(input.value);
    trimOutput.innerText = trimCase(input.value);
})