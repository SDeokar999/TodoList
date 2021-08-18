import {Grid, makeStyles, Typography} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
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

const DisplayText=({typeText,todo,todos,setTodos})=> {
    const classes = useStyles();
    const deleteToHandler=()=>{
        setTodos(todos.filter((el)=>el.id!==todo.id))
    }
    return (<Grid conatiner xs={12} className={classes.DisplayItemBox}>
        <Grid item xs={9} className={classes.listName}> <Typography style={{textTransform:"capitalize"}}>{typeText}</Typography></Grid>
        <Grid item xs={3} className={classes.DeleteBox}><DeleteIcon onClick={deleteToHandler} style={{fontSize: "20px"}}/></Grid>
    </Grid>)
}

export default DisplayText;