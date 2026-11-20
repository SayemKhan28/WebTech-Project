
const departments = [
    { name: "CSE", cost: 1011500 },
    { name: "EEE", cost: 992000 },
    { name: "BBA", cost: 894500 },
    { name: "English", cost: 894500 },
    { name: "Economics", cost: 894500 },
    { name: "CE", cost: 894500 }
];

const departmentList = document.getElementById("departmentList");

departments.forEach(function(department) {

    departmentList.innerHTML += `
        <tr>
            <td>${department.name}</td>
            <td>${department.cost.toLocaleString("en-US")} Tk</td>
        </tr>
    `;

});

function applyNow() {
    window.open("https://www.iub.edu.bd/", "_blank");
}

function goBack() {
    window.history.back();
}
