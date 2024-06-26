# Timetable for TAMK courses 📅

_Not affiliated with TAMK, unofficial project for a course. This repository is a duplicate of [Tamk timetable ](https://github.com/kristianka/tamk-timetable) For the complete history including action runs, refer to the original repository._  

This is the repository for our fullstack timetable app, made by [@HenriSjoblom](https://github.com/HenriSjoblom), [@kristianka](https://github.com/kristianka) and [@Zennrr](https://github.com/Zennrr)!

You can search tamk courses and create your own timetable!
Note: this is proof-of-concept version of the main product. Over the course, we made thorough documentation how to make the project. 

This project has a proper CI/CD pipeline (excluding deploy), we used Trello for tracking issues and what work to do. We used pull requests like in a real project, the main branch is protected.

Both frontend and backend have strict linting and style rules! We used `eslint` and `prettier`. Pretty much all buttons/server calls have a test! 

Screenshots under technologies!

# Technologies 🛠️

## Frontend

- React, Vite
- TypeScript
- TailwindCSS
- React Router
- Cypress

## Backend

- NodeJS
- TypeScript
- Express
- MongoDB
- Docker
- Jest

## Running

You need three console windows. One for frontend, one for backend and one for the Docker database.

- run `docker-compose up`
- run `npm install` in both frontend and backend
- run `npm run dev` in both frontend and backend

Required `env` values in backend:
```
TAMK_API_KEY
SECRET
MONGO_AUTHSOURCE
MONGO_USER
MONGO_PASS
MONGO_URL
```

You can get tamk api key from [here](https://avoindata.tamk.fi/en/rajapinnat/index.html). Secret can be anything, it's for jsonwebtoken. You can decide MongoDB credentials. To localhost the database, the `MONGO_URL` can be `localhost:27017/timetables_db`.

# Screenshots 📷

**Landing page**
![image](https://github.com/kristianka/tamk-timetable/assets/49764796/11839041-b1c1-4e29-9cc1-63879206ca25)

**Login page**
![image](https://github.com/kristianka/tamk-timetable/assets/49764796/774dead3-1898-47f3-886e-660b45e12840)

**Register page**
![image](https://github.com/kristianka/tamk-timetable/assets/49764796/87aa8bb9-efee-43c2-b1fa-9a9a106bc193)

**Main page after logging in**
![image](https://github.com/kristianka/tamk-timetable/assets/49764796/8442175d-df73-4264-92ed-aefd84853390)

**Searching for a course**
![image](https://github.com/kristianka/tamk-timetable/assets/49764796/6dc43d7c-6bbd-43ff-bd4d-e96b4db2f5b3)

**After course has been added**
![image](https://github.com/kristianka/tamk-timetable/assets/49764796/a234269f-a8d8-433b-98d1-3b275e6e6ca9)



