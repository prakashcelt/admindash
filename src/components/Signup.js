import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const signupUser = async (e) => {
    e.preventDefault();

    const promise = account.create(uuidv4(), user.email, user.password);
    promise.then(
      function (response) {
        console.log("good");
        navigate("/profile");
      },
      function (error) {
        console.log("eroo");
      }
    );
  };

  return (
    <div className="container">
      <Box
        style={{ alignItems: "center" }}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Email"
          type="email"
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
        <button type="submit" onClick={signupUser}>
          Sign up
        </button>
      </Box>
    </div>
  );
}
