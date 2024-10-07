document.addEventListener('DOMContentLoaded', function () {
    const codeContainer = document.getElementById('code');

    const pythonCode = [
        "numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
        "even_numbers = [num for num in numbers if num % 2 == 0]",
        "print('Even numbers:', even_numbers)",
        "even_sum = sum(even_numbers)",
        "print('Sum of even numbers:', even_sum)",
        "def is_prime(n):",
        "    if n <= 1:",
        "        return False",
        "    for i in range(2, int(n**0.5) + 1):",
        "        if n % i == 0:",
        "            return False",
        "    return True",
        "print('Is 17 prime?', is_prime(17))",
        "fruit_prices = {'apple': 1.50, 'banana': 0.75, 'orange': 1.25}",
        "apple_price = fruit_prices.get('apple', 'Not available')",
        "print('Price of an apple:', apple_price)"
    ];

    function typeCode(index) {
        if (index < pythonCode.length) {
            let line = pythonCode[index];
            let i = 0;
            let interval = setInterval(function () {
                codeContainer.innerHTML += line[i];
                i++;
                if (i === line.length) {
                    clearInterval(interval);
                    codeContainer.innerHTML += '<br />';
                    codeContainer.innerHTML += '<br />';
                    typeCode(index + 1);
                }
            }, 50);
        }
    }

    typeCode(0);
});

document.addEventListener('DOMContentLoaded', function () {
    const indexBtn = document.getElementById('indexBtn');
    const coursesBtn = document.getElementById('coursesBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');
    const startCodingButton = document.querySelector('.codepen-button');


    indexBtn.addEventListener('click', function () {
        window.open('index.html', '_blank');
    });

    coursesBtn.addEventListener('click', function () {
        window.open('courses.html', '_blank');
    });

    aboutBtn.addEventListener('click', function () {
        window.open('about.html', '_blank');
    });

    contactBtn.addEventListener('click', function () {
        window.open('contact.html', '_blank');
    });
    startCodingButton.addEventListener('click', function () {
        window.open('courses.html', '_blank');
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const submitButton = document.querySelector('.buttonpro[type="submit"]');

        const thankYouMessage = document.createElement('div');
        thankYouMessage.textContent = 'Thank You';
        thankYouMessage.classList.add('thank-you-message');
        submitButton.parentNode.insertBefore(thankYouMessage, submitButton.nextSibling);


        contactForm.reset();


        setTimeout(function () {
            location.reload();
        }, 1000);
    });
});

const text = `Programming with Mohammed: Empowering Aspiring Coders
Programming with Mohammed is a YouTube channel created by Mohammed, a passionate software engineer and dedicated teacher. His mission is simple: “Anyone Can Code if they wish!” Regardless of your background or past skill set, Mohammed believes that everyone has the potential to learn programming.

Here’s what you need to know about Programming with Mohammed:

YouTube Channel: On his channel, Mohammed shares tips, tutorials, and insights on various programming languages. From the basics to advanced topics, he covers it all. Whether you’re a beginner or looking to enhance your coding skills, his content is approachable and informative1.
Python Tutorials: One of his popular series focuses on Python. Mohammed takes you through the essentials, including:
Python basics
Writing conventions
Installation
Variables
Loops
And more!
His teaching style is friendly and beginner-friendly, making it an excellent resource for those starting their coding journey1.
Core Values:
Health Above All Else: Mohammed emphasizes well-being and balance.
Display Grit Without Ego: Persistence and humility drive his work.
Serve and Inspire: He’s committed to helping others learn and grow.
Seek Perpetual Growth: Mohammed believes in continuous learning.
Spread Joy and Optimism: His positive outlook influences his content2.
Motto: “Learn, Share, and Code Together!” Mohammed encourages collaboration and community building among aspiring programmers.
Whether you’re interested in Python, web development, or any other programming topic, Programming with Mohammed is a welcoming place to expand your knowledge. Join him on this coding adventure! 🚀👩‍💻

Check out Programming with Mohammed on YouTube and start your coding journey today! 🌟`;

const typingText = document.querySelector('.typing-text');

let index = 0;

function type() {
    typingText.textContent += text[index];
    index++;

    if (index === text.length) {
        clearInterval(typingInterval);
    }
}

const typingInterval = setInterval(type, 50);

document.querySelector('.containerp').addEventListener('mouseover', function () {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
});

document.querySelector('.containerp').addEventListener('mouseout', function () {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'none';
});

