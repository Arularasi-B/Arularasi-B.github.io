// var datalist = [
//   { content: "HTML", color: "blue", containerCls: "headerCls" },
//   { content: "CSS", color: "red", containerCls: "headerCls" },
//   { content: "JavaScript", color: "cyan", containerCls: "headerCls" },
// ];
// var rootElement = document.getElementById("root");

// function createHeader(item, container) {
//   var headerDiv = document.createElement("h1");
//   headerDiv.style.color = item.color;
//   headerDiv.style.padding = "10px";
//   headerDiv.innerText = item.content;
//   container.append(headerDiv);
// }

// function createfooter(item, container) {
//   var footerDiv = document.createElement("h1");
//   footerDiv.style.color = item.color;
//   footerDiv.style.padding = "10px";
//   container.append(footerDiv);
// }

// function createWidget(datalist) {
//   for (let i = 0; i < datalist.length; i++) {
//     let dataItem = datalist[i];
//     var container = document.createElement("div");
//     container.className = dataItem.containerCls;
//     rootElement.append(container);

//     createHeader(dataItem, container);

//     var bodyDiv = document.createElement("div");
//     var para1 = document.createElement("p");
//     para1.textContent = "dfdf";
//     bodyDiv.append(para1);
//     container.append(bodyDiv);

//     createfooter(dataItem, container);
//   }
// }

// createWidget(datalist);

// var datalist = [{ content: "HTML", color: "blue", containerCls: "headerCls" }];
//

function validateForm(form) {
  const name = form.name.value;
  const email = form.email.value;
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (!name || !email) {
    alert('Please fill out all required fields');
    return false;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  return true;
}

function submitForm() {
  const form = document.getElementById('myForm');
  if (!validateForm(form)) {
    return;
  }
  form.submit();
}






