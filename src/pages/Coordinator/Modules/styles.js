import {makeStyles} from "@material-ui/core/styles";


export default makeStyles(theme => ({
    addModuleButton: {
        backgroundColor: theme.palette.common.white,
        bottom: 30,
        position: "absolute",
        right: 20
    },
    listContainer : {
        height: "90%", 
        padding: "10px 0", 
        overflow: "auto"
    },
    sidebar: {
        height: "89vh",
        position: "relative",
        width: "100%",
    },
}))