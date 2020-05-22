function getMessage() {
    const messagesArray = [
    'Вы не купили ни одного товара, чтобы с нами разговаривать!',
    'Кто тут?',
    'Где Ваша совесть?',
    'Мы ничего не будем Вам продавать!',
    'К сожалению все операторы заняты, не пишите нам больше!!!',
    'Добрый день! До свидания!'
]

    index = Math.floor(Math.random() * messagesArray.length);

    return messagesArray[index];
};

function timeNow() {
    let timeMessage = new Date();

    let hours = timeMessage.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    };

    let minutes = timeMessage.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    };

    return `${hours}:${minutes}`
}

const chatButton = document.querySelector('.chat-widget');

chatButton.addEventListener('click', function() {
    chatButton.classList.add('chat-widget_active');
});

const chatMessage = document.getElementById('chat-widget__input');

chatMessage.addEventListener('change', function() {
    if (chatMessage.value !== '') {
        chatMessage.closest('.chat-widget__area').querySelector('#chat-widget__messages').innerHTML += `
            <div class="message message_client">
                <div class="message__time">${timeNow()}</div>
                <div class="message__text">
                    ${chatMessage.value}
                </div>
            </div>
            `;
        
        chatMessage.value = '';

        chatMessage.closest('.chat-widget__area').querySelector('#chat-widget__messages').innerHTML += `
        <div class="message">
            <div class="message__time">${timeNow()}</div>
            <div class="message__text">
                ${getMessage()}
            </div>
        </div>
        `;        
    }

    let endMessage = document.querySelector('.chat-widget__messages-container');

    setTimeout(() => {  
        chatMessage.closest('.chat-widget__area').querySelector('#chat-widget__messages').innerHTML += `
            <div class="message">
                <div class="message__time">${timeNow()}</div>
                <div class="message__text">
                    Эй, где Вы там?
                </div>
            </div>
            `; 
            endMessage.scrollTop = endMessage.scrollHeight;     
    }, 30000);

    
    endMessage.scrollTop = endMessage.scrollHeight;
})