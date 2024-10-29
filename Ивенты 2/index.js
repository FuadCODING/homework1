const goods = [
    {
        product_name: "Kişi şalı",
        product_description: "Səliqəli, çoxrəngli",
        product_price: 25,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Qadın paltarı",
        product_description: "Rəngarəng, rahat",
        product_price: 50,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami küçəsi 23",
    },
    {
        product_name: "Klassik ayaqqabılar",
        product_description: "Klassik dizayn",
        product_price: 70,
        store_name: "Şah Mətbəxi",
        store_address: "Bakı şəhəri, Fəvvarələr meydanı",
    },
    {
        product_name: "Yaz köynəyi",
        product_description: "Yaz üçün mükəmməl",
        product_price: 30,
        store_name: "Bahar Ticarət Mərkəzi",
        store_address: "Bakı şəhəri, Xətai prospekti 15",
    },
    {
        product_name: "Şalvar",
        product_description: "Rahat, gündəlik istifadə üçün",
        product_price: 40,
        store_name: "Gündəlik Moda",
        store_address: "Bakı şəhəri, 28 May",
    }
];

function performSearch() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const criteria = document.querySelector('input[name="criteria"]:checked').value;
    const resultsContainer = document.getElementById('results-container');
    
    resultsContainer.innerHTML = ''; 

    const filteredGoods = goods.filter(good => {
        const valueToCheck = good[criteria].toString().toLowerCase();
        return valueToCheck.includes(input); 
    });

    filteredGoods.forEach(good => {
        const div = document.createElement('div');
        div.className = 'product';
        div.textContent = `${good.product_name} - ${good.product_description} (${good.product_price}₼)`;
        resultsContainer.appendChild(div);
    });

    if (filteredGoods.length === 0) {
        resultsContainer.textContent = 'Ничего не найдено';
    }
}

document.getElementById('search-button').onclick = performSearch;
