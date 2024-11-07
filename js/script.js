// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// shopping-cart
const shopCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shopCart.classList.toggle("active");
  e.preventDefault();
};

// klik luar = hilang nav
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shopCart.contains(e.target)) {
    shopCart.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("popup-close");
  const popupCta = document.querySelector(".popup-cta");

  // Show popup when the page loads
  setTimeout(() => {
    popup.classList.add("show");
  }, 1000); // delay of 1 second before showing

  // Close popup when "x" is clicked
  closePopup.addEventListener("click", function () {
    popup.classList.remove("show");
  });

  // Close popup when clicking outside the content area
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.classList.remove("show");
    }
  });

  popupCta.addEventListener("click", function () {
    popup.classList.remove("show");
  });
});
