import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import PhotoCard from "./PhotoCard.js";



export default function PhotoList(props) {

  const [copyright, setCopyright] = useState([]);
//   const [api_key] = "cy0qFcpy5DbERTfHTRT1Mv7j6vtiv6kcUht9BF0o";
// console.log(copyright,"this is my initial state");

  useEffect(() => {
    async function fetchData() {
      try {
        const copyrightList = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=cy0qFcpy5DbERTfHTRT1Mv7j6vtiv6kcUht9BF0o"
        );
        // 12
        
        setCopyright(copyrightList.data);
      } catch (err) {
        console.log(err);
      } //try block
    } // fetchData()
    fetchData();
  }, []);

  return (
    <Container>
        
            <PhotoCard
            copyright={copyright.copyright}
            date={copyright.date}
            explanation={copyright.explanation}
            hdurl={copyright.url}
            key={copyright.id}
            />
          
    </Container>
  );
}