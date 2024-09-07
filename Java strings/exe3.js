function transformString(input) {
    return input
        .replace(/[A-Z]/g, match => match.toLowerCase()) 
        .replace(/[a-z]/g, match => match.toUpperCase()) 
        .replace(/\d/g, '_'); 
}

console.log(transformString("Hello World! 123")); 
console.log(transformString("JavaScript 2024"));  
console.log(transformString("Test Case: A1b2C3")); 
