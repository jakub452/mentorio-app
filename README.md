# Mentorio

Tutoring app for university students.
Mentorio lets students connect with tutors. Browse tutors, check their free slots and send a meeting request without creating an account.

## Features

- **Tutor list**: every tutor with their photo, name, field of study, year and hourly rate
- **Subject filter**: show only tutors from one field of study, with the list of fields built from the data
- **Two-panel view**: pick a tutor on the left and see their details on the right, without leaving the list
- **Light and dark theme**: follows the system setting, with colors kept in CSS variables

## Tech stack

- [React](https://react.dev) + [Vite](https://vite.dev)
- [React Router](https://reactrouter.com)
- CSS Modules
- [Lucide](https://lucide.dev) icons
- Font: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- Data: mock data (fake API), no backend yet

## Getting started

Requirements: Node.js 20+

```bash
git clone https://github.com/jakub452/mentorio-app.git
cd mentorio-app
npm install
npm run dev
```

The app runs at `http://localhost:5173`. No API key or `.env` file is needed: all data comes from `src/data/fakeApi.js`.

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Mock data

```js
{
  id: 1,
  image: testIcon,
  name: "Anna Kowalska",
  major: "Informatyka",
  year: 3,
  price: 40,
}
```

## Project structure

```
src/
├── data/fakeApi.js
├── components/
│   ├── PanelList/
│   └── DetailsPanel/
├── pages/
│   └── Main.jsx
│
└── assets/
```

## Roadmap

- [ ] Search tutors by name
- [ ] Weekly calendar with each tutor's free slots
- [ ] Meeting request form with no account needed
- [ ] Tutor login and dashboard: answer requests, set free slots
- [ ] Real backend and email notifications
- [ ] Mobile layout for the two-panel view
- [ ] Deployment
... and more

## Credits

Mentorio is a student project made for a UI design course.
All tutors and reviews in the app are sample data.
