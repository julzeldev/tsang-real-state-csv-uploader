# CSV to MongoDB Uploader

This project reads property data from a CSV file and inserts it into a MongoDB collection.

## Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account (or a local MongoDB instance)
- `git` installed on your machine
- `yarn` cli

## Setup

1. **Clone the repository:**

   ```bash
   git clone git@github.com:julzeldev/tsang-real-state-csv-uploader.git
   cd csv-uploader
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add your MongoDB URI:

   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
   ```

   Replace `<username>`, `<password>`, `<cluster-url>`, and `<dbname>` with your MongoDB credentials and cluster information.

   This values should be provided by the project manager

4. **Prepare your CSV file:**

   Ensure your CSV file is located at `data/properties.csv` and has the following structure:

   ```csv
   propertyTitle,destinationURL,status
   Example Property,https://example.com,yellow
   Another Property,,white
   Wiregrass Stone Oak,https://wiregrassatstoneoak.com,yellow
   ```

## Usage

1. **Run the application:**
   Run with node:

   ```bash
   node src/app.js
   ```

   Run with npm:

   ```bash
   npm start
   ```

   The application will read data from the CSV file and insert it into the MongoDB collection.

## Directory Structure
