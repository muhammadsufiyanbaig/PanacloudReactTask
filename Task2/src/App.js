import React from "react";
import CalendarApp from "./pages/CalendarApp";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(243 , 244 , 246 )",
        width: "100vw",
        height: "100vh",
        overflowY: "auto",
        overflowX: "auto",
      }}
    >
      <header>
        <h1 className="text-xl lg:text-4xl font-bold text-start"
        style={{
          fontSize:{
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "36px",
            xl: "36px",
          },
          lineHeight:{
            xs: "28px",
            sm: "28px",
            md: "28px",
            lg: "40px",
            xl: "40px",
          },
          fontWeight: 700,
          textAlign: "start",
        }}
        >
          Asset Events Calendar
        </h1>
      </header>
      <main>
        <CalendarApp />
      </main>
    </div>
  );
};

export default App;
