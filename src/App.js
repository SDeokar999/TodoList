import './App.css';
import {Container, Grid, makeStyles} from "@material-ui/core";

import {useState} from "react";
import Form from "./Form";
import DisplayText from "./DisplayText";

const useStyles = makeStyles({
    headers: {
        backgroundColor: "#282c34",
        minHeight: "20vh", color: "white"
    },
    input: {
        height: "40px",
        fontSize: "25px"
    },
    TextBox:{
        height: "40px", backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", marginBottom: "50px"
    },
    DisplayContainer:{

        justifyContent: "center",
        alignItems: "center", width: "200px"
    },
    DisplayItemBox:{
        width: "200px", display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"10px"
    },
    listName:{width: "200px", height: "30px", backgroundColor: "white", display: "flex",
        justifyContent: "center",
        alignItems: "center"},
    DeleteBox:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", backgroundColor: "Red", height: "30px", color: "white"
    }
})





function App() {
    const classes = useStyles();
    const [typeText,setTypeText]=useState("")
    const [todos,setTodos]=useState([])

    return (
        <div className="App">
            <div className="fc">
                <h1 className="fc-r1">Todo List</h1>
                <h1 className="fc-r2">Make Thinks Easy</h1>
            </div>
            <Container maxWidth={"md"}>
                <Grid container xs={12} style={{display: "flex"}}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6} style={{height: "70px"}}>
                        <Form setTodos={setTodos} todos={todos} typeText={typeText} setTypeText={setTypeText}/>
                        <Container maxWidth={"md"} className={classes.DisplayContainer}>
                            {todos.map((todo)=>(
                                <DisplayText todo={todo} todos={todos} setTodos={setTodos} typeText={todo.text}/>
                            ))}
                        </Container>
                    </Grid>
                    <Grid item xs={3}></Grid>

                </Grid>
            </Container>
        </div>
    );
}

export default App;
