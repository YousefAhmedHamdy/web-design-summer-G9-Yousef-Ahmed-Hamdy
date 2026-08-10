function calculateGrade() {
    
    let inputField = document.getElementById("degreeInput");
    let resultElement = document.getElementById("resultMessage");
    let degreeInput = inputField.value;

    
    if (degreeInput.trim() === "" || isNaN(degreeInput)) {
        resultElement.style.color = "red";
        resultElement.textContent = "برجاء إدخال رقم صحيح!";
        return;
    }

    let degree = Number(degreeInput);

    if (degree > 100 || degree < 0) {
        resultElement.style.color = "red";
        resultElement.textContent = "الدرجة يجب أن تكون بين 0 و 100!";
    } else {
        resultElement.style.color = "green";
        
        if (degree >= 95) {
            resultElement.textContent = "Grade: A+";
        } else if (degree >= 90) {
            resultElement.textContent = "Grade: A";
        } else if (degree >= 85) {
            resultElement.textContent = "Grade: B+";
        } else if (degree >= 80) {
            resultElement.textContent = "Grade: B";
        } else if (degree >= 75) {
            resultElement.textContent = "Grade: C+";
        } else if (degree >= 70) {
            resultElement.textContent = "Grade: C";
        } else if (degree >= 65) {
            resultElement.textContent = "Grade: D+";
        } else if (degree >= 60) {
            resultElement.textContent = "Grade: D";
        } else {
            resultElement.style.color = "black";
            resultElement.textContent = "Grade: F";
        }
    }
}