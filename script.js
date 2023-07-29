document.addEventListener("DOMContentLoaded", () => {
  const phoneNumberInput = document.getElementById("phoneNumberInput");
  const generateLinkButton = document.getElementById("generateLinkButton");
  const whatsAppLink = document.getElementById("whatsAppLink");

  generateLinkButton.addEventListener("click", () => {
    const phoneNumber = phoneNumberInput.value.trim();
    if (phoneNumber !== "") {
      const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
        phoneNumber
      )}`;
      whatsAppLink.innerHTML = `<a href="${whatsappURL}" target="_blank">${whatsappURL}</a>`;
    } else {
      whatsAppLink.innerHTML = "Please enter a valid phone number.";
    }
  });
});
