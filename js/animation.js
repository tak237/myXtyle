// Import GSAP + ScrollTrigger CDN in your HTML:
// <script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
// <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>

gsap.registerPlugin(ScrollTrigger);

// Dùng class riêng biệt cho từng hiệu ứng

gsap.utils.toArray(".gsap-fade-up").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".gsap-fade-down").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".gsap-fade-left").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".gsap-fade-right").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".gsap-zoom-in").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    opacity: 0,
    scale: 0.7,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".gsap-zoom-out").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    opacity: 0,
    scale: 1.3,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".gsap-flip-up").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    opacity: 0,
    rotateX: -90,
    transformOrigin: "bottom",
    duration: 1
  });
});

gsap.utils.toArray(".gsap-flip-down").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    opacity: 0,
    rotateX: 90,
    transformOrigin: "top",
    duration: 1
  });
});

gsap.utils.toArray(".gsap-rotate-in").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    opacity: 0,
    rotate: 180,
    duration: 1
  });
});

gsap.utils.toArray(".gsap-slide-in-left").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    x: -100,
    opacity: 0,
    duration: 1
  });
});

gsap.utils.toArray(".gsap-slide-in-right").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    x: 100,
    opacity: 0,
    duration: 1
  });
});

gsap.utils.toArray(".gsap-slide-in-up").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    y: 100,
    opacity: 0,
    duration: 1
  });
});

gsap.utils.toArray(".gsap-slide-in-down").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset"
    },
    y: -100,
    opacity: 0,
    duration: 1
  });
});


  // Đảm bảo đã load GSAP và ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  const btn = document.getElementById("backToTop");

  // Dùng ScrollTrigger để hiện nút khi scroll xuống 300px
  ScrollTrigger.create({
    start: "top -300", // khi scroll vượt 300px
    toggleClass: { targets: btn, className: "show" },
    onEnter: () => btn.style.display = "block",
    onLeaveBack: () => btn.style.display = "none"
  });

  // Scroll mượt về đầu trang khi bấm
  btn.addEventListener("click", () => {
    gsap.to(window, { duration: 0.2, scrollTo: 0, ease: "power2.out" });
  });
