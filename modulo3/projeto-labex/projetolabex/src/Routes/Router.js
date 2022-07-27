import HomePage from "../Pages/HomePage";
import AdminHomePage from "../Pages/AdminHomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import LoginPage from "../Pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationFormPage from "../Pages/ApplicationFormPage.js";
import TripDetailsPage from "../Pages/TripDetailsPage.js"
import CreateTripPage from "../Pages/CreateTripPage.js"


export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="trips/list" element={<ListTripsPage/>}/>
          <Route path="trips/application" element={<ApplicationFormPage/>}/>
          <Route path="admin/trips/create" element={<CreateTripPage/>} />
          <Route path="/admin/trips/:id" element={<TripDetailsPage/>}/>
          <Route path="admin/trips/list" element= {<AdminHomePage/>} />
      </Routes>
      </BrowserRouter>
    )
}