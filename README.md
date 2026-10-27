# Lab 1: Node.js and Express server

**Name:** Allamraju Abhyas · **Registration number:** 252U1R1009 · **Section:** CSE-2A

**Live link:** Not deployed. The server was not deployed to Render/Railway/Cloud IDE; it was run and tested locally (screenshots below).

## How to run

```bash
npm install          # installs express (node_modules is not committed)
npm start            # Express server  -> http://localhost:3000
npm run plain        # plain http module server (Task 3) -> http://localhost:3000
```

Environment variables: optional `PORT` (defaults to 3000). No secrets are needed.

## Endpoints

| Method | Path | Status | Description |
|--------|------|--------|-------------|
| GET | `/` | 200 | Welcome text |
| GET | `/about` | 200 | JSON with name and section |
| GET | `/time` | 200 | Current date and time (`new Date()`) |
| any | anything else | 404 | "404 - Page Not Found" |

## Files

- `http-server.js` – Task 3, server with built-in `http.createServer` replying "Hello"
- `server.js` – Tasks 4–6, Express server with routes and 404 handler
- `package.json` – project metadata and scripts

## Status codes observed (Task 7)

| Route | Status |
|-------|--------|
| `/` | 200 |
| `/about` | 200 |
| `/time` | 200 |
| `/unknown` | 404 |

## Screenshots

![GET / returns welcome text]![alt text](image.png)
![GET /about returns JSON]![alt text](image-1.png)
![GET /time returns current date and time]![alt text](image-2.png)
![Unknown path returns 404]![alt text](image-3.png)
## package.json fields (Task 1)

- `name` – Backend_lab1; `version` – semantic version; `description` – short summary
- `main` – entry file; `scripts` – commands run with `npm run` (`npm start`)
- `author`, `license` – owner and licence; `dependencies` – packages the app needs at runtime (express)

## Viva notes

- **package.json vs node_modules:** package.json is the manifest listing metadata and dependencies; node_modules is the folder where the installed packages are downloaded (generated, not committed).
- **app.listen:** binds the app to a port and starts accepting HTTP connections; the callback runs once it is listening.
- **request / response:** `req` is the incoming HTTP request (method, URL, headers, params); `res` is the object used to build and send the reply (status, headers, body).

## Notes: problems faced and how I solved them

- The 404 handler must be registered after all other routes, otherwise it would catch valid paths.
