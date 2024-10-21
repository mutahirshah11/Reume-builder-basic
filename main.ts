document.getElementById('resumeform')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const pictureElement = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const usernameElement = document.getElementById('username') as HTMLInputElement;

    // Check if all the required elements exist
    if (nameElement && usernameElement && pictureElement && addressElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Gather all the form data
        const picture = pictureElement.files?.[0];
        const pictureurl = picture ? URL.createObjectURL(picture) : "";
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const username = usernameElement.value.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, ''); // Sanitize username

        const uniquePath = `resume/${username}_cv.html`;

        // HTML content for the resume
        const resumeOutput = `
            <h2>Personal Information</h2>
            ${pictureurl ? `<img src="${pictureurl}" alt="Profile picture" class="profile-picture-preview">` : ''}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <h2>Education</h2>
            <p> ${education}</p>
            <h2>Experience</h2>
            <p>${experience}</p>
            <h2>Skills</h2>
            <p>${skills}</p>
        `;

        // Create the download link for the HTML resume
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download your resume 2024';

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (!resumeOutputElement) {
            console.error("Resume output container not found!");
            return;
        }

        // Insert resume content into the output container
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden");

        // Container for buttons (PDF and Shareable link)
        const buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttonContainer";
        resumeOutputElement.appendChild(buttonsContainer);

        // Download PDF button
        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download PDF";
        downloadButton.addEventListener("click", () => {
            window.print(); // Triggers the browser's print functionality for PDF generation
        });
        buttonsContainer.appendChild(downloadButton);

        // Shareable link button with async/await for clipboard handling
        const shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "Copy Shareable link";
        shareLinkButton.addEventListener("click", async () => {
            const shareableLink = `https://yourdomain.com/resumes/${username}_cv.html`;
            try {
                await navigator.clipboard.writeText(shareableLink); // Copy the link to clipboard
                alert("Shareable link copied to clipboard");
            } catch (err) {
                console.error("Failed to copy the link", err);
                alert("Failed to copy link to clipboard. Please try again.");
            }
        });
        buttonsContainer.appendChild(shareLinkButton);

        // Append the download link for the HTML resume
        resumeOutputElement.appendChild(downloadLink);
    } else {
        console.error('One or more form elements are missing');
    }
});
