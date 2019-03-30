var url = "https://api.github.com/search/repositories";

function makeRequest(url, method, params) {
  var httpRequest = false;

  if (window.XMLHttpRequest) {// Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // IE
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }
  if (!httpRequest) {
    alert("Не вышло :( Невозможно создать экземпляр класса XMLHTTP ");
    return false;
  }
  httpRequest.onreadystatechange = function() {
    parseResponse(httpRequest);
  };
  httpRequest.open(method, url, true);
  httpRequest.send(params);
}

function parseResponse(httpRequest) {
  if (httpRequest.readyState == 4) {
    if (httpRequest.status == 200) {
      var responseData = JSON.parse(httpRequest.responseText);
      var items = responseData.items.slice(0, 10);
      addListItem(items);
    } else if (httpRequest.status == 404) {
      console.log("For O For");
    } else {
      console.error("С запросом возникла проблема.");
    }
  }
}

function search() {
  var searchToString = document.querySelector("#search").value;
  var myRequestURL = url + "?q=" + searchToString;
  makeRequest(myRequestURL, "GET", true);
}

function addListItem(items) {
  var list = document.createElement("ol");

  items.forEach(function(element, i, arr) {
    var li = document.createElement("li");
    var h3 = document.createElement("h3");
    var img = document.createElement("img");
    var p = document.createElement("p");
    var a = document.createElement("a");

    h3.textContent = element.full_name;
    img.setAttribute("src", element.owner.avatar_url);
    img.setAttribute("style", "width:200px; heightL200px;");
    p.textContent = element.description;
    a.setAttribute("href", element.html_url);
    a.textContent = element.html_url;
    a.setAttribute("target", "_blank");

    li.appendChild(h3);
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(a);
    list.appendChild(li);
  });

  var div = document.querySelector("#resultList");
  div.innerHTML = "";
  div.appendChild(list);
}