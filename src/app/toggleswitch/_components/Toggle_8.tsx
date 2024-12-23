<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type Switchprops = {}; // You can add props here if needed in the future

const Switch: React.FC<Switchprops> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;
  return (
    <StyledWrapper>
      <div className="container">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label"> </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
  }

  .label {
    height: 60px;
    width: 120px;
    background-color: #ffffff;
    border-radius: 30px;
    -webkit-box-shadow: inset 0 0 5px 4px rgba(255, 255, 255, 1),
      inset 0 0 20px 1px rgba(0, 0, 0, 0.488), 10px 20px 30px rgba(0, 0, 0, 0.096),
      inset 0 0 0 3px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 5px 4px rgba(255, 255, 255, 1),
      inset 0 0 20px 1px rgba(0, 0, 0, 0.488), 10px 20px 30px rgba(0, 0, 0, 0.096),
      inset 0 0 0 3px rgba(0, 0, 0, 0.3);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    -webkit-transition: -webkit-transform 0.4s;
    transition: -webkit-transform 0.4s;
    transition: transform 0.4s;
  }

  .label:hover {
    -webkit-transform: perspective(100px) rotateX(5deg) rotateY(-5deg);
    transform: perspective(100px) rotateX(5deg) rotateY(-5deg);
  }

  #checkbox:checked ~ .label:hover {
    -webkit-transform: perspective(100px) rotateX(-5deg) rotateY(5deg);
    transform: perspective(100px) rotateX(-5deg) rotateY(5deg);
  }

  #checkbox {
    display: none;
  }

  #checkbox:checked ~ .label::before {
    left: 70px;
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 70%);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .label::before {
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #000000;
    background-image: linear-gradient(
      130deg,
      #757272 10%,
      #ffffff 11%,
      #726f6f 62%
    );
    left: 10px;
    -webkit-box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3),
      10px 10px 10px rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3), 10px 10px 10px rgba(0, 0, 0, 0.3);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }`;

export default Switch;
=======
"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the Card component as a functional React component with TypeScript
type Switchprops = {}; // You can add props here if needed in the future

const Switch: React.FC<Switchprops> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;
  return (
    <StyledWrapper>
      <div className="container">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label"> </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
  }

  .label {
    height: 60px;
    width: 120px;
    background-color: #ffffff;
    border-radius: 30px;
    -webkit-box-shadow: inset 0 0 5px 4px rgba(255, 255, 255, 1),
      inset 0 0 20px 1px rgba(0, 0, 0, 0.488), 10px 20px 30px rgba(0, 0, 0, 0.096),
      inset 0 0 0 3px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 5px 4px rgba(255, 255, 255, 1),
      inset 0 0 20px 1px rgba(0, 0, 0, 0.488), 10px 20px 30px rgba(0, 0, 0, 0.096),
      inset 0 0 0 3px rgba(0, 0, 0, 0.3);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    -webkit-transition: -webkit-transform 0.4s;
    transition: -webkit-transform 0.4s;
    transition: transform 0.4s;
  }

  .label:hover {
    -webkit-transform: perspective(100px) rotateX(5deg) rotateY(-5deg);
    transform: perspective(100px) rotateX(5deg) rotateY(-5deg);
  }

  #checkbox:checked ~ .label:hover {
    -webkit-transform: perspective(100px) rotateX(-5deg) rotateY(5deg);
    transform: perspective(100px) rotateX(-5deg) rotateY(5deg);
  }

  #checkbox {
    display: none;
  }

  #checkbox:checked ~ .label::before {
    left: 70px;
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 70%);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .label::before {
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #000000;
    background-image: linear-gradient(
      130deg,
      #757272 10%,
      #ffffff 11%,
      #726f6f 62%
    );
    left: 10px;
    -webkit-box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3),
      10px 10px 10px rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3), 10px 10px 10px rgba(0, 0, 0, 0.3);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }`;

export default Switch;
>>>>>>> 7927750ba26b50dd1a0ece376cf45ab44c37e8dc