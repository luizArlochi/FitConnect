# FitConnect

## ReactJS Application with Django
This is an application that combines a frontend developed in ReactJS and a backend developed in Django, both running in Docker containers.

## Requirements
- **Docker**
- **Docker Compose**

### Technologies used in Frontend

- **React:** A JavaScript library for building user interfaces.<br>
- **React DOM:** Entry point for React on the DOM.<br>
- **React Router DOM:** DOM bindings for React Router.<br>
- **Axios:** Promise based HTTP client for the browser and Node.js.<br>
- **Styled Components:** CSS-in-JS library for styling React components.<br>
- **Vite:** A fast development server and bundler tool for modern web development.<br>

Install dependencies using npm or yarn:

```bash
npm install
# or 
yarn install
```
Start the development server:



```bash
npm run dev
# or
yarn dev
```
Open your web browser and visit http://localhost:5173 to view the application.

### Technologies used in Backend

- **Django:** A high-level Python web framework that encourages rapid development and clean, pragmatic design.<br>
- **django-rest-framework:** A powerful and flexible toolkit for building Web APIs in Django.<br>
- **PyFlakes:** A static analysis tool for Python that checks for errors without executing the code.<br>

## How to Run 

### Locally

 ```bash
 python manage.py runserver localhost:5000
```

To run the application, make sure you have Docker and Docker Compose installed on your machine. Then, execute the following command in the project root:

```bash
docker-compose up --build
```
This will create and start the containers for the frontend and backend. The frontend will be accessible at http://localhost:3000 and the backend at http://localhost:5000.
