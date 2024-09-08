var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var pictureElement = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && pictureElement && addressElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var picture = (_a = pictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var pictureurl = picture ? URL.createObjectURL(picture) : "";
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "\n            <h2>Personal Information</h2>\n            ".concat(pictureurl ? "<img src=\"".concat(pictureurl, "\" alt=\"Profile picture\" class=\"profile-picture-preview\">") : '', "\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <h2>Education</h2>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n            <h2>Experience</h2>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n            <h2>Skills</h2>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
    }
    else {
        console.error('One or more output elements are missing');
    }
});
