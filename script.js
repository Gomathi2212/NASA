function showDiv(divNumber) {
    // Hide all divisions
    for (let i = 1; i <= 9; i++) {
        const division = document.getElementById(`division${i}`);
        if (division) {
            division.style.display = 'none';
        }
    }

    // Show the selected division
    const selectedDivision = document.getElementById(`division${divNumber}`);
    if (selectedDivision) {
        selectedDivision.style.display = 'block';
    }
}
