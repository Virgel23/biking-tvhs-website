document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();

    // Fix the Read More buttons - Each button controls its own section
    document.querySelectorAll(".read-more").forEach((button) => {
        button.addEventListener("click", function () {
            // Find the closest container (news-item, event, or announcement)
            const parentContainer = this.closest(".news-item, .event, .announcement");

            if (parentContainer) {
                // Find the extra content within the same parent container
                const extraContent = parentContainer.querySelector(".extra-content, .extra-announcement");

                if (extraContent) {
                    if (extraContent.style.display === "none" || extraContent.style.display === "") {
                        extraContent.style.display = "block";
                        this.textContent = "Read Less"; // Change button text
                    } else {
                        extraContent.style.display = "none";
                        this.textContent = "Read More"; // Change button text
                    }
                }
            }
        });
    });
});
