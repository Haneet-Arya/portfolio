import pro1 from "../assets/project1.png"
import pro2 from "../assets/project2.webp"
import pro3 from "../assets/project3.webp"

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Sentiment Analysis of E-Commerce Reviews",
        text: "Developed sentiment analysis on e-commerce reviews using Python, Flask, CNN, and LSTM. Preprocessed data, achieving a 95% reduction in unnecessary characters. Developed a Flask server for real-time sentiment predictions. Deployed on an AWS EC2 instance, making it internet-accessible via Gunicorn. Demonstrates NLP, web development, and cloud deployment skills.",
        // view: "https://github.com/",
        source: "https://github.com/Haneet-Arya/sentimental_analysis"

    },
    {
        imgsrc: pro2,
        title: "Android Keylogger",
        text: "Developed an Android keylogger app and a Spring-based backend for for storing key strokes using REST APIs. Designed a user-friendly frontend to display logged information. Employed Docker for convenient web service deployment. Demonstrated expertise in Java, XML, Android SDK, Spring, H2, and Docker for comprehensive project execution.",
        // view: "https://github.com/",
        source: "https://github.com/Haneet-Arya/key-logger.git"

    },
    {
        imgsrc: pro3,
        title: "VIT Nav",
        text: "Created VIT Nav Android app with 10k+ downloads, using Java, Android, XML, Rest API, and Retrofit. Offers campus navigation, lightning-fast custom search, and a Dark Mode for enhanced usability in low light.",
        // view: "https://github.com/",
        source: "https://play.google.com/store/apps/details?id=edu.vit.vtop.navapp"

    }
]

export default ProjectCardData;