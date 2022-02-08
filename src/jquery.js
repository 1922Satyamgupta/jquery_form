var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["product_sku"] = document.getElementById("product_sku").value;
    formData["product_name"] = document.getElementById("product_name").value;
    formData["product_price"] = document.getElementById("product_price").value;
    formData["product_quantity"] = document.getElementById("product_quantity").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.product_sku;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product_name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.product_price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.product_quantity;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("product_sku").value = "";
    document.getElementById("product_name").value = "";
    document.getElementById("product_price").value = "";
    document.getElementById("product_quantity").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("product_sku").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product_name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("product_price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("product_quantity").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.product_sku;
    selectedRow.cells[1].innerHTML = formData.product_name;
    selectedRow.cells[2].innerHTML = formData.product_price;
    selectedRow.cells[3].innerHTML = formData.product_quantity;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("product_sku").value == "") {
        isValid = false;
        document.getElementById("product_skuValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("product_skuValidationError").classList.contains("hide"))
            document.getElementById("product_skuValidationError").classList.add("hide");
    }
    return isValid;
}