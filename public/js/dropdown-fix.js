/**
 * Mobile Dropdown Fix - Separate Link and Toggle
 * - Click on text (Services/Industry) = Navigate to page
 * - Click on + icon = Toggle dropdown open/close
 */

(function() {
    'use strict';

    function initializeDropdowns() {
        // Desktop: Use hover for dropdown
        if (window.innerWidth > 991) {
            const dropdownElements = document.querySelectorAll('.navbar-collapse .nav-item.dropdown');
            
            dropdownElements.forEach(function(dropdown) {
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                
                if (dropdownMenu && dropdownToggle) {
                    dropdown.addEventListener('mouseenter', function() {
                        dropdownMenu.classList.add('show');
                        if (dropdownToggle) dropdownToggle.setAttribute('aria-expanded', 'true');
                    });
                    
                    dropdown.addEventListener('mouseleave', function() {
                        dropdownMenu.classList.remove('show');
                        if (dropdownToggle) dropdownToggle.setAttribute('aria-expanded', 'false');
                    });
                }
            });
        }
    }

    // Mobile Dropdown Toggle - Only for + icon
    function initializeMobileDropdowns() {
        const toggleButtons = document.querySelectorAll('.mobile-dropdown-toggle');
        
        toggleButtons.forEach(function(toggle) {
            // Remove any existing listeners
            toggle.replaceWith(toggle.cloneNode(true));
        });
        
        // Re-select after clone
        const freshToggles = document.querySelectorAll('.mobile-dropdown-toggle');
        
        freshToggles.forEach(function(toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const targetId = this.getAttribute('data-target');
                const dropdownContent = document.getElementById(targetId);
                const icon = this.querySelector('i');
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                // Close all other dropdowns first
                document.querySelectorAll('.mobile-dropdown-content.show').forEach(function(menu) {
                    if (menu.id !== targetId) {
                        menu.classList.remove('show');
                        const otherToggle = document.querySelector('[data-target="' + menu.id + '"]');
                        if (otherToggle) {
                            otherToggle.setAttribute('aria-expanded', 'false');
                            const otherIcon = otherToggle.querySelector('i');
                            if (otherIcon) {
                                otherIcon.classList.remove('fa-minus');
                                otherIcon.classList.add('fa-plus');
                            }
                        }
                    }
                });
                
                // Toggle current dropdown
                if (isExpanded) {
                    // Close dropdown
                    if (dropdownContent) dropdownContent.classList.remove('show');
                    this.setAttribute('aria-expanded', 'false');
                    if (icon) {
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');
                    }
                } else {
                    // Open dropdown
                    if (dropdownContent) dropdownContent.classList.add('show');
                    this.setAttribute('aria-expanded', 'true');
                    if (icon) {
                        icon.classList.remove('fa-plus');
                        icon.classList.add('fa-minus');
                    }
                }
            });
        });
    }

    // Re-initialize on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            initializeDropdowns();
        }, 250);
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initializeDropdowns();
            initializeMobileDropdowns();
        });
    } else {
        initializeDropdowns();
        initializeMobileDropdowns();
    }

    // Re-initialize when offcanvas is shown
    const offcanvasElement = document.getElementById('offcanvasWithBackdrop');
    if (offcanvasElement) {
        offcanvasElement.addEventListener('shown.bs.offcanvas', function() {
            initializeMobileDropdowns();
            // Add class to body for hamburger icon toggle
            document.body.classList.add('offcanvas-open');
        });
        
        // Reset dropdowns when offcanvas is hidden
        offcanvasElement.addEventListener('hidden.bs.offcanvas', function() {
            document.querySelectorAll('.mobile-dropdown-content.show').forEach(function(menu) {
                menu.classList.remove('show');
            });
            document.querySelectorAll('.mobile-dropdown-toggle').forEach(function(toggle) {
                toggle.setAttribute('aria-expanded', 'false');
                const icon = toggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });
            // Remove class from body for hamburger icon toggle
            document.body.classList.remove('offcanvas-open');
        });
    }

})();
