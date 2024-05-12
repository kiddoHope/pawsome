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
def register_user_update():
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
        sql = "INSERT INTO buyer (mobileno, email, username, password, customer_id) VALUES (%s, %s, %s, %s, %s)"
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
# @app.route('/', methods=['POST'])
# def register_or_update():
#     # Read incoming data
#     data = request.get_json()
#     if data:
#         # Extract data from the dictionary
#         mobileno = data.get("mobileno")
#         email = data.get('email')
#         username = data.get('username')
#         password = data.get('password')

#         # Check if the provided username already exists in the database
#         cursor = conn.cursor()
#         sql = "SELECT username FROM buyer WHERE mobileno=%s, email=%s, username=%s, password=%s WHERE customerID=%s"
#         cursor.execute(sql, (username,))
#         existing_record = cursor.fetchone()
#         cursor.close()

#         if existing_record:
#             # If the record already exists, perform an update
#             customerID = existing_record[0]
#             sql = "UPDATE buyer SET mobileno=%s, email=%s, username=%s, password=%s WHERE customerID=%s"
#             values = (mobileno, email, username, password, customerID)
#             message_success = "Buyer data updated successfully"
#             message_error = "Error updating record"
#         else:
#             # If the record does not exist, perform a registration
#             hash_pass = generate_hash(password)
#             sql = "INSERT INTO buyer (mobileno, email, username, password) VALUES (%s, %s, %s, %s)"
#             values = (mobileno, email, username, hash_pass)
#             message_success = "User Registered"
#             message_error = "Error inserting product"

#         cursor = conn.cursor()
#         try:
#             cursor.execute(sql, values)
#             conn.commit()
#             return message_success
#         except Exception as e:
#             conn.rollback()
#             return message_error + ": " + str(e)
#         finally:
#             cursor.close()
#     else:
#         return "No data received"
    
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
