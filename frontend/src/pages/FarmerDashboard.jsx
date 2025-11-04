/* Base Styles */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

:root {
  --color-primary: #3b82f6; /* Blue-500 */
  --color-secondary: #10b981; /* Green-500 */
  --color-accent: #f59e0b; /* Amber-500 */

  /* Light Theme */
  --color-background-light: #f8fafc; /* Slate-50 */
  --color-surface-light: #ffffff; /* White */
  --color-text-light: #1e293b; /* Slate-800 */
  --color-subtext-light: #64748b; /* Slate-500 */
  --color-border-light: #e2e8f0; /* Slate-200 */

  /* Dark Theme */
  --color-background-dark: #1a202c; /* Gray-900 */
  --color-surface-dark: #2d3748; /* Gray-800 */
  --color-text-dark: #f8fafc; /* Slate-50 */
  --color-subtext-dark: #a0aec0; /* Gray-400 */
  --color-border-dark: #4a5568; /* Gray-600 */
}

/* Apply dark theme via a class on body or parent container */
.dark {
  --color-background-light: var(--color-background-dark);
  --color-surface-light: var(--color-surface-dark);
  --color-text-light: var(--color-text-dark);
  --color-subtext-light: var(--color-subtext-dark);
  --color-border-light: var(--color-border-dark);
}

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-background-light);
  color: var(--color-text-light);
}

/* Utility Classes (mimicking Tailwind where applicable) */
.min-h-screen { min-height: 100vh; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.flex-1 { flex: 1 1 0%; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }
.space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem; }
.space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 2rem; }
.space-y-10 > :not([hidden]) ~ :not([hidden]) { margin-top: 2.5rem; }
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-\[1fr_auto_auto\] { grid-template-columns: 1fr auto auto; }

