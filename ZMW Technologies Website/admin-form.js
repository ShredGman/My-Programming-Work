// Handle admin form submission

const form = document.getElementById("admin-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    const title = document.getElementById("website-title").value;
    const description = document.getElementById("website-description").value;
    const product1Image = document.getElementById("product1-image").value;
    const product1Title = document.getElementById("product1-name").value;
    const product1Description = document.getElementById("product1-description").value;
    const product2Image = document.getElementById("product2-image").value;
    const product2Title = document.getElementById("product2-name").value;
    const product2Description = document.getElementById("product2-description").value;
    const product3Image = document.getElementById("product3-image").value;
    const product3Title = document.getElementById("product3-name").value;
    const product3Description = document.getElementById("product3-description").value;

    // Update content only if the input fields are not empty
    if (title) {
        document.querySelector(".website-description h1").textContent = title;
    }

    if (description) {
        document.querySelector(".website-description p").textContent = description;
    }

    if (product1Image) {
        document.querySelector(".product-1 img").src = product1Image;
    }

    if (product1Title) {
        document.querySelector(".product-1 h3").textContent = product1Title;
    }

    if (product1Description) {
        document.querySelector(".product-1 p").textContent = product1Description;
    }

    if (product2Image) {
        document.querySelector(".product-2 img").src = product2Image;
    }

    if (product2Title) {
        document.querySelector(".product-2 h3").textContent = product2Title;
    }

    if (product2Description) {
        document.querySelector(".product-2 p").textContent = product2Description;
    }

    if (product3Image) {
        document.querySelector(".product-3 img").src = product3Image;
    }

    if (product3Title) {
        document.querySelector(".product-3 h3").textContent = product3Title;
    }

    if (product3Description) {
        document.querySelector(".product-3 p").textContent = product3Title;
    }

    // Hide the admin dashboard modal
    const adminDashboardModal = document.getElementById("admin-dashboard-modal");
    adminDashboardModal.style.display = "none";
});

const product1ImageInput = document.getElementById("product1-image");
const product2ImageInput = document.getElementById("product2-image");
const product3ImageInput = document.getElementById("product3-image");
const product1PreviewImage = document.getElementById("product1img-preview");
const product2PreviewImage = document.getElementById("product2img-preview");
const product3PreviewImage = document.getElementById("product3img-preview");

product1ImageInput.addEventListener("input", function() {
    const imageUrl = product1ImageInput.value;
    product1PreviewImage.style.display = "block";
    product1PreviewImage.src = imageUrl;
});

product2ImageInput.addEventListener("input", function() {
    const imageUrl = product2ImageInput.value;
    product2PreviewImage.style.display = "block";
    product2PreviewImage.src = imageUrl;
});

product3ImageInput.addEventListener("input", function() {
    const imageUrl = product3ImageInput.value;
    product3PreviewImage.style.display = "block";
    product3PreviewImage.src = imageUrl;
});