// ========================================
// DETECÇÃO DE DISPOSITIVO MÓVEL
// ========================================
function isMobileDevice() {
    return (window.innerWidth <= 768) || 
           ('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0);
}

// ========================================
// CONFIGURAÇÃO DO PARTICLES.JS
// ========================================
// Cria um efeito de partículas animadas no fundo da página apenas em desktop
if (!isMobileDevice()) {
    particlesJS('particles-js', {
        particles: {
            // Configuração do número de partículas
            number: {
                value: 40, // Quantidade de partículas (range: 0-200, recomendado: 40-100)
                density: {
                    enable: true, // Opções: true/false - Habilita/desabilita densidade responsiva
                    value_area: 1000 // Área de densidade (range: 400-2000, maior = partículas mais espaçadas)
                }
            },
            // Cor das partículas (usa a cor dourada definida no CSS)
            color: {
                value: getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim() // Opções: qualquer cor CSS válida
            },
            // Forma das partículas
            shape: {
                type: 'circle', // Opções: 'circle', 'edge', 'triangle', 'polygon', 'star', 'image'
                stroke: {
                    width: 0, // Largura da borda (range: 0-20)
                    color: getComputedStyle(document.documentElement).getPropertyValue('--js-black').trim() // Opções: qualquer cor CSS válida
                }
            },
            // Transparência das partículas
            opacity: {
                value: 0.5, // Opacidade base (range: 0-1, onde 0 = transparente, 1 = sólido)
                random: false, // Opções: true/false - Opacidade aleatória
                anim: {
                    enable: false, // Opções: true/false - Animar opacidade
                    speed: 1, // Velocidade da animação (range: 0-10)
                    opacity_min: 0.1, // Opacidade mínima (range: 0-1)
                    sync: false // Opções: true/false - Sincronizar animação entre partículas
                }
            },
            // Tamanho das partículas
            size: {
                value: 3, // Tamanho base em pixels (range: 0-200)
                random: true, // Opções: true/false - Tamanho aleatório
                anim: {
                    enable: false, // Opções: true/false - Animar tamanho
                    speed: 100,  // Velocidade da animação (range: 0-100)
                    size_min: 0.1, // Tamanho mínimo (range: 0-200)
                    sync: false // Opções: true/false - Sincronizar animação entre partículas
                }
            },
            // Linhas que conectam as partículas
            line_linked: {
                enable: true, // Opções: true/false - Habilita/desabilita linhas
                distance: 200, // Distância máxima para conectar (range: 0-800)
                color: getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim(), // Opções: qualquer cor CSS válida
                opacity: 0.4, // Opacidade das linhas (range: 0-1)
                width: 1 // Espessura da linha em pixels (range: 0-20)
            },
            // Movimento das partículas
            move: {
                enable: true, // Opções: true/false - Habilita/desabilita movimento
                speed: 3, // Velocidade do movimento (range: 0-50)
                direction: 'none', // Opções: 'none', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'
                random: true, // Opções: true/false - Movimento aleatório
                straight: false, // Opções: true/false - Movimento em linha reta
                out_mode: 'out', // Opções: 'out' (sai da tela), 'bounce' (quica nas bordas)
                bounce: false, // Opções: true/false - Quicar nas bordas
                attract: {
                    enable: true, // Opções: true/false - Atração entre partículas
                    rotateX: 600, // Força de rotação X (range: 0-3000)
                    rotateY: 1200 // Força de rotação Y (range: 0-3000)
                }
            }
        },
        // Configurações de interatividade
        interactivity: {
            detect_on: 'window', // Opções: 'canvas', 'window' - Onde detectar interações
            events: {
                // Efeito ao passar o mouse
                onhover: {
                    enable: true, // Opções: true/false - Habilita/desabilita efeito hover
                    mode: 'bubble' // Opções: 'grab', 'bubble', 'repulse', 'none'
                },
                // Efeito ao clicar
                onclick: {
                    enable: true, // Opções: true/false - Habilita/desabilita efeito de clique
                    mode: 'push' // Opções: 'push', 'remove', 'bubble', 'repulse'
                },
                resize: true // Opções: true/false - Responde ao redimensionamento da janela
            },
            // Diferentes modos de interação
            modes: {
                grab: {
                    distance: 400, // Distância de interação (range: 0-1000)
                    line_linked: {
                        opacity: 1 // Opacidade das linhas ao agarrar (range: 0-1)
                    }
                },
                bubble: {
                    distance: 40, // Distância do efeito bolha (range: 0-1000)
                    size: 4, // Tamanho da bolha (range: 0-200)
                    duration: 2, // Duração do efeito em segundos (range: 0-10)
                    opacity: 8, // Opacidade da bolha (range: 0-1)
                    speed: 3 // Velocidade da animação (range: 0-10)
                },
                repulse: {
                    distance: 200, // Distância de repulsão (range: 0-1000)
                    duration: 0.4 // Duração da repulsão em segundos (range: 0-10)
                },
                push: {
                    particles_nb: 1 // Número de partículas adicionadas (range: 0-20)
                },
                remove: {
                    particles_nb: 2 // Número de partículas removidas (range: 0-20)
                }
            }
        },
        retina_detect: true // Opções: true/false - Detecta telas de alta resolução
    });
} else {
    // Remove o container de partículas em dispositivos móveis
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        particlesContainer.remove();
    }
}

