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


    function buyingModal() {
        const buyingModalBtn = document.querySelector("#modal-2");

        const buyModal = document.createElement("div");
        buyModal.classList.add('buy-modal');
        buyModal.innerHTML = `
            <div class='modalBuy-content'>
                <div class='modal-buy-text'>
                    <span class='close-Buymodal'>X</span>
                    <h1 class='modal-buy-title'>Оставьте заявку</h1>
                    <p class='modal-buy-subtitle'>Наши менеджеры с вами свяжутся</p>
                </div>
                <form class='form-content'>
                    <input type='text' class='input-buy-name' placeholder='Имя' autocomplete="name"  required />
                    <img class='name-icon' src='img/icon-name.png'>
                    <input type='number' autocomplete="tel" class='input-buy-tel' placeholder='Номер' required />
                    <img class='tel-icon' src='img/icon-tel.png'>
                    <button class='order-buy'>Связаться с оператором</button>
                </form>
            </div>
        `;
        
        document.body.appendChild(buyModal);
        buyModal.style.display = 'none'
        const closeBuyModal = document.querySelector('.close-Buymodal');
        closeBuyModal.addEventListener('click', () => {
            buyModal.style.display = 'none';
        });


        buyingModalBtn.addEventListener('click', () => {
            buyModal.style.display = 'block';
        });
        window.addEventListener('click', (e) => {
            if(e.target === buyModal) {
                buyModal.style.display = 'none';
            }
        });
    }
    buyingModal();








});