import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import Services from "./pages/admin/Services";
import Gallery from "./pages/admin/Gallery";
import Booking from "./pages/admin/Booking";
import Contact from "./pages/admin/Contact";
import Testimonials from "./pages/admin/Testimonials";
import FAQs from "./pages/admin/FAQs";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Register from "./pages/Register";
import AddServices from "./pages/admin/Add-services";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/services"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Services />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/gallery"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Gallery />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/booking"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Booking />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/contact"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Contact />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/testimonials"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Testimonials />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/faqs"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <FAQs />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      {/* Services Route */}
      <Route
        path="/admin/services/add-services"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <AddServices />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
