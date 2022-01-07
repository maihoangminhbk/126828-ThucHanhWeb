import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
// import url('https://fonts.googleapis.com/css2?family=Abel&family=Anton&family=DM+Sans&family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Lora:ital,wght@1,400;1,500;1,600&family=Poppins&family=Roboto&family=Varela&family=Varela+Round&display=swap');

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        position: 'sticky',
        top: 0,
    },
    heading: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontSize: '2em',
        fontWeight: 300,
    },
    image: {
        marginLeft: '10px',
        marginTop: '5px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        alignItems: 'center',
        marginLeft: '5px',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            marginTop: 20,
            justifyContent: 'center',
        },
    },
    logout: {
        marginLeft: '60px',
        marginRight: '2px',
    },
    navlinks: {
        marginLeft: 'theme.spacing(10)',
        display: 'flex',
    },
    link: {
        cursor: 'pointer',
        textDecoration: "none",
        color: "inherit",
        fontSize: "25px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "magenta",
            borderBottom: "1px solid white",
        },
    },
    login: {
        "&:hover": {
            color: "lightgreen",
            borderBottom: "1px solid white",
        }
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));