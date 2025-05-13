# FreshDetect

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Git
- Python 3.x
- Virtual environment tool (venv)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GDSC-UCD-Cohort-24-25/freshdetect.git
   cd freshDetect
   ```

2. Set up the Python virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Running the Application

#### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Start the backend server:
   ```bash
   python3 server.py
   ```
   The backend server should now be running.

#### Frontend

1. Open a new terminal window/tab and navigate to the project root
2. Activate the virtual environment if not already activated:
   ```bash
   source venv/bin/activate  # On Windows, use: venv\Scripts\activate
   ```

3. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

4. Install npm dependencies and start the development server:
   ```bash
   npm install  # Only needed on first run or when dependencies change
   npm run dev
   ```

The frontend development server should now be running. Open your browser and navigate to the URL displayed in your terminal (typically http://localhost:3000 or http://localhost:5173).

## Project Structure

```
project-name/
├── backend/         # Python backend server
│   └── models       # folder containing model
│   └── server.py    # Main server file
├── frontend/        # Frontend application
├── requirements.txt # Python dependencies
└── README.md        # This file
```

## Notes

- Make sure both the backend and frontend servers are running simultaneously.
- The backend server typically runs on port 5000, while the frontend dev server uses port 3000 or 5173.
