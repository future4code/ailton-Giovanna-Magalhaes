import { BASE_URL } from "./constants";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Router } from "./Routes/Router";


function App() {
  return (
    <div>
    <Router/>
    </div>
  );
}

export default App;
