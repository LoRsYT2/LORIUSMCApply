### MongoDB integration added

This project has been updated to optionally use MongoDB via **mongoose**.

How it works:
- If you set the environment variable `MONGODB_URI` (or `MONGO_URI`) before starting the server, the app will try to connect to MongoDB and use the `Application` model.
- If no MongoDB URI is given or connection fails, the app will fallback to the existing file-based JSON storage at `data/applications.json`.

New endpoints:
- `POST /api/apply`  Accepts JSON `{ name, email, message }` and stores a new application.
- `GET  /api/list`   Lists stored applications (from MongoDB if connected, otherwise from the JSON file).

Example to run with MongoDB (replace URI):
```bash
export MONGODB_URI="mongodb+srv://user:pass@cluster.example/dbname"
npm install
node server.js
```