.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.text-base { font-size: 1rem; line-height: 1.5rem; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-5xl { font-size: 3rem; line-height: 1; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.text-primary { color: var(--color-primary); }
.text-amber-400 { color: #fbbf24; }
.text-amber-500 { color: #f59e0b; }
.text-green-500 { color: #22c55e; }
.text-red-500 { color: #ef4444; }
.text-sky-500 { color: #0ea5e9; }
.text-gray-400 { color: #9ca3af; }
.text-gray-500 { color: #6b7280; }
.text-subtext-light { color: var(--color-subtext-light); }
.dark .text-subtext-dark { color: var(--color-subtext-dark); }
.bg-background-light { background-color: var(--color-background-light); }
.dark .bg-background-dark { background-color: var(--color-background-dark); }
.bg-surface-light\/80 { background-color: rgba(var(--color-surface-light), 0.8); } /* Needs adjustment for actual var */
.dark .bg-surface-dark\/80 { background-color: rgba(var(--color-surface-dark), 0.8); } /* Needs adjustment for actual var */
.bg-primary\/10 { background-color: rgba(var(--color-primary), 0.1); } /* Needs adjustment for actual var */

.rounded-lg { border-radius: 0.5rem; }
.rounded-full { border-radius: 9999px; }
.size-10 { width: 2.5rem; height: 2.5rem; } /* For icons/avatars */
.w-full { width: 100%; }
.h-16 { height: 4rem; }
.h-80 { height: 20rem; }
.sticky { position: sticky; }
.top-0 { top: 0; }
.z-10 { z-index: 10; }
.backdrop-blur-sm { backdrop-filter: blur(4px); }
.border-b { border-bottom-width: 1px; }
.border { border-width: 1px; }
.border-border-light { border-color: var(--color-border-light); }
.dark .border-border-dark { border-color: var(--color-border-dark); }
.max-w-7xl { max-width: 80rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-10 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
.pl-10 { padding-left: 2.5rem; }
.pr-4 { padding-right: 1rem; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mt-1 { margin-top: 0.25rem; }
.mt-4 { margin-top: 1rem; }
.object-cover { object-fit: cover; }
.bg-center { background-position: center; }
.bg-cover { background-size: cover; }
.relative { position: relative; }
.absolute { position: absolute; }
.left-3 { left: 0.75rem; }
.top-1\/2 { top: 50%; }
.-translate-y-1\/2 { transform: translateY(-50%); }
.focus\:ring-2:focus { outline: 2px solid transparent; outline-offset: 2px; box-shadow: 0 0 0 2px var(--color-primary); } /* Simplified focus ring */
.focus\:ring-primary:focus { --tw-ring-color: var(--color-primary); } /* Needs actual var adjustment */
.focus\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
.whitespace-nowrap { white-space: nowrap; }
.overflow-x-auto { overflow-x: auto; }
.table { display: table; width: 100%; border-collapse: collapse; }
.table-header-group { display: table-header-group; }
.table-row-group { display: table-row-group; }
.table-row { display: table-row; }
.table-cell { display: table-cell; padding: 0.75rem 1.5rem; vertical-align: middle; }
.flex-shrink-0 { flex-shrink: 0; }


/* Custom Components */

.nav-link {
  color: var(--color-subtext-light);
  padding: 0.5rem 0;
  transition: color 0.2s ease-in-out;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link-active {
  color: var(--color-primary);
  font-weight: 600;
  position: relative;
}

.nav-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: 9999px;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem; /* size-10 */
  height: 2.5rem; /* size-10 */
  border-radius: 0.5rem;
  background-color: var(--color-surface-light);
  border: 1px solid var(--color-border-light);
  color: var(--color-text-light);
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.icon-btn:hover {
  background-color: var(--color-border-light);
  border-color: var(--color-subtext-light);
}

.dark .icon-btn {
  background-color: var(--color-surface-dark);
  border-color: var(--color-border-dark);
  color: var(--color-text-dark);
}

.dark .icon-btn:hover {
  background-color: var(--color-border-dark);
  border-color: var(--color-subtext-dark);
}

.icon-btn-small {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem; /* rounded-md */
  background-color: var(--color-background-light);
  color: var(--color-text-light);
  transition: background-color 0.2s ease-in-out;
}

.icon-btn-small:hover {
  background-color: var(--color-border-light);
}

.dark .icon-btn-small {
  background-color: var(--color-background-dark);
  color: var(--color-text-dark);
}

.dark .icon-btn-small:hover {
  background-color: var(--color-border-dark);
}


.dashboard-card {
  background-color: var(--color-surface-light);
  border-radius: 0.75rem; /* rounded-xl */
  padding: 1.5rem; /* p-6 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--color-border-light);
}

.dark .dashboard-card {
  background-color: var(--color-surface-dark);
  border: 1px solid var(--color-border-dark);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.section-heading {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 1.5rem; /* mb-6 */
  color: var(--color-text-light);
}

.dark .section-heading {
  color: var(--color-text-dark);
}

.stat-box {
  background-color: var(--color-background-light);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border-light);
  text-align: center;
}

.dark .stat-box {
  background-color: var(--color-background-dark);
  border: 1px solid var(--color-border-dark);
}

.stat-label {
  font-size: 0.75rem; /* text-xs */
  color: var(--color-subtext-light);
  margin-bottom: 0.25rem;
}

.dark .stat-label {
  color: var(--color-subtext-dark);
}

.stat-value {
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  color: var(--color-text-light);
}

.dark .stat-value {
  color: var(--color-text-dark);
}

.tabs {
  display: flex;
  background-color: var(--color-background-light);
  border: 1px solid var(--color-border-light);
  border-radius: 0.5rem;
  padding: 0.25rem;
  gap: 0.5rem;
  width: fit-content;
}

.dark .tabs {
  background-color: var(--color-background-dark);
  border: 1px solid var(--color-border-dark);
}

.tab, .tab-active {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

.tab {
  background-color: transparent;
  color: var(--color-subtext-light);
}

.tab:hover {
  background-color: var(--color-border-light);
}

.dark .tab {
  color: var(--color-subtext-dark);
}

.dark .tab:hover {
  background-color: var(--color-border-dark);
}

.tab-active {
  background-color: var(--color-primary);
  color: white;
}

.filter-label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-subtext-light);
}

.dark .filter-label {
  color: var(--color-subtext-dark);
}

.filter-label p {
  font-weight: 500;
  color: var(--color-text-light);
}

.dark .filter-label p {
  color: var(--color-text-dark);
}


.filter-select {
  width: 100%;
  padding: 0.625rem 0.75rem; /* py-2.5 px-3 */
  border: 1px solid var(--color-border-light);
  border-radius: 0.5rem;
  background-color: var(--color-background-light);
  color: var(--color-text-light);
  appearance: none; /* Remove default arrow */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13.2-5.4H18.4c-6.5%200-12.2%204.2-14.7%2010.5-2.5%206.3-1.1%2013.3%203.2%2018.6l128%20127.9c4.3%204.3%2011.2%206.5%2018.1%206.5s13.8-2.2%2018.1-6.5l128-127.9c4.5-5.3%205.9-12.4%203.4-18.7z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 0.625rem;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.dark .filter-select {
  border-color: var(--color-border-dark);
  background-color: var(--color-background-dark);
  color: var(--color-text-dark);
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23A0AEC0%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13.2-5.4H18.4c-6.5%200-12.2%204.2-14.7%2010.5-2.5%206.3-1.1%2013.3%203.2%2018.6l128%20127.9c4.3%204.3%2011.2%206.5%2018.1%206.5s13.8-2.2%2018.1-6.5l128-127.9c4.5-5.3%205.9-12.4%203.4-18.7z%22%2F%3E%3C%2Fsvg%3E');
}

.filter-select:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2); /* ring-2 ring-primary/20 */
  outline: none;
}

.tag-primary, .tag-secondary, .tag-add {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
}

.tag-primary {
  background-color: var(--color-primary);
  color: white;
}

.tag-primary .material-symbols-outlined {
  font-size: 0.875rem;
}

.tag-secondary {
  background-color: rgba(16, 185, 129, 0.1); /* Green-500 with 10% opacity */
  color: var(--color-secondary);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.dark .tag-secondary {
  background-color: rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.4);
  color: #6ee7b7; /* Green-300 for dark mode */
}


.tag-add {
  background-color: var(--color-border-light);
  color: var(--color-subtext-light);
  border: 1px solid var(--color-border-light);
}

.dark .tag-add {
  background-color: var(--color-border-dark);
  color: var(--color-subtext-dark);
  border: 1px solid var(--color-border-dark);
}

.tag-add:hover {
  background-color: var(--color-border-light);
  color: var(--color-text-light);
}

.dark .tag-add:hover {
  background-color: var(--color-subtext-dark);
  color: var(--color-text-dark);
}

.summary-card {
  background-color: var(--color-background-light);
  border: 1px solid var(--color-border-light);
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dark .summary-card {
  background-color: var(--color-background-dark);
  border: 1px solid var(--color-border-dark);
}

.summary-card p {
  font-size: 0.875rem;
  color: var(--color-subtext-light);
}

.dark .summary-card p {
  color: var(--color-subtext-dark);
}

.summary-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-light);
}

.dark .summary-card h3 {
  color: var(--color-text-dark);
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead tr {
  border-bottom: 1px solid var(--color-border-light);
}

.dark thead tr {
  border-bottom: 1px solid var(--color-border-dark);
}

th {
  padding: 0.75rem 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-subtext-light);
  text-align: left;
}

.dark th {
  color: var(--color-subtext-dark);
}

td {
  padding: 0.75rem 0;
  font-size: 0.875rem;
  color: var(--color-text-light);
  border-bottom: 1px solid var(--color-border-light);
}

.dark td {
  color: var(--color-text-dark);
  border-bottom: 1px solid var(--color-border-dark);
}

tbody tr:last-child td {
  border-bottom: none;
}

/* Responsive Adjustments */
@media (min-width: 768px) { /* md breakpoint */
  .md\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .md\:flex { display: flex; }
  .md\:block { display: block; }
}

@media (min-width: 1024px) { /* lg breakpoint */
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lg\:col-span-2 { grid-column: span 2 / span 2; }
}