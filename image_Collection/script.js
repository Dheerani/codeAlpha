const galleries = {
    html: [
      "https://via.placeholder.com/600x300/ff5733/ffffff?text=HTML+1",
      "https://via.placeholder.com/600x300/ff6f61/ffffff?text=HTML+2",
      "https://via.placeholder.com/600x300/ff8a65/ffffff?text=HTML+3"
    ],
    css: [
      "https://via.placeholder.com/600x300/3498db/ffffff?text=CSS+1",
      "https://via.placeholder.com/600x300/5dade2/ffffff?text=CSS+2",
      "https://via.placeholder.com/600x300/85c1e9/ffffff?text=CSS+3"
    ],
    js: [
      "https://via.placeholder.com/600x300/f1c40f/000000?text=JS+1",
      "https://via.placeholder.com/600x300/f39c12/000000?text=JS+2",
      "https://via.placeholder.com/600x300/f4d03f/000000?text=JS+3"
    ]
  };
  
  let currentLang = 'html';
  let currentIndex = 0;
  
  function showGallery(lang, event) {
    currentLang = lang;
    currentIndex = 0;
    updateGallery();
  
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
  }
  
  function updateGallery() {
    const container = document.getElementById('gallery-container');
    container.innerHTML = '';
  
    galleries[currentLang].forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.className = i === currentIndex ? 'active' : '';
      container.appendChild(img);
    });
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % galleries[currentLang].length;
    updateGallery();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + galleries[currentLang].length) % galleries[currentLang].length;
    updateGallery();
  }
  
  // Load default
  window.onload = updateGallery;
  