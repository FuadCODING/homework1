const first = prompt('Укажите обем накопителя')
let sec = ((first * 1000)/ 820)
alert(('число помещаемых файлов ') + (Math.floor(sec)))