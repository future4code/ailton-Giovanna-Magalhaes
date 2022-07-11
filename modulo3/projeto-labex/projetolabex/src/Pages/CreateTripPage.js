import { BASE_URL } from "../constants";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

export function CreateTrip () {
const novasTrips = 

useEffect(() => 
axios.post(url)
)
axios.get(url).then((response) => {
  console.log(response);
  setId(response.data.id)
}).catch(error => console.log(error))
}
