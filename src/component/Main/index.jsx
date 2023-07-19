import React from "react";
import styles from "./styles.module.css";
import ChatBot from "react-simple-chatbot";
import bot from "../../images/bot.png";
import { ThemeProvider } from "styled-components";
import Swal from "sweetalert";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello, I'm Genie-bot and welcome to Genzeon-one-portal",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "And what's your name? ",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "Policies", label: "Policies", trigger: "Policies" },
        { value: "Leaves", label: "Leaves", trigger: "Leaves" },
        { value: "Employees", label: "Employees", trigger: "Employees" },
      ],
    },
    {
      id: "Policies",
      message:
        "To check policies, Click on 'Org' in sidebar > Documents > Organizational Documents",
      end: true,
    },
    {
      id: "Leaves",
      message: "To apply for leaves, Click on 'Me' in sidebar > leave ",
      end: true,
    },
    {
      id: "Employees",
      message: "Click on 'Org' in sidebar > Employees > employee directory ",
      end: true,
    },
  ];

  const theme = {
    background: "#D3D3D3",

    headerBgColor: "#025B9A",

    headerFontSize: "20px",

    botBubbleColor: "#0F3789",

    headerFontColor: "white",

    botFontColor: "white",

    userBubbleColor: "#FF5733",

    userFontColor: "white",
  };
  // Set some properties of the bot

  const config = {
    botAvatar: bot,

    floating: true,
  };

  const InProgress = () => {
    Swal({
      text: "In progress",

      icon: "warning",
    });
  };
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8lS7fj9yMW2gyVv5HIaoytqXC26kHiSjEbFyXVIn-w&s"
          }
          style={{ borderRadius: "50%", height: "50px", width: "50px" }}
          alt="logo"
        />
        <h1>Genzeon Portal</h1>

        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.container_center}>
        <h1
          style={{
            fontSize: "60px",
            color: "white",
            textAlign: "center",
            fontFamily: "serif",
          }}
        >
          Welcome to Genzeon
        </h1>
        <button
          style={{
            padding: "15px",
            fontFamily: "serif",
            fontSize: "20px",
            borderRadius: "10%",
            backgroundColor: "orange",
          }}
          onClick={InProgress}
        >
          Learn more
        </button>
      </div>

      <div className={styles.bottom_right}>
        <ThemeProvider theme={theme}>
          <ChatBot
            // This appears as the header

            // text for the chat bot

            headerTitle="Genie-bot"
            steps={steps}
            {...config}
            style={{
              botAvatar: {
                width: "80px",
                height: "80px",
              },
            }}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Main;
