import Routes from "./routes.js"

// exports default as a function with express() as argument
export default (app) => {
  //sets itemRouter component to search for all routes
  app.use("/", Routes);
  app.get("*", function (req, res) {
    res.status(404).send({ message: "404 : Not Found" });
  });
};
