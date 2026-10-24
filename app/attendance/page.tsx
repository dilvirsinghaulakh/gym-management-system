import Link from 'next/link';
import { getDashboardData } from '@/lib/data';

export default async function AttendancePage() {
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
          <Link className="nav-item" href="/trainers">Trainers</Link>
          <Link className="nav-item active" href="/attendance">Attendance</Link>
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
            <p className="eyebrow">Tracking</p>
            <h2>Attendance overview</h2>
          </div>
          <button className="primary-btn">Export report</button>
        </header>

        <div className="panel">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Current streak</th>
                  <th>Visits</th>
                  <th>Attendance</th>
                </tr>
              </thead>
              <tbody>
                {data.members.map((member) => (
                  <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{Math.max(3, member.attendance - 30)} days</td>
                    <td>{Math.round(member.attendance / 10) + 8}</td>
                    <td>{member.attendance}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
