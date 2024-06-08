# CSV to MongoDB Uploader

This project reads property data from a CSV file and inserts it into a MongoDB collection.

## Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account (or a local MongoDB instance)
- `git` installed on your machine

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd csv-uploader
   ```

2. **Install dependencies:**

   ```bash
   npm install
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
   property_title,url_destination,status
   Example Property,https://example.com,yellow
   Another Property,,white
   Wiregrass Stone Oak,https://wiregrassatstoneoak.com,yellow
   ```

## Usage

1. **Run the application:**

   ```bash
   node src/app.js
   ```

   The application will read data from the CSV file and insert it into the MongoDB collection.

## Directory Structure
