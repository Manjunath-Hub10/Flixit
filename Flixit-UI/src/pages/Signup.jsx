import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import styled from "styled-components";

const Signup = () => {
  return (
   <Container>
    <BackgroundImage />
    <Header />
    <div className="body flex column a-center j-center">
      <div className="text flex column">
        <h1>Unlimited Movies, TV Shows and more.</h1>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <h6>Ready to watch? Enter your email to create or restart membership</h6>
      </div>
      <div className="form">
        <input type="email" placeholder="Email Address" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button>Get Started</button>
      </div>
      <button>Log In</button>
    </div>
   </Container>
  )
}

export default Signup

const Container = styled.div``;