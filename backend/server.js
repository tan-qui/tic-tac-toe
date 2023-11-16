const express = require("express");
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");
const mongoose = require("mongoose");
const blogRouter = require("./src/routes/BlogRoutes");
const dotenv = require("dotenv");

// env
dotenv.config();

// app
const app = express();

//middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//socket
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  // client disconnect
  socket.on("disconnect", function () {
    console.log("Client disconnected", socket.id);
  });

  // receive data
  socket.on("clientSendData", (data) => {
    console.log("data", data);

    // emit
    io.emit("serverSendData", { messServer: data });

  });
  
});

// router
app.use("/api/blog", blogRouter);

// monggo
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Connected to MongoDB");
    },
    (err) => {
      console.log(err);
    }
  );

// port
const port = process.env.PORT || 8081;

// app listen
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
