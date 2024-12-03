function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("show");
}

// Optional: Close dropdown when clicking outside
window.onclick = function (event) {
    if (!event.target.matches('button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

//Function to toggle the dropdown




function toggleDropdown() {
    const dropdownAdoptMenu = document.getElementById("dropdownAdoptMenu");
    dropdownAdoptMenu.classList.toggle("show"); // Toggle the visibility of the dropdown
}   

// Add event listener to the "ADOPT" link to toggle the dropdown
document.querySelector('.nadopt').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent the default anchor behavior (page reload)
    toggleDropdown();  // Toggle the dropdown menu visibility
});

// Optional: Close the dropdown when clicking outside
window.onclick = function (event) {
    const nadoptDiv = document.querySelector('.nadopt');
    const dropdownContent = document.getElementById("dropdownAdoptMenu");

    // Close the dropdown if the clicked element is outside of the "nadopt" div
    if (!nadoptDiv.contains(event.target)) {
        dropdownContent.classList.remove('show');
    }
};

function submiT(event) {
    form = document.getElementById('forms');
       if (form.checkValidity()) {
           alert('Thank you for submitting your response.');
       }
   }