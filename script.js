function validateForm(event) {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if (name === "lesego" && password === "080806") {
        return true;
    } else {
        alert("Invalid name or password");
        event.preventDefault();
        return false;
    }
}

(function(d, s, id) { var js, pjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//www.tickcounter.com/static/js/loader.js"; pjs.parentNode.insertBefore(js, pjs); }(document, "script", "tickcounter-sdk"));

            document.getElementById('menu-icon').addEventListener('click', function () {
                const navLinks = document.getElementById('nav-links');
                navLinks.classList.toggle('show');
            });
            function showPricing(option) {
                // Hide all sections first
                document.getElementById('personal-section').classList.remove('active');
                document.getElementById('business-section').classList.remove('active');
                document.getElementById('anxious-section').classList.remove('active');
                document.getElementById('burnout-section').classList.remove('active');
                
                // Show the selected section
                if (option === 'personal') {
                    document.getElementById('personal-section').classList.add('active');
                } else if (option === 'business') {
                    document.getElementById('business-section').classList.add('active');
                } else if (option === 'anxious') {
                    document.getElementById('anxious-section').classList.add('active');
                } else if (option === 'burnout') {
                    document.getElementById('burnout-section').classList.add('active');
                }
            }
        
            // Initialize the default active section
            showPricing('personal');

            function openPopup() {
                document.getElementById('popup').style.display = 'block';
                document.addEventListener('DOMContentLoaded', () => {
                    // Initial greeting message
                    appendMessage('Hi Lesego! How are you doing today? How has your day been?', 'bot');
                });
            }
        
            function closePopup() {
                document.getElementById('popup').style.display = 'none';
            }
        
            function appendMessage(message, type) {
                const chatBox = document.getElementById('chat-box');
                const messageElement = document.createElement('div');
                messageElement.className = `message ${type}`;
                messageElement.innerHTML = message;
                chatBox.appendChild(messageElement);
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        
            async function sendMessage() {
                const userInput = document.getElementById('user-input').value.trim().toLowerCase();
                if (!userInput) return;
        
                appendMessage(userInput, 'user');
        
                // Here you can add your logic to handle user input and generate bot responses
                // For simplicity, let's just echo the user input back
                appendMessage("You said: " + userInput, 'bot');
        
                document.getElementById('user-input').value = '';
            }
            
            document.addEventListener('DOMContentLoaded', () => {
                // Initial greeting message
                appendMessage('Hi Lesego! How are you doing today? How has your day been?', 'bot');
                document.getElementById('options').style.display = 'flex';
            });
        
            async function sendMessage() {
                const userInput = document.getElementById('user-input').value.trim().toLowerCase();
                if (!userInput) return;
        
                appendMessage(userInput, 'user');
        
                // Extended list of keywords and responses
                if (userInput.includes('period pains') || userInput.includes('periodpains')) {
                    appendMessage(getContent('period_pains'), 'bot');
                
                } else if (userInput.includes('sad')) {
                    appendMessage(getContent('sad'), 'bot');
                } else if (userInput.includes('hi')) {
                    appendMessage(getContent('hi'), 'bot');
                    
                } else if (userInput.includes('anxious')) {
                    appendMessage(getContent('anxious'), 'bot');

                } else if (userInput.includes('burnout') || userInput.includes('burnout')) {
                    appendMessage(getContent('burnout'), 'bot');  
                } else if (userInput.includes('bad')) {
                    appendMessage(getContent('bad'), 'bot');    
                } else if (userInput.includes('thanks')) {
                    appendMessage(getContent('thanks'), 'bot'); 
                } else if (userInput.includes('thank you')) {
                    appendMessage(getContent('thanks'), 'bot');  
                } else if (userInput.includes('danko')) {
                    appendMessage(getContent('thanks'), 'bot');  
                } else if (userInput.includes('good')) {
                    appendMessage(getContent('good'), 'bot');  
                } else if (userInput.includes('excelent')) {
                    appendMessage(getContent('good'), 'bot');  
                } else if (userInput.includes('boring')) {
                    appendMessage(getContent('bad'), 'bot'); 
                } else if (userInput.includes('challenging')) {
                    appendMessage(getContent('bad'), 'bot'); 
                } else if (userInput.includes('what is the weather')) {
                    appendMessage(getContent('weather'), 'bot'); 
                } else if (userInput.includes('weather')) {
                    appendMessage(getContent('weather'), 'bot'); 
                } else if (userInput.includes('what is the weather like today')) {
                    appendMessage(getContent('weather'), 'bot'); 
                } else if (userInput.includes('what is todays weather')) {
                    appendMessage(getContent('weather'), 'bot'); 
                } else if (userInput.includes('how can i deal with stress from school and exams')) {
                    appendMessage(getContent('burnout'), 'bot'); 
                } else if (userInput.includes('what are some good self-care tips for maintaining mental health')) {
                    appendMessage(getContent('sad'), 'bot'); 
                } else if (userInput.includes('stressed')) {
                    appendMessage(getContent('burnout'), 'bot'); 
                } else if (userInput.includes('i am sad')) {
                    appendMessage(getContent('sad'), 'bot'); 
                } else if (userInput.includes('does lethabo love me')) {
                    appendMessage(getContent('lethabo'), 'bot'); 
                } else if (userInput.includes('love')) {
                    appendMessage(getContent('lethabo'), 'bot'); 
                } else if (userInput.includes('what is todays weather')) {
                    appendMessage(getContent('weather'), 'bot'); 
                } else if (userInput.includes('what is todays weather')) {
                    appendMessage(getContent('weather'), 'bot');    
                } else if (userInput.includes('bored')) {
                    appendMessage(getContent('bored'), 'bot');
                } else if (userInput.includes('what time is it')) {
                    appendMessage(getContent('time'), 'bot');
                } else if (userInput.includes('what day is it')) {
                    appendMessage(getContent('date'), 'bot');
                } else if (userInput.includes('tell me a joke')) {
                    appendMessage(getContent('joke'), 'bot');
                } else if (userInput.includes('how are you')) {
                    appendMessage(getContent('how are you'), 'bot');
                } else if (userInput.includes('what is love')) {
                    appendMessage(getContent('love'), 'bot');
                } else if (userInput.includes('how do I deal with anxiety')) {
                    appendMessage(getContent('anxiety'), 'bot');
                } else if (userInput.includes('why am I feeling down')) {
                    appendMessage(getContent('down'), 'bot');
                } else if (userInput.includes('who created you')) {
                    appendMessage(getContent('creator'), 'bot');
                } else if (userInput.includes('do you like music')) {
                    appendMessage(getContent('music'), 'bot');
                } else if (userInput.includes('what’s your favorite color')) {
                    appendMessage(getContent('favorite color'), 'bot');
                } else if (userInput.includes('what is my purpose')) {
                    appendMessage(getContent('purpose'), 'bot');
                } else if (userInput.includes('how do I gain confidence')) {
                    appendMessage(getContent('confidence'), 'bot');
                } else if (userInput.includes('how do I make friends')) {
                    appendMessage(getContent('make friends'), 'bot');
                } else if (userInput.includes('how do I relax')) {
                    appendMessage(getContent('relax'), 'bot');
                } else if (userInput.includes('how do I improve my mood')) {
                    appendMessage(getContent('improve mood'), 'bot');
                } else if (userInput.includes('what can I do when bored')) {
                    appendMessage(getContent('bored'), 'bot');
                } else if (userInput.includes('how do I stop overthinking')) {
                    appendMessage(getContent('overthinking'), 'bot');
                } else if (userInput.includes('why do I feel tired')) {
                    appendMessage(getContent('tired'), 'bot');
                } else if (userInput.includes('how do I handle school stress')) {
                    appendMessage(getContent('school stress'), 'bot');
                } else if (userInput.includes('what can I do if I feel anxious in public')) {
                    appendMessage(getContent('anxious in public'), 'bot'); 
                } else if (userInput.includes('what is todays weather')) {
                    appendMessage(getContent('weather'), 'bot');
                } else if (userInput.includes('what time is it')) {
                    appendMessage(getContent('what time is it?'), 'bot');
                } else if (userInput.includes('what day is it')) {
                    appendMessage(getContent('what day is it?'), 'bot');
                } else if (userInput.includes('tell me a joke')) {
                    appendMessage(getContent('tell me a joke'), 'bot');
                } else if (userInput.includes('how are you')) {
                    appendMessage(getContent('how are you?'), 'bot');
                } else if (userInput.includes('what’s your favorite color')) {
                    appendMessage(getContent('what’s your favorite color?'), 'bot');
                } else if (userInput.includes('how do I deal with anxiety')) {
                    appendMessage(getContent('how do I deal with anxiety?'), 'bot');
                } else if (userInput.includes('why am I feeling down')) {
                    appendMessage(getContent('why am I feeling down?'), 'bot');
                } else if (userInput.includes('who created you')) {
                    appendMessage(getContent('who created you?'), 'bot');
                } else if (userInput.includes('do you like music')) {
                    appendMessage(getContent('do you like music?'), 'bot');
                } else if (userInput.includes('what’s your favorite food')) {
                    appendMessage(getContent('what’s your favorite food?'), 'bot');
                } else if (userInput.includes('what is love')) {
                    appendMessage(getContent('what is love?'), 'bot');
                } else if (userInput.includes('how do I improve my mood')) {
                    appendMessage(getContent('how do I improve my mood?'), 'bot');
                } else if (userInput.includes('why do I feel tired')) {
                    appendMessage(getContent('why do I feel tired?'), 'bot');
                } else if (userInput.includes('how do I handle school stress')) {
                    appendMessage(getContent('how do I handle school stress?'), 'bot');
                } else if (userInput.includes('who am I')) {
                    appendMessage(getContent('who am I?'), 'bot');
                } else if (userInput.includes('how do I stop overthinking')) {
                    appendMessage(getContent('how do I stop overthinking?'), 'bot');
                } else if (userInput.includes('what can I do when bored')) {
                    appendMessage(getContent('what can I do when bored?'), 'bot');
                } else if (userInput.includes('how do I make friends')) {
                    appendMessage(getContent('how do I make friends?'), 'bot');
                } else if (userInput.includes('what is my purpose')) {
                    appendMessage(getContent('what is my purpose?'), 'bot');
                } else if (userInput.includes('how do I gain confidence')) {
                    appendMessage(getContent('how do I gain confidence?'), 'bot');
                } else if (userInput.includes('how do I relax')) {
                    appendMessage(getContent('how do I relax?'), 'bot');
                } else if (userInput.includes('what can I do if I feel anxious in public')) {
                    appendMessage(getContent('what can I do if I feel anxious in public?'), 'bot');
                // Add more responses/questions here in the same format as above
                } else if (userInput.includes('what is your name')) {
                    appendMessage(getContent('my name is'), 'bot');
                } else if (userInput.includes('how do I reduce stress')) {
                    appendMessage(getContent('how do I reduce stress?'), 'bot');
                } else if (userInput.includes('what is happiness')) {
                    appendMessage(getContent('what is happiness?'), 'bot');
                } else if (userInput.includes('why do I feel lonely')) {
                    appendMessage(getContent('why do I feel lonely?'), 'bot');
                } else if (userInput.includes('how do I motivate myself')) {
                    appendMessage(getContent('how do I motivate myself?'), 'bot');
                } else if (userInput.includes('what are some relaxation techniques')) {
                    appendMessage(getContent('what are some relaxation techniques?'), 'bot');
                } else if (userInput.includes('why do I feel anxious')) {
                    appendMessage(getContent('why do I feel anxious?'), 'bot');
                } else if (userInput.includes('how do I set goals')) {
                    appendMessage(getContent('how do I set goals?'), 'bot');
                } else if (userInput.includes('what do I do if I feel stuck')) {
                    appendMessage(getContent('what do I do if I feel stuck?'), 'bot');
                } else if (userInput.includes('how do I improve my mental health')) {
                    appendMessage(getContent('how do I improve my mental health?'), 'bot');
                } else if (userInput.includes('what can I do for self-care')) {
                    appendMessage(getContent('what can I do for self-care?'), 'bot');
                } else if (userInput.includes('how do I manage my time better')) {
                    appendMessage(getContent('how do I manage my time better?'), 'bot');
                } else if (userInput.includes('why do I feel stressed')) {
                    appendMessage(getContent('why do I feel stressed?'), 'bot');
                } else if (userInput.includes('what is mindfulness')) {
                    appendMessage(getContent('what is mindfulness?'), 'bot');
                } else if (userInput.includes('how do I stay positive')) {
                    appendMessage(getContent('how do I stay positive?'), 'bot');
                } else if (userInput.includes('how do I be more productive')) {
                    appendMessage(getContent('how do I be more productive?'), 'bot');
                } else if (userInput.includes('what can I do to relax my mind')) {
                    appendMessage(getContent('what can I do to relax my mind?'), 'bot');
                } else if (userInput.includes('how do I find inner peace')) {
                    appendMessage(getContent('how do I find inner peace?'), 'bot');
                } else {
                    const response = await getChatbotResponse(userInput);
                    appendMessage(response, 'bot');
                }
        
                document.getElementById('user-input').value = '';
            }
        
            function sendOption(option) {
                appendMessage(getContent(option), 'bot');
                document.getElementById('user-input').value = '';
            }
        
            function appendMessage(message, type) {
                const chatBox = document.getElementById('chat-box');
                const messageElement = document.createElement('div');
                messageElement.className = `message ${type}`;
                messageElement.innerHTML = message;
                chatBox.appendChild(messageElement);
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        
            function getContent(option) {
                let content = '';
        
                switch (option) {
                    case 'period_pains':
                        content = `
                            <div class="chat-message">
                                <h3>Period Pains</h3>
                                <p>At-Home Remedies:</p>
                                <ul>
                                    <li>Use a heating pad or hot water bottle on the lower abdomen.</li>
                                    <li>Take a warm bath.</li>
                                    <li>Drink plenty of water to help reduce bloating.</li>
                                    <li>Eat light, nutritious meals.</li>
                                    <li>Avoid caffeine and salty foods.</li>
                                    <li>Drink chamomile, ginger, or peppermint tea, which may help soothe cramps.</li>
                                    <li>Take Painkillers as directed on the package.</li>
                                    <li>Engage in light physical activity, such as walking or gentle yoga, which can help relieve discomfort.</li>
                                </ul>
                            </div>`;
                        break;
                    case 'sad':
                        content = `
                            <div class="chat-message">
                                <h3>Feeling Sad</h3>
                                <p>Tips to Uplift Your Mood:</p>
                                <ul>
                                    <li>Talk to a trusted friend or family member about how you’re feeling.</li>
                                    <li>Engage in activities you enjoy or that usually make you feel better.</li>
                                    <li>Practice self-care and be kind to yourself.</li>
                                    <li>Write down your feelings in a journal to express and process them.</li>
                                    <li>Listen to uplifting music or watch a favorite movie.</li>
                                </ul>
                            </div>`;
                        break;
                    case 'anxious':
                        content = `
                            <div class="chat-message">
                                <h3>Feeling Anxious</h3>
                                <p>Ways to Manage Anxiety:</p>
                                <ul>
                                    <li>Practice deep breathing exercises to calm your nervous system.</li>
                                    <li>Engage in physical activity to help release tension.</li>
                                    <li>Try mindfulness or relaxation techniques to ground yourself.</li>
                                    <li>Stay connected with supportive friends or family members.</li>
                                    <li>Identify and challenge any negative thoughts or beliefs.</li>
                                    <li>Consider speaking to a counselor or therapist for professional support.</li>
                                </ul>
                            </div>`;
                        break;
                    case 'burnout':
                        content = `
                            <div class="chat-message">
                                <h3>Dealing with Burnout</h3>
                                <p>Ways to Recover from Burnout:</p>
                                <ul>
                                    <li>Take regular breaks to rest and recharge.</li>
                                    <li>Establish boundaries to separate work from personal life.</li>
                                    <li>Practice self-care and prioritize your well-being.</li>
                                    <li>Seek support from colleagues, friends, or a counselor.</li>
                                    <li>Reflect on your workload and consider delegating tasks if possible.</li>
                                    <li>Set realistic goals and celebrate small achievements.</li>
                                </ul>
                            </div>`;
                        break;
                    case 'bored':
                        content = `
                            <div class="chat-message">
                                <h3>Feeling Bored</h3>
                                <p>Things to Do:</p>
                                <ul>
                                    <li>Try a new hobby or craft.</li>
                                    <li>Read a book or listen to an audiobook.</li>
                                    <li>Watch a documentary or educational video on a topic of interest.</li>
                                    <li>Organize or redecorate a space in your home.</li>
                                    <li>Learn a new skill or take an online course.</li>
                                    <li>Call or video chat with a friend you haven’t spoken to in a while.</li>
                                </ul>
                            </div>`;
                        break;
                    case 'bad':
                        content = 'i am sorry that you feel that way, i think you should watch some young sheldon';
                        break;
                    case 'thanks':
                        content = 'it is my duty to make sure that you are okay!';
                        break;
                    case 'good':
                        content = 'that is great!, i am sure lethabo is treating you well!';
                        break;
                    case 'weather':
                        content = 'Expect Moderate temperatures today, with an average high temperature of 28°C and an average low of 16.1°C.';
                        break;
                    case 'hi':
                        content = 'Hey Sego!, how are you feeling today?';
                        break;
                    default:
                        content = 'Sorry, I do not have a response for that, ask lethabo to add the task you just gave me into the database!';
                        break;
                }
        
                return content;
            }
        
            async function getChatbotResponse(userInput) {
                // Placeholder for chatbot response simulation
                return 'Sorry, I do not have a response for that, ask lethabo to add the task you just gave me into the database!';
            }

                        function countUp() {
                            const startDate = new Date("March 21, 2024 16:00:00 GMT+0200");
                            const now = new Date();
                    
                            // Get the year and month difference
                            let years = now.getFullYear() - startDate.getFullYear();
                            let months = now.getMonth() - startDate.getMonth();
                            let days = now.getDate() - startDate.getDate();
                    
                            if (days < 0) {
                                months--;
                                const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
                                days += previousMonth;  // Add the days from the previous month
                            }
                    
                            if (months < 0) {
                                years--;
                                months += 12;
                            }
                    
                            // Now calculate the hours, minutes, and seconds
                            const hours = now.getHours() - startDate.getHours();
                            const minutes = now.getMinutes() - startDate.getMinutes();
                            const seconds = now.getSeconds() - startDate.getSeconds();
                    
                            // Display the values in the HTML
                            document.getElementById("months").innerHTML = months + years * 12;
                            document.getElementById("days").innerHTML = days;
                            document.getElementById("hours").innerHTML = Math.abs(hours);
                            document.getElementById("minutes").innerHTML = Math.abs(minutes);
                            document.getElementById("seconds").innerHTML = Math.abs(seconds);
                        }
                    
                        const interval = setInterval(countUp, 1000);

                        document.getElementById('menu-icon').addEventListener('click', function () {
                            const navLinks = document.getElementById('nav-links');
                            navLinks.classList.toggle('show'); // Toggle 'show' class
                        });
                        document.addEventListener("DOMContentLoaded", function() {
                            document.getElementById('menu-icon').addEventListener('click', function () {
                                const navLinks = document.getElementById('nav-links');
                                navLinks.classList.toggle('show'); // Toggle 'show' class
                            });
                        });
                        
                        
                       // script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});                          