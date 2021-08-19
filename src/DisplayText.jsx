import {Grid, makeStyles, Typography} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {useState} from "react";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
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
        width: "250px", display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"10px"
    },
    listName:{width: "250px", height: "30px", backgroundColor: "white", display: "flex",
        justifyContent: "center",
        alignItems: "center"},
    DeleteBox:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", backgroundColor: "Red", height: "30px", color: "white"
    },
    MarkBox:{
        width:"10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", backgroundColor: "green", height: "30px", color: "white"
    },
    NormalText:{
        textTransform:"capitalize"
    },
    MarkTexts:{
        textTransform:"capitalize",textDecoration:"line-through"
    }
})

const DisplayText=({typeText,todo,todos,setTodos})=> {
    let DisplayText=null;
    let icon=null;
    const classes = useStyles();
    const deleteToHandler=()=>{
        setTodos(todos.filter((el)=>el.id!==todo.id))
    }
    const[normalText,setNormalText]=useState(false)
    if(normalText===true){
        DisplayText=<Typography className={classes.MarkTexts}>{typeText}</Typography>
        icon=<CheckBoxIcon onClick={()=>setNormalText(false)} style={{width: "30px",cursor:"pointer", fontSize: "30px",color:"white"}}/>
    }
    else{
        DisplayText=<Typography className={classes.NormalText}>{typeText}</Typography>
        icon=<CheckBoxOutlineBlankIcon onClick={()=>setNormalText(true)} style={{width: "30px",cursor:"pointer", fontSize: "30px",color:"white"}}/>
    }

    return (<Grid conatiner xs={12} className={classes.DisplayItemBox}>
        <Grid item xs={8} className={classes.listName}>
            {DisplayText}</Grid>
        <Grid item xs={2} className={classes.MarkBox}>
            {icon} </Grid>
        <Grid item xs={2} className={classes.DeleteBox}>
            <DeleteIcon onClick={deleteToHandler} style={{fontSize: "20px",cursor:"pointer"}}/></Grid>
    </Grid>)
}

export default DisplayText;