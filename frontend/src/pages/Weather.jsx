import React from "react";
import "./../styles/Weather.css";

const WeatherInsights = () => {
  return (
    <div className="weather-dashboard min-h-screen bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 text-text-light dark:text-text-dark">
            <span className="material-symbols-outlined text-primary text-3xl">
              eco
            </span>
            <h2 className="text-lg font-bold">AgriPlatform</h2>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-link">
              Dashboard
            </a>
            <a href="#" className="nav-link">
              Market Rates
            </a>
            <a href="#" className="nav-link-active">
              Weather Insights
            </a>
            <a href="#" className="nav-link">
              Community
            </a>
          </nav>

          {/* Buttons + Profile */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-2">
              <button className="btn-primary">Log In</button>
              <button className="btn-secondary">Sign Up</button>
            </div>

            <div
              className="bg-center bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtW0XTB-dWr76ylciNVW5XgZKdaFDz8Hj5s3iOQPpm6KoFXWIuCYEJcvyqh9JeMfCkdmbgo9nXV-6iEw-y1BkN26feyC9QiPyzF7rM-kuwIWKdjiRYVnj7gM5AKWHdA2vGNlQWNCu30IWomJ9l4DsCiB9vbNvcMVWgrybAuqCskmWqUpzf5kgT6UhvHgl9aqfCSY6Ku3O_GihVyp_toy0-2B0hSwrACqFi8hU8HTI0ACdxculJVWs3SYFV4V7JsqfEkNXfRTysdM6N")',
              }}
            ></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-black text-accent-blue dark:text-text-dark">
              Weather Insights (موسم کی معلومات)
            </h1>
            <p className="text-text-muted-light dark:text-text-muted-dark text-base">
              Live weather data for major agricultural cities in Pakistan.
            </p>
          </div>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            Last updated: 10 minutes ago
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: Search + Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex w-full h-12">
                <div className="flex items-center justify-center px-4 bg-card-light dark:bg-card-dark rounded-l-lg border border-r-0 border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  type="text"
                  placeholder="Search for your city or click on the map"
                  className="w-full rounded-r-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark px-4 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <button className="btn-location">
                <span className="material-symbols-outlined text-primary">
                  my_location
                </span>
                <span>My Location</span>
              </button>
            </div>

            {/* Weather Map */}
            <div className="bg-card-light dark:bg-card-dark rounded-xl p-2 border border-border-light dark:border-border-dark shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRtXHQ7ape9Ge0BNKTYANY6hNv4ffMdskEflremT2kTk5BIc5-k-xdkyHDHOBCLH1sWVOVfnNrNAyDEigKMPcASPmcZzdp5W8AOBep0YQD3lzmIVzZDdHcMtssvHBLrGWc5MeDW1O4_tyHU0ScNEUjQHA4ilMgPQlVTx-xQFTnVQ4gPlw3NFSOPezsV_RxItZoCEnK2VEGqGsxFsgxMKFPX7bgVhBTQ4xWTc0uzmkj0bOS-cBNoqbEUBOwZmdc_Ar9QnF7vxB2jcaF"
                alt="Pakistan weather map"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Section: Weather Cards */}
          <div className="space-y-6">
            {/* Toggle Tabs */}
            <div className="flex h-10 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <label className="weather-tab active">Current Weather</label>
              <label className="weather-tab">5-Day Forecast</label>
            </div>

            {/* Weather Cards */}
            <div className="space-y-4">
              <WeatherCard
                city="Faisalabad"
                condition="Partly Cloudy"
                icon="partly_cloudy_day"
                color="text-yellow-500"
                temp="32°C"
                feels="35°C"
                humidity="60%"
                wind="12 km/h"
                forecast={[
                  { day: "Mon", icon: "light_mode", color: "text-yellow-500", temp: "34°/22°" },
                  { day: "Tue", icon: "cloud", color: "text-gray-400", temp: "33°/21°" },
                  { day: "Wed", icon: "rainy", color: "text-blue-400", temp: "30°/20°" },
                  { day: "Thu", icon: "light_mode", color: "text-yellow-500", temp: "35°/23°" },
                  { day: "Fri", icon: "partly_cloudy_day", color: "text-yellow-500", temp: "34°/22°" },
                ]}
              />

              <WeatherCard
                city="Multan"
                condition="Sunny"
                icon="light_mode"
                color="text-orange-500"
                temp="38°C"
                feels="41°C"
                humidity="45%"
                wind="10 km/h"
              />

              <WeatherCard
                city="Lahore"
                condition="Rain Showers"
                icon="rainy"
                color="text-blue-500"
                temp="29°C"
                feels="30°C"
                humidity="85%"
                wind="8 km/h"
              />

              <WeatherCard
                city="Sukkur"
                condition="Clear"
                icon="clear_day"
                color="text-orange-400"
                temp="40°C"
                feels="43°C"
                humidity="30%"
                wind="15 km/h"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

/* Reusable Weather Card Component */
const WeatherCard = ({
  city,
  condition,
  icon,
  color,
  temp,
  feels,
  humidity,
  wind,
  forecast,
}) => {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm border border-border-light dark:border-border-dark">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-accent-blue dark:text-text-dark">
            {city}
          </h3>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            {condition}
          </p>
        </div>
        <span className={`material-symbols-outlined text-4xl ${color}`}>
          {icon}
        </span>
      </div>

      <div className="flex items-end justify-between mt-4">
        <div className="text-4xl font-black text-accent-blue dark:text-text-dark">
          {temp}
        </div>
        <div className="text-right text-sm text-text-muted-light dark:text-text-muted-dark">
          <p>Feels like: {feels}</p>
          <p>Humidity: {humidity}</p>
          <p>Wind: {wind}</p>
        </div>
      </div>

      {/* Forecast (optional) */}
      {forecast && (
        <div className="mt-4 pt-4 border-t border-border-light dark:border-border-dark flex justify-between text-center">
          {forecast.map((f) => (
            <div key={f.day} className="flex flex-col items-center">
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                {f.day}
              </p>
              <span
                className={`material-symbols-outlined my-1 ${f.color}`}
              >
                {f.icon}
              </span>
              <p className="text-sm font-bold text-text-light dark:text-text-dark">
                {f.temp}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherInsights;