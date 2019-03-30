class componentsUI {
  constructor(tag) {
    this.tag = tag;
    this.attributes = [];
    this.content = "";
  }
  setAttribute(name, value) {
    var attribute = {
      name: name,
      value: value
    };
    this.attributes.push(attribute);
  }
  setContent(content) {
    this.content += content;
  }
  render(parent) {
    var elementHTML = document.createElement(this.tag);
    this.attributes.forEach(function(element, index, array) {
      elementHTML.setAttribute(element.name, element.value);
    });
    elementHTML.textContent = this.content;
    parent.appendChild(elementHTML);
  }
}
class Button extends componentsUI {
  clickMe() {
    console.log("I'm clicked");
  }
}
var body = document.body;
var div1 = new componentsUI("div");
div1.setAttribute("id", "divHeader");
div1.setAttribute("style", "border: 2px solid black;");
div1.setContent("test 1");
div1.render(body);

var button1 = new Button("button");
button1.setAttribute("class", "button1");
button1.setAttribute(
  "style",
  "background-color: navy; width: 50px; height: 25px;"
);
button1.render(body);
button1.clickMe();