// ========================================
// ROLAGEM PARA O TOPO AO CARREGAR A PÁGINA
// ========================================
window.onload = () => {
    // Rola a página para o topo com animação suave
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// ========================================
// ROLAGEM SUAVE PARA LINKS DE NAVEGAÇÃO
// ========================================
// Adiciona rolagem suave para todos os links internos (que começam com #)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        
        // Encontra o elemento alvo do link
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Faz a rolagem suave até o elemento
            target.scrollIntoView({
                behavior: 'smooth', // Rolagem suave
                block: 'start' // Alinha ao topo da seção
            });
        }
    });
});

// ========================================
// MUDANÇA DE FUNDO DA NAVBAR NO SCROLL
// ========================================
// Monitora o scroll da página para alterar o fundo da navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    // Se o scroll passou de 100px (range: pode ser ajustado entre 50-200px), aplica fundo mais escuro
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.2)'; // Opacidade do fundo (range: 0-1)
        navbar.style.boxShadow = '0 2px 20px rgba(255, 215, 0, 0.05)'; // Opacidade da sombra (range: 0-1)
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0)';
        navbar.style.boxShadow = 'none';
    }
});

// ========================================
// OBSERVADOR DE INTERSEÇÃO PARA ANIMAÇÕES
// ========================================
// Configurações para o observador de elementos visíveis
const observerOptions = {
    threshold: 0.1, // Porcentagem visível para ativar (range: 0-1, onde 0 = início do elemento visível, 1 = elemento totalmente visível)
    rootMargin: '0px 0px -50px 0px' // Margem de detecção (formato: top right bottom left, valores em px)
};

// Cria o observador que monitora quando elementos entram na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona classe de animação quando o elemento fica visível
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Inicializa o observador quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos que devem ter animação
    const animateElements = document.querySelectorAll('.service-card, .step-item, .contact-item, .about-content, .methodology-content');
    
    // Adiciona cada elemento ao observador
    animateElements.forEach(el => observer.observe(el));
});

