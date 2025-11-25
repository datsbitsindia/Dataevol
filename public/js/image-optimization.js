// Image Optimization Script for Fast Loading
(function() {
    'use strict';

    // Lazy Loading Implementation
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
            });
        }
    }

    // Preload Critical Images
    function preloadCriticalImages() {
        const criticalImages = [
            '/img/logo-white.png',
            '/img/Logo 2.png',
            '/img/favicon.png',
            '/img/banner_image.png'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // Image Compression and WebP Support
    function checkWebPSupport() {
        return new Promise(resolve => {
            const webP = new Image();
            webP.onload = webP.onerror = () => {
                resolve(webP.height === 2);
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });
    }

    // Progressive Image Loading
    function addProgressiveLoading() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            if (!img.complete) {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease-in-out';
                
                img.onload = function() {
                    this.style.opacity = '1';
                };
            }
        });
    }

    // Image Error Handling
    function handleImageErrors() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.onerror = function() {
                this.style.display = 'none';
                console.warn('Failed to load image:', this.src);
            };
        });
    }

    // Initialize all optimizations
    function init() {
        // Preload critical images immediately
        preloadCriticalImages();
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initLazyLoading();
                addProgressiveLoading();
                handleImageErrors();
            });
        } else {
            initLazyLoading();
            addProgressiveLoading();
            handleImageErrors();
        }
    }

    // Start optimization
    init();
})();