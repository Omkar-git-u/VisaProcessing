import { Button, Container, Modal, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { deleteStudent, fetchStudents } from "../services/StudentService";
import { useNavigate } from "react-router-dom";

export function StudentList(){
    const [students,setStudents] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedRoll, setSeletctedRoll] = useState()
    const navigate = useNavigate()

    const openModalDialog = () => {
        setShowDialog(true);
    }

    const closeModalDialog = () => {
        setShowDialog(false);
    }

    async function populateStudentState(){
        try {
            const data = await fetchStudents();
            setStudents(data.students);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateStudentState();
    },[]);

    const handleStudentDelete = async(roll) => {
        try {
            await deleteStudent(selectedRoll);
            await populateStudentState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <Container>
        <Header text="List of all students"></Header>
        {students.length !== 0 ? <Table className="mt-4">
          <thead>
            <tr>
              <th>Roll</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Gender</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
                students.map((s)=>{
                    return(
                        <tr>
                            <td>{s.roll}</td>
                            <td>{s.name}</td>
                            <td>{s.marks}</td>
                            <td>{s.gender}</td>
                            <td><Button variant="danger" onClick = { () => {
                                openModalDialog();
                                setSeletctedRoll(s.roll)
                            }} className="mr-3">Delete</Button> &nbsp; &nbsp;
                            <Button variant="primary" onClick={ () => {
                                    navigate(`edit/${s.roll}`)
                                }
                            }>Edit</Button>
                            </td>
                        </tr>
                    )
                })
            }
          </tbody>
        </Table> : <p>No Student in the list</p>}
        
        <Modal show={showDialog} onHide={closeModalDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Conformaition msg to dleet</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do uou want to delete with {selectedRoll}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>{
            handleStudentDelete()
          }}>
            Yes
          </Button>
          <Button variant="primary" onClick={closeModalDialog}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

      </Container>
    );
}