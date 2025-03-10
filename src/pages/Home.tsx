import React from "react";
import Form from "../components/Form";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex justify-center items-center">
        <Form />
      </main>
    </div>
  );
};

export default Home;
