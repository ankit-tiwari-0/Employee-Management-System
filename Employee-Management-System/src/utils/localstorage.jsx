const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Fix login bug",
          description: "Resolve login issue on mobile devices",
          date: "2026-03-18",
          category: "Bug Fix",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Update dashboard UI",
          description: "Improve layout using Tailwind",
          date: "2026-03-19",
          category: "UI",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Write API docs",
          description: "Document authentication endpoints",
          date: "2026-03-20",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },

    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Create signup page",
          description: "Build responsive signup form",
          date: "2026-03-18",
          category: "Frontend",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Fix navbar issue",
          description: "Navbar not responsive on mobile",
          date: "2026-03-19",
          category: "Bug Fix",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Optimize images",
          description: "Compress images for faster loading",
          date: "2026-03-20",
          category: "Performance",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },

    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Setup backend server",
          description: "Initialize Express server",
          date: "2026-03-18",
          category: "Backend",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Database schema",
          description: "Design MongoDB schema",
          date: "2026-03-19",
          category: "Database",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Fix API error",
          description: "Resolve 500 error in API",
          date: "2026-03-20",
          category: "Bug Fix",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },

    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Design landing page",
          description: "Create hero section",
          date: "2026-03-18",
          category: "UI/UX",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Color system",
          description: "Define app color palette",
          date: "2026-03-19",
          category: "Design",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Fix spacing issues",
          description: "Adjust padding/margins",
          date: "2026-03-20",
          category: "UI",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },

    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Testing login flow",
          description: "Check all edge cases",
          date: "2026-03-18",
          category: "Testing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Write test cases",
          description: "Unit testing using Jest",
          date: "2026-03-19",
          category: "Testing",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Bug report",
          description: "Document all found bugs",
          date: "2026-03-20",
          category: "QA",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    }
  ];

  const  admin = [{
    id: 1,
    email: "admin@example.com",
    password: "123"
}];


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return { employees, admin }
}