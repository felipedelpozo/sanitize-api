Init
----

# Installation
```
git clone git@github.com:felipedelpozo/sanitize-api.git
cd sanitize-api && npm i
npm start
```

# Compress html
```
curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 1734a297-e776-d5a4-0ef5-ed76b7622224" -d '{
	"html": "<div> <img src=”img/logo.jpg” /> <p> This is a block dummy text... </p> <span>This is an inline dummy text... </span> <script> document.body.style.color = “#fff”; </script> </div>"
}' "http://localhost:3000/compress"
```
