function getUrlDetails(url) {
    try {

        const parsedUrl = new URL(url);


        const protocol = parsedUrl.protocol.replace(':', ''); 
        const domain = parsedUrl.hostname;
        const path = parsedUrl.pathname;


        const details = `Протокол: ${protocol}, Домен: ${domain}, Путь: ${path}`;


        console.log(details);
    } catch (e) {
        console.error("Некорректный URL:", e.message);
    }
}


getUrlDetails("https://itstep.org/ua/about"); 
getUrlDetails("http://example.com/path/to/resource"); 
getUrlDetails("ftp://ftp.example.com/file"); 
