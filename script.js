document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    // Scroll observer for showing sections on scroll
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    // Smooth scrolling for navigation buttons
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    document.getElementById('contact-form').addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
    
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    
        if (response.ok) {
            alert('Message sent successfully!');
            event.target.reset();
        } else {
            alert('Failed to send message. Please try again later.');
        }
    });
    const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use the email service of your choice (e.g., Gmail, Outlook)
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'cwagh2309@gmail.com', // Replace with your target email
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Failed to send message.');
        } else {
            res.status(200).send('Message sent successfully.');
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

    // Dynamically set element heights for better responsiveness
    function adjustHeights() {
        const profileImage = document.querySelector('.profile-image');
        profileImage.style.height = `${profileImage.offsetWidth}px`;
    }

    window.addEventListener('resize', adjustHeights);
    adjustHeights();
});
