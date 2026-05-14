const filterButtons = document.querySelectorAll(".filter-button");
const bikeCards = document.querySelectorAll(".bike-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    bikeCards.forEach((card) => {
      const types = card.dataset.type.split(" ");
      card.classList.toggle("hidden", filter !== "all" && !types.includes(filter));
    });
  });
});

filterButtons.forEach((button) => {
  button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
});

const enquiryForm = document.querySelector(".enquiry-form");

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim() || "Customer";
  const interest = document.querySelector("#interest").value;
  const message = document.querySelector("#message").value.trim();
  const body = [
    `Namaskar Maa Santoshi Motors, mu ${name}.`,
    `Mote darkar: ${interest}.`,
    message ? `Message: ${message}` : "Available stock, price au paper details janaantu.",
  ].join(" ");

  window.location.href = `https://wa.me/918260184559?text=${encodeURIComponent(body)}`;
});
