function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}
// JavaScript for Accordion-like behavior with smooth transition
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;

        // Toggle the display of the FAQ answer
        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            faqAnswer.style.maxHeight = null;
        } else {
            faqAnswer.style.display = 'block';
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // FAQ Toggle Functionality
    const toggles = document.querySelectorAll('.flat-toggle');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.querySelector('.toggle-content');
        if (this.classList.contains('active')) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  
    // Tab Active State Functionality
    const menuTabs = document.querySelectorAll('.menu-tab li');
    menuTabs.forEach((tab, index) => {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs
        menuTabs.forEach(tab => tab.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
  
        // Show the corresponding FAQ content
        const allContent = document.querySelectorAll('.content-tab .flat-toggle');
        allContent.forEach(content => content.style.display = 'none');  // Hide all contents
        allContent[index].style.display = 'block';  // Show the corresponding content
      });
    });
  });
  