// ========================================
// EFEITOS DE HOVER MELHORADOS PARA CARDS DE SERVIÇO
// ========================================
// Adiciona efeitos interativos aos cards de serviço apenas em desktop
if (!isMobileDevice()) {
    document.querySelectorAll('.service-card').forEach(card => {
        // Efeito quando o mouse entra no card
        card.addEventListener('mouseenter', function() {
            // Eleva o card e aumenta ligeiramente (translateY range: -20px a 0px, scale range: 1-1.5)
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.2)'; // Opacidade da sombra (range: 0-1)
            
            // Anima o ícone do serviço (scale range: 1-2, rotate range: 0-360deg)
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            
            // Anima as tags de características com delay
            const tags = this.querySelectorAll('.feature-tag');
            tags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.05)'; // Scale range: 1-1.5
                    tag.style.background = getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim(); // Opções: qualquer cor CSS válida
                    tag.style.color = getComputedStyle(document.documentElement).getPropertyValue('--js-black').trim(); // Opções: qualquer cor CSS válida
                }, index * 100); // Delay entre cada tag (range: 50-200ms)
            });
        });
        
        // Efeito quando o mouse sai do card
        card.addEventListener('mouseleave', function() {
            // Volta à posição e tamanho original
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)'; // Sombra normal
            
            // Reseta o ícone
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
            
            // Reseta as tags de características
            const tags = this.querySelectorAll('.feature-tag');
            tags.forEach(tag => {
                tag.style.transform = 'scale(1)';
                // Volta às cores originais
                tag.style.background = getComputedStyle(document.documentElement).getPropertyValue('--js-dark-gray').trim();
                tag.style.color = getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim();
            });
        });
    });
}

// ========================================
// EFEITOS DE HOVER MELHORADOS PARA ITENS DE CONTATO
// ========================================
// Adiciona efeitos interativos aos itens de contato apenas em desktop
if (!isMobileDevice()) {
    document.querySelectorAll('.contact-item').forEach(item => {
        // Efeito quando o mouse entra no item
        item.addEventListener('mouseenter', function() {
            // Move o item para cima e para a direita
            this.style.transform = 'translateY(-5px) translateX(10px)';
            this.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim(); // Borda dourada
            this.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.3)'; // Sombra dourada
            
            // Anima o ícone de contato
            const icon = this.querySelector('.contact-icon');
            icon.style.transform = 'scale(1.1) rotate(10deg)'; // Aumenta e gira
        });
        
        // Efeito quando o mouse sai do item
        item.addEventListener('mouseleave', function() {
            // Volta à posição original
            this.style.transform = 'translateY(0) translateX(0)';
            this.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--js-dark-gray').trim(); // Borda original
            this.style.boxShadow = 'none';
            
            // Reseta o ícone
            const icon = this.querySelector('.contact-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// ========================================
// EFEITOS DE HOVER MELHORADOS PARA ITENS DE ETAPAS
// ========================================
// Adiciona efeitos interativos aos itens de etapas do processo
document.querySelectorAll('.step-item').forEach(step => {
    // Efeito quando o mouse entra no item
    step.addEventListener('mouseenter', function() {
        // Move o item para a direita e aumenta ligeiramente
        this.style.transform = 'translateX(15px) scale(1.02)';
        this.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim(); // Borda dourada
        this.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.3)'; // Sombra dourada
        
        // Anima o número da etapa
        const number = this.querySelector('.step-number');
        number.style.transform = 'scale(1.1) rotate(5deg)'; // Aumenta e gira
        number.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.5)'; // Sombra dourada
    });
    
    // Efeito quando o mouse sai do item
    step.addEventListener('mouseleave', function() {
        // Volta à posição original
        this.style.transform = 'translateX(0) scale(1)';
        this.style.borderColor = 'transparent';
        this.style.boxShadow = 'none';
        
        // Reseta o número da etapa
        const number = this.querySelector('.step-number');
        number.style.transform = 'scale(1) rotate(0deg)';
        number.style.boxShadow = 'none';
    });
});

// ========================================
// EFEITO RIPPLE PARA BOTÕES
// ========================================
// Adiciona efeito de onda (ripple) quando botões são clicados
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Cria o elemento de onda
        const ripple = document.createElement('span');
        
        // Calcula a posição do clique
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height); // Tamanho baseado na maior dimensão
        const x = e.clientX - rect.left - size / 2; // Posição X centralizada
        const y = e.clientY - rect.top - size / 2; // Posição Y centralizada
        
        // Define o tamanho e posição da onda
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple'); // Adiciona classe CSS
        
        // Adiciona a onda ao botão
        this.appendChild(ripple);
        
        // Remove a onda após a animação
        setTimeout(() => {
            ripple.remove();
        }, 600); // 600ms = duração da animação
    });
});

