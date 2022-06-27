# Connecting backend and frontend

It is simple MERN project where you can learn how to connect backend and frontend with simple task list app. You will learn using axios and cors libraries to connect frontend with backend


## Tech Stack

**Client:** React

**Server:** Node, Express

**Database:** MongoDB


## Screenshots

![App Screenshot](https://github.com/orazgulcayew/connecting-backend-frontend/blob/main/image.png?raw=true)


## Run Locally

Clone the project

```bash
  git clone https://github.com/orazgulcayew/connecting-backend-frontend.git
```

### Add configurations for **Backend** 🖧
**1.** Create MongoDB database \
**2.** Create **.env** file then add mongodb connection url as:

```bash
  MONGO_URL = mongodb://localhost:27017/tasklist
```

**3.** Go to backend folder

```bash
  cd backend
```

**4.** Install dependencies

```bash
  npm install
```
**5.** Change **serverUrl** in **index.js** file to your custom url 
```bash
  const serverUrl = '127.0.0.1'
```
**6.** Start the server

```bash
  npm start
```

### Add configurations for **Frontend** 🖥 
**1.** Go to frontend folder

```bash
  cd frontend
```

**2.** Run:

```bash
  npm install
```

**3.** Change **backendUrl** in **App.js** 

```bash
  const backendUrl = 'YOUR_BACKEND_URL'
```

**4.** Start the server

```bash
  npm start
```
## Authors

Follow me for more

- Github: [@orazgulcayew](https://www.github.com/orazgulcayew)
- Instagram: [@orazgulcayew](https://www.instagram.com/orazgulcayew)
- LinkedIn: [@orazgulcayew](https://www.linkedin.com/in/oraz-gulchayev-797127235)

