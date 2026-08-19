// Select HTML elements

const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultBox = document.getElementById("resultBox");

// Show image preview

imageInput.addEventListener("change", function () {

    const file = imageInput.files[0];

    if (!file) return;

    // Check if it is an image
    
    if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image.");
        imageInput.value = "";
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = "block";
    };

    reader.readAsDataURL(file);
});

// Analyze button

analyzeBtn.addEventListener("click", function () {

    if (!imageInput.files.length) {
        alert("Please upload an image first.");
        return;
    }

    resultBox.innerHTML = "<h3>Analyzing image...</h3>";

    // Fake loading 

    setTimeout(() => {

        resultBox.innerHTML = `
            <h3>Analysis Complete</h3>

            <p><strong>Object:</strong> Example Object</p>

            <p><strong>Confidence:</strong> 98%</p>

            <p><strong>Description:</strong> This information will come from the AI backend.</p>

            <p><strong>Status:</strong> Frontend connected successfully.</p>
        `;

    }, 2000);

});