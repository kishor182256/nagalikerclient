import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Shared/Header";

import Login from "./Pages/Login";
import AddNewTest from "./Pages/AddNewTest";
import ReportGroup from "./Pages/ReportGroup";
import ReportFormat from "./Pages/ReportFormat";
import PriceList from "./Pages/PriceList";
import AddCollectorForm from "./Pages/AddCollectorForm";
import AddUserForm from "./Pages/AddUserForm ";
import AddDoctorForm from "./Pages/AddDoctorForm";
import EditDoctorForm from "./Pages/EditDoctorForm";
import EditUserForm from "./Pages/EditUserForm";
import EditCollectorForm from "./Pages/EditCollectorForm";
import Doctor from "./Pages/Doctor";
import User from "./Pages/User";
import Collector from "./Pages/Collector";
import AddNewTestForm from "./MasterForms/AddNewTestForm";
import AddReportGroupForm from "./MasterForms/AddReportGroupForm";
import AddPriceListForm from "./MasterForms/AddPriceListForm";
import AddReportFormatForm from "./MasterForms/AddReportFormatForm";
import Patient from "./Pages/Patient";
import PatientInformationForm from "./Pages/AddPatients";
import PatientSample from "./Pages/PatienceSampleCollection";
import EditReportGroupForm from "./MasterForms/EditReportFormatForm";
import PatientCardForm from "./MasterForms/PatientCardForm";
import PatienceCardList from "./Pages/PatienceCardList";
import { useEffect, useState } from "react";
import GetAccountList from "./Pages/GetAccountList";
import GetSampleList from "./Pages/GetSampleList";
import AddNewAccount from "./Pages/AddNewAccount";
import EditAccount from "./Pages/EditAccount";
import AddSampleForm from "./Pages/AddSampleForm";
import ViewPatientDetails from "./Pages/ViewPatientDetails";
import PatientReport from "./Pages/PatientReport";
import NewReportEntry from "./Components/modal/NewEntryReport";
import VerifyReportEntry from "./Pages/VerifyReportEntry";
import ReportPreview from "./Components/modal/ReportPreview";
import AppointMent from "./Pages/AppointMent";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("logintoken"));

  useEffect(() => {
     const timer = setTimeout(() => {
      setToken(localStorage.getItem("logintoken"));
     },4000)

     return () => {
      clearTimeout(timer)
     }
  }, []);

  return (
    <BrowserRouter>
      {token && <Header />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register-doctor" element={<Doctor />} />
        <Route exact path="/register-user" element={<User />} />
        <Route exact path="/register-collector" element={<Collector />} />

        <Route exact path="/add-doctor" element={<AddDoctorForm />} />
        <Route exact path="/add-user" element={<AddUserForm />} />
        <Route exact path="/add-collector" element={<AddCollectorForm />} />
        <Route exact path="/edit-doctor/:id" element={<EditDoctorForm />} />
        <Route exact path="/edit-user/:id" element={<EditUserForm />} />
        <Route
          exact
          path="/edit-collector/:id"
          element={<EditCollectorForm />}
        />

        <Route exact path="/add-test" element={<AddNewTest />} />
        <Route exact path="/add-report-group" element={<ReportGroup />} />
        <Route exact path="/add-report-format" element={<ReportFormat />} />
        <Route exact path="/add-price-list" element={<PriceList />} />

        <Route exact path="/register-new-test" element={<AddNewTestForm />} />
        <Route
          exact
          path="/register-report-group"
          element={<AddReportGroupForm />}
        />

        <Route exact path="/add-new-account" element={<AddNewAccount />} />
        <Route
          exact
          path="/patient-report/:phone"
          element={<PatientReport />}
        />

<Route
          exact
          path="/appointment-view/:phone"
          element={<AppointMent />}
        />
        <Route
          exact
          path="/new-report-entry/:id/:phone"
          element={<NewReportEntry />}
        />

         <Route
          exact
          path="/verify-report/:id/:phone"
          element={<VerifyReportEntry />}
        />

        <Route
          exact
          path="/register-report-format"
          element={<AddReportFormatForm />}
        />

        <Route exact path="/edit-account-list/:id" element={<EditAccount />} />

        <Route
          exact
          path="/edit-report-format/:id"
          element={<EditReportGroupForm />}
        />
        <Route
          exact
          path="/register-price-list"
          element={<AddPriceListForm />}
        />

        <Route exact path="/get-account-list" element={<GetAccountList />} />

        <Route exact path="/get-sample-list" element={<GetSampleList />} />
        <Route exact path="/register-sample-list" element={<AddSampleForm />} />

        <Route exact path="/list-patience" element={<Patient />} />
        <Route
          exact
          path="/view-patient/:id"
          element={<ViewPatientDetails />}
        />
        <Route
          exact 
          path="/add-patience"
          element={<PatientInformationForm />}
        />

        <Route exact path="/patience-cards" element={<PatienceCardList />} />
        <Route exact path="/patience-report-preview/:id/:phone" element={<ReportPreview />} />




        <Route exact path="/add-patience-cards" element={<PatientCardForm />} />
        <Route exact path="/assign-collector" element={<PatientSample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
