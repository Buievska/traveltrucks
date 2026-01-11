# TravelTrucks — Camper Rental Service

**TravelTrucks** is a modern web application designed for renting campervans in Ukraine. The project allows users to explore a diverse catalog of vans, filter them by technical specifications, view detailed reviews, and book their dream trip online.

---

## 🌟 Key Features

- **Camper Catalog**: Browse a comprehensive list of available campervans with pricing and essential details.
- **Advanced Filtering**: Search by location, body type (Van, Fully Integrated, Alcove), and amenities such as AC, kitchen, TV, and more.
- **Persistent Favorites**: Add campers to a favorites list that persists across sessions using `localStorage`.
- **Dynamic Pagination**: Load more results on demand with a "Load more" button.
- **Detailed Camper Pages**: Access full descriptions, high-quality image galleries, and detailed technical specifications.
- **User Reviews**: Read feedback from other travelers, complete with star ratings and reviewer avatars.
- **Interactive Booking**: A streamlined form to book a selected campervan instantly.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) — for robust type safety and better developer experience.
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) — for managing the global state of the catalog and favorites.
- **Data Fetching**: [Axios](https://axios-http.com/) — for seamless interaction with the MockAPI backend.
- **Styling**: CSS Modules — for modular, scope-safe styling.
- **Icons**: SVG Sprite system — for optimized and scalable iconography.

---

## Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/your-username/
traveltrucks.git](https://github.com/your-username/
traveltrucks.git)
cd travel-trucks
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

### 4. Build for production

```bash
npm run build
npm start
```

---

### Configuration Note

To ensure the images from the GoIT server load correctly, the next.config.js is configured with the following remotePatterns:

```bash
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'ftp.goit.study',
      pathname: '/img/**',
    },
  ],
},
```

---
