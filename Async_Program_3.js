//Only works with servers that allow CORS requests
(async function() {

    let url = 'https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap'
    const res = await fetch(url);
    const data = await res.text();
    console.log(data);

})() 

///Other Examples
var urls = [];
urls.push('http://student.mit.edu/catalog.m1a.html');
urls.push('http://student.mit.edu/catalog.m1b.html');
urls.push('http://student.mit.edu/catalog.m1c.html');
urls.push('http://student.mit.edu/catalog.m2a.html');
urls.push('http://student.mit.edu/catalog.m2b.html');
urls.push('http://student.mit.edu/catalog.m2c.html');

var fetch = require('node-fetch');

var makeRequest = async function (url,counter) {
    
    const response = await fetch(url);
    const data = await response.text();
    return 'Done: ' + counter;

};

urls.forEach(function (url,i){
    
    makeRequest(url,i).then(function(result){
        console.log(result);
    });
})