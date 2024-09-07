function toCamelCase(cssStyle) {
    return cssStyle
        .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
        .replace(/^[a-z]/, (match) => match.toLowerCase());
}


console.log(toCamelCase("font-size"));       
console.log(toCamelCase("background-color")); 
console.log(toCamelCase("text-align"));       
console.log(toCamelCase("textalign"));        