/**
 * Dropdown Fix - Handles both Desktop and Mobile dropdowns
 * - Desktop: Hover to show dropdown
 * - Mobile: Click on + icon to toggle dropdown
 * 
 * This script runs immediately and also re-initializes on DOMContentLoaded
 * to ensure dropdowns work properly on page refresh
 */

(function() {
    'use strict';

    // Track if already initialized to prevent duplicate event listeners
    var isInitialized = false;
    var isMobileInitialized = false;

    function initializeDesktopDropdowns() {
        // Only run on desktop
        if (window.innerWidth <= 991) return;
        
        var dropdownElements = document.querySelectorAll('.navbar-collapse .nav-item.dropdown');
        
        dropdownElements.forEach(function(dropdown) {
            var dropdownMenu = dropdown.querySelector('.dropdown-menu');
            var dropdownToggle = dropdown.querySelector('.dropdown-toggle, .dropdown-toggle-split');
            var hideTimeout;
            
            if (!dropdownMenu) return;
            
            // Remove existing listeners by cloning
            var newDropdown = dropdown.cloneNode(true);
            dropdown.parentNode.replaceChild(newDropdown, dropdown);
            dropdown = newDropdown;
            dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownToggle = dropdown.querySelector('.dropdown-toggle, .dropdown-toggle-split');
            
            // Show dropdown on mouse enter
            dropdown.addEventListener('mouseenter', function() {
                clearTimeout(hideTimeout);
                
                // Hide all other dropdowns first
                document.querySelectorAll('.navbar-collapse .dropdown-menu.show').forEach(function(menu) {
                    if (menu !== dropdownMenu) {
                        menu.classList.remove('show');
                    }
                });
                
                // Show current dropdown
                dropdownMenu.classList.add('show');
                if (dropdownToggle) {
                    dropdownToggle.setAttribute('aria-expanded', 'true');
                }
            });
            
            // Hide dropdown on mouse leave with small delay
            dropdown.addEventListener('mouseleave', function() {
                hideTimeout = setTimeout(function() {
                    dropdownMenu.classList.remove('show');
                    if (dropdownToggle) {
                        dropdownToggle.setAttribute('aria-expanded', 'false');
                    }
                }, 150);
            });
            
            // Keep dropdown open when hovering over the menu itself
            dropdownMenu.addEventListener('mouseenter', function() {
                clearTimeout(hideTimeout);
            });
            
            dropdownMenu.addEventListener('mouseleave', function() {
                hideTimeout = setTimeout(function() {
                    dropdownMenu.classList.remove('show');
                    if (dropdownToggle) {
                        dropdownToggle.setAttribute('aria-expanded', 'false');
                    }
                }, 150);
            });
            
            // Handle click on dropdown toggle for accessibility
            if (dropdownToggle) {
                dropdownToggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    var isShown = dropdownMenu.classList.contains('show');
                    
                    // Hide all dropdowns
                    document.querySelectorAll('.navbar-collapse .dropdown-menu.show').forEach(function(menu) {
                        menu.classList.remove('show');
                    });
                    
                    // Toggle current dropdown
                    if (!isShown) {
                        dropdownMenu.classList.add('show');
                        this.setAttribute('aria-expanded', 'true');
                    } else {
                        this.setAttribute('aria-expanded', 'false');
                    }
                });
            }
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-item.dropdown')) {
                document.querySelectorAll('.navbar-collapse .dropdown-menu.show').forEach(function(menu) {
                    menu.classList.remove('show');
                    var dropdown = menu.closest('.nav-item.dropdown');
                    var toggle = dropdown ? dropdown.querySelector('.dropdown-toggle, .dropdown-toggle-split') : null;
                    if (toggle) {
                        toggle.setAttribute('aria-expanded', 'false');
                    }
                });
            }
        });
    }

    function initializeMobileDropdowns() {
        var toggleButtons = document.querySelectorAll('.mobile-dropdown-toggle');
        
        toggleButtons.forEach(function(toggle) {
            // Remove existing listeners by cloning
            var newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);
            toggle = newToggle;
            
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                var targetId = this.getAttribute('data-target');
                var dropdownContent = document.getElementById(targetId);
                var icon = this.querySelector('i');
                var isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                // Close all other dropdowns first
                document.querySelectorAll('.mobile-dropdown-content.show').forEach(function(menu) {
                    if (menu.id !== targetId) {
                        menu.classList.remove('show');
                        var otherToggle = document.querySelector('[data-target="' + menu.id + '"]');
                        if (otherToggle) {
                            otherToggle.setAttribute('aria-expanded', 'false');
                            var otherIcon = otherToggle.querySelector('i');
                            if (otherIcon) {
                                otherIcon.classList.remove('fa-minus');
                                otherIcon.classList.add('fa-plus');
                            }
                        }
                    }
                });
                
                // Toggle current dropdown
                if (isExpanded) {
                    if (dropdownContent) dropdownContent.classList.remove('show');
                    this.setAttribute('aria-expanded', 'false');
                    if (icon) {
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');
                    }
                } else {
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

    function initializeAll() {
        initializeDesktopDropdowns();
        initializeMobileDropdowns();
        isInitialized = true;
    }

    // Initialize immediately if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAll);
    } else {
        // DOM is already ready
        initializeAll();
    }

    // Also initialize on window load as backup
    window.addEventListener('load', function() {
        if (!isInitialized) {
            initializeAll();
        }
    });

    // Re-initialize on window resize
    var resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            initializeAll();
        }, 250);
    });

    // Handle offcanvas events
    var offcanvasElement = document.getElementById('offcanvasWithBackdrop');
    if (offcanvasElement) {
        offcanvasElement.addEventListener('shown.bs.offcanvas', function() {
            initializeMobileDropdowns();
            document.body.classList.add('offcanvas-open');
        });
        
        offcanvasElement.addEventListener('hidden.bs.offcanvas', function() {
            document.querySelectorAll('.mobile-dropdown-content.show').forEach(function(menu) {
                menu.classList.remove('show');
            });
            document.querySelectorAll('.mobile-dropdown-toggle').forEach(function(toggle) {
                toggle.setAttribute('aria-expanded', 'false');
                var icon = toggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });
            document.body.classList.remove('offcanvas-open');
        });
    } else {
        // If offcanvas not found yet, wait for DOM
        document.addEventListener('DOMContentLoaded', function() {
            var offcanvas = document.getElementById('offcanvasWithBackdrop');
            if (offcanvas) {
                offcanvas.addEventListener('shown.bs.offcanvas', function() {
                    initializeMobileDropdowns();
                    document.body.classList.add('offcanvas-open');
                });
                
                offcanvas.addEventListener('hidden.bs.offcanvas', function() {
                    document.querySelectorAll('.mobile-dropdown-content.show').forEach(function(menu) {
                        menu.classList.remove('show');
                    });
                    document.querySelectorAll('.mobile-dropdown-toggle').forEach(function(toggle) {
                        toggle.setAttribute('aria-expanded', 'false');
                        var icon = toggle.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-minus');
                            icon.classList.add('fa-plus');
                        }
                    });
                    document.body.classList.remove('offcanvas-open');
                });
            }
        });
    }

})();
