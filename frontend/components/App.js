import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './Header';
import MediaDisplay from './MediaDisplay';
import Description from './Description';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

// Styled Components
const AppContainer = styled.div`
   text-align: center;
   font-family: Arial, sans-serif;
`;

const DatePickerContainer = styled.div`
   margin: 20px 0;
`;

const LoadingMessage = styled.h3`
   color: #ff6347;
`;

const NoDataMessage = styled.p`
   color: #ff4500;
`;

function App() {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        setLoading(true);
        const formattedDate = date.toISOString().split('T')[0];
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${formattedDate}`);
        setApodData(response.data);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApodData();
  }, [date]);

  return (
    <AppContainer>
      <Header />
      <DatePickerContainer>
        <h2>Select a Date:</h2>
        <DatePicker selected={date} onChange={date => setDate(date)} />
      </DatePickerContainer>
      {loading ? (
        <LoadingMessage>Loading...</LoadingMessage>
      ) : apodData ? (
        <div>
          <MediaDisplay mediaUrl={apodData.url} mediaType={apodData.media_type} />
          <Description explanation={apodData.explanation} title={apodData.title} />
        </div>
      ) : (
        <NoDataMessage>No data available for the selected date.</NoDataMessage>
      )}
    </AppContainer>
  );
}

export default App
