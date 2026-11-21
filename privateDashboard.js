
let universities = [
    {
        name: "American International University-Bangladesh (AIUB)",
        link: "aiub.html",
        budget: null,
        location: ""
    },
    {
        name: "BRAC University",
        link: "brac.html",
        budget: null,
        location: ""
    },
    {
        name: "North South University (NSU)",
        link: "nsu.html",
        budget: null,
        location: ""
    },
    {
        name: "Daffodil International University (DIU)",
        link: "diu.html",
        budget: null,
        location: ""
    },
    {
        name: "United International University (UIU)",
        link: "uiu.html",
        budget: null,
        location: ""
    },
    {
        name: "East West University (EWU)",
        link: "ewu.html",
        budget: null,
        location: ""
    },
    {
        name: "Ahsanullah University of Science and Technology (AUST)",
        link: "aust.html",
        budget: null,
        location: ""
    },
    {
        name: "South East University (SEU)",
        link: "seu.html",
        budget: null,
        location: ""
    },
    {
        name: "Independent University Bangladesh (IUB)",
        link: "iub.html",
        budget: null,
        location: ""
    },
    {
        name: "Northern University Bangladesh (NUB)",
        link: "nub.html",
        budget: null,
        location: ""
    }
];


// Display universities

function displayUniversities(list) {

    let universityList = document.getElementById("universityList");

    universityList.innerHTML = "";

    list.forEach(function(university) {

        let button = document.createElement("button");

        button.innerHTML = university.name;

        button.onclick = function() {
            openUniversity(university.link);
        };

        universityList.appendChild(button);

    });
}


// Open university page

function openUniversity(link) {

    window.location.href = link;

}


// Find universities by budget

function findBudget() {

    let budgetInput = document.getElementById("budget").value;

    let budget = Number(budgetInput);

    if (budgetInput === "" || budget <= 0) {

        alert("Please enter a valid budget.");

        return;
    }

    let result = universities.filter(function(university) {

        return university.budget !== null &&
               university.budget <= budget;

    });

    if (result.length === 0) {

        alert("No matching universities found. Please add university fee data.");

    }
    else {

        displayUniversities(result);

    }
}


// Find universities by location

function findLocation() {

    let location = document.getElementById("location").value;

    if (location === "") {

        alert("Please select a location first.");

        return;
    }

    let result = universities.filter(function(university) {

        return university.location === location;

    });

    if (result.length === 0) {

        alert("No matching universities found. Please add university location data.");

    }
    else {

        displayUniversities(result);

    }
}


// Sort universities

function sortUniversities() {

    let sort = document.getElementById("sort").value;

    if (sort === "") {

        alert("Please select a sorting option.");

        return;
    }

    let sortedList = [...universities];

    if (sort === "ascending") {

        sortedList.sort(function(a, b) {

            return a.name.localeCompare(b.name);

        });

    }
    else if (sort === "descending") {

        sortedList.sort(function(a, b) {

            return b.name.localeCompare(a.name);

        });

    }

    displayUniversities(sortedList);

}


// Compare universities

function compareUniversities() {

    let department = document.getElementById("department").value;

    if (department === "") {

        alert("Please select a department first.");

    }
    else {

        alert("You selected " + department +
              ". University fee comparison can be added here.");

    }
}


// Next page

function nextPage() {

    window.location.href = "private2.html";

}


// Show all universities when page loads

displayUniversities(universities);
