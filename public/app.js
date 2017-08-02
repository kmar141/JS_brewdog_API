var app = function(){
  var url = "https://api.punkapi.com/v2/beers";
  
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  populateList(beers);
};

var populateList = function(beers){
  var ul = document.getElementById('beer-list');
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
  beers.forEach(function(beer){
    var li = document.createElement('li');
    li.innerText = beer.name;
    ul.appendChild(li);
    var img = document.createElement("img");
    img.src = beer.image_url;
    img.className = "photo";
    li.appendChild(img)
  })
}

var showDetails = function(beer) {
  

  var listItem1 = document.createElement("li");
  listItem1.innerText = "Name " + beer.name;
  var listItem2 = document.createElement("img");
  listItem2.src = beer.image_url;
  listItem2.className = "photo";

  ul.appendChild(listItem1);
  ul.appendChild(listItem2);


}


window.addEventListener('load', app);