const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        failed: false,
        title: "Design Login UI",
        description: "Create modern login page design",
        date: "2026-01-18",
        category: "Design"
      },
      {
        active: false,
        newtask: false,
        failed: false,
        title: "Fix Header Padding",
        description: "Adjust header padding and spacing",
        date: "2026-01-16",
        category: "UI"
      },
      {
        active: false,
        newtask: false,
        failed: true,
        title: "API Integration",
        description: "Connect login API with frontend",
        date: "2026-01-15",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        failed: false,
        title: "Create Dashboard Cards",
        description: "Design task number cards",
        date: "2026-01-19",
        category: "Frontend"
      },
      {
        active: false,
        newtask: false,
        failed: false,
        title: "Responsive Fix",
        description: "Fix mobile UI issues",
        date: "2026-01-17",
        category: "UI"
      },
      {
        active: false,
        newtask: false,
        failed: false,
        title: "Form Validation",
        description: "Add validation to task form",
        date: "2026-01-16",
        category: "Frontend"
      }
    ]
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        failed: false,
        title: "Database Schema",
        description: "Design user-task schema",
        date: "2026-01-20",
        category: "Backend"
      },
      {
        active: false,
        newtask: false,
        failed: false,
        title: "Bug Fixing",
        description: "Fix dashboard UI bugs",
        date: "2026-01-18",
        category: "Debug"
      },
      {
        active: false,
        newtask: false,
        failed: true,
        title: "Auth Middleware",
        description: "Create auth middleware",
        date: "2026-01-15",
        category: "Security"
      }
    ]
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        failed: false,
        title: "Task Cards UI",
        description: "Create horizontal task cards",
        date: "2026-01-19",
        category: "UI"
      },
      {
        active: false,
        newtask: false,
        failed: false,
        title: "Tailwind Setup",
        description: "Configure Tailwind CSS",
        date: "2026-01-17",
        category: "Setup"
      },
      {
        active: false,
        newtask: false,
        failed: false,
        title: "Dark Mode",
        description: "Implement dark mode UI",
        date: "2026-01-16",
        category: "Frontend"
      }
    ]
  },
  {
    id: 5,
    name: "Karan Singh",
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: true,
        failed: false,
        title: "Admin Panel UI",
        description: "Design admin dashboard UI",
        date: "2026-01-21",
        category: "Admin"
      },
      {
        active: false,
        newtask: false,
        failed: false,
        title: "Logout Feature",
        description: "Implement logout functionality",
        date: "2026-01-18",
        category: "Auth"
      },
      {
        active: false,
        newtask: false,
        failed: true,
        title: "Deploy App",
        description: "Deploy app to server",
        date: "2026-01-15",
        category: "Deployment"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Super Admin",
    email: "admin@gmail.com",
    password: "123"
  }
];

localStorage.clear();
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
