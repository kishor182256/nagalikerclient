import React, { useState } from "react";
import Input from "../Components/Shared/Input";
import { formStyles } from "../Styles/Formstyle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Buttons from "../Components/Shared/Buttons";
import axios from "axios";
import { API } from "../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddUserForm = () => {
  const classes = formStyles();
  const [rows, setRows] = useState();

  const navigate = useNavigate();

  const TOKEN = localStorage.getItem("logintoken");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    id: Yup.string().required("ID is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    auditlockdays: Yup.number().required("Audit lock days is required"),
    status: Yup.string().required("Status is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      id: "",
      phone: "",
      email: "",
      auditlockdays: "",
      status: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const data = await axios.post(`${API}/register-user`, values, {
          headers: { authtoken: `${TOKEN}` },
        });
        if (data.data.errors) {
          toast.error("User already Registered");
        } else {
          toast.success("User Registered Successfully");
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.collectorForm}>
          <div className={classes.formheader}>
            <div className={classes.formname}>
              <div className={classes.formh2}>Add New User</div>
              <div className={classes.formspecification}>
                {rows?.length} You can add new user into list
              </div>
            </div>
            <div>
              <Buttons
                className={classes.formButton}
                onClick={() => navigate("/register-user")}
              >
                &nbsp; Back to test table
              </Buttons>
            </div>
          </div>

          <div>
            <div className={classes.formMain}>
              <FormControl>
                <div className={classes.formDiv1}>
                  <div className={classes.formDiv2}>
                    <div className={classes.formHeading}>New User</div>
                    <div className={classes.formLable}>Name</div>
                    <Input
                      type="text"
                      placeholder="Enter name"
                      className={classes.formInput}
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                      <div style={{ color: "red" }}>{errors.name}</div>
                    )}
                    <br />
                    <div className={classes.formLable}>Phone number</div>
                    <Input
                      type="number"
                      placeholder="Enter Phone number"
                      className={classes.formInput}
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone && (
                      <div style={{ color: "red" }}>{errors.phone}</div>
                    )}
                    <br />
                    <div className={classes.formLable}>Audit lock days</div>
                    <Input
                      type="number"
                      placeholder="Enter Audit lock days"
                      className={classes.formInput}
                      name="auditlockdays"
                      value={values.auditlockdays}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.auditlockdays && touched.auditlockdays && (
                      <div style={{ color: "red" }}>{errors.auditlockdays}</div>
                    )}
                    <br />
                  </div>
                  <div className={classes.formDiv3}>
                    <div className={classes.formLable}>ID</div>
                    <Input
                      type="text"
                      placeholder="Enter ID"
                      className={classes.formInput}
                      name="id"
                      value={values.id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.id && touched.id && (
                      <div style={{ color: "red" }}>{errors.id}</div>
                    )}
                    <br />
                    <div className={classes.formLable}>Email Id</div>
                    <Input
                      type="email"
                      placeholder="Enter Email Id"
                      className={classes.formInput}
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <div style={{ color: "red" }}>{errors.email}</div>
                    )}
                    <br />
                    <div className={classes.formLable}>Status</div>
                    <Select
                      className={classes.selectInput}
                      placeholder="Select"
                      label="Select"
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Inactive">Inactive</MenuItem>
                    </Select>{" "}
                    {errors.status && touched.status && (
                      <div style={{ color: "red" }}>{errors.status}</div>
                    )}
                    <br />
                  </div>
                </div>
                <div className={classes.formDiv4}>
                  <Buttons
                    className={classes.cancelButton}
                    onClick={() => navigate("/register-user")}
                  >
                    Cancel
                  </Buttons>

                  <Buttons
                    className={classes.submitButton}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Buttons>
                </div>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserForm;
