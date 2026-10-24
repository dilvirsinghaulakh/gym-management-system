import { getDashboardData } from '@/lib/data';

export default async function HomePage() {
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
          <a className="nav-item active" href="#">Dashboard</a>
          <a className="nav-item" href="#">Members</a>
          <a className="nav-item" href="#">Classes</a>
          <a className="nav-item" href="#">Trainers</a>
          <a className="nav-item" href="#">Reports</a>
          <a className="nav-item" href="#">Settings</a>
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
            <p className="eyebrow">Overview</p>
            <h2>Good morning, Alicia</h2>
          </div>
          <button className="primary-btn">Create report</button>
        </header>

        <div className="stats-grid">
          {data.overview.map((item) => (
            <article key={item.label} className="stat-card">
              <div className="stat-label-row">
                <span className="stat-label">{item.label}</span>
                <span className="trend">{item.change}</span>
              </div>
              <strong>{item.value}</strong>
              <small>{item.caption}</small>
            </article>
          ))}
        </div>

        <div className="content-grid">
          <div className="panel wide-panel">
            <div className="panel-header">
              <h3>Members</h3>
              <button className="ghost-btn">View all</button>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Plan</th>
                    <th>Status</th>
                    <th>Attendance</th>
                    <th>Trainer</th>
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
                      <td>{member.plan}</td>
                      <td>
                        <span className={`status ${member.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {member.status}
                        </span>
                      </td>
                      <td>{member.attendance}%</td>
                      <td>{member.trainer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Membership plans</h3>
              <button className="ghost-btn">Add</button>
            </div>
            <div className="plan-list">
              {data.plans.map((plan) => (
                <div key={plan.name} className="plan-item">
                  <div>
                    <strong>{plan.name}</strong>
                    <small>{plan.members} members</small>
                  </div>
                  <span>{plan.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bottom-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Classes today</h3>
              <button className="ghost-btn">Schedule</button>
            </div>

            <div className="schedule-list">
              {data.classes.map((classItem) => (
                <div key={classItem.name} className="schedule-item">
                  <div className="time-pill">{classItem.time}</div>
                  <div>
                    <strong>{classItem.name}</strong>
                    <small>{classItem.trainer}</small>
                  </div>
                  <span>{classItem.capacity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Recent activity</h3>
              <button className="ghost-btn">Feed</button>
            </div>

            <div className="activity-list">
              {data.activities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <span className="dot" />
                  <div>
                    <strong>{activity.title}</strong>
                    <small>{activity.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
