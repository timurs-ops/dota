// ============================================
// ОСНОВНАЯ ЛОГИКА ПРИЛОЖЕНИЯ
// РАБОТА ЧАТА С ИИ
// ============================================

// История сообщений
let messageHistory = [];

// ============================================
// ДОБАВЛЕНИЕ СООБЩЕНИЯ В ЧАТ
// ============================================

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    
    // Создаём контейнер сообщения
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    // Определяем префикс (Вы или AI)
    const prefix = sender === 'user' ? 'Вы' : 'AI';
    
    // Заполняем сообщение (поддерживает HTML теги)
    messageDiv.innerHTML = `<strong>${prefix}:</strong><br>${text}`;
    
    // Добавляем в чат
    chatMessages.appendChild(messageDiv);
    
    // Автоскролл вниз
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Сохраняем в историю
    messageHistory.push({
        sender: sender,
        text: text,
        time: new Date().toLocaleTimeString()
    });
}

// ============================================
// ОТПРАВКА СООБЩЕНИЯ
// ============================================

async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const question = userInput.value.trim();
    
    // Проверка на пустое сообщение
    if (!question) return;
    
    // Добавляем сообщение пользователя
    addMessage(question, 'user');
    
    // Очищаем поле ввода
    userInput.value = '';
    
    // Показываем индикатор "печатает..."
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'message bot-message';
    loadingMsg.id = 'loading';
    loadingMsg.innerHTML = '<strong>AI:</strong> Думаю... 🤔';
    document.getElementById('chatMessages').appendChild(loadingMsg);
    
    // Автоскролл
    document.getElementById('chatMessages').scrollTop = 
        document.getElementById('chatMessages').scrollHeight;
    
    // Небольшая задержка для реалистичности
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Получаем ответ от ИИ
    const answer = await dotaAI.getAnswer(question);
    
    // Удаляем индикатор загрузки
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.remove();
    }
    
    // Добавляем ответ ИИ
    addMessage(answer, 'bot');
    
    // Сохраняем историю
    saveHistory();
}

// ============================================
// ОБРАБОТКА БЫСТРЫХ ВОПРОСОВ
// ============================================

function setupQuickButtons() {
    const quickButtons = document.querySelectorAll('.quick-btn');
    
    quickButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.getAttribute('data-question');
            
            // Устанавливаем вопрос в поле ввода
            document.getElementById('userInput').value = question;
            
            // Отправляем
            sendMessage();
        });
    });
}

// ============================================
// СОХРАНЕНИЕ И ЗАГРУЗКА ИСТОРИИ
// ============================================

function saveHistory() {
    try {
        localStorage.setItem('dota2_chat_history', JSON.stringify(messageHistory));
    } catch (e) {
        console.log('Не удалось сохранить историю:', e);
    }
}

function loadHistory() {
    try {
        const saved = localStorage.getItem('dota2_chat_history');
        if (saved) {
            const history = JSON.parse(saved);
            
            // Восстанавливаем последние 20 сообщений
            const lastMessages = history.slice(-20);
            
            lastMessages.forEach(msg => {
                const chatMessages = document.getElementById('chatMessages');
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${msg.sender}-message`;
                const prefix = msg.sender === 'user' ? 'Вы' : 'AI';
                messageDiv.innerHTML = `<strong>${prefix}:</strong><br>${msg.text}`;
                chatMessages.appendChild(messageDiv);
            });
            
            // Автоскролл
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            messageHistory = history;
        }
    } catch (e) {
        console.log('Не удалось загрузить историю:', e);
    }
}

// ============================================
// ОЧИСТКА ЧАТА
// ============================================

function clearChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = '<div class="message bot-message"><strong>AI:</strong> Чат очищен. Чем могу помочь? 😊</div>';
    messageHistory = [];
    localStorage.removeItem('dota2_chat_history');
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Кнопка отправки
    const sendBtn = document.getElementById('sendBtn');
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }
    
    // Отправка по клавише Enter
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Настраиваем быстрые вопросы
    setupQuickButtons();
    
    // Загружаем историю (опционально - раскомментируй если нужно)
    // loadHistory();
    
    console.log('🎮 Dota 2 AI Assistant загружен!');
});
