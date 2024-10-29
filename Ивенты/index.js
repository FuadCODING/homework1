
const goods = [
    'first ',
    'second',
    'third',
    'fourth'
];


let currentCrossedItem = null;
let isBlocked = false; 

function displayGoods() {
    const container = document.getElementById('goods-container');
    container.innerHTML = ''; 

    goods.forEach((good) => {
        const div = document.createElement('div');
        div.textContent = good;
        
        
        div.onclick = () => {
          
            if (isBlocked) {
                return; 
            }

           
            if (currentCrossedItem) {
                currentCrossedItem.classList.remove('crossed');
            }

           
            div.classList.add('crossed');
            currentCrossedItem = div; 
            isBlocked = true; 
        };

        container.appendChild(div);
    });
}

displayGoods();
