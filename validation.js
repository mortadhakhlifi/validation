// validation.js
function validateForm() {
    var cin = document.getElementById('cin').value;
    var name = document.getElementById('name').value;
    var firstName = document.getElementById('firstName').value;

    if (!(/^\d{1,8}$/.test(cin))) {
        alert('Please enter a valid CIN (up to 8 digits).');
        return false;
    }

    if (/\d/.test(name) || /\d/.test(firstName)) {
        alert('Name and first name should not contain numeric characters.');
        return false;
    }

    return true;
}