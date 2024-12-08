import React from 'react';
import ButtonDirect from '../components/ButtonDirect';

const Home = () => {
  return (
    <div>
      <h1 className="text-center">Welcome to Home Page</h1>
      <ButtonDirect path={"/login"} label={"Login"}/>
      <ButtonDirect path={"/register"} label={"Register"}/>
    </div>
  );
};

export default Home;
