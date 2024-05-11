from flask import Flask, request,jsonify
from flask_cors import CORS
import json
import pymysql
import bcrypt

app = Flask(__name__)
CORS(app)

# Configuration
servername = "localhost"
username = "root"
password = ""
database = "pawsome"

# Create a connection
conn = pymysql.connect(host=servername, user=username, password=password, database=database)

@app.route('/', methods=['POST'])
def register_user():
    # Read incoming data
    data = request.get_data(as_text=True)  # Get the raw POST data
    data = json.loads(data)  # Decode JSON data into a Python dictionary
    if data:
        # Extract data from the dictionary
        customerID = data["customerId"]
        mobileno = data["mobileno"]
        email = data['email']
        username = data['username']
        password = data['password']
        hash_pass = generate_hash(password)

        # Insert data
        cursor = conn.cursor()
        sql = "INSERT INTO buyer (mobileno, email, username, password, customerID) VALUES (%s, %s, %s, %s, %s)"
        try:
            cursor.execute(sql, (mobileno, email, username, hash_pass, customerID))
            conn.commit()
            return "User Registered"
        except Exception as e:
            conn.rollback()
            return "Error inserting product: " + str(e)
        finally:
            cursor.close()
    else:
        return "No data received"


@app.route('/', methods=['GET'])
def get_data():
    # Fetch data
    cursor = conn.cursor()
    sql = "SELECT * FROM buyer"
    cursor.execute(sql)
    data = cursor.fetchall()
    cursor.close()

    # Convert fetched data to JSON format
    json_data = []
    for row in data:
        entry = {
            "customerId": row[1],
            "mobileno": row[5],
            "email": row[4],
            "username": row[2],
            "password": row[3]  # Note: Passwords are typically not sent to clients in plaintext
        }
        json_data.append(entry)

    return jsonify(json_data)

def generate_hash(password):
   # Generate a salt and hash the password
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password


if __name__ == '__main__':
    app.run(debug=True)  # You can disable debug mode in production
