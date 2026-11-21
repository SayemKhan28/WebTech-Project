
// University information
const universities = [
    {
        name: "University of Liberal Arts Bangladesh (ULAB)",
        location: "688 Beribadh Road, Dhaka 1207",
        distance: 0.9135
    },
    {
        name: "Ahsanullah University of Science and Technology (AUST)",
        location: "141 & 142, Love Road, Tejgaon Industrial Area, Dhaka",
        distance: 3.4075
    },
    {
        name: "BRAC University",
        location: "Kha 224, Pragati Sarani, Merul Badda, Dhaka",
        distance: 6.8875
    },
    {
        name: "Northern University Bangladesh (NUB)",
        location: "111/2 Kawla Jame Masjid Road, Dhaka",
        distance: 0.185
    },
    {
        name: "South East University (SEU)",
        location: "252, Tejgaon Industrial Area, Dhaka",
        distance: 8.0765
    },
    {
        name: "Daffodil International University (DIU)",
        location: "Daffodil Smart City, Birulia, Savar",
        distance: 8.5115
    },
    {
        name: "East West University (EWU)",
        location: "A/2, Jahurul Islam Avenue, Dhaka 1212",
        distance: 9.8455
    },
    {
        name: "United International University (UIU)",
        location: "United City, Madani Avenue, Dhaka 1212",
        distance: 11.861
    },
    {
        name: "Independent University, Bangladesh (IUB)",
        location: "Plot 16, Aftab Uddin Ahmed Road, Dhaka",
        distance: 12.3395
    },
    {
        name: "North South University (NSU)",
        location: "Plot 15, Block B, Bashundhara R/A, Dhaka",
        distance: 12.3685
    },
    {
        name: "American International University-Bangladesh (AIUB)",
        location: "408/1, Kuratoli, Khilkhet, Dhaka 1229",
        distance: 13.3255
    }
];

const universityTable = document.getElementById("universityTable");
const searchInput = document.getElementById("searchInput");
const sortDistance = document.getElementById("sortDistance");

// Display university information
function displayUniversities(data) {

    universityTable.innerHTML = "";

    if (data.length === 0) {
        universityTable.innerHTML = `
            <tr>
                <td colspan="4">No University Found!</td>
            </tr>
        `;
        return;
    }

    data.forEach(function(university) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${university.name}</td>
            <td>${university.location}</td>
            <td class="distance">
                ${university.distance.toFixed(4)} KM
            </td>
            <td>
                <button class="notify-btn"
                    onclick="notifyUniversity('${university.name.replace(/'/g, "\\'")}')">
                    Notify
                </button>
            </td>
        `;

        universityTable.appendChild(row);

    });

}



// Sort university by distance
function sortUniversities() {

    let sortedUniversities = [...universities];

    if (sortDistance.value === "low") {

        sortedUniversities.sort(function(a, b) {
            return a.distance - b.distance;
        });

    }

    else if (sortDistance.value === "high") {

        sortedUniversities.sort(function(a, b) {
            return b.distance - a.distance;
        });

    }

    displayUniversities(sortedUniversities);

}

// Notify button
function notifyUniversity(name) {

    alert("You selected: " + name);

}

// Back button
function goBack() {

    window.history.back();

}



sortDistance.addEventListener("change", sortUniversities);

// Initial display
displayUniversities(universities);
