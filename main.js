var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
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
    var usernameElement = document.getElementById('username');
    // Check if all the required elements exist
    if (nameElement && usernameElement && pictureElement && addressElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Gather all the form data
        var picture = (_a = pictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var pictureurl = picture ? URL.createObjectURL(picture) : "";
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username_1 = usernameElement.value.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, ''); // Sanitize username
        var uniquePath = "resume/".concat(username_1, "_cv.html");
        // HTML content for the resume
        var resumeOutput = "\n            <h2>Personal Information</h2>\n            ".concat(pictureurl ? "<img src=\"".concat(pictureurl, "\" alt=\"Profile picture\" class=\"profile-picture-preview\">") : '', "\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <h2>Education</h2>\n            <p> ").concat(education, "</p>\n            <h2>Experience</h2>\n            <p>").concat(experience, "</p>\n            <h2>Skills</h2>\n            <p>").concat(skills, "</p>\n        ");
        // Create the download link for the HTML resume
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download your resume 2024';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (!resumeOutputElement) {
            console.error("Resume output container not found!");
            return;
        }
        // Insert resume content into the output container
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden");
        // Container for buttons (PDF and Shareable link)
        var buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttonContainer";
        resumeOutputElement.appendChild(buttonsContainer);
        // Download PDF button
        var downloadButton = document.createElement("button");
        downloadButton.textContent = "Download PDF";
        downloadButton.addEventListener("click", function () {
            window.print(); // Triggers the browser's print functionality for PDF generation
        });
        buttonsContainer.appendChild(downloadButton);
        // Shareable link button with async/await for clipboard handling
        var shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "Copy Shareable link";
        shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
            var shareableLink, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shareableLink = "https://yourdomain.com/resumes/".concat(username_1, "_cv.html");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                    case 2:
                        _a.sent(); // Copy the link to clipboard
                        alert("Shareable link copied to clipboard");
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error("Failed to copy the link", err_1);
                        alert("Failed to copy link to clipboard. Please try again.");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        buttonsContainer.appendChild(shareLinkButton);
        // Append the download link for the HTML resume
        resumeOutputElement.appendChild(downloadLink);
    }
    else {
        console.error('One or more form elements are missing');
    }
});
