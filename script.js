document.addEventListener('DOMContentLoaded', function() {
  const exploreBtn = document.getElementById('exploreBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      document.getElementById('profile').classList.remove('hidden');
      window.scrollTo({ top: document.getElementById('profile').offsetTop, behavior: 'smooth' });
    });
  }

 /* const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', () => {
    if (topBtn) {
      topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
  });*/
/*
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;

  modeToggle.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
  });

  // Kiểm tra trạng thái đã lưu khi tải trang
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  }

 /* const tkdFlip = document.querySelector('.tkd .flip-card');
  if (tkdFlip) {
    tkdFlip.addEventListener('click', () => {
      const slider = document.getElementById('medalSlider');
      if (slider) slider.classList.toggle('hidden');
    });
  }*/
})
document.addEventListener('DOMContentLoaded', function() {
  const topBtn = document.getElementById('topBtn');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // === INTRO TYPEWRITER ===
  function typeIntro() {
    const text = "WELCOME TO MY PROFILE";
    const speed = 100;
    let i = 0;

    function type() {
      if (i < text.length) {
        document.getElementById("intro-typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  // === BANNER TYPEWRITER ===
  function typeBanner() {
    const lines = [
      "Xin chào, mình là Nguyễn Ngọc Như Ý",
      "Hello, I am Nynn",
      "你好，我是阮玉如意"
    ];
    const speed = 100;         // tốc độ gõ ký tự
    const eraseSpeed = 50;     // tốc độ xóa
    const delayBetweenLine = 1000;  // delay giữa các dòng
    const delayAfterFull = 2000;    // delay sau khi gõ hết 3 dòng
    let lineIndex = 0;
    let charIndex = 0;
    let fullText = "";

    function typeLine() {
      if (charIndex < lines[lineIndex].length) {
        fullText += lines[lineIndex].charAt(charIndex);
        document.getElementById("banner-typewriter").innerHTML = fullText.replace(/\n/g, "<br>");
        charIndex++;
        setTimeout(typeLine, speed);
      } else {
        fullText += "\n";
        charIndex = 0;
        lineIndex++;
        if (lineIndex < lines.length) {
          setTimeout(typeLine, delayBetweenLine);
        } else {
          setTimeout(eraseAll, delayAfterFull);
        }
      }
    }

    function eraseAll() {
      if (fullText.length > 0) {
        fullText = fullText.slice(0, -1);
        document.getElementById("banner-typewriter").innerHTML = fullText.replace(/\n/g, "<br>");
        setTimeout(eraseAll, eraseSpeed);
      } else {
        lineIndex = 0;
        charIndex = 0;
        setTimeout(typeLine, speed);
      }
    }

    typeLine();
  }

  // === CHẠY CẢ INTRO VÀ BANNER ===
  typeIntro();
  typeBanner();
});
document.addEventListener('DOMContentLoaded', function() {
  const butterfliesContainer = document.querySelector('.butterflies');
  const butterflyCount = 10; // số lượng bướm

  for (let i = 0; i < butterflyCount; i++) {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.innerHTML = '🦋';
    butterfly.style.left = Math.random() * 100 + '%';
    butterfly.style.animationDuration = (5 + Math.random() * 3) + 's';
    butterfly.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
    butterfly.style.opacity = 0.7 + Math.random() * 0.3;
    butterfliesContainer.appendChild(butterfly);
  }
});
document.addEventListener('scroll', () => {
  document.querySelectorAll('.bar span').forEach(bar => {
    if (bar.getBoundingClientRect().top < window.innerHeight - 50) {
      const width = bar.style.getPropertyValue('--w') || '0%';
      bar.style.width = width;
    }
  });
});
// Tìm thẻ Taekwondo certificate (Thẻ 2)
const tkdCard = document.querySelector('.flip-card.no-flip.tkd'); // Đã thêm lại .no-flip vào selector

// Tìm modal và content của modal
const tkdImagesModal = document.getElementById('tkdImagesModal');
const tkdModalContent = tkdImagesModal.querySelector('.modal-content');

// Mảng chứa đường dẫn đến các hình ảnh Taekwondo cho modal
const taekwondoImagesList = [
  'images/d1.jpg',
  'images/b1.jpg',
  'images/b2.jpg'
  // Thêm các đường dẫn hình ảnh khác của bạn vào đây
];

// Gán sự kiện click cho thẻ Taekwondo (Thẻ 2)
if (tkdCard) {
  tkdCard.addEventListener('click', () => {
    tkdModalContent.innerHTML = ''; // Xóa bất kỳ hình ảnh cũ nào

    taekwondoImagesList.forEach((imageSrc, index) => {
      const img = document.createElement('img');
      img.src = imageSrc;
      tkdModalContent.appendChild(img);

      // Animation "nhảy" vào từng hình
      setTimeout(() => {
        img.classList.add('show');
      }, index * 100);
    });

    tkdImagesModal.style.display = 'block'; // Hiển thị modal
  });
}

// Hàm đóng modal
function closeTkdModal() {
  tkdImagesModal.style.display = 'none';
  tkdModalContent.innerHTML = ''; // Dọn dẹp hình ảnh khi đóng
}

// Đóng modal khi nhấp ra ngoài khu vực modal
window.addEventListener('click', (event) => {
  if (event.target === tkdImagesModal) {
    closeTkdModal();
  }
});
/*
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.orbit-circle');
  const popup = document.getElementById('goalPopup');
  const popupText = document.getElementById('goalPopupText');

  cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      const detail = card.dataset.detail;
      popupText.textContent = detail;
      popup.classList.add('show');
      const rect = card.getBoundingClientRect();

      popup.style.top = (rect.bottom + window.scrollY + 10) + 'px';
      popup.style.left = (rect.left + rect.width / 2) + 'px';
    });

    card.addEventListener('mouseleave', () => {
      popup.classList.remove('show');
    });
  });
});*/

document.querySelectorAll('.galaxy-planet').forEach(planet => {
  planet.addEventListener('click', () => {
    const link = planet.getAttribute('data-link');
    const gallery = planet.getAttribute('data-gallery');
    const message = planet.getAttribute('data-message');

    if (link) {
      window.open(link, '_blank');
    } else if (gallery || message) {
      showGalaxyGallery(gallery, message);
    }
  });
});

function showGalaxyGallery(galleryList, message) {
  const popup = document.createElement('div');
  popup.className = 'galaxy-popup';

  const images = galleryList
    ? galleryList.split(',').map(url => `<img src="${url.trim()}" alt="gallery" />`).join('')
    : '';

  popup.innerHTML = `
    <div class="gallery">${images}</div>
    ${message ? `<p>${message}</p>` : ''}
    <span class="galaxy-close">×</span>
  `;

  document.body.appendChild(popup);
  popup.querySelector('.galaxy-close').onclick = () => popup.remove();
}

//AWARDS//
document.addEventListener('DOMContentLoaded', function() {
  const awardsContainer = document.querySelector('.awards-container');
    
  const awardsData = [
    { name: 'Giải thưởng Xuất sắc Nhất', year: '2023', image: 'images/b1.jpg' },
    { name: 'Chứng nhận Kỹ năng Vàng', year: '2022', image: 'images/b2.jpg' },
    { name: 'Cúp Sáng Tạo', year: '2021', image: 'images/d1.jpg' },
    { name: 'Giải Thành Tựu Trọn Đời', year: '2020', image: 'images/b2.jpg' },
    { name: 'Top Developer', year: '2024', image: 'images/goc1.jpg' },
    { name: 'Best Innovation', year: '2023', image: "images/goc2.jpg"},
  ];

  const numAwards = awardsData.length;
  const containerWidth = awardsContainer.offsetWidth;
  const containerHeight = awardsContainer.offsetHeight;
  const mainCertificate = document.querySelector('.main-certificate');
  const mainCertificateWidth = mainCertificate.offsetWidth;

  function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
  }

  awardsData.forEach((award, index) => {
    const awardItem = document.createElement('div');
    awardItem.classList.add('award-item');
    awardItem.innerHTML = `<img src="${award.image}" alt="${award.name}">
                           <div class="award-info">${award.name} (${award.year})</div>`;
    awardsContainer.appendChild(awardItem);

    let x, y;
    const minDistance = (mainCertificateWidth / 2) + 60; // Khoảng cách tối thiểu từ tâm chứng chỉ chính + padding

    let attempts = 0;
    const maxAttempts = 100; // Giới hạn số lần thử để tránh vòng lặp vô hạn

    do {
      x = getRandomPosition(0, containerWidth - awardItem.offsetWidth);
      y = getRandomPosition(0, containerHeight - awardItem.offsetHeight);

      // Tính toán khoảng cách từ tâm của award-item đến tâm của main-certificate
      const awardCenterX = x + awardItem.offsetWidth / 2;
      const awardCenterY = y + awardItem.offsetHeight / 2;

      const mainCertCenterX = mainCertificate.offsetLeft + mainCertificate.offsetWidth / 2;
      const mainCertCenterY = mainCertificate.offsetTop + mainCertificate.offsetHeight / 2;

      const distance = Math.sqrt(Math.pow(awardCenterX - mainCertCenterX, 2) + Math.pow(awardCenterY - mainCertCenterY, 2));
      attempts++;

      // Thoát vòng lặp nếu không tìm được vị trí hợp lệ sau nhiều lần thử
      if (attempts > maxAttempts) {
        console.warn(`Could not find a suitable position for award ${award.name} after ${maxAttempts} attempts. Placing it randomly.`);
        break;
      }
    } while (distance < minDistance);

    awardItem.style.left = `${x}px`;
    awardItem.style.top = `${y}px`;

    // Áp dụng animation-delay để mỗi award xuất hiện tuần tự
    awardItem.style.animationDelay = `${index * 0.1}s`;
  });

  // Tạo hiệu ứng các ngôi sao nhỏ (tùy chọn)
  const numStars = 50; // Số lượng sao
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = getRandomPosition(1, 4); // Kích thước sao từ 1px đến 4px
    star.style.width = `${size}px`; // Đã sửa lỗi chính tả ở đây
    star.style.height = `${size}px`;
    // Màu sao có thể là trắng, xanh nhạt hoặc hồng nhạt để hợp với vibe neon
    star.style.backgroundColor = Math.random() > 0.5 ? '#fff' : (Math.random() > 0.5 ? '#ccf' : '#fcc');
    star.style.opacity = getRandomPosition(0.4, 0.8);
    star.style.left = `${getRandomPosition(0, containerWidth)}px`;
    star.style.top = `${getRandomPosition(0, containerHeight)}px`;
    star.style.animation = `twinkle ${getRandomPosition(2, 5)}s infinite alternate`;
    awardsContainer.appendChild(star);
  }
});