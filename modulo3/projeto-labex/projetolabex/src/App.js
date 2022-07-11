import logo from './logo.svg';
import './App.css';
import {BASE_URL} from "./constants";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage.js"

function App() {
  return (
    <div>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
