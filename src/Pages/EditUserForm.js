import React, { useEffect, useState } from "react";
import Input from "../Components/Shared/Input";
import { formStyles } from "../Styles/Formstyle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Buttons from "../Components/Shared/Buttons";
import axios from "axios";
import { API } from "../config";
import { useParams } from "react-router-dom";

const EditUserForm = () => {
  const classes = formStyles();
  const [rows, setRows] = useState();
  const params = useParams();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [auditlockdays, setauditlockdays] = useState();

  const handleChange = (event) => {
    setStatus(event.target.value);
  };


  const TOKEN = localStorage.getItem("logintoken");


  const fetchUser = async(e)=> {
    try {
      const data = await axios.get(`${API}/getuserlist/${params.id}`, {
        headers: { authtoken: `${TOKEN}` },
      });


      const { name, phone, email, auditlockdays,_id} = data.data.singleuser;
      setName(name);
      setId(_id);
      setPhone(phone);
      setEmail(email);
      setauditlockdays(auditlockdays);

     
    } catch (e) {
      console.error(e);
    }
  }


  useEffect(()=>{
    fetchUser()
  },[])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${API}/edit-user/${params.id}`,
        { id, phone, email, auditlockdays, name,status },
        {
          headers: { authtoken: `${TOKEN}` },
        }
      );
      
    } catch (e) {}
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.collectorForm}>
          <div className={classes.formheader}>
            <div className={classes.formname}>
              <div className={classes.formh2}>Edit User</div>
              <div className={classes.formspecification}>
                {rows?.length} You Edit user into list
              </div>
            </div>
            <div>
              <Buttons className={classes.formButton}>
                &nbsp; Back to test table
              </Buttons>
            </div>
          </div>

          <div>
            <div className={classes.formMain}>
              <FormControl>
                <div className={classes.formDiv1}>
                  <div className={classes.formDiv2}>
                    <div className={classes.formHeading}>Edit User</div>
                    <div className={classes.formLable}>Name</div>
                    <Input
                      type="text"
                      placeholder="Enter name"
                      className={classes.formInput}
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />{" "}
                    <br />
                    <div className={classes.formLable}>Phone number</div>
                    <Input
                      type="number"
                      placeholder="Enter Phone number"
                      className={classes.formInput}
                      value={phone}
                      onChange={(e)=>setPhone(e.target.value)}
                    />{" "}
                    <br />
                    <div className={classes.formLable}>Audit lock days</div>
                    <Input
                      type="number"
                      placeholder="Enter Audit lock days"
                      className={classes.formInput}
                      value={auditlockdays}
                      onChange={(e)=>setauditlockdays(e.target.value)}
                    />{" "}
                    <br />
                  </div>
                  <div className={classes.formDiv3}>
                    <div className={classes.formLable}>ID</div>
                    <Input
                      type="text"
                      placeholder="Enter ID"
                      className={classes.formInput}
                      value={id}
                      onChange={(e)=>setId(e.target.value)}
                      disabled
                    />{" "}
                    <br />
                    <div className={classes.formLable}>Email Id</div>
                    <Input
                      type="email"
                      placeholder="Enter Email Id"
                      className={classes.formInput}
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />{" "}
                    <br />
                    <div className={classes.formLable}>Status</div>
                    <Select
                      className={classes.selectInput}
                      placeholder="Select"
                      label="Select"
                      value={status}
                      onChange={handleChange}
                    >
                      <MenuItem value="">Select Status</MenuItem>
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Inactive">Inactive</MenuItem>
                    </Select>{" "}
                    <br />
                  </div>
                </div>
                <div className={classes.formDiv4}>
                  <Buttons className={classes.cancelButton}>Cancel</Buttons>

                  <Buttons className={classes.submitButton} onClick={handleSubmit}>Submit</Buttons>
                </div>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUserForm;
