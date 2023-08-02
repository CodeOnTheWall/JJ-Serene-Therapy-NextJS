import { Schema, model, models } from "mongoose";

const ClientSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
});

// this would be thr express way where the server is always up and running
// but in nextJS its only up when its needed/called
// const User = model("User", UserSchema);
// export default User;

// look into the models first, if not there (||), create new one
const Client = models.Client || model("Client", ClientSchema);
export default Client;
