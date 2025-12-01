/**
 * Performance Optimization Script
 * Lazy loading, preloader optimization, faster page load
 */

(function() {
    'use strict';

    // 1. Fast preloader hide - don't wait for all images
    function hidePreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('loaded');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 200);
        }
    }

    // Hide preloader when DOM is ready (not waiting for all resources)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Hide preloader after a very short delay
            setTimeout(hidePreloader, 300);
        });
    } else {
        setTimeout(hidePreloader, 200);
    }
    
    // Also hide on window load as backup
    window.addEventListener('load', hidePreloader);

    // 2. Lazy load images with Intersection Observer
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        // Load the image
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                        
                        img.onload = function() {
                            img.classList.add('loaded');
                        };
                        
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            images.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.add('loaded');
            });
        }
    }

    // 3. Defer non-critical JavaScript
    function loadDeferredScripts() {
        const deferredScripts = document.querySelectorAll('script[data-defer]');
        deferredScripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.src = script.dataset.src;
            document.body.appendChild(newScript);
        });
    }

    // 4. Optimize AOS (Animate on Scroll) - disable on slow connections
    function optimizeAOS() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        
        if (connection) {
            const slowConnection = connection.effectiveType === 'slow-2g' || 
                                   connection.effectiveType === '2g' ||
                                   connection.saveData === true;
            
            if (slowConnection && typeof AOS !== 'undefined') {
                AOS.init({
                    disable: true
                });
            }
        }
    }

    // 5. Preload critical images on hover
    function preloadOnHover() {
        const links = document.querySelectorAll('a[href]');
        
        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                const href = this.getAttribute('href');
                if (href && href.startsWith('/') && !href.includes('#')) {
                    const preloadLink = document.createElement('link');
                    preloadLink.rel = 'prefetch';
                    preloadLink.href = href;
                    document.head.appendChild(preloadLink);
                }
            }, { once: true });
        });
    }

    // 6. Optimize scroll performance
    function optimizeScroll() {
        let ticking = false;
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    // Scroll-based operations here
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // Initialize all optimizations
    document.addEventListener('DOMContentLoaded', function() {
        lazyLoadImages();
        optimizeAOS();
        preloadOnHover();
        optimizeScroll();
        
        // Load deferred scripts after page is interactive
        setTimeout(loadDeferredScripts, 1000);
    });

    // Mark all images as loaded after window load
    window.addEventListener('load', function() {
        document.querySelectorAll('img').forEach(img => {
            img.classList.add('loaded');
        });
    });

})();
