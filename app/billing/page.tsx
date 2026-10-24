import Link from 'next/link';
import { getDashboardData } from '@/lib/data';

export default async function BillingPage() {
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
          <Link className="nav-item" href="/attendance">Attendance</Link>
          <Link className="nav-item active" href="/billing">Billing</Link>
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
            <p className="eyebrow">Finance</p>
            <h2>Billing dashboard</h2>
          </div>
          <button className="primary-btn">Create invoice</button>
        </header>

        <div className="panel">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Plan</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.billing.map((item) => (
                  <tr key={item.id}>
                    <td>{item.member}</td>
                    <td>{item.plan}</td>
                    <td>{item.amount}</td>
                    <td>
                      <span className={`status ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>{item.date}</td>
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
