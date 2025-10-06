// Parallax scroll effect for hero background
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const offset = window.pageYOffset;
  hero.style.backgroundPositionY = offset * 0.5 + 'px';
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ---------- Gallery Page Logic ----------
const paintings = [
  {
    id: 1,
    title: "Whispers of Nature",
    artist: "Sandinu S.",
    desc: "A gentle portrayal of serenity inspired by forest whispers and morning dew.",
    price: "LKR 18,000",
    status: "Unavailable",
    img: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Golden Dusk",
    artist: "Watheesha A.",
    desc: "Warm tones capturing the tranquil silence of a sunset fading into night.",
    price: "LKR 22,500",
    status: "Available",
    img: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Echoes of Blue",
    artist: "Kawya S.",
    desc: "An abstract piece representing emotion and depth through oceanic hues.",
    price: "LKR 26,000",
    status: "Sold Out",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  }
];

const cards = document.querySelectorAll('.painting-card');
const panel = document.getElementById('details-panel');
const closeBtn = document.querySelector('.close-btn');

if (cards) {
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      const p = paintings.find(x => x.id === id);
      if (p) {
        document.getElementById('detail-img').src = p.img;
        document.getElementById('detail-title').textContent = p.title;
        document.getElementById('detail-artist').textContent = "by " + p.artist;
        document.getElementById('detail-desc').textContent = p.desc;
        document.getElementById('detail-price').textContent = p.price;
        document.getElementById('detail-status').textContent = p.status;
        panel.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    panel.classList.remove('open');
    document.body.style.overflow = 'auto';
  });
}

// Scroll fade-in for sections
document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll('.fade-in');

  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: stop observing
      }
    });
  }, observerOptions);

  faders.forEach(fader => {
    observer.observe(fader);
  });
});
