# hello-echo-api

A simple Node.js Express API service with two endpoints:
- `GET /` → returns `"Hello World!"`

Request:
`curl -X GET http://localhost:3000/`

Response:
`Hello World!`



- `POST /echo` → echoes back the JSON data you send

Request:
```
curl -X POST http://localhost:3000/echo \
  -H "Content-Type: application/json" \
  -d '{"message":"Hi API!"}'
```

Response:
```
{
  "received": {
    "message": "Hi API!"
  }
}
```


---




## 🚀 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/uturet/hello-echo-api.git
cd hello-echo-api
npm install
