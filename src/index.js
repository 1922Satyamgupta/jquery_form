lst = [];
error_msg = [];
function fetchData() {
  let id = document.getElementById("product-id").value;
  let name = document.getElementById("product-Name").value;
  let price = document.getElementById("product-Price").value;
  item = {
    id: id,
    name: name,
    price: price,
  };
  if (checkunique(id) == false) {
    lst.push(item);
  }
  return item;
}
function checkunique(id) {
  for (let i = 0; i < lst.length; i++) {
    if (lst[i].id == id) {
      alert("enter unique id!");
      return true;
    }
  }
  return false;
}
function display() {
  let table = document.getElementById("tbl");
  table.innerHTML =
    "<th>Prodcut id</th> <th>Prodcut Name</th> <th>Prodcut Price </th>";
  lst.forEach((element) => {
    table.innerHTML += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.price}</td></tr>`;
  });
}
function myFunction() {
  let fetchedData = fetchData();
  console.log(fetchedData);
  display();
}