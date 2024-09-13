document.getElementById('resumeform')?.addEventListener('submit', function(event) {
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

    if (nameElement && usernameElement && pictureElement && addressElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        
        const picture = pictureElement.files?.[0];
        const pictureurl = picture ? URL.createObjectURL(picture) : "";
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const username = usernameElement.value; 
        
        const uniquePath = `resume/${username.replace(/\s+/g, '_')}_cv.html`;

        const resumeOutput = `
            <h2>Personal Information</h2>
            ${pictureurl ? `<img src="${pictureurl}" alt="Profile picture" class="profile-picture-preview">` : ''}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <h2>Education</h2>
            <p><strong>Education:</strong> ${education}</p>
            <h2>Experience</h2>
            <p><strong>Experience:</strong> ${experience}</p>
            <h2>Skills</h2>
            <p><strong>Skills:</strong> ${skills}</p>
        `;

        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download your resume 2024';

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");

            // Container for buttons
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonContainer";
            resumeOutputElement.appendChild(buttonsContainer);

            // Download PDF button
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download PDF";
            downloadButton.addEventListener("click", () => {
                window.print();
            });

            buttonsContainer.appendChild(downloadButton);

            // Add shareable link
            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable link";
            shareLinkButton.addEventListener("click", async () => {
                try {
                    const shareableLink = `https://yourdomain.com/resumes/${username.replace(/\s+/g, '_')}_cv.html`;
                    await navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied to clipboard");
                } catch (err) {
                    console.error("Failed to copy link", err);
                    alert("Failed to Copy link to clipboard. Please Try again");
                }
            });

            buttonsContainer.appendChild(shareLinkButton);

            resumeOutputElement.appendChild(downloadLink);
        }
    } else {
        console.error('One or more output elements are missing');
    }
});