// ========================================
// ANIMAÇÃO MELHORADA PARA CARDS FLUTUANTES
// ========================================
// Adiciona efeitos interativos aos cards flutuantes
document.querySelectorAll('.floating-card').forEach((card, index) => {
    // Efeito quando o mouse entra no card
    card.addEventListener('mouseenter', function() {
        // Eleva, aumenta e gira o card
        this.style.transform = 'translateY(-20px) scale(1.05) rotate(5deg)';
        this.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.4)'; // Sombra dourada
        this.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim(); // Borda dourada
    });
    
    // Efeito quando o mouse sai do card
    card.addEventListener('mouseleave', function() {
        // Volta à posição e aparência original
        this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        this.style.boxShadow = 'none';
        this.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--js-dark-gray').trim(); // Borda original
    });
});

// ========================================
// EFEITO DE DIGITAÇÃO PARA TÍTULO DO HERO
// ========================================
// Função para criar efeito de digitação de texto
function typeWriter(element, text, speed = 100) { // speed range: 50-500ms, menor = mais rápido
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Adiciona cursor piscante após terminar de digitar
            element.innerHTML += '<span class="typing-cursor">|</span>'; // Opções do cursor: '|', '_', qualquer caractere
        }
    }
    type();
}

// Função para apagar texto
function eraseText(element, speed = 50) { // speed range: 20-200ms, menor = mais rápido
    return new Promise((resolve) => {
        // Remove cursor primeiro
        element.innerHTML = element.textContent;
        const text = element.textContent;
        let i = text.length;
        
        function erase() {
            if (i > 0) {
                element.textContent = text.substring(0, i - 1);
                i--;
                setTimeout(erase, speed);
            } else {
                resolve();
            }
        }
        erase();
    });
}

// Função para ciclar entre múltiplas palavras com efeito de digitação
async function cycleTypingEffect(element, words, typeSpeed = 150, eraseSpeed = 50, pauseTime = 2000) {
    // typeSpeed range: 50-500ms - Velocidade de digitação
    // eraseSpeed range: 20-200ms - Velocidade de apagar
    // pauseTime range: 1000-5000ms - Tempo de pausa entre palavras
    let currentIndex = 0;
    
    async function cycle() {
        // Digita a palavra atual
        typeWriter(element, words[currentIndex], typeSpeed);
        
        // Aguarda a digitação terminar + pausa
        await new Promise(resolve => {
            setTimeout(resolve, (words[currentIndex].length * typeSpeed) + pauseTime);
        });
        
        // Apaga a palavra
        await eraseText(element, eraseSpeed);
        
        // Aguarda um pouco antes da próxima palavra (range: 200-1000ms)
        await new Promise(resolve => {
            setTimeout(resolve, 500);
        });
        
        // Move para próxima palavra (cicla de volta para primeira)
        currentIndex = (currentIndex + 1) % words.length;
        
        // Continua o ciclo
        cycle();
    }
    
    cycle();
}

// Inicializa o efeito de digitação cíclica quando a página carrega
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        // Define suas palavras aqui - você pode alterar conforme necessário
        const words = [
            "GP Tech",
            "Inovação",
            "Dados",
            "Tecnologia",
            "Soluções",
            "Analytics",
            "Desenvolvimento",
            "Consultoria"
        ]; // Opções: qualquer palavra/frase, recomendado: 3-10 palavras
        
        // Inicia o efeito cíclico com velocidades personalizadas
        cycleTypingEffect(heroTitle, words, 150, 50, 2000);
    }
});

