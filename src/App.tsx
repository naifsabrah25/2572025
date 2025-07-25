import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import PremiumAccounts from './pages/PremiumAccounts';
import VarietyAccounts from './pages/VarietyAccounts';
import Terms from './pages/Terms';
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('adminToken');
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" />;
};

// Admin Route Component (no header/footer)
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  return <div className="admin-layout">{children}</div>;
};

// Public Route Component (with header/footer)
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="public-layout">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
          <Route path="/premium" element={<PublicRoute><PremiumAccounts /></PublicRoute>} />
          <Route path="/variety" element={<PublicRoute><VarietyAccounts /></PublicRoute>} />
          <Route path="/terms" element={<PublicRoute><Terms /></PublicRoute>} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminRoute><AdminLogin /></AdminRoute>} />
          <Route 
            path="/admin/dashboard" 
            element={
              <AdminRoute>
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              </AdminRoute>
            } 
          />
          
          {/* Redirect admin to dashboard if authenticated, otherwise to login */}
          <Route 
            path="/admin" 
            element={
              localStorage.getItem('adminToken') 
                ? <Navigate to="/admin/dashboard" /> 
                : <Navigate to="/admin/login" />
            } 
          />
        </Routes>
        
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1f2937',
              color: '#f3f4f6',
              borderRadius: '12px',
              padding: '16px',
              fontSize: '14px',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#ffffff',
              },
            },
          }}
        />
      </Router>
    </div>
  );
}

export default App;