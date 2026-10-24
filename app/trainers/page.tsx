import Link from 'next/link';
import { getDashboardData } from '@/lib/data';

export default async function TrainersPage() {
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
          <Link className="nav-item" href="/classes">Classes</Link>
          <Link className="nav-item active" href="/trainers">Trainers</Link>
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
            <p className="eyebrow">Coaches</p>
            <h2>Trainer roster</h2>
          </div>
          <button className="primary-btn">Add trainer</button>
        </header>

        <div className="stats-grid">
          {data.trainers.map((trainer) => (
            <article key={trainer.id} className="stat-card">
              <div className="stat-label-row">
                <span className="stat-label">{trainer.specialty}</span>
                <span className="trend">★ {trainer.rating}</span>
              </div>
              <strong>{trainer.name}</strong>
              <small>{trainer.sessions} sessions this month</small>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
