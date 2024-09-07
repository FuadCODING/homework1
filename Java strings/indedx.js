function getStringStatistics(str) {
    let letters = 0;
    let digits = 0;
    let others = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (/[a-zA-Zа-яА-Я]/.test(char)) {
            letters++;
        } else if (/\d/.test(char)) {
            digits++;
        } else {
            others++;
        }
    }

    alert(`Буквы: ${letters}\nЦифры: ${digits}\nДругие символы: ${others}`);
}

let inputString = "Привет, мир! 12345";
getStringStatistics(inputString);
