const addEmployeeForm = document.getElementById("addemployee-form");
const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const addUserButton = document.getElementById("adduser-btn");
const errorMessage = document.getElementById("error-msg");
const successMessage = document.getElementById("success-msg");
const employeeBox = document.getElementById("employee-box");
let employeeArray = [];
let idCounter = employeeArray.length + 1;
const deleteEmployee = (id) => {
    employeeArray = employeeArray.filter(item => item.id !== id);
    employeeBox.innerHTML = "";
    const html = generateEmployeeList(employeeArray);
    employeeBox.innerHTML = html;
}
const generateEmployeeList = (arr) => {
    let html = "";
    if (arr.length === 0) {
        html += '<p class="text-muted">You have 0 Employees</p>';
        return html;
    }
    arr.map((obj, index) => {
        html += `
            <div class="row">
                <div class="col-left">
                    <div class="employee-content">
                        <div>${index + 1}.</div>
                        <div>Name: ${obj.name}</div>
                        <div>Profession: ${obj.profession}</div>
                        <div>Age: ${obj.age}</div>
                    </div>
                </div>
                <div class="col-right">
                    <button class="btn btn2" onClick="deleteEmployee(${obj.id})">Delete User</button>
                </div>
            </div>
        `;

    });
    return html;
}
document.addEventListener("DOMContentLoaded", () => {
    if (employeeArray.length === 0) {
        const html = '<p class="text-muted">You have 0 Employees</p>';
        employeeBox.innerHTML = html;
    } else if (employeeArray.length > 0) {
        const html = generateEmployeeList(employeeArray);
        employeeBox.innerHTML = html;
    }
});
const inputValidationChecker = () => {
    if (nameInput.value !== "" && professionInput.value !== "" && ageInput.value !== "") {
        return true;
    }
    return false;
}
const addEmployee = () => {
    const newObject = {
        id: idCounter,
        name: nameInput.value,
        profession: professionInput.value,
        age: ageInput.value
    };
    employeeArray.push(newObject);
    idCounter++;
}
const handleAddEmployee = (event) => {
    event.preventDefault();
    if (!inputValidationChecker()) {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    } else {
        addEmployee();
        employeeBox.innerHTML = "";
        const html = generateEmployeeList(employeeArray);
        employeeBox.innerHTML = html;
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
    }
}
addUserButton.addEventListener("click", handleAddEmployee);