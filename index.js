const express = reqquire('express')

const app = express();

app.get("/", (req, resp) => {
	resp.send("Hello WORDLD _______");
});

app.listen(4000, () => {
	console.log("Ser listening on port 4000")
});
