  // Smooth Scroll for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Product Description Toggle
        document.addEventListener('DOMContentLoaded', () => {
            const leiaMaisButtons = document.querySelectorAll('.leia-mais');
            
            leiaMaisButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const card = button.closest('.produto-card');
                    const descricaoCurta = card.querySelector('.descricao-curta');
                    const descricaoCompleta = card.querySelector('.descricao-completa');
                    
                    if (descricaoCompleta.style.display === 'block') {
                        descricaoCompleta.style.display = 'none';
                        descricaoCurta.style.display = 'block';
                        button.textContent = 'Leia mais';
                    } else {
                        descricaoCompleta.style.display = 'block';
                        descricaoCurta.style.display = 'none';
                        button.textContent = 'Mostrar menos';
                    }
                });
            });
        });

        // Simulação de compra
        document.querySelectorAll('.comprar').forEach(button => {
            button.addEventListener('click', () => {
                const produto = button.closest('.produto-card').querySelector('h3').textContent;
                alert(`Obrigado pelo interesse na ${produto}! Em breve você será redirecionado para o checkout.`);
            });
        });

        // Função para inicializar o carrossel
        function initCarousel(carouselContainer) {
            const images = carouselContainer.querySelectorAll('.carousel-images img');
            const indicators = carouselContainer.querySelectorAll('.carousel-indicator');
            const prevButton = carouselContainer.querySelector('.prev');
            const nextButton = carouselContainer.querySelector('.next');
            let currentIndex = 0;

            // Função para atualizar o carrossel
            function updateCarousel(index) {
                // Remove a classe active de todas as imagens e indicadores
                images.forEach(img => img.classList.remove('active-carousel-image'));
                indicators.forEach(indicator => indicator.classList.remove('active'));

                // Adiciona a classe active na imagem e indicador atual
                images[index].classList.add('active-carousel-image');
                indicators[index].classList.add('active');
                currentIndex = index;
            }

            // Event listeners para os botões
            prevButton.addEventListener('click', () => {
                let newIndex = currentIndex - 1;
                if (newIndex < 0) newIndex = images.length - 1;
                updateCarousel(newIndex);
            });

            nextButton.addEventListener('click', () => {
                let newIndex = currentIndex + 1;
                if (newIndex >= images.length) newIndex = 0;
                updateCarousel(newIndex);
            });

            // Event listeners para os indicadores
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    updateCarousel(index);
                });
            });

            // Inicializa o carrossel com a primeira imagem
            updateCarousel(0);
        }

        // Inicializa todos os carrosséis na página
        document.addEventListener('DOMContentLoaded', () => {
            const carousels = document.querySelectorAll('.image-placeholder');
            carousels.forEach(carousel => {
                if (carousel.querySelector('.carousel-images')) {
                    initCarousel(carousel);
                }
            });
        });

        // Smooth Scroll for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Product Description Toggle
        document.addEventListener('DOMContentLoaded', () => {
            const leiaMaisButtons = document.querySelectorAll('.leia-mais');
            
            leiaMaisButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const card = button.closest('.produto-card');
                    const descricaoCurta = card.querySelector('.descricao-curta');
                    const descricaoCompleta = card.querySelector('.descricao-completa');
                    
                    if (descricaoCompleta.style.display === 'block') {
                        descricaoCompleta.style.display = 'none';
                        descricaoCurta.style.display = 'block';
                        button.textContent = 'Leia mais';
                    } else {
                        descricaoCompleta.style.display = 'block';
                        descricaoCurta.style.display = 'none';
                        button.textContent = 'Mostrar menos';
                    }
                });
            });
        });

        // Simulação de compra
        document.querySelectorAll('.comprar').forEach(button => {
            button.addEventListener('click', () => {
                const produto = button.closest('.produto-card').querySelector('h4').textContent; // Changed to h4 as product name is in h4
                alert(`Obrigado pelo interesse na ${produto}! Em breve você será redirecionado para o checkout.`);
            });
        });

        // Função para inicializar o carrossel
        function initCarousel(carouselContainer) {
            const images = carouselContainer.querySelectorAll('.carousel-images img');
            const indicators = carouselContainer.querySelectorAll('.carousel-indicator');
            const prevButton = carouselContainer.querySelector('.prev');
            const nextButton = carouselContainer.querySelector('.next');
            let currentIndex = 0;

            // Função para atualizar o carrossel
            function updateCarousel(index) {
                // Remove a classe active de todas as imagens e indicadores
                images.forEach(img => img.classList.remove('active-carousel-image'));
                indicators.forEach(indicator => indicator.classList.remove('active'));

                // Adiciona a classe active na imagem e indicador atual
                images[index].classList.add('active-carousel-image');
                indicators[index].classList.add('active');
                currentIndex = index;
            }

            // Event listeners para os botões
            prevButton.addEventListener('click', () => {
                let newIndex = currentIndex - 1;
                if (newIndex < 0) newIndex = images.length - 1;
                updateCarousel(newIndex);
            });

            nextButton.addEventListener('click', () => {
                let newIndex = currentIndex + 1;
                if (newIndex >= images.length) newIndex = 0;
                updateCarousel(newIndex);
            });

            // Event listeners para os indicadores
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    updateCarousel(index);
                });
            });

            // Inicializa o carrossel com a primeira imagem
            updateCarousel(0);
        }

        // Inicializa todos os carrosséis na página
        document.addEventListener('DOMContentLoaded', () => {
            const carousels = document.querySelectorAll('.image-placeholder');
            carousels.forEach(carousel => {
                if (carousel.querySelector('.carousel-images')) {
                    initCarousel(carousel);
                }
            });

            // Scroll Indicator Logic
            const scrollIndicator = document.querySelector('.scroll-indicator');

            if (scrollIndicator) {
                const isSmallScreen = () => window.matchMedia('(max-width: 768px)').matches;
                let hasScrolled = false; // Flag to track if user has scrolled

                // Function to update indicator visibility
                const updateScrollIndicatorVisibility = () => {
                    // Only show if it's a small screen, user hasn't scrolled, and we are at the top
                    if (isSmallScreen() && !hasScrolled && window.scrollY === 0) {
                        scrollIndicator.classList.remove('hide-scroll-indicator');
                    } else {
                        scrollIndicator.classList.add('hide-scroll-indicator');
                    }
                };

                // Initial check on load
                updateScrollIndicatorVisibility();

                // Event listener for scroll
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 0 && !hasScrolled) {
                        hasScrolled = true; // Mark as scrolled
                        updateScrollIndicatorVisibility(); // Hide it
                    }
                });

                // Event listener for resize
                window.addEventListener('resize', () => {
                    // Re-evaluate visibility on resize. If it becomes a small screen and hasn't scrolled, show it.
                    updateScrollIndicatorVisibility();
                });
            }
        });


        