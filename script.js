
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Theme switcher demo
        let isDarkTheme = true;
        function changeTheme() {
            const gradients = [
                'linear-gradient(135deg, #637cebff 0%, #876ba3ff 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #42a1f5ff 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(135deg, #fa709a 0%, #ddaf16ff 100%)'
            ];
            
            const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
            const hero = document.querySelector('.hero');
            hero.style.background = randomGradient;
            
            // Also update other gradient elements
            document.querySelectorAll('h2, .logo').forEach(el => {
                el.style.background = randomGradient;
                el.style.webkitBackgroundClip = 'text';
                el.style.backgroundClip = 'text';
            });
        }

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards
        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        console.log('🚀 Portfolio loaded successfully!');
    