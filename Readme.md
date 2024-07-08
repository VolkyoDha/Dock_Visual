
# Visualización App


This application retrieves and displays client and product information from a MongoDB database. The data is displayed in two columns: clients on the left and products on the right.

made by Carlos Lobo and Paola Solano

## Technologies Used

- Node.js
- Express
- Mongoose
- CORS
- Docker

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/VolkyoDha/Dock_Visual
   cd Dock_Visual
   ```

## Install dependencies:

   ```bash
   npm install
   ```

## Create a .env file in the root directory with the following content:

    ```bash
   const uri = "mongodb+srv://admin:<password>@data3apps.owzveqi.mongodb.net/?appName=Data3apps";
   ```

## Start the application:

   ```bash
   npm start
    ```

## Using Docker:
1. **Build the Docker image::**
   
```bash
   docker build -t Dock_Visual .
   ```

2. **Build the Docker image::**
   
```bash
   docker run -p 3001:3001 --env-file .env Dock_Visual
   ```
