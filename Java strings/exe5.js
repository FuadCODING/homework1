function toAbbreviation(phrase) {
    
    let words = phrase.split(/\s+/).filter(word => word.length > 0);
    
    
    let abbreviation = words.map(word => word.charAt(0).toUpperCase()).join('');
    
    return abbreviation;
}


console.log(toAbbreviation("cascading style sheets")); 
console.log(toAbbreviation("объектноориентированное программирование")); 
console.log(toAbbreviation("JavaScript Object Notation")); 
console.log(toAbbreviation("    spaced   out   words   ")); 
