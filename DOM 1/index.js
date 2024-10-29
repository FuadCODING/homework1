const names = ["Fuad", "Rashad", undefined, "Anar", "Leman"];

    const nameList = document.getElementById('nameList');
  
    names.forEach(name => {  
        if (name === undefined) {
            name = "будет добавлено в будущем"; 
        }
        const list = document.createElement('li');
        list.textContent = name; 
        nameList.appendChild(list); 
    });