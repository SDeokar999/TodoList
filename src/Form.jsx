import {Box, makeStyles, TextField} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

const useStyles = makeStyles({
    headers: {
        backgroundColor: "#282c34",
        minHeight: "20vh", color: "white"
    },
    input: {
        height: "40px",
        fontSize: "25px",
        textTransform:"capitalize"
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

const Form=({typeText,setTypeText,todos,setTodos})=>{
    const classes = useStyles();
    const SubmitToHandler=(e)=>{
        e.preventDefault()
        setTodos([...todos,{text:typeText,completed:false,id:Math.random()*1000}])
        setTypeText("")
    }
    return(
        <Box className={classes.TextBox}>
            <TextField
                value={typeText}
                fullWidth="true"
                id="filled-secondary"
                label="Add item"
                disableUnderline={false}
                style={{border: '0', height: "40px", margin: '5px', padding: '10px',textTransform:"capitalize"}}
                InputProps={{ disableUnderline: true, className: classes.input,style: { textTransform: "capitalize" }}}
                onChange={(e)=>setTypeText(e.target.value)}
            />
            <AddBoxIcon onClick={SubmitToHandler} style={{width: "50px", fontSize: "30px",color:"green"}}/>
        </Box>
    )
}

export default Form;
