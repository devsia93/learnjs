class Entry {
    API;
    Description;
    Auth;
    Cors;
    Link;
    Category;
}

    constructor(data) {
      Object.assign(this, data);
    }
}

global.XMLHttpRequest = require('xhr2');
const http = new XMLHttpRequest()
http.open("GET", "https://api.publicapis.org/entries")
http.send()
http.onload = () => {
    var entries = new Array()
    var data = JSON.parse(http.responseText)
    for (var entry in data.entries){
        entries.push(new Entry(entry));
    }
}