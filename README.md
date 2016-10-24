Init
----

# Installation
```
git clone git@github.com:felipedelpozo/sanitize-api.git
cd sanitize-api && npm i
npm start
```

# Get html to translate
```
curl -X GET -H "Cache-Control: no-cache" -H "Postman-Token: 6f3d2205-1d0e-03ed-1427-829bc2f1fa1b" "http://localhost:3000/compress"
```

# Compress html
```
curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 1734a297-e776-d5a4-0ef5-ed76b7622224" -d '{
	"html": "<div> <img src=”img/logo.jpg” /> <p> This is a block dummy text... </p> <span>This is an inline dummy text... </span> <script> document.body.style.color = “#fff”; </script> </div>"
}' "http://localhost:3000/compress"
```

# Descompress html
```
curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: c95a7c25-1b50-2a7f-4648-70bef623d9cc" -d '{
    "id": "c24ddd5a-9e7f-470f-bfa1-4ca600d0b139",
    "html": "<d><i /><p> Este és un bloque de texto de muestra... </p><b>Este és un texto de muestra en linia ... </b><i /></d>"
}' "http://localhost:3000/descompress"
```
