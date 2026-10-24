import Link from 'next/link';
import { getDashboardData } from '@/lib/data';

export default async function MembersPage() {
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
          <Link className="nav-item active" href="/members">Members</Link>
          <Link className="nav-item" href="/classes">Classes</Link>
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
            <p className="eyebrow">Members</p>
            <h2>Member directory</h2>
          </div>
          <button className="primary-btn">Add member</button>
        </header>

        <div className="panel">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Plan</th>
                  <th>Status</th>
                  <th>Attendance</th>
                  <th>Next billing</th>
                </tr>
              </thead>
              <tbody>
                {data.members.map((member) => (
                  <tr key={member.id}>
                    <td>
                      <div className="member-cell">
                        <span className="avatar">{member.name.charAt(0)}</span>
                        <div>
                          <strong>{member.name}</strong>
                          <small>{member.joined}</small>
                        </div>
                      </div>
                    </td>
                    <td>{member.email}</td>
                    <td>{member.plan}</td>
                    <td>
                      <span className={`status ${member.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        {member.status}
                      </span>
                    </td>
                    <td>{member.attendance}%</td>
                    <td>{member.nextBilling}</td>
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
