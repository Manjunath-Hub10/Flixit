import React from 'react';
import background from "../assets/login.jpg";
import styled from 'styled-components';

const BackgroundImage = () => {
  return (
    <div>
      <img src={background} alt="background" />
    </div>
  )
}

export default BackgroundImage

const Container = styled.div``;
