function openPopup(card) {
  var popup = document.getElementById("servicePopup");
  var popupDetails = document.getElementById("popupDetails");
  popupDetails.innerHTML = card.querySelector(".service-details").innerHTML;

  // Get the service item text
  var serviceItem = card.querySelector(".service-item").textContent;
  var popupContent = popup.querySelector(".popup-content");

  // Set the background image based on the service item
  switch (serviceItem) {
    case "Men's Waxing":
      popupContent.style.backgroundImage = "url('images/Services/man-getting-his-chest-waxed-with-wax-strip.jpg')";
      break;
    case "Women's Waxing":
      popupContent.style.backgroundImage = "url('images/Services/waxing.jpg')";
      break;
    case "Facials":
      popupContent.style.backgroundImage = "url('images/Services/facials.jpg')";
      break;
    case "LED Anti-Aging Therapy":
      popupContent.style.backgroundImage = "url('images/Services/ledTherapy.jpg')";
      break;
    case "Micro Channeling":
      popupContent.style.backgroundImage = "url('images/Services/microchanneling.jpg')";
      break;
    case "Eyebrow and Facial Waxing Services":
      popupContent.style.backgroundImage = "url('images/Services/eyebrowsandfacial.jpg')";
      break;
    case "Microdermabrasion":
      popupContent.style.backgroundImage = "url('images/Services/microderm.jpg')";
      break;
    case "CBD Infusion":
      popupContent.style.backgroundImage = "url('images/Services/CBD.jpg')";
      break;
    default:
      popupContent.style.backgroundImage = "none";
  }

  popup.style.display = "block";
  document.body.style.overflow = "hidden";
}
  
  function closePopup() {
    var popup = document.getElementById("servicePopup");
    popup.style.display = "none";
    document.body.style.overflow = "";
  }
  
  // Added function
  function closePopupOnOutsideClick(event) {
    var popup = document.getElementById("servicePopup");
    if (event.target === popup) {
      closePopup();
    }
  }
  
  // Added event listener
  window.addEventListener("click", closePopupOnOutsideClick);