
function showFees() {

    let department = document.getElementById("department").value;

    let fees = "";

    if (department == "CSE") {
        fees = "1,340,000 Tk";
    }

    else if (department == "EEE") {
        fees = "1,266,400 Tk";
    }

    else if (department == "Architecture") {
        fees = "1,360,000 Tk";
    }

    else if (department == "BBA") {
        fees = "1,110,000 Tk";
    }

    else if (department == "English") {
        fees = "880,000 Tk";
    }

    else if (department == "Pharmacy") {
        fees = "1,400,000 Tk";
    }

    else if (department == "Economics") {
        fees = "720,000 Tk";
    }

    else if (department == "LLB") {
        fees = "1,192,500 Tk";
    }

    if (fees == "") {

        document.getElementById("fees").innerHTML = "Total Fees:";

    }

    else {

        document.getElementById("fees").innerHTML =
            "Total Fees: " + fees;

    }

}


function apply() {

    let department = document.getElementById("department").value;

    if (department == "") {

        alert("Please select a department first!");

    }

    else {

        alert("You selected " + department +
        ". Application Fee: 1000 Tk");

    }

}
