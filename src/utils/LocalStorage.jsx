// utils/LocalStorage.js
const employees = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                title: "Project Setup",
                description: "Set up the project structure and install dependencies.",
                date: "2024-10-23",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                title: "Client Meeting",
                description: "Attend the meeting with the client to gather requirements.",
                date: "2024-10-20",
                category: "Meetings"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                title: "Database Design",
                description: "Design the database schema for the project.",
                date: "2024-10-22",
                category: "Design"
            }
        ]
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                title: "Code Review",
                description: "Review the code submitted by team members.",
                date: "2024-10-21",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                title: "Bug Fix",
                description: "Fix the reported bugs in the user authentication module.",
                date: "2024-10-19",
                category: "Maintenance"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                title: "Unit Testing",
                description: "Write unit tests for the login functionality.",
                date: "2024-10-23",
                category: "Testing"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                title: "Create UI Components",
                description: "Design and implement reusable UI components.",
                date: "2024-10-25",
                category: "Development"
            }
        ]
    },
    {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                title: "Server Setup",
                description: "Setup and configure the production server.",
                date: "2024-10-18",
                category: "Infrastructure"
            },
            {
                active: true,
                newTask: true,
                completed: false,
                title: "API Integration",
                description: "Integrate third-party APIs for payment processing.",
                date: "2024-10-23",
                category: "Development"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                title: "Security Audit",
                description: "Conduct a security audit of the application.",
                date: "2024-10-24",
                category: "Security"
            }
        ]
    },
    {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                title: "Design Mockups",
                description: "Create design mockups for the new features.",
                date: "2024-10-22",
                category: "Design"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                title: "Feature Implementation",
                description: "Implement new features as per client requirements.",
                date: "2024-10-25",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                title: "Deployment",
                description: "Deploy the latest version to production.",
                date: "2024-10-20",
                category: "Deployment"
            }
        ]
    },
    {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                title: "Marketing Campaign",
                description: "Plan and execute a marketing campaign for the product launch.",
                date: "2024-10-26",
                category: "Marketing"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                title: "Client Support",
                description: "Handle client support requests and troubleshoot issues.",
                date: "2024-10-23",
                category: "Support"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                title: "Update Documentation",
                description: "Update the project documentation with new feature details.",
                date: "2024-10-19",
                category: "Documentation"
            }
        ]
    }
];

const admin = [
    {
        id: 1,
        email: " ",
        password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employeesData = JSON.parse(localStorage.getItem('employees')) || [];
    const adminData = JSON.parse(localStorage.getItem('admin')) || [];
   
    return { employees: employeesData, admin: adminData };
};

  