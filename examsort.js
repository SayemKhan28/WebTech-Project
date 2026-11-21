
const universities = [
    {
        name: "Premier University",
        date: "2025-09-22"
    },
    {
        name: "Ahsanullah University Of Science and Technology",
        date: "2025-10-11"
    },
    {
        name: "University of Liberal Arts Bangladesh (ULAB)",
        date: "2025-11-28"
    },
    {
        name: "North South University (NSU)",
        date: "2025-11-29 10:00 AM"
    },
    {
        name: "American International University-Bangladesh",
        date: "2025-12-04 12:00 PM"
    },
    {
        name: "Daffodil International University (DIU)",
        date: "2025-12-05"
    },
    {
        name: "East West University (EWU)",
        date: "2025-12-07"
    },
    {
        name: "BRAC University",
        date: "2025-12-12 09:30 AM"
    },
    {
        name: "Independent University, Bangladesh (IUB)",
        date: "2025-12-19 10:00 AM"
    },
    {
        name: "South East University (SEU)",
        date: "2025-12-23"
    },
    {
        name: "United International University (UIU)",
        date: "2026-01-02 10:00 AM"
    }
];

const table = document.getElementById("examTable");

universities.forEach((university, index) => {

    const row = document.createElement("tr");

    const formattedDate = university.date.replace(
        /^(\d{4})-(\d{2})-(\d{2})/,
        (match, year, month, day) => `${month}/${day}/${year}`
    );

    row.innerHTML = `
        <td>${university.name}</td>
        <td>${formattedDate}</td>
        <td>
            <button class="notify-btn"
                onclick="notifyUniversity(${index})">
                Notify
            </button>
        </td>
    `;

    table.appendChild(row);
});

function notifyUniversity(index) {

    const university = universities[index];

    if ("Notification" in window) {

        Notification.requestPermission().then(permission => {

            if (permission === "granted") {
                new Notification("Admission Orbit Reminder", {
                    body: `${university.name} exam date: ${university.date}`
                });
            } else {
                alert("Please allow notifications in your browser.");
            }

        });

    } else {
        alert("Your browser does not support notifications.");
    }
}
