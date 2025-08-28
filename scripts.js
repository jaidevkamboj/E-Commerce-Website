  // Initialize Swiper sliders
        var featuredSwiper = new Swiper(".featuredSwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
        
        var testimonialSwiper = new Swiper(".testimonialSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
        
        // Auth modal tab switching
        document.getElementById('switch-to-register').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('login-tab').classList.remove('active');
            document.getElementById('register-tab').classList.add('active');
            document.getElementById('login-form').classList.add('d-none');
            document.getElementById('register-form').classList.remove('d-none');
        });
        
        document.getElementById('switch-to-login').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('register-tab').classList.remove('active');
            document.getElementById('login-tab').classList.add('active');
            document.getElementById('register-form').classList.add('d-none');
            document.getElementById('login-form').classList.remove('d-none');
        });
        
        // Form validation
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login functionality would be implemented here!');
        });
        
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Registration functionality would be implemented here!');
        });
        
        // Add to cart animation
        document.querySelectorAll('.btn-sm.rounded-circle').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                this.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-plus"></i>';
                }, 1500);
            });
        });