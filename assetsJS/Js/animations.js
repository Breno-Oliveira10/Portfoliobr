document.addEventListener("DOMContentLoaded", function () {
    const habilidadesSection = document.getElementById("habilidades");
    const habilidadesEsquerda = habilidadesSection.querySelector('.habilidades-esquerda');
    const ferramentasIA = habilidadesSection.querySelector('.FerramentasIA');
    const habilidadesDireita = habilidadesSection.querySelector('.habilidades-direita');

    const restartAnimation = (element, animationClass) => {
        element.classList.remove(animationClass);
        void element.offsetWidth; // Aciona o refluxo
        element.classList.add(animationClass);
    };

    const callback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reinicia as animações com as classes corretas
                restartAnimation(habilidadesEsquerda, 'moveToLeftCenter');
                restartAnimation(ferramentasIA, 'moveFromBottom');
                restartAnimation(habilidadesDireita, 'moveToRightCenter');
            }
        });
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.1 });
    observer.observe(habilidadesSection);
});

