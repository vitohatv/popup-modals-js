document.addEventListener('DOMContentLoaded', () => {
    function regulModal(title, text, close) {
        const modalBtn = document.querySelector("#modal-1");

        const regulModal = document.createElement("div");
        regulModal.classList.add('regul-modal');
        regulModal.innerHTML = `
            <div class='modal-content'>
                <div class='modal-title'>${title}</div>
                <div class='modal-text'>${text}</div>
                <button class='modal-close'>${close}</button>
            </div>
        `;
        regulModal.querySelector(".modal-close").addEventListener('click', ok)
        document.body.appendChild(regulModal);
        regulModal.style.display = 'none';

        modalBtn.addEventListener('click', () => {
            regulModal.style.display = 'block';
        });
        window.addEventListener('click', (e) => {
            if (e.target === regulModal) {
                regulModal.style.display = 'none';
            }
        });
        function ok() {
            regulModal.style.display = 'none';
        }
    }
    regulModal('Alert!','123 ваш текст','Закрыть');









    
});