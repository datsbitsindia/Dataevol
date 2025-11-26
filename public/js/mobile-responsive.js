// Mobile Responsive JavaScript Enhancements
(function() {
    'use strict';

    // Mobile responsive utilities
    const MobileResponsive = {
        // Check if device is mobile
        isMobile: function() {
            return window.innerWidth <= 767;
        },

        // Check if device is tablet
        isTablet: function() {
            return window.innerWidth > 767 && window.innerWidth <= 991;
        },

        // Check if device is desktop
        isDesktop: function() {
            return window.innerWidth > 991;
        },

        // Fix mobile navigation
        fixMobileNavigation: function() {
            const navbar = document.querySelector('.navbar');
            const navbarToggler = document.querySelector('.navbar-toggler');
            const offcanvas = document.querySelector('.offcanvas');
                
            if (this.isMobile() && navbar) {
                navbar.style.minHeight = '70px';
                navbar.style.padding = '0.5rem 1rem';
                
                if (navbarToggler) {
                    navbarToggler.style.position = 'absolute';
                    navbarToggler.style.right = '1rem';
                    navbarToggler.style.top = '50%';
                    navbarToggler.style.transform = 'translateY(-50%)';
                }
            }
        },

        // Fix mobile hero section
        fixMobileHero: function() {
            const heroSection = document.querySelector('.hero-section');
            const pageHeader = document.querySelector('.page-header');
            
            if (this.isMobile()) {
                if (heroSection) {
                    heroSection.style.textAlign = 'center';
                    heroSection.style.padding = '100px 0 50px 0';
                    
                    const heroTitle = heroSection.querySelector('h1');
                    if (heroTitle) {
                        heroTitle.style.fontSize = '1.8rem';
                        heroTitle.style.lineHeight = '1.3';
                        heroTitle.style.marginBottom = '1rem';
                    }
                    
                    const heroText = heroSection.querySelector('p');
                    if (heroText) {
                        heroText.style.fontSize = '1rem';
                        heroText.style.lineHeight = '1.5';
                        heroText.style.marginBottom = '1.5rem';
                    }
                    
                    const heroButtons = heroSection.querySelectorAll('.btn');
                    heroButtons.forEach(btn => {
                        btn.style.width = '100%';
                        btn.style.maxWidth = '300px';
                        btn.style.margin = '0 auto 1rem auto';
                        btn.style.display = 'block';
                    });
                }
                
                if (pageHeader) {
                    pageHeader.style.textAlign = 'center';
                    pageHeader.style.padding = '100px 0 50px 0';
                }
            }
        },

        // Fix mobile service boxes
        fixMobileServiceBoxes: function() {
            if (this.isMobile()) {
                const serviceBoxes = document.querySelectorAll('.service-box');
                serviceBoxes.forEach(box => {
                    box.style.marginBottom = '2rem';
                    
                    const row = box.querySelector('.row');
                    if (row) {
                        row.style.flexDirection = 'column';
                        row.style.margin = '0';
                    }
                    
                    const contentPane = box.querySelector('.content-pane');
                    if (contentPane) {
                        contentPane.style.padding = '2rem 1.5rem';
                        contentPane.style.textAlign = 'center';
                        contentPane.style.order = '2';
                    }
                    
                    const imagePane = box.querySelector('.image-pane');
                    if (imagePane) {
                        imagePane.style.minHeight = '200px';
                        imagePane.style.order = '1';
                        
                        const img = imagePane.querySelector('img');
                        if (img) {
                            img.style.width = '100%';
                            img.style.height = '200px';
                            img.style.objectFit = 'cover';
                        }
                    }
                });
            }
        },

        // Fix mobile technology icons - Brand Logos (Business on Trust section)
        fixMobileTechIcons: function() {
            if (this.isMobile() || this.isTablet()) {
                const brandLogoGrid = document.querySelector('.brand-logo-grid');
                if (brandLogoGrid) {
                    brandLogoGrid.style.display = 'flex';
                    brandLogoGrid.style.flexDirection = 'row';
                    brandLogoGrid.style.flexWrap = 'wrap';
                    brandLogoGrid.style.justifyContent = 'center';
                    brandLogoGrid.style.alignItems = 'center';
                    brandLogoGrid.style.gap = '20px';
                    brandLogoGrid.style.padding = '0';
                    brandLogoGrid.style.listStyle = 'none';
                    
                    const logoItems = brandLogoGrid.querySelectorAll('li');
                    logoItems.forEach(item => {
                        item.style.width = 'auto';
                        item.style.minWidth = '150px';
                        item.style.height = 'auto';
                        item.style.minHeight = '90px';
                        item.style.flex = '0 0 auto';
                        item.style.display = 'flex';
                        item.style.alignItems = 'center';
                        item.style.justifyContent = 'center';
                        item.style.padding = '25px 30px';
                        item.style.margin = '0';
                        item.style.background = '#fff';
                        item.style.borderRadius = '16px';
                        item.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                        
                        const img = item.querySelector('img');
                        if (img) {
                            img.style.width = 'auto';
                            img.style.height = 'auto';
                            img.style.maxHeight = '65px';
                            img.style.maxWidth = '140px';
                            img.style.objectFit = 'contain';
                            img.style.display = 'block';
                        }
                    });
                }
            }
        },

        // Fix mobile footer
        fixMobileFooter: function() {
            if (this.isMobile()) {
                const footer = document.querySelector('.footer-section');
                if (footer) {
                    footer.style.textAlign = 'center';
                    footer.style.padding = '40px 0 20px 0';
                    
                    const footerCols = footer.querySelectorAll('.col-lg-3, .col-lg-4, .col-md-6');
                    footerCols.forEach(col => {
                        col.style.width = '100%';
                        col.style.maxWidth = '300px';
                        col.style.marginBottom = '2rem';
                        col.style.textAlign = 'center';
                    });
                    
                    const footerHeadings = footer.querySelectorAll('h5');
                    footerHeadings.forEach(heading => {
                        heading.style.marginBottom = '1rem';
                        heading.style.textAlign = 'center';
                    });
                    
                    const footerLists = footer.querySelectorAll('ul');
                    footerLists.forEach(list => {
                        list.style.listStyle = 'none';
                        list.style.padding = '0';
                        list.style.textAlign = 'center';
                        
                        const listItems = list.querySelectorAll('li');
                        listItems.forEach(item => {
                            item.style.marginBottom = '0.5rem';
                            item.style.textAlign = 'center';
                        });
                    });
                }
            }
        },

        // Fix mobile forms
        fixMobileForms: function() {
            if (this.isMobile()) {
                const forms = document.querySelectorAll('.register-wrap, .contact-form');
                forms.forEach(form => {
                    form.style.margin = '1rem 0';
                    form.style.padding = '2rem 1.5rem';
                    form.style.width = '100%';
                    
                    const formTitle = form.querySelector('h3');
                    if (formTitle) {
                        formTitle.style.textAlign = 'center';
                        formTitle.style.marginBottom = '1.5rem';
                        formTitle.style.fontSize = '1.5rem';
                    }
                    
                    const formControls = form.querySelectorAll('.form-control');
                    formControls.forEach(control => {
                        control.style.width = '100%';
                        control.style.padding = '0.75rem';
                        control.style.fontSize = '1rem';
                        control.style.borderRadius = '8px';
                        control.style.marginBottom = '1rem';
                    });
                    
                    const buttons = form.querySelectorAll('.btn');
                    buttons.forEach(btn => {
                        btn.style.width = '100%';
                        btn.style.padding = '0.75rem';
                        btn.style.fontSize = '1rem';
                        btn.style.marginTop = '1rem';
                    });
                });
            }
        },

        // Fix mobile buttons
        fixMobileButtons: function() {
            if (this.isMobile()) {
                const buttons = document.querySelectorAll('.btn:not(.btn-group .btn):not(.action-btns .btn)');
                buttons.forEach(btn => {
                    if (!btn.closest('.btn-group') && !btn.closest('.action-btns')) {
                        btn.style.width = '100%';
                        btn.style.maxWidth = '280px';
                        btn.style.margin = '0 auto 1rem auto';
                        btn.style.display = 'block';
                        btn.style.textAlign = 'center';
                        btn.style.padding = '0.75rem 1.5rem';
                        btn.style.fontSize = '0.95rem';
                    }
                });
            }
        },

        // Fix Tech Stacks Swiper Slider visibility
        fixTechStacksSlider: function() {
            if (this.isMobile() || this.isTablet()) {
                // Make sure swiper and its content is visible
                const swiperContainer = document.querySelector('.testimonialThreeSwiper');
                if (swiperContainer) {
                    swiperContainer.style.display = 'block';
                    swiperContainer.style.visibility = 'visible';
                    swiperContainer.style.opacity = '1';
                    swiperContainer.style.overflow = 'visible';
                    
                    const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
                    if (swiperWrapper) {
                        swiperWrapper.style.display = 'flex';
                        swiperWrapper.style.visibility = 'visible';
                        swiperWrapper.style.opacity = '1';
                    }
                    
                    const slides = swiperContainer.querySelectorAll('.swiper-slide');
                    slides.forEach(slide => {
                        slide.style.display = 'block';
                        slide.style.visibility = 'visible';
                        slide.style.opacity = '1';
                    });
                    
                    // Make article cards visible
                    const articles = swiperContainer.querySelectorAll('.single-article');
                    articles.forEach(article => {
                        article.style.display = 'block';
                        article.style.visibility = 'visible';
                        article.style.opacity = '1';
                        article.style.background = '#fff';
                        article.style.borderRadius = '16px';
                        article.style.overflow = 'hidden';
                        article.style.boxShadow = '0 4px 25px rgba(0,0,0,0.1)';
                    });
                    
                    // Make article images visible
                    const articleImgs = swiperContainer.querySelectorAll('.article-img');
                    articleImgs.forEach(imgContainer => {
                        imgContainer.style.display = 'block';
                        imgContainer.style.visibility = 'visible';
                        imgContainer.style.opacity = '1';
                        imgContainer.style.height = '200px';
                        imgContainer.style.overflow = 'hidden';
                        
                        const img = imgContainer.querySelector('img');
                        if (img) {
                            img.style.width = '100%';
                            img.style.height = '100%';
                            img.style.objectFit = 'cover';
                            img.style.display = 'block';
                            img.style.visibility = 'visible';
                            img.style.opacity = '1';
                        }
                    });
                    
                    // Make article content visible
                    const articleContents = swiperContainer.querySelectorAll('.article-content');
                    articleContents.forEach(content => {
                        content.style.display = 'block';
                        content.style.visibility = 'visible';
                        content.style.opacity = '1';
                        content.style.padding = '20px';
                        content.style.textAlign = 'center';
                    });
                }
            }
        },

        // Handle window resize
        handleResize: function() {
            this.fixMobileNavigation();
            this.fixMobileHero();
            this.fixMobileServiceBoxes();
            this.fixMobileTechIcons();
            this.fixTechStacksSlider();
            this.fixMobileFooter();
            this.fixMobileForms();
            this.fixMobileButtons();
        },

        // Initialize mobile responsive fixes
        init: function() {
            // Apply fixes on load
            this.handleResize();
            
            // Apply fixes on window resize
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    this.handleResize();
                }, 250);
            });
            
            // Fix mobile navigation toggle
            const navbarToggler = document.querySelector('.navbar-toggler');
            if (navbarToggler) {
                navbarToggler.addEventListener('click', function() {
                    const offcanvas = document.querySelector('.offcanvas');
                    if (offcanvas) {
                        offcanvas.classList.toggle('show');
                    }
                });
            }
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                const offcanvas = document.querySelector('.offcanvas.show');
                const navbarToggler = document.querySelector('.navbar-toggler');
                
                if (offcanvas && !offcanvas.contains(e.target) && !navbarToggler.contains(e.target)) {
                    offcanvas.classList.remove('show');
                }
            });
            
            // Smooth scroll for mobile
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            MobileResponsive.init();
        });
    } else {
        MobileResponsive.init();
    }

    // Make it globally available
    window.MobileResponsive = MobileResponsive;

})();