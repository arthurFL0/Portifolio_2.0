const divs = document.querySelectorAll(".pointing-selector div a");
const arrow = document.querySelector(".fa-circle-arrow-right");


// Para calcular a posição central dos elementos
// É usado getBoundClientRect() para pegar o retangulo que representa o elemento em seu tamanho completo
// Para calcular a posição central de no eixo 'X' é preciso pegar a distancia entre o viewport 'limite da tela'
// e o elemento com handRect/divRect.left ou ''.x e somar com o meio do próprio elemento : largura/2
// A mesma ideia é aplicada para pegar o centro da altura (limite da tela até o elemento com rect.top ou rect.y + altura do próprio elemento/2)
// Assim é obtido a posição central X,Y do elemento

// Posição do centro da mão
const arrowRect = arrow.getBoundingClientRect();
const arrowX = arrowRect.x + arrowRect.width / 2;
const arrowY = arrowRect.y + arrowRect.height / 2;


for(const div of divs){
    // Posição do centro do div
    const divRect = div.getBoundingClientRect();
    const divX = divRect.left + divRect.width / 2;
    const divY =  divRect.top + divRect.height / 2;

    div.addEventListener("mouseover", () => {
   
        // Diferença 
        const deltaX = divX - arrowX;
        const deltaY = divY - arrowY;
        // Ângulo em radianos → graus
        const angleRad = Math.atan2(deltaY, deltaX);
        const angleDeg = angleRad * (180 / Math.PI) * 2;
        // Atualiza o transform diretamente
        arrow.style.transform = `rotate(${angleDeg}deg)`;
    });
}

