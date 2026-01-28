// ====================================
// 劉宇寧粉絲網站 - JavaScript
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavigation();
    initScrollEffects();
    initDramaTabs();
    initGalleryEffects();
});

// ====================================
// 導航功能
// ====================================
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.nav-links a');

    // 漢堡選單切換
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // 點擊連結關閉選單
    links.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 滾動時改變導航列樣式
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(255, 195, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(255, 195, 0, 0.2)';
        }
    });

    // 平滑滾動
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ====================================
// 滾動效果
// ====================================
function initScrollEffects() {
    // 元素進入視窗時的動畫
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 觀察所有需要動畫的元素
    const animateElements = document.querySelectorAll(
        '.profile-card, .drama-card, .album-card, .ost-item, .award-card, .gallery-item'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 添加動畫類別樣式
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // 為卡片添加延遲動畫
    const cards = document.querySelectorAll('.drama-card, .album-card, .award-card, .gallery-item');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${(index % 6) * 0.1}s`;
    });
}

// ====================================
// 戲劇作品分頁
// ====================================
function initDramaTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const dramaGrids = document.querySelectorAll('.dramas-grid');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // 移除所有 active 狀態
            tabBtns.forEach(b => b.classList.remove('active'));
            dramaGrids.forEach(g => g.classList.add('hidden'));

            // 添加當前 active 狀態
            this.classList.add('active');
            const targetGrid = document.getElementById(targetTab);
            if (targetGrid) {
                targetGrid.classList.remove('hidden');

                // 重新觸發動畫
                const cards = targetGrid.querySelectorAll('.drama-card');
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    });
}

// ====================================
// 相簿效果
// ====================================
function initGalleryEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });

        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}

// ====================================
// 向日葵跟隨效果（滑鼠移動）
// ====================================
document.addEventListener('mousemove', function(e) {
    const sunflowers = document.querySelectorAll('.sunflower-decoration');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    sunflowers.forEach(sunflower => {
        const offsetX = (mouseX - 0.5) * 20;
        const offsetY = (mouseY - 0.5) * 20;
        sunflower.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${offsetX}deg)`;
    });
});

// ====================================
// 打字機效果（可選）
// ====================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ====================================
// 向日葵飄落效果（背景裝飾）
// ====================================
function createFallingSunflower() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const sunflower = document.createElement('div');
    sunflower.innerHTML = '🌻';
    sunflower.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 20 + 20}px;
        left: ${Math.random() * 100}%;
        top: -50px;
        opacity: ${Math.random() * 0.5 + 0.3};
        pointer-events: none;
        z-index: 0;
        animation: fallDown ${Math.random() * 5 + 5}s linear forwards;
    `;

    hero.appendChild(sunflower);

    setTimeout(() => {
        sunflower.remove();
    }, 10000);
}

// 添加飄落動畫樣式
const fallStyle = document.createElement('style');
fallStyle.textContent = `
    @keyframes fallDown {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(fallStyle);

// 每隔一段時間創建飄落的向日葵
setInterval(createFallingSunflower, 3000);

// ====================================
// 頁面載入完成提示
// ====================================
window.addEventListener('load', function() {
    console.log('🌻 大黃ㄚ頭粉絲站載入完成！');
    console.log('🌻 永遠支持寧哥！');
});
