export type OverviewItem = {
  label: string;
  value: string;
  change: string;
  caption: string;
};

export type Member = {
  id: number;
  name: string;
  email: string;
  plan: string;
  status: 'Active' | 'Paused' | 'Expired';
  joined: string;
  attendance: number;
  trainer: string;
  nextBilling: string;
};

export type Plan = {
  name: string;
  price: string;
  members: number;
};

export type ClassItem = {
  name: string;
  time: string;
  trainer: string;
  capacity: string;
};

export type Trainer = {
  id: number;
  name: string;
  specialty: string;
  sessions: number;
  rating: number;
};

export type Activity = {
  id: number;
  title: string;
  time: string;
};

export type BillingEntry = {
  id: number;
  member: string;
  plan: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Due';
  date: string;
};

export const dashboardData = {
  overview: [
    { label: 'Active members', value: '2,480', change: '+12.4%', caption: 'vs last month' },
    { label: 'Monthly revenue', value: '$43.2K', change: '+8.1%', caption: 'subscription income' },
    { label: 'Class attendance', value: '84%', change: '+5.3%', caption: 'this week' },
    { label: 'New signups', value: '92', change: '+18.7%', caption: 'last 7 days' },
  ] as OverviewItem[],
  members: [
    { id: 1, name: 'Sophia Martin', email: 'sophia@clubflow.com', plan: 'Premium', status: 'Active', joined: 'Joined 2 months ago', attendance: 96, trainer: 'Lena', nextBilling: 'Aug 05' },
    { id: 2, name: 'Daniel Lee', email: 'daniel@clubflow.com', plan: 'Strength', status: 'Active', joined: 'Joined 4 months ago', attendance: 89, trainer: 'Marco', nextBilling: 'Aug 08' },
    { id: 3, name: 'Ava Thompson', email: 'ava@clubflow.com', plan: 'Group', status: 'Paused', joined: 'Joined 1 month ago', attendance: 64, trainer: 'Nina', nextBilling: 'Aug 12' },
    { id: 4, name: 'Isaac Ross', email: 'isaac@clubflow.com', plan: 'Premium', status: 'Active', joined: 'Joined 6 months ago', attendance: 91, trainer: 'Lena', nextBilling: 'Aug 15' },
    { id: 5, name: 'Mia Lewis', email: 'mia@clubflow.com', plan: 'Flex', status: 'Expired', joined: 'Joined 2 weeks ago', attendance: 42, trainer: 'Noah', nextBilling: 'Aug 20' },
    { id: 6, name: 'Olivia Chen', email: 'olivia@clubflow.com', plan: 'Premium', status: 'Active', joined: 'Joined 3 months ago', attendance: 92, trainer: 'Chris', nextBilling: 'Aug 22' },
  ] as Member[],
  plans: [
    { name: 'Premium', price: '$79/mo', members: 834 },
    { name: 'Strength', price: '$99/mo', members: 621 },
    { name: 'Group', price: '$59/mo', members: 713 },
    { name: 'Flex', price: '$39/mo', members: 312 },
  ] as Plan[],
  classes: [
    { name: 'HIIT Blast', time: '07:00 AM', trainer: 'Chris', capacity: '18/24 seats' },
    { name: 'Power Yoga', time: '09:30 AM', trainer: 'Nina', capacity: '12/15 seats' },
    { name: 'Strength Lab', time: '12:00 PM', trainer: 'Marco', capacity: '10/12 seats' },
    { name: 'Spin Rush', time: '06:15 PM', trainer: 'Lena', capacity: '22/25 seats' },
  ] as ClassItem[],
  trainers: [
    { id: 1, name: 'Lena Brooks', specialty: 'Strength & Conditioning', sessions: 128, rating: 4.9 },
    { id: 2, name: 'Marco Silva', specialty: 'Powerlifting', sessions: 94, rating: 4.8 },
    { id: 3, name: 'Nina Patel', specialty: 'Mobility & Yoga', sessions: 111, rating: 4.9 },
    { id: 4, name: 'Chris Young', specialty: 'HIIT', sessions: 136, rating: 5.0 },
  ] as Trainer[],
  activities: [
    { id: 1, title: 'New member registration approved', time: '12 mins ago' },
    { id: 2, title: 'Payment reminder sent to 8 members', time: '1 hour ago' },
    { id: 3, title: 'Strength Lab class reached 90% occupancy', time: '2 hours ago' },
    { id: 4, title: 'Trainer schedule updated for next week', time: 'Today' },
  ] as Activity[],
  billing: [
    { id: 1, member: 'Sophia Martin', plan: 'Premium', amount: '$79.00', status: 'Paid', date: 'Aug 01' },
    { id: 2, member: 'Daniel Lee', plan: 'Strength', amount: '$99.00', status: 'Pending', date: 'Aug 03' },
    { id: 3, member: 'Ava Thompson', plan: 'Group', amount: '$59.00', status: 'Due', date: 'Aug 04' },
    { id: 4, member: 'Isaac Ross', plan: 'Premium', amount: '$79.00', status: 'Paid', date: 'Aug 05' },
  ] as BillingEntry[],
};

export async function getDashboardData() {
  return dashboardData;
}
