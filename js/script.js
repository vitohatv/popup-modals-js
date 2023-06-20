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


    function orderModal() {

        const orderModalBtn = document.querySelector("#modal-3");
        
        const orderModal = document.createElement("div");
        orderModal.classList.add('order-modal');
        orderModal.innerHTML = `
            <div class='orderModal-block'>
                <div class='orderModal-content'>
                    <div class='orderModal-wrapper'>
                        <span class='close-orderModal'>X</span>
                        <img class='orderModal-image' src='img/keyboard-razer.png' alt='keyboard'>
                        <h1 class='orderModal-title'>Игровая клавиатура Razer <span class='order-model'>Механическая</span></h1>
                        <p  class='orderModal-price'>25.000 ₸енге</p>
                    </div>
                    <button class='orderModal-buy-btn'>Переидти к оплате</button>
                </div>
            </div>
        `;
        document.body.appendChild(orderModal);
        orderModal.style.display = 'none';
        
        orderModalBtn.addEventListener('click', () => {
            orderModal.style.display ='block';
        });
        window.addEventListener('click', (e) => {
            if(e.target === orderModal) {
                orderModal.style.display = 'none';
            }
        });

        const goToBuyBtn = document.querySelector(".orderModal-buy-btn");
        const orderModalClose = document.querySelector(".close-orderModal");

        orderModalClose.addEventListener('click', () => {
            orderModal.style.display = 'none';
        });
        goToBuyBtn.addEventListener('click', () => {
            orderModal.style.display = 'none';
        });
    }
    orderModal();


    function connectModal() {  
        const connectModalBtn = document.querySelector('#modal-4');

        const connectModal = document.createElement('div');
        connectModal.classList.add('connect-modal');
        connectModal.innerHTML = `
            <div class='connectModal-block'>
                <div class='connectModal-content'>
                    <div class='connectModal-wrapper'>
                        <span class='close-connectModal'>X</span>
                        <p  class='connectModal-support-title'>Добро пожаловать в службу поддержки клиентов.</p>
                        <p  class='connectModal-support-subtitle'>Если вы хотите связаться с 
                        представителем службы поддержки, мы будем рады помочь вам ежедневно
                        с 10:00 до 20:30 по АСТ.времени</p>
                        <h1 class='connectModal-title'>Связаться с нами можно по контактам ниже:</h1>
                        <p  class='connectModal-whatsapp'>Whats'app: +77016354950 (Алматы)</p>
                        <p  class='connectModal-tel'>Телефон менеджера: +77789324089</p>
                        <p  class='connectModal-adress'>Адрес: 050000, г. Алматы, ул. Казыбек Би д.33</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(connectModal);
        connectModal.style.display = 'none';

        const connectModalClose = document.querySelector(".close-connectModal");

        connectModalClose.addEventListener('click', () => {
            connectModal.style.display = 'none';
        });

        connectModalBtn.addEventListener('click', () => {
            connectModal.style.display = 'block';
        });

        window.addEventListener('click', (e) => {
            if(e.target === connectModal) {
                connectModal.style.display = 'none';
            }
        });
    }
    connectModal();




});