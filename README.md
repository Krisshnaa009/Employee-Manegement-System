# Employee Management System (EMS)

A lightweight Employee Management System built with **React 19** and **Vite**, styled with **Tailwind CSS v4**. Admins can create and assign tasks to employees, and employees can accept, complete, or fail tasks from their dashboard — with changes reflected live on the admin's Team Overview.

## ✨ Features

- **Role-based login** — separate Admin and Employee dashboards
- **Task creation** — admin can create tasks and assign them to any employee
- **Task lifecycle** — employees can:
  - ✅ Accept a new task
  - ✅ Mark an active task as Complete
  - ❌ Mark an active task as Failed
- **Live sync** — task updates from the employee dashboard instantly reflect on the admin's Team Overview table (shared React Context)
- **Persistent state** — task data is saved to `localStorage`, so progress survives a page refresh
- **Responsive, modern UI** — dark theme with Tailwind CSS

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Frontend   | React 19                |
| Build Tool | Vite 8                  |
| Styling    | Tailwind CSS v4          |
| Icons      | react-icons               |
| State      | React Context API + Hooks |
| Storage    | Browser `localStorage`    |

## 📂 Project Structure
src/
├── assets/                 # Images and static assets
├── components/
│   ├── Auth/
│   │   └── Login.jsx        # Login form (admin & employee)
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   ├── TaskList/
│   │   ├── TaskList.jsx     # Renders task board + task status logic
│   │   ├── NewTask.jsx      # "Accept Task" card
│   │   ├── AcceptTask.jsx   # "Complete" / "Failed" card
│   │   ├── CompleteTask.jsx # Completed task card
│   │   └── FailedTask.jsx   # Failed task card
│   └── other/
│       ├── Header.jsx
│       ├── CreateTask.jsx   # Admin task creation form
│       ├── AllTask.jsx      # Admin Team Overview table
│       └── TaskListNumbers.jsx # Employee task count widgets
├── context/
│   └── AuthProvider.jsx     # Global employee data context (source of truth)
├── utils/
│   └── localStorage.jsx     # Seed data + localStorage helpers
├── App.jsx                  # Routing between Login / Admin / Employee views
└── main.jsx                 # App entry point
## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/Krisshnaa009/Employee-Manegement-System.git
cd Employee-Manegement-System
npm install
```

### Run in development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (Vite's default port).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 🔑 Demo Credentials

| Role     | Email               | Password |
|----------|----------------------|----------|
| Admin    | `admin@me.com`       | `123`    |
| Employee | `e@e.com`             | `123`    |
| Employee | `employee2@example.com` | `123` |
| Employee | `employee3@example.com` | `123` |
| Employee | `employee4@example.com` | `123` |
| Employee | `employee5@example.com` | `123` |

> Employee data is seeded automatically into `localStorage` the first time the app runs. To reset all data back to the defaults, clear your browser's `localStorage` for this site (or open DevTools → Application → Local Storage → delete the `employees` key) and refresh.

## 📖 How It Works

1. **Admin** logs in and creates a task via the **Create New Task** form, assigning it to an employee by name.
2. The task appears on that **employee's dashboard** as a new task.
3. The **employee** clicks **Accept Task** to move it into their active task list.
4. From there, the employee marks the task **Complete** or **Failed**.
5. All status changes update the employee's task counters and are immediately visible to the **admin** in the Team Overview table — no page refresh needed.

## 🗺️ Roadmap Ideas

- Move from `localStorage` to a real backend/database
- Add task editing and deletion
- Add due-date reminders / notifications
- Add per-employee login validation against a backend `admin`/`employees` API instead of hardcoded credentials

