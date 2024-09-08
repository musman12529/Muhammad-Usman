import { v4 as uuid } from "uuid";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
} from "@/imports";

export const dataProject = [
  {
    id: uuid(),
    title: "Premier League Fantasy",
    summary:
      "  Premier League Fantasy predicts football match outcomes using a Random Forest model. It involves data scraping for over 600 players, processing with Python and pandas, and storing results in a PostgreSQL database. The project includes a Spring Boot backend for manipulation and presentation of data and a ReactJS frontend for an intuitive interface.",
    link: "https://github.com/musman12529/Premier-League-Fantasy",
    github: "https://github.com/musman12529/Premier-League-Fantasy",
    type: "Featured Project",
    img: project1,
    styles: "col-span-12",
    type: 1,
  },
  {
    id: uuid(),
    title: "Soccer Match Prediction",
    summary:
      "  This repository contains a machine learning model to predict the outcome of football matches using a Random Forest classifier. The dataset is processed to include features like venue, opponent, and rolling averages of game statistics to enhance prediction accuracy.",
    link: "https://github.com/musman12529/Soccer_Match_Prediction",
    github: "https://github.com/musman12529/Soccer_Match_Prediction",
    type: "Website Template",
    img: project2,
    styles: "col-span-6 sm:col-span-12",
    type: 0,
  },
  {
    id: uuid(),
    title: "Sign Language Detector",
    summary:
      "  This Python project utilizes Google Teachable Machines for training image data to detect and display sign language gestures using Python. The repository contains scripts for capturing training data, training the model, and real-time sign language detection.",
    link: "https://github.com/musman12529/Sign-Language-Detector",
    github: "https://github.com/musman12529/Sign-Language-Detector",
    type: "Website",
    img: project3,
    styles: "col-span-6 sm:col-span-12",
    type: 0,
  },
  {
    id: uuid(),
    title: "InternHub",
    summary:
      "InternHub is a full-stack web application that serves as a portal for students and job seekers to apply for internships and for employers to post internship opportunities. The platform includes a user-friendly interface, secure authentication using JWT tokens, a review section for users to rate their internship experiences, and an AI chatbot.",
    link: "https://github.com/musman12529/InternHub",
    github: "https://github.com/musman12529/InternHub",
    type: "Featured Project",
    img: project4,
    styles: "col-span-12",
    type: 1,
  },
  {
    id: uuid(),
    title: "NoteNest",
    summary:
      "  NoteNest is a note-taking application built using React.js for the frontend, Node.js with Express for the backend, and MySQL for data storage. It provides a simple and intuitive interface for users to create, view, and delete notes",
    link: "https://github.com/musman12529/NoteNest-2.0-React.js",
    github: "https://github.com/musman12529/NoteNest-2.0-React.js",
    type: "Website Template",
    img: project5,
    styles: "col-span-6 sm:col-span-12",
    type: 0,
  },
  {
    id: uuid(),
    title: "Opinion Exchange",
    summary:
      "  This repository hosts a forum application built with BOTTLE for server handling, Beaker for session management, and HTML/CSS for the frontend. It offers secure user authentication, intuitive forum management, and SQLite for data storage, providing a seamless platform for online discussions and community interactions.",
    link: "https://github.com/musman12529/Opinion-Exchange",
    github: "https://github.com/musman12529/Opinion-Exchange",
    type: "Blog Website",
    img: project6,
    styles: "col-span-6 sm:col-span-12",
    type: 0,
  },
  {
    id: uuid(),
    title: "Chat App",
    summary:
      "  Chat App: A real-time chat application powered by Node.js and Socket.IO. Connect with friends, chat instantly, and enjoy a seamless communication experience. Collaborate effortlessly or have fun conversations with this user-friendly, responsive chat platform. Try it out now",
    link: "https://github.com/musman12529/Chat-App-NodeJs",
    github: "https://github.com/musman12529/Chat-App-NodeJs",
    type: "Blog Website",
    img: project7,
    styles: "col-span-6 sm:col-span-12",
    type: 0,
  },
  {
    id: uuid(),
    title: "Weather Forecast App",
    summary:
      " Explore weather conditions around the world with the Weather Forecast web app. Get up-to-date temperature, humidity, and wind speed data for any city. Powered by HTML, CSS, and JavaScript, this app fetches real-time weather data using the OpenWeatherMap API. Stay informed about the elements with just a few clicks",
    link: "https://github.com/musman12529/Weather-Forecast-Website---API",
    github: "https://github.com/musman12529/Weather-Forecast-Website---API",
    type: "Blog Website",
    img: project8,
    styles: "col-span-6 sm:col-span-12",
    type: 0,
  },
];
