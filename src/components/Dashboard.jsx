import { Container } from "react-bootstrap";
import { Header } from "./Header";

export function Dashboard(){
    return(
        //hello this is my new comment i have added
        <Container>
            <Header text="Welcome to Student CRUD APP"></Header>
            <p>Using this app you can add remove search and update student</p>
        </Container>
    );
}