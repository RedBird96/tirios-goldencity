#### GoldenCity is a modern real estate investment platform that combines traditional property investing with cryptocurrency payments. Built with React and Tailwind CSS, it mirrors the functionality of Arrived.com while adding blockchain-based transaction capabilities.

## Key Features

- Cryptocurrency-enabled property transactions
- Mobile-responsive design
- SEO-optimized architecture
- Real-time market data integration
- Interactive 3D property visualization
- Smart contract integration for secure transactions

## Technical Overview

The platform is built using:

- React for component-based architecture
- Tailwind CSS for responsive styling
- React Router for client-side routing
- Three.js for 3D property visualizations
- Web3.js for blockchain interactions

## Acknowledgments

Special thanks to the Arrived.com team for inspiration and the React/Tailwind CSS communities for their continued support and resources.

## Notes API Technical Assessment

### Overview

As part of a technical assessment, a simple RESTful API for "Notes" was implemented using the same MERN stack approach (React + Express.js + Node.js). The API uses in-memory storage and includes basic CRUD operations.

### Endpoints

| Method | Endpoint   | Description           |
| ------ | ---------- | --------------------- |
| POST   | /notes     | Create a new note     |
| GET    | /notes     | Retrieve all notes    |
| GET    | /notes/:id | Retrieve a note by ID |
| PUT    | /notes/:id | Update a note         |
| DELETE | /notes/:id | Delete a note         |

### Test Results

- CRUD API fully implemented and tested.
- Verified using **Postman** for create, read, update, and delete operations.
- Recorded a demo video showing the endpoints in action:
  1. Server running and endpoints being hit via Postman.
  2. Successful creation, retrieval, update, and deletion of notes.

### Improvements / Future Work

- **Persistent Storage**: Replace in-memory storage with MongoDB schema.
- **Validation**: Input validation for note fields.
- **User Association**: Relate notes to users for multi-user support.
- **Automated Testing**: Add Jest + Supertest tests for CRUD endpoints.

### Recording

https://drive.google.com/file/d/1GOEnWrZwVWtQFzVZpdwMA1i-EMU8PBhG/view?usp=sharing
