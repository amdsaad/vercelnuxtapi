const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
const Experience = require("./models/Experience");
const Event = require("./models/Events");
var cors = require("cors");

app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://amdsaad:GUdhtRWog0vWxdsJ@cluster0.ukm8d.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(cors());

// get one user
app.get("/api/user/:email", async (req, res) => {
  const { email } = req.params;
  console.log(email);
  try {
    const user = await User.findOne({ email: email });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//update user
app.put("/api/user/:email", async (req, res) => {
  const { email } = req.params;
  const query = { email: email };
  const update = req.body;
  console.log(update);

  try {
    const user = await User.findOneAndUpdate(query, update, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// get all users
app.get("/api/users/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//ad new user
app.post("/api/user", async (req, res) => {
  const user = new User({
    family_name: req.body.family_name,
    given_name: req.body.given_name,
    email: req.body.email,
    nickname: req.body.nickname,
    picture: req.body.picture,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

// add Experience
app.post("/api/experience", async (req, res) => {
  const experience = new Experience({
    name: req.body.name,
    uid: req.body.uid,
    hero_email: req.body.hero_email,
  });
  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    error.status(400).json({ message: error.message });
  }
});
// get hero Experiences
app.get("/api/experiences/:email", async (req, res) => {
  const { email } = req.params;
  console.log(email);

  try {
    const experiences = await Experience.find({ hero_email: email }).exec();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// get one Experiences
app.get("/api/experience/:uid", async (req, res) => {
  try {
    const experience = await Experience.findOne({ uid: req.params.uid });
    res.json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// add events to Experience
app.post("/api/experience/:id/event", async (req, res) => {
  const event = new Event({
    startRecur: req.body.startRecur,
    endRecur: req.body.endRecur,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    experience: req.body.experience,
  });
  try {
    const newEvent = await event.save();
    console.log(newEvent);
    res.status(201).json(newEvent);
  } catch (error) {
    error.status(400).json({ message: error.message });
  }
});
// get events of Experience
app.get("/api/experience/:id/events", async (req, res) => {
  try {
    const events = await Event.find({ experience: req.params.id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = app;
