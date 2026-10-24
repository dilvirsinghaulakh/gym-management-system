import Link from 'next/link';
import { getDashboardData } from '@/lib/data';

export default async function ClassesPage() {
  const data = await getDashboardData();

  return (
    <main className="page-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">GF</div>
          <div>
            <p className="eyebrow">ClubHub</p>
            <h1>GymFlow</h1>
          </div>
        </div>

        <nav className="nav">
          <Link className="nav-item" href="/">Dashboard</Link>
          <Link className="nav-item" href="/members">Members</Link>
          <Link className="nav-item active" href="/classes">Classes</Link>
          <Link className="nav-item" href="/trainers">Trainers</Link>
          <Link className="nav-item" href="/attendance">Attendance</Link>
          <Link className="nav-item" href="/billing">Billing</Link>
        </nav>

        <div className="profile-card">
          <p className="eyebrow">Manager</p>
          <h3>Alicia Moore</h3>
          <span>Head of Operations</span>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Classes</p>
            <h2>Scheduled sessions</h2>
          </div>
          <button className="primary-btn">New class</button>
        </header>

        <div className="stats-grid">
          {data.classes.map((classItem) => (
            <article key={classItem.name} className="stat-card">
              <div className="stat-label-row">
                <span className="stat-label">{classItem.time}</span>
                <span className="trend">{classItem.capacity}</span>
              </div>
              <strong>{classItem.name}</strong>
              <small>{classItem.trainer}</small>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
