# Realtime Chat Application

This is a scalable, realtime chat application built with Node.js, React.js, and ChatEngine.io.

## Application Preview
![Authorization Page](/images/Auth.jpg)

![Chat Page](/images/Chat.jpg)

## Features

- Real-time messaging
- Scalable architecture
- User authentication

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm
- You have a ChatEngine.io account and have obtained your private key and project ID

## Installation

1. Clone this repository:
   ```
   git clone [your-repo-link]
   cd [your-repo-name]
   ```

2. Install the dependencies for both frontend and backend:
   ```
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Create a `.env` file in the backend directory and add your ChatEngine.io credentials:
   ```
   CHAT_ENGINE_PROJECT_ID=your_project_id
   CHAT_ENGINE_PRIVATE_KEY=your_private_key
   ```

## Usage

To run the application:

1. Start the backend server:
   ```
   cd backend
   npm run start
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port specified by your Vite configuration).

## Configuration

To use this application, you need to set up your own ChatEngine.io account:

1. Go to [ChatEngine.io](https://chatengine.io/) and create an account
2. Create a new project
3. Get your Project ID and Private Key from the project settings
4. Update the `.env` file in the backend directory with these credentials

## Contributions

They are always welcome. Please fork the repository and create a pull request.

## Contact

If you want to contact me, you can reach me at `dosterevan@gmail.com`.

## Acknowledgements

- ChatEngine.io for providing the chat infrastructure
- YouTube for tutorials and inspiration