// ========================================
// EFEITO PARALLAX PARA SEÇÃO HERO
// ========================================
// Adiciona efeito parallax aos cards flutuantes baseado no scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1); // Velocidade do parallax (range: 0.1-2.0, menor = mais suave)
        element.style.transform += ` translateY(${scrolled * speed}px)`; // Movimento vertical baseado no scroll
    });
});

// ========================================
// ADICIONA CSS PARA EFEITO RIPPLE
// ========================================
// Cria e adiciona estilos CSS dinamicamente para o efeito ripple
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3); // Opacidade do efeito (range: 0-1)
        transform: scale(0);
        animation: ripple-animation 0.6s linear; // Duração da animação (range: 0.3-1.0s)
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4); // Escala final do efeito (range: 2-6)
            opacity: 0;
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards; // Duração da animação (range: 0.3-2.0s)
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px); // Distância inicial (range: 10-50px)
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// NAVEGAÇÃO ATIVA BASEADA NO SCROLL
// ========================================
// Monitora o scroll para destacar o link de navegação ativo
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) { // Offset de detecção (range: 100-300px)
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// ADICIONA ESTILOS PARA LINK ATIVO
// ========================================
// Cria e adiciona estilos CSS para destacar o link de navegação ativo
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-link.active {
        color: ${getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim()} !important; // Opções: qualquer cor CSS válida
    }
    
    .nav-link.active::after {
        width: 100% !important; // Largura da linha sob o link ativo (range: 0-100%)
    }
`;
document.head.appendChild(activeStyle);

// ========================================
// FÍSICA DOS CARDS FLUTUANTES
// ========================================

// Inicializa o motor de física
const engine = Matter.Engine.create({
    enableSleeping: false,
    constraintIterations: 4,
    velocityIterations: 8,
    positionIterations: 8
});

const world = engine.world;
engine.gravity.y = 0; // Remove a gravidade

// Configurações
const CARD_WIDTH = 100;
const CARD_HEIGHT = 100;
const WALL_THICKNESS = 1;
const ATTRACTION_STRENGTH = 0.001; // Força de atração do mouse (0.001 - 0.01)
const REPULSION_STRENGTH = 0.0; // Não usado mais
const FRICTION = 0; // Sem fricção de ar para manter movimento contínuo
const BOUNCE = 0.5; // Elasticidade das colisões (0.1 - 0.9)
const MAX_VELOCITY = 0.5; // Velocidade máxima dos cards (0.1 - 1.0)
const ORBIT_STRENGTH = 0.1; // Força da órbita
const ORBIT_SPEED = 0.0002; // Velocidade da rotação

// Obtém o container e suas dimensões
const container = document.getElementById('cards-container');
const containerRect = container.getBoundingClientRect();

// Dimensões reais do container (sem margem extra) para evitar overflow
const CANVAS_WIDTH = containerRect.width;
const CANVAS_HEIGHT = containerRect.height;

// Calcula o raio da órbita proporcional ao container (30% do menor lado)
const ORBIT_RADIUS = Math.min(CANVAS_WIDTH, CANVAS_HEIGHT) * 0.1;

// Define o centro da órbita
const orbitCenter = {
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2
};

// Cria as paredes invisíveis alinhadas exatamente ao container
const walls = [
    Matter.Bodies.rectangle(CANVAS_WIDTH / 2, -WALL_THICKNESS / 2, CANVAS_WIDTH, WALL_THICKNESS, { isStatic: true }), // Topo
    Matter.Bodies.rectangle(CANVAS_WIDTH / 2, CANVAS_HEIGHT + WALL_THICKNESS / 2, CANVAS_WIDTH, WALL_THICKNESS, { isStatic: true }), // Base
    Matter.Bodies.rectangle(-WALL_THICKNESS / 2, CANVAS_HEIGHT / 2, WALL_THICKNESS, CANVAS_HEIGHT, { isStatic: true }), // Esquerda
    Matter.Bodies.rectangle(CANVAS_WIDTH + WALL_THICKNESS / 2, CANVAS_HEIGHT / 2, WALL_THICKNESS, CANVAS_HEIGHT, { isStatic: true }) // Direita
];

Matter.World.add(world, walls);

// Cria os corpos físicos para os cards
const cards = Array.from(document.querySelectorAll('.floating-card')).map(card => {
    // Calcula uma posição inicial mais próxima ao centro
    // Usa apenas 60% da área central do container
    const margin = 0.2; // 20% de margem de cada lado
    const x = (margin * CANVAS_WIDTH) + (Math.random() * (CANVAS_WIDTH * (1 - 2 * margin)));
    const y = (margin * CANVAS_HEIGHT) + (Math.random() * (CANVAS_HEIGHT * (1 - 2 * margin)));
    
    const body = Matter.Bodies.rectangle(x + CARD_WIDTH/2, y + CARD_HEIGHT/2, CARD_WIDTH, CARD_HEIGHT, {
        frictionAir: FRICTION,
        restitution: BOUNCE,
        mass: 1,
        inertia: Infinity,
        friction: 0,
        frictionStatic: 0
    });

    // Associa o elemento DOM ao corpo físico
    body.element = card;
    card.body = body;
    
    // Atribui uma velocidade inicial aleatória mais suave
    Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 1, // Reduzido para movimento inicial mais suave
        y: (Math.random() - 0.5) * 1
    });
    
    return body;
});

Matter.World.add(world, cards);

// Função para limitar a velocidade dos cards
function limitVelocity(body) {
    const velocity = Matter.Vector.magnitude(body.velocity);
    if (velocity > MAX_VELOCITY) {
        const factor = MAX_VELOCITY / velocity;
        Matter.Body.setVelocity(body, {
            x: body.velocity.x * factor,
            y: body.velocity.y * factor
        });
    }
}

// Função para aplicar pequenas forças aleatórias, mantendo os cards em movimento suave
function applyForces() {
    cards.forEach(card => {
        const randomForce = {
            x: (Math.random() - 0.5) * 0.00002, // Reduzido de 0.00005
            y: (Math.random() - 0.5) * 0.00002  // Reduzido de 0.00005
        };
        Matter.Body.applyForce(card, card.position, randomForce);
    });
}

// Loop de renderização
Matter.Events.on(engine, 'beforeUpdate', () => {
    applyForces();
    
    // Limita a velocidade dos cards
    cards.forEach(card => {
        limitVelocity(card);
        
        // Atualiza a posição do elemento DOM
        const element = card.element;
        element.style.transform = `translate(${card.position.x - CARD_WIDTH/2}px, ${card.position.y - CARD_HEIGHT/2}px)`;
    });
});

// Inicia o motor de física
Matter.Runner.run(engine);

// Menu Hamburguer
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Melhorar touch na seção hero
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    // Prevenir propagação de eventos de touch na seção hero
    hero.addEventListener('touchstart', function(e) {
        if (!heroContent.contains(e.target)) {
            e.preventDefault();
        }
    }, { passive: false });
    
    hero.addEventListener('touchmove', function(e) {
        if (!heroContent.contains(e.target)) {
            e.preventDefault();
        }
    }, { passive: false });
});

// Controle dos cards flutuantes
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.floating-card');
    let isMobile = window.innerWidth <= 768;
    
    // Função para atualizar o estado mobile
    function updateMobileState() {
        isMobile = window.innerWidth <= 768;
        if (isMobile) {
            // Remove as transformações em dispositivos móveis
            cards.forEach(card => {
                card.style.transform = 'none';
            });
        }
    }

    // Atualiza quando a janela é redimensionada
    window.addEventListener('resize', updateMobileState);
});

