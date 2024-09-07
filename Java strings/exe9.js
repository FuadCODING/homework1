function splitString(str, delimiter) {
    let result = [];
    let startIndex = 0;
    
    while (true) {
        let delimiterIndex = str.indexOf(delimiter, startIndex);
        
        if (delimiterIndex === -1) {
            result.push(str.substring(startIndex));
            break;
        }
        
        
        result.push(str.substring(startIndex, delimiterIndex));
        
      
        startIndex = delimiterIndex + delimiter.length;
    }
    
    return result;
}


console.log(splitString("10/03/2010", "/")); 
console.log(splitString("one,two,three", ",")); 
console.log(splitString("meat,milk,candy", "-")); 
