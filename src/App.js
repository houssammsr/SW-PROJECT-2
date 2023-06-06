import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import EmployeeDashboardPage from './pages/EmployeeDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import Forgotpassword from './pages/First';
import SecondPage from './pages/Second';
import ThirdPage from './pages/Third';
import LastPage from './pages/LastPage';
import Dashboard from './components/employee/Dashboard';
import EditProfile from './components/employee/EditProfile';
import EmployeeProgram from './components/employee/EmployeeProgram';
import EmployeeTrackRequest from './components/employee/EmployeeTrackRequest';
import AddChapterPage from './components/admin/AddChapterPage';
import AddSectionPage from './components/admin/AddSectionPage';
import TransactionsOfPayout from "./components/admin/TransactionsOfPayout";
import TransactionsOfTransfer from "./components/admin/TransactionsOfTransfer";
import TransactionsOfAllocation from "./components/admin/TransactionsOfAllocation";
import TransactionsOfIncome from "./components/admin/TransactionsOfIncome";
import ProgramManagementPage from "./components/admin/ProgramManagementPage";

function App() {

  return (
    <div className='continer' >
      <BrowserRouter>

        <Routes>

          <Route path='/' exact element={<Login />}></Route>
          <Route path="/employee-dashboard" exact element={<EmployeeDashboardPage />} ></Route>
          <Route path="/admin-dashboard" exact element={<AdminDashboardPage />} ></Route>
          <Route path='/forgotpassword' exact element={<Forgotpassword />} ></Route>
          <Route path="/send-link" exact element={<SecondPage />} ></Route>
          <Route path="/reset-password" exact element={<ThirdPage />} ></Route>
          <Route path="/success" exact element={<LastPage />} ></Route>
          <Route path="/employee/dashboard" element={<Dashboard />} />
          <Route path="/employee/profile" element={<EditProfile />} />
          <Route path="/employee/track-request" element={<EmployeeTrackRequest />} />
          <Route path="/employee/program" element={<EmployeeProgram />} />
          <Route path="/admin/adddivisionpage" element={<AddChapterPage />} />
          <Route path="/admin/addsectionpage" element={<AddSectionPage />} />
          <Route path="/admin/transactions" element={<TransactionsOfPayout />} />
          <Route path="/admin/transactionsoftransfer" element={<TransactionsOfTransfer />} />
          <Route  path="/admin/transactionsofallocation" element={<TransactionsOfAllocation />}/>
          <Route path="/admin/transactionsofincome" element={<TransactionsOfIncome />} />
          <Route path="/admin/ProgramManagementPage" element={<ProgramManagementPage />} />

        </Routes>


      </BrowserRouter>
    </div>




  );
}


export default App;
