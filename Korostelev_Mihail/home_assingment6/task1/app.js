console.log(document.getElementById("todo-input"));
var liToDO = document.getElementsByTagName('li');
console.log(liToDO[0]);
var liToDO2 = liToDO[0].cloneNode(true);
liToDO[0].parentNode.insertBefore(liToDO2,null);
liToDO2.textContent = 'Second li';
