const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3030;

// Node Server Routes ABOVE Webpack.
app.get("/hello", (req, res) => {
	res.send({ hi: "there" });
});

// Webpack Comes last.
if (process.env.NODE_ENV !== "production") {
	const webpackMiddleware = require("webpack-dev-middleware");
	const webpack = require("webpack");
	const webpackConfig = require("./webpack.config.js");

	app.use(webpackMiddleware(webpack(webpackConfig)));

} else {
	app.use(express.static("dist"));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "dist", "index.html"));
	});
}

console.log("NODE_ENV", process.env.NODE_ENV);
app.listen(PORT, () => console.log("Listening on port: ", PORT));
