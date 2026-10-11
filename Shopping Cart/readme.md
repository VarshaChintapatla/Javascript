# 📝 To-Do App

⚡ **To-Do App** is a simple and interactive task management application built using **HTML5, CSS3, and JavaScript**.

It allows users to add, view, edit, complete, and delete tasks. Tasks are stored in the browser using `localStorage`, so they remain available even after refreshing the page.

This project demonstrates JavaScript fundamentals such as **CRUD operations, arrays, objects, DOM manipulation, event handling, functions, and localStorage**.

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

---

## 🚀 Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage

---

## ⚙️ Key Features

- ➕ Add new tasks
- 📋 Display all tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed
- 🗑️ Delete tasks
- 💾 Save tasks using `localStorage`
- 🔄 Restore tasks after refreshing the page
- 🎨 Simple and interactive user interface

---

## 🧠 JavaScript Concepts Practiced

- CRUD Operations (Create, Read, Update, Delete)
- Arrays and Objects
- Array Methods: `push()`, `forEach()`, and `splice()`
- DOM Manipulation
- Event Handling using `addEventListener()`
- Functions
- Conditional Statements
- Browser `localStorage`
- JSON Methods: `JSON.stringify()` and `JSON.parse()`

---

## 📁 Project Structure

```text
To-Do-App/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🔁 How It Works

```mermaid
flowchart TD
    A[Open To-Do App] --> B[Load Saved Tasks]
    B --> C[Display Tasks]
    C --> D{Choose an Action}
    D -- Add --> E[Create Task]
    D -- Edit --> F[Update Task]
    D -- Complete --> G[Mark Task Completed]
    D -- Delete --> H[Remove Task]
    E --> I[Save to LocalStorage]
    F --> I
    G --> I
    H --> I
    I --> C
```

---

## 🚀 How to Run

1. Clone the repository:

   ```bash
   git clone <your-github-repository-url>
   ```

2. Open the project folder in VS Code.
3. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in your browser or use VS Code Live Server.

---

## 🔮 Future Improvements

- Add task categories and priorities.
- Add due dates and reminders.
- Add filters for all, completed, and pending tasks.
- Add a search feature.
- Add a dark mode.
- Improve the user interface for mobile devices.

---

## 🔗 Connect With Me

[GitHub](https://github.com/VarshaChintapatla) | [LinkedIn](https://www.linkedin.com/in/varsha-chintapatla-391428332/)

---

<p align="center">
  Made with ❤️ by <strong>Chintapatla Varsha</strong>
</p>