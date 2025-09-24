function showWelcomeAlert(message) {
    const alertContainer = document.createElement('div');
    alertContainer.className = 'first-access-alert-container';

    const alertContent = document.createElement('div');
    alertContent.className = 'first-access-alert-content';
    alertContent.innerHTML = `
        <p>${message}</p>
        <button class="close-alert-btn">X</button>
    `;

    alertContainer.appendChild(alertContent);
    document.body.appendChild(alertContainer);

    // Força o navegador a aplicar o estilo inicial antes de adicionar a classe 'show'
    setTimeout(() => {
        alertContainer.classList.add('show');
    }, 10);

    const closeButton = alertContent.querySelector('.close-alert-btn');
    closeButton.addEventListener('click', () => {
        alertContainer.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(alertContainer);
        }, 500); // Deve ser igual ao tempo da transição no CSS
    });
}