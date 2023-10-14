function displaySelectedValues(event) {
    event.preventDefault();
  
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const profession = document.getElementById('profession').value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
  
    
  
    if (!firstName || !lastName || !dob || !country || !mobile || !email || !profession || !gender) {
      alert('All fields must be filled out');
      return;
    }
  

    alert('Form submitted successfully!');
  
  


    const genderValues = Array.from(gender).map(input => input.value);

    const popupResults = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Gender:</strong> ${genderValues.join(', ')}</p>
    <p><strong>Profession:</strong> ${profession}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile Number:</strong> ${mobile}</p>
  `;

    document.getElementById('popupResults').innerHTML = popupResults;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('surveyForm').reset();
}

function resetForm() {
    document.getElementById('surveyForm').reset();

}