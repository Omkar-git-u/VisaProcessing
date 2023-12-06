import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import { saveStudent } from "../services/StudentService";

export function StudentRegistrationForm(){
    const [isSubmitted, setIsSubmitted]= useState(false);
    const [formData, setFormData] = useState({roll:"", name:"",marks:"", gender:""});

    const handleChange =(e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault({roll:"", name:"",marks:"", gender:""});
        try {
            //console.log(formData);
            const result = await saveStudent(formData);
            setFormData({})
            setIsSubmitted(true);
            setTimeout(()=>{
                setIsSubmitted(false);
            },1500)
            console.log(result.message);
        } catch (error) {
            console.log(error);
        }
        
    }


    return (
      <Container>
        <Header text="Register student here"></Header>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Roll Number</Form.Label>
                <Form.Control type="text" value={isSubmitted?formData.roll:null} placeholder="Enter ROll Number" onKeyUp={handleChange} name="roll"
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={isSubmitted?formData.name:null} placeholder="Enter Name" onKeyUp={handleChange} name="name"/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Marks</Form.Label>name="marks"
                <Form.Control type="text" value={isSubmitted?formData.marks:null} placeholder="Enter Marks" onKeyUp={handleChange} />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="female"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
                <Button variant="primary" type="submit">Register</Button>
            </Col>
           
          </Row>
        </Form>
        <Row className="mt-5">
            <Col lg={4}>
                {isSubmitted? <Alert>Student Registered</Alert>:null}
            </Col>
        </Row>
      </Container>
    );
}