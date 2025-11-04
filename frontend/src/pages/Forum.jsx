import React from "react";
import "./../styles/Forum.css";

const CommunityForum = () => {
  return (
    <div className="community-dashboard min-h-screen bg-background-light dark:bg-background-dark font-display text-text-primary-light dark:text-text-primary-dark flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">eco</span>
            <h2 className="text-lg font-bold">AgriConnect</h2>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Market Rates</a>
            <a href="#" className="nav-link">Weather</a>
            <a href="#" className="nav-link-active">Community</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="btn-outline">Log In</button>
            <div
              className="bg-center bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqEWRzD16LEKIr31qwZsqUgOyNumQirMXmBovjM4vTUN5MG5Z6_2_GB9Mv04X0ZvAhT68GTJaaYGkTI-5xC7bCGjQJuttWXPp733Rei66eUEqr3p-slQdtWAjSov4hK80b-m9IO0AWBu-gsf61qZPSKCnh3y1qundae-3XMkdW_RLLhltNeBSSYBImeeZWpcIX-Vw-NQOwdTfjjT94MU09alivtxIEQXn7-JLLKQe5B-_8EZz4cseQ9BvttCHZ4wTuPwICccSwXDSC")',
              }}
            ></div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto flex flex-1 flex-col md:flex-row gap-8 p-6">
        {/* Sidebar */}
        <aside className="w-full md:w-64 lg:w-72 flex flex-col gap-6">
          {/* Create Post & Search */}
          <div className="flex flex-col gap-4">
            <button className="btn-primary flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">edit_square</span>
              Create New Post
            </button>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">
                search
              </span>
              <input
                type="text"
                placeholder="Search for posts or topics"
                className="form-input pl-10 w-full h-11 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm focus:ring-2 focus:ring-primary/50 outline-none"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="sidebar-card">
            <h3 className="sidebar-heading">Categories</h3>
            <div className="flex flex-col gap-1">
              <SidebarLink icon="grid_view" active text="All Posts" />
              <SidebarLink icon="eco" text="Wheat" />
              <SidebarLink icon="local_florist" text="Cotton" />
              <SidebarLink icon="science" text="Fertilizers" />
              <SidebarLink icon="bug_report" text="Pest Control" />
              <SidebarLink icon="account_balance" text="Government Schemes" />
            </div>
          </div>

          {/* Trending Discussions */}
          <div className="sidebar-card">
            <h3 className="sidebar-heading">Trending Discussions</h3>
            <TrendingLink
              title="Current cotton rates in Multan market."
              comments="42 comments"
            />
            <TrendingLink
              title="Tips for managing water shortage for rice crops?"
              comments="35 comments"
            />
            <TrendingLink
              title="New government subsidy announced for fertilizers."
              comments="28 comments"
            />
          </div>
        </aside>

        {/* Main Feed */}
        <section className="flex-1 flex flex-col gap-6">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-black">Community Forum</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Share knowledge, ask questions, and connect with fellow farmers.
            </p>
          </div>

          {/* Posts */}
          <div className="flex flex-col gap-6">
            <PostCard
              user="Faisal Khan"
              time="2 hours ago"
              title="Best time to sow wheat in Punjab?"
              category="Wheat"
              likes={12}
              comments={5}
              content="I'm planning my next crop cycle and was wondering if anyone has advice on the optimal time to start sowing wheat in the Punjab region. Considering the recent weather patterns, I'm not sure if the traditional schedule still holds. Any insights would be appreciated!"
              avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAwPc0IH0PMnn9sSj9r2B9iOKSG_vL2wCGl6jHKpDsAacII_Tqu6zEEOHHWvP-WPw7tVP94Wwz0UTJ3uQwiA7ljR4YbwzT6Uij6iub3wcxqQqRsFQ7ZkAbKUgXlQ6BULhGau8I24kMh8RtS07Ct5SDmPhxTDleSP5LkDCgFhcNvIlg1ZSitJv1WCO66VhnJ_HjJzVCqcZ41XsCOvbEJ2VPs2IBwQRLoWZGRkXVOEPDzBA960tYYprneFreZvhrJPKcd9VP85H4ZBnyu"
            />
            <PostCard
              user="Ayesha Bibi"
              time="1 day ago"
              title="Anyone have experience with this new pesticide?"
              categories={["Pest Control", "Cotton"]}
              likes={8}
              comments={3}
              content="My local supplier is recommending a new pesticide called 'CropGuard Plus' for cotton. Has anyone used it? I'm concerned about its effectiveness against whitefly and potential side effects on the soil."
              avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBZnRpnZi6vaUk7vYefrcc1AZXN8bCVCsH3OxrE4eHm5VZQVl_H45ADEf7IQ89k2hRafGoKcpHCQAEQGwe5PHLyQJR6iCGEyAOk9_9EUk_Q6tN6SSAS4QTnGnLp9BtnGprx6uZPlKR4JvO7kkT9CZ0rh00iLcmCRi8_jut_1oSYtlVKBlpWTjEjbBWWH-9yDZTZU_uK81-BXMyN2_VlfHDCrH1jj_Tpk2MW7p_biOmtWxTWs3LKatLiMUQatnz7LZGxa79fgqC-QbtJ"
            />
            <PostCard
              user="Imran Ahmed"
              time="3 days ago"
              title="Current cotton rates in Multan market"
              category="Market Rates"
              likes={42}
              comments={15}
              content="Just came back from the Multan market. The rate for quality cotton is around Rs. 9,500 per 40kg. It seems to be stable for now. What are the rates in your areas?"
              avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCfB8_BAeCdH_IvskPgjO_A7SVsPb97IWwBDU5t1ytjSq83MHGY308xPf9uLLEBMU_vkB4TN4p2nWjR-pc1uc25HbGwz5WmoFYY6CY3EYWlK_YMLXCjnRA6EwMj7nTYHCpiXEaRoQ1Knk4z8pdkmP77UyTVS4ooAyTU-LlAUEhx2iCyG22O2DBLsMa3wbxGbvX_SY5jx0-9NStqIkNDM3rcRAevRc5FRTIQmxEp1GcFJij3ysqkIR-0CY-hf1piHkmq9dd01cBgKLRV"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

