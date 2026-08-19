import Sidebar from "../components/admin/Sidebar";
import TopBar from "../components/admin/TopBar";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        <TopBar />

        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}
