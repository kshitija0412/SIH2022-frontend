import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import avatar from "./avatar.svg";
import './Card.css'
import { Button } from '@mantine/core';
// import { Box } from '@mantine/core';

function FacultyCardnew() {
  return (
    
    <MDBRow className="row-cols-1 row-cols-md-4 g-3">
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            className="avatar"
            src={avatar}
            alt="..."
            position="top"
            //<Avatar src= {userprofile} alt="it's me" />
          />

          <MDBCardBody>
            <MDBCardTitle className="title">Dr. Dhananjay Patel</MDBCardTitle>
            <MDBCardText>Assistant Professor</MDBCardText>
            <hr />
            <MDBCardText>Department of Electronics and Telecommunication Engineering</MDBCardText>
            <hr/>
            <MDBCardText>Years of Experience - 7 Years</MDBCardText>
          </MDBCardBody>
        

<Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href=" "
      styles={(theme) => ({
        root: {
          backgroundColor: '#3D8579',
          marginBottom: '20px',
          margin: '20px',
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,

          '&:hover': {
            backgroundColor: theme.fn.darken('#eef7f6', 0.01),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      Click for more details
    </Button>
  
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage className="avatar" 
          src={avatar} 
          alt="..." 
          position="top" />
          <MDBCardBody>
            <MDBCardTitle className="title">Dr. Arpit Rawankar</MDBCardTitle>
            
            <MDBCardText>Assistant Professor </MDBCardText>
            <hr />
           <MDBCardText> Department of Electronics and Telecommunication Engineering</MDBCardText>
           <hr/>
            <MDBCardText>Years of Experience - 15 Years</MDBCardText>
          </MDBCardBody>
         

<Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href=" "
      styles={(theme) => ({
        root: {
          backgroundColor: '#3D8579',
          marginBottom: '20px',
          margin: '20px',
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,

          '&:hover': {
            backgroundColor: theme.fn.darken('#eef7f6', 0.03),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      Click for more details
    </Button>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            className="avatar"
            src={avatar}
            alt="..."
            position="top"
            //<Avatar src= {userprofile} alt="it's me" />
          />

          <MDBCardBody>
            <MDBCardTitle className="title">Dr. Dhananjay Patel</MDBCardTitle>
          
            <MDBCardText>Assistant Professor </MDBCardText>
            <hr />
<MDBCardText>Department of Electronics and Telecommunication Engineering</MDBCardText>
<hr/>
            <MDBCardText>Years of Experience - 7 Years</MDBCardText>
          </MDBCardBody>
        

<Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href=" "
      styles={(theme) => ({
        root: {
          backgroundColor: '#3D8579',
          marginBottom: '20px',
          margin: '20px',
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,

          '&:hover': {
            backgroundColor: theme.fn.darken('#eef7f6', 0.01),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      Click for more details
    </Button>
  
        </MDBCard>
      </MDBCol>
     
    </MDBRow>
   
  );
}

export default FacultyCardnew;
