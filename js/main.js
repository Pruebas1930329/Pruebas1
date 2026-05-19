 document.addEventListener('DOMContentLoaded', function () {
            // ========== MOBILE SIDEBAR TOGGLE ==========
            const menuToggle = document.getElementById('menuToggle');
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');

            function openSidebar() {
                sidebar.classList.add('open');
                overlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }

            function closeSidebar() {
                sidebar.classList.remove('open');
                overlay.classList.add('hidden');
                document.body.style.overflow = '';
            }

            menuToggle.addEventListener('click', () => {
                if (sidebar.classList.contains('open')) {
                    closeSidebar();
                } else {
                    openSidebar();
                }
            });

            overlay.addEventListener('click', closeSidebar);

            // Close sidebar when a nav link is clicked (mobile)
            document.querySelectorAll('#sideNav a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth < 1024) {
                        closeSidebar();
                    }
                });
            });

            // ========== ACTIVE NAV LINK ON SCROLL ==========
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('.topic-section');

            function updateActiveLink() {
                let currentSectionId = null;
                const scrollPos = window.scrollY + 100;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                        currentSectionId = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + currentSectionId) {
                        link.classList.add('active');
                    }
                });
            }

            window.addEventListener('scroll', updateActiveLink);
            updateActiveLink(); // Initial call

            // ========== EXAMPLE TABS ==========
            document.querySelectorAll('.example-tab').forEach(tab => {
                tab.addEventListener('click', function () {
                    const parent = this.closest('section');
                    const exampleId = this.getAttribute('data-example');

                    // Remove active class from all tabs in this section
                    parent.querySelectorAll('.example-tab').forEach(t => {
                        t.classList.remove('active-tab');
                        t.classList.remove('bg-java-100', 'text-java-700');
                        t.classList.add('bg-gray-100', 'text-gray-600');
                    });

                    // Add active class to clicked tab
                    this.classList.add('active-tab');
                    this.classList.remove('bg-gray-100', 'text-gray-600');
                    this.classList.add('bg-java-100', 'text-java-700');

                    // Hide all example contents, show the selected one
                    parent.querySelectorAll('.example-content').forEach(content => {
                        content.classList.add('hidden');
                    });
                    const targetContent = parent.querySelector('#' + exampleId);
                    if (targetContent) {
                        targetContent.classList.remove('hidden');
                    }
                });
            });

            // ========== EXERCISE TOGGLES ==========
            document.querySelectorAll('.exercise-toggle').forEach(button => {
                button.addEventListener('click', function () {
                    const details = this.nextElementSibling;
                    const icon = this.querySelector('[data-lucide]');

                    if (details.classList.contains('open')) {
                        details.classList.remove('open');
                        if (icon) {
                            icon.style.transform = 'rotate(0deg)';
                        }
                    } else {
                        // Close all other open exercises in the same section first
                        const section = this.closest('section');
                        section.querySelectorAll('.exercise-details.open').forEach(openDetail => {
                            openDetail.classList.remove('open');
                            const openIcon = openDetail.previousElementSibling?.querySelector('[data-lucide]');
                            if (openIcon) openIcon.style.transform = 'rotate(0deg)';
                        });
                        details.classList.add('open');
                        if (icon) {
                            icon.style.transform = 'rotate(180deg)';
                        }
                    }
                });
            });

            // ========== KEYBOARD NAVIGATION ==========
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    closeSidebar();
                }
            });

            // ========== RESIZE HANDLER ==========
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1024) {
                    closeSidebar();
                }
            });
            lucide.createIcons();
        });
