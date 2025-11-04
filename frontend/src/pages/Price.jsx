import React from "react";
import "./../styles/FarmerDashboard.css";

const FarmerDashboard = () => {
  return (
    <div className="farmer-dashboard min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display">
      {/* Navbar */}
      <header className="sticky top-0 z-10 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Nav */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">
                  grass
                </span>
                <h2 className="text-xl font-bold">AgriPlatform</h2>
              </div>

              <nav className="hidden md:flex gap-8">
                <a href="#" className="nav-link">
                  Dashboard
                </a>
                <a href="#" className="nav-link-active">
                  Market Rates
                </a>
                <a href="#" className="nav-link">
                  Weather
                </a>
                <a href="#" className="nav-link">
                  Community
                </a>
              </nav>
            </div>

            {/* Right: Search + Icons + Profile */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-64 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                />
              </div>

              <button className="icon-btn">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="icon-btn">
                <span className="material-symbols-outlined">settings</span>
              </button>

              <div
                className="bg-center bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-SR2H0a12Dcn0u7Borx3GoD8IKFy57gte_ZTJTS-vWC6h9hBczW-lN65qLjRMXJz2VOJpZbulZ4GmyuLEuUrpIdz5Ch6AA1oX8r22AVJFFMbfLI2-jGoFnI0h4lHPQ0wZv3ansGfH1FuUq1-cosgHHBZWEnakJ8IPYQrcXu5xHN5s4V3eowLcf2R9-NweZFewq4pI-1P4UzQ9F2dgIfRPzzyVh1Yt1YDD7OQUJvQt8vt6G7_IxaJ5eA8pyWsPyWod4I_FYrOykF1m")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Heading + Date Selector */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h1 className="text-4xl font-extrabold">Mandi Price Trends</h1>

          <div className="flex items-center gap-2 p-1 border border-border-light dark:border-border-dark rounded-lg bg-surface-light dark:bg-surface-dark">
            <button className="icon-btn-small">
              <span className="material-symbols-outlined text-lg">
                chevron_left
              </span>
            </button>
            <p className="text-sm font-medium whitespace-nowrap">
              Oct 24 – Oct 30, 2023
            </p>
            <button className="icon-btn-small">
              <span className="material-symbols-outlined text-lg">
                chevron_right
              </span>
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
          <label className="filter-label">
            <p>Select a Vegetable or Fruit</p>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                agriculture
              </span>
              <select className="filter-select">
                <option>Potato</option>
                <option>Tomato</option>
                <option>Onion</option>
              </select>
            </div>
          </label>

          <label className="filter-label">
            <p>Select Market</p>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                storefront
              </span>
              <select className="filter-select">
                <option>Lahore Market</option>
                <option>Karachi Market</option>
                <option>Islamabad Market</option>
              </select>
            </div>
          </label>

          <div className="flex flex-col">
            <p className="text-sm font-medium mb-2">Compare With...</p>
            <div className="flex flex-wrap gap-2 items-center">
              <button className="tag-primary">
                <span>Onion</span>
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
              <button className="tag-secondary">
                <span>Tomato</span>
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
              <button className="tag-add">
                <span className="material-symbols-outlined text-lg">add</span>
              </button>
            </div>
          </div>
        </div>

        {/* Price Trend Chart */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light dark:border-border-dark p-6 space-y-6">
          <div>
            <p className="text-sm text-gray-500">Price (PKR per Kg)</p>
            <h2 className="text-3xl font-bold">Potato Price Trend (Last 7 Days)</h2>
          </div>

          <div className="h-80 w-full">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoeJ1pypVkn6JUJ8BRymdcvvCXkckiI9ewuFAo9SiY_TF34eTJpibCzKQFIhxWoWUzTS8vJD2Nl8b_uol7ubAIodZJg6xowlQwhxTsUs_hZh7cmCaHnVtqoSKjn0MjX_d9PECTXnXtTnOebdCFuLLhDDyKuv9CzmkylBXGofDYTYe3DoR_kOsBuyuox6smyMh_k3tGwlpy1KxCdZD_ejqW3ydHoeeGyVUSIkTK4J0ewQjwKhwAZi_m1E6KQY7tw2ulJqo2ImKmciYx"
              alt="Line chart showing potato, onion, and tomato price trends."
            />
          </div>

          <div className="flex justify-center gap-6">
            <div className="legend-item">
              <span className="legend-color bg-primary"></span> Potato
            </div>
            <div className="legend-item">
              <span className="legend-color bg-secondary"></span> Onion
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: "#8E44AD" }}></span>{" "}
              Tomato
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="summary-card">
            <p>Highest Price</p>
            <h3>PKR 48/kg</h3>
            <div className="flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
              <span>+2.5% vs avg</span>
            </div>
          </div>

          <div className="summary-card">
            <p>Lowest Price</p>
            <h3>PKR 42/kg</h3>
            <div className="flex items-center gap-1 text-red-500">
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
              <span>-5.1% vs avg</span>
            </div>
          </div>

          <div className="summary-card">
            <p>7-Day Average</p>
            <h3>PKR 44.5/kg</h3>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined text-sm">horizontal_rule</span>
              <span>Stable trend</span>
            </div>
          </div>
        </div>

        {/* Price Data Table */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light dark:border-border-dark p-6">
          <h2 className="text-xl font-bold mb-4">Price Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border-light dark:border-border-dark">
                <tr>
                  <th>Date</th>
                  <th className="text-right">Potato (PKR/kg)</th>
                  <th className="text-right">Onion (PKR/kg)</th>
                  <th className="text-right">Tomato (PKR/kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Oct 30, 2023</td>
                  <td className="text-right">45.50</td>
                  <td className="text-right">110.00</td>
                  <td className="text-right">85.00</td>
                </tr>
                <tr>
                  <td>Oct 29, 2023</td>
                  <td className="text-right">46.00</td>
                  <td className="text-right">112.50</td>
                  <td className="text-right">82.50</td>
                </tr>
                <tr>
                  <td>Oct 28, 2023</td>
                  <td className="text-right">48.00</td>
                  <td className="text-right">115.00</td>
                  <td className="text-right">80.00</td>
                </tr>
                <tr>
                  <td>Oct 27, 2023</td>
                  <td className="text-right">44.00</td>
                  <td className="text-right">108.00</td>
                  <td className="text-right">78.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FarmerDashboard;