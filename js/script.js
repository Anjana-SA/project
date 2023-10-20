function toggleMenu(x) {
    x.classList.toggle("change");
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show-dropdown"); // Toggle the class name
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.container_sub')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-dropdown')) {
                openDropdown.classList.remove('show-dropdown');
                // Also, remove the "change" class from the menu icon
                var menuIcon = document.querySelector('.container_sub');
                menuIcon.classList.remove('change');
            }
        }
    }
}
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
