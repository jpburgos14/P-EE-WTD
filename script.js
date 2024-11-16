function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Close the modal when the user clicks outside of it
  window.onclick = function (event) {
    const modal = document.getElementById('lightPollutionModal');
    if (event.target === modal) {
      closeModal('lightPollutionModal');
    }
  }
  
  // Navigation bar hover animation
  const header = document.querySelector("header");
  
  header.addEventListener("mouseover", () => {
    header.style.top = "0"; // Show the header
  });
  
  header.addEventListener("mouseout", () => {
    header.style.top = "-75px"; // Hide the header 
  });