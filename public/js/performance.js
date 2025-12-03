/**
 * Performance Optimization Script
 * Ultra-fast loading, lazy loading, preloader optimization
 */

(function() {
    'use strict';

    // 1. INSTANT preloader hide - no waiting
    function hidePreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.15s ease';
            setTimeout(() => {
                preloader.style.display = 'none';
                preloader.classList.add('loaded');
            }, 150);
        }
    }

    // Hide preloader IMMEDIATELY when DOM is interactive
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Hide preloader instantly - no delay
            requestAnimationFrame(hidePreloader);
        });
    } else {
        // DOM already ready - hide immediately
        requestAnimationFrame(hidePreloader);
    }
    
    // Backup - force hide after 500ms max
    setTimeout(hidePreloader, 500);
    
    // Also hide on window load as backup
    window.addEventListener('load', hidePreloader);

    // 2. Lazy load images with Intersection Observer - OPTIMIZED
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"], img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        // Load the image
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        
                        // Add loaded class immediately for faster visual feedback
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '100px 0px', // Load images 100px before they enter viewport
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
    
    // 2.5 Critical images - load immediately above the fold
    function loadCriticalImages() {
        const criticalImages = document.querySelectorAll('img:not([loading="lazy"])');
        criticalImages.forEach(img => {
            img.classList.add('loaded');
        });
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

    // Initialize all optimizations - FAST
    document.addEventListener('DOMContentLoaded', function() {
        // Critical first - load immediately
        loadCriticalImages();
        optimizeScroll();
        
        // Then lazy load rest
        requestAnimationFrame(function() {
            lazyLoadImages();
            optimizeAOS();
        });
        
        // Non-critical - defer
        setTimeout(function() {
            preloadOnHover();
            loadDeferredScripts();
        }, 500);
    });

    // Mark all images as loaded after window load
    window.addEventListener('load', function() {
        document.querySelectorAll('img').forEach(img => {
            img.classList.add('loaded');
        });
    });
    
    // 7. Reduce layout shifts - set image dimensions
    function preventLayoutShift() {
        document.querySelectorAll('img:not([width]):not([height])').forEach(img => {
            if (img.naturalWidth && img.naturalHeight) {
                img.setAttribute('width', img.naturalWidth);
                img.setAttribute('height', img.naturalHeight);
            }
        });
    }
    
    window.addEventListener('load', preventLayoutShift);

})();
