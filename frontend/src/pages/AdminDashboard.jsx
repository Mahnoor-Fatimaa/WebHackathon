import React from "react";
import "./../styles/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <aside className="sidebar flex flex-col justify-between border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4">
        <div>
          <div className="logo flex items-center gap-3 px-3 mb-6">
            <div
              className="logo-img bg-center bg-no-repeat rounded-full"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRMCIbL0aH3ynah_gGt2EnzuQe1kfgvHypXmWstG_55GRW79Uv3OXo2DlBLZ2jyVJdaphL7i3MNaknODuxmmQl1dOmiK56BNhLh2P0G7kivfA6N_YRs9-lUaphJqDCRgxCqDuqGBsdp5f1hbfa_WYBLMDdBYdKWjt69na39qHr5T0ro99Yn3ddgth61d7vWAuK-Xcy1-ERZmpkcXOGBZl9JJ_xkA5peskO_0tnx3ndPpm6USrxknDuxkXBXTakS8IGEobJfqlrhBT1")'
              }}
            ></div>
            <div>
              <h1 className="text-text-light-primary dark:text-text-dark-primary font-semibold">AgriPlatform</h1>
              <p className="text-primary dark:text-green-400 text-sm">Admin Panel</p>
            </div>
          </div>
          {/* Sidebar Nav */}
          <nav className="flex flex-col gap-2">
            <a href="#" className="nav-link active">
              <span className="material-symbols-outlined">dashboard</span>
              <p>Dashboard</p>
            </a>
            <a href="#" className="nav-link">
              <span className="material-symbols-outlined">trending_up</span>
              <p>Market Rates</p>
            </a>
            <a href="#" className="nav-link">
              <span className="material-symbols-outlined">cloud</span>
              <p>Weather Insights</p>
            </a>
            <a href="#" className="nav-link">
              <span className="material-symbols-outlined">forum</span>
              <p>Community Posts</p>
            </a>
            <a href="#" className="nav-link">
              <span className="material-symbols-outlined">group</span>
              <p>User Management</p>
            </a>
          </nav>
        </div>

        <button className="new-post-btn">New Post</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="top-nav border-b border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark px-10 py-3 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-text-light-primary dark:text-text-dark-primary font-bold">Dashboard</h2>
          <div className="search-notifications flex gap-4">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="notification-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </header>

        <div className="p-6 md:p-10 space-y-8">
          {/* Stats Section */}
          <div className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="stat-card">
              <p>Total Market Entries</p>
              <p className="stat-number">1,482</p>
              <p className="stat-change">+12% from last month</p>
            </div>
            <div className="stat-card">
              <p>Avg. Price Fluctuation</p>
              <p className="stat-number">+2.5%</p>
              <p className="stat-change">vs last week</p>
            </div>
            <div className="stat-card">
              <p>Submissions Today</p>
              <p className="stat-number">89</p>
              <p className="stat-change">+5 from yesterday</p>
            </div>
          </div>

          {/* Market Table */}
          <div className="market-table bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-6">
            <h2 className="table-title">Recent Submissions</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-text-light-secondary dark:text-text-dark-secondary">
                <thead className="bg-background-light dark:bg-background-dark text-xs uppercase">
                  <tr>
                    <th>Commodity</th>
                    <th>Price</th>
                    <th>Market</th>
                    <th>Date Submitted</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Wheat</th>
                    <td>PKR 3,900 / 40kg</td>
                    <td>Faisalabad</td>
                    <td>2023-10-27</td>
                    <td className="flex gap-2">
                      <button className="edit-btn">edit</button>
                      <button className="delete-btn">delete</button>
                    </td>
                  </tr>
                  {/* Add more rows dynamically */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;