/* ---- Reusable Components ---- */
const SidebarLink = ({ icon, text, active }) => (
  <a
    href="#"
    className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
      active
        ? "bg-primary/20 text-primary font-medium"
        : "hover:bg-primary/10 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary"
    }`}
  >
    <span className="material-symbols-outlined text-xl">{icon}</span>
    <p className="text-sm font-medium">{text}</p>
  </a>
);

const TrendingLink = ({ title, comments }) => (
  <a href="#" className="group flex flex-col">
    <p className="text-sm font-medium group-hover:text-primary">{title}</p>
    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
      {comments}
    </p>
  </a>
);

const PostCard = ({
  user,
  time,
  title,
  content,
  category,
  categories,
  likes,
  comments,
  avatar,
}) => (
  <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-border-light dark:border-border-dark">
    {/* Header */}
    <div className="flex items-center gap-3 mb-4">
      <div
        className="bg-center bg-cover rounded-full size-10"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
      <div>
        <p className="text-sm font-bold">{user}</p>
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
          Posted {time}
        </p>
      </div>
    </div>

    {/* Content */}
    <div className="space-y-2 mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
        {content}
      </p>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between">
      <div className="flex gap-2 flex-wrap">
        {category && (
          <span className="tag">{category}</span>
        )}
        {categories &&
          categories.map((c) => (
            <span key={c} className="tag">
              {c}
            </span>
          ))}
      </div>
      <div className="flex items-center gap-4 text-text-secondary-light dark:text-text-secondary-dark">
        <button className="flex items-center gap-1 hover:text-primary">
          <span className="material-symbols-outlined text-xl">thumb_up</span>
          <span className="text-sm">{likes}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-primary">
          <span className="material-symbols-outlined text-xl">chat_bubble</span>
          <span className="text-sm">{comments}</span>
        </button>
      </div>
    </div>
  </div>
);

export default CommunityForum;