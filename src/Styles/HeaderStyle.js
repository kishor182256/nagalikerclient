import { makeStyles   } from '@material-ui/core/styles';

export const headerStyles = makeStyles({

    headerMain:{
        display: 'flex',
        width: '100%', 
     /*    backgroundColor: '#B82C3A', */
    },
     tabMain:{
        color: '#F4FFF3',
    '&.MuiTabs-root':{
    },
}, 
tabs:{
    '&.MuiTabs-root':{
        height: '72px',
        textTransform: 'none',
    },
    
    '& .MuiTabs-indicator':{
    bottom: "none",
    border: "none",
    display: 'none',
    },      
    '&.MuiTabs-flexContainer':{
    height: '72px',
    },
    }, 

    tablist:{
        height: '72px',
        '&.MuiTabs-root':{
            textTransform: 'none',
        },
        '&.Mui-selected':{
            backgroundColor: '#F4FFF3',
            textTransform: 'none',
            color: '#B82C3A',
            top: '16px',
            height: '60px',
            borderRadius: '6px 6px 0 0',
        },

    },
    customButton:{
        borderRadius: '4px',
        height : '40px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        '&.MuiButton-contained':{
            backgroundColor: 'transparent',
            color: '#C9C9C9',
            fontSize: '16px',
            boxShadow: 'none',
            textTransform: 'none',
            '&:hover': {
              transform: 'none', 
              backgroundColor: '#B82C3A1A',
              boxShadow: 'none',
              color: '#B82C3A',
            },
            '&.Mui-active': {
                backgroundColor: '#B82C3A1A', // set the desired active state background color here
              },
        },    
    },

});