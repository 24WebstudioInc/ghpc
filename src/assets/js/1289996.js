document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      text: "We love our Service Tech Danny!! He is polite, friendly, helpful and professional. He is easy to work with and doesn't seem to mind our pack of dogs!! He lets us know if there are any issues we need to address to help the pest control process work. Our dogs love it when he comes!!",
      name: "Jo Ann L.",
      location: "Sacramento, CA"
    },
    {
      text: "Great service- got rid of bed bugs for reasonable price... other person we had before had no plan and no clarity- Golden Hills had a plan and got the job done.",
      name: "Michelle B.",
      location: "Auburn, CA"
    },
    {
      text: "Golden Hills Pest Control was fast, professional, and very clear about the treatment plan. They explained everything and followed up to make sure the problem was handled.",
      name: "Robert K.",
      location: "Roseville, CA"
    },
    {
      text: "Excellent pest control company. The technician showed up on time, treated the problem areas, and gave us helpful prevention tips. Very happy with the service.",
      name: "Amanda S.",
      location: "Sacramento, CA"
    }
  ];

  const text = document.getElementById("ghpc-testimonial-text");
  const name = document.getElementById("ghpc-testimonial-name");
  const location = document.getElementById("ghpc-testimonial-location");
  const dots = document.querySelectorAll(".ghpc-dot");

  if (!text || !name || !location || !dots.length) return;

  let current = 0;

  function showSlide(index) {
    current = index;

    text.style.opacity = "0";
    name.style.opacity = "0";
    location.style.opacity = "0";

    setTimeout(function () {
      text.textContent = testimonials[index].text;
      name.textContent = testimonials[index].name;
      location.textContent = testimonials[index].location;

      dots.forEach(function (dot, i) {
        dot.style.width = i === index ? "28px" : "7px";
        dot.style.background = i === index ? "#d9b72b" : "rgba(255,255,255,.2)";
      });

      text.style.opacity = "1";
      name.style.opacity = "1";
      location.style.opacity = "1";
    }, 200);
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      showSlide(Number(dot.dataset.slide));
    });
  });

  setInterval(function () {
    showSlide((current + 1) % testimonials.length);
  }, 5000);
});