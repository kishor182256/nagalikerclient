import React from 'react'
import Button from '../Components/Shared/Buttons'
import Input from '../Components/Shared/Input'
import { formStyles } from '../Styles/Formstyle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const CollectorForm = () => {
    const classes = formStyles();
    

  return (
    <>
    <FormControl>
          <InputLabel className={classes.selectLabel}>Select</InputLabel>
         <Select  className={classes.selectInput}
             placeholder="Select"
             label="Select"
            ><MenuItem disabled value="" selected>
            Select an option
          </MenuItem>
            <MenuItem value='Select'>Active</MenuItem>
            <MenuItem value='Select'>Inactive</MenuItem>
        </Select>
    </FormControl>
      
   
   </>
  )
}

export default CollectorForm