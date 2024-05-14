from flask import Flask,request, jsonify
from flask_cors import CORS
import os
import pandas as pd

app = Flask(__name__)
CORS(app)

current_dir = os.path.dirname(os.path.abspath(__file__))
excel_file_path = os.path.join(current_dir, 'dataset.xlsx')
# customer id
def read_excel_file_customer(file_path):
    try:
        df = pd.read_excel(file_path)
        return df['customer_id'].tolist()
    except Exception as e:
        return str(e)
@app.route('/customer_ids')
def get_customer_ids():
    customer_ids = read_excel_file_customer(excel_file_path)
    return jsonify(customer_ids)

@app.route('/customer_id/count')
def get_customer_id_count():
    customer_ids = read_excel_file_customer(excel_file_path)
    num_customer_ids = len(customer_ids)
    return jsonify({'count': num_customer_ids})

# pet id
def read_excel_file_pet(file_path):
    try:
        df = pd.read_excel(file_path)
        return df['pet_id'].tolist()
    except Exception as e:
        return str(e)
@app.route('/pet_ids')
def get_pet_ids():
    pet_ids = read_excel_file_pet(excel_file_path)
    return jsonify(pet_ids)
@app.route('/pet_id/count')
def get_pet_id_count():
    pet_ids = read_excel_file_pet(excel_file_path)
    num_pet_ids = len(pet_ids)
    return jsonify({'count': num_pet_ids})

# pet health issue
def read_excel_file_pet_health(file_path):
    try:
        df = pd.read_excel(file_path)
        # Get all unique health issue categories
        categories = set()
        for row in df['pet_health_issue_list']:
            if isinstance(row, str):
                categories.update([x.strip() for x in row.split(',')])
        return list(categories)
    except Exception as e:
        return str(e)
    
@app.route('/pet_health_issues')
def get_pet_health_issues():
    pet_health_issues = read_excel_file_pet_health(excel_file_path)
    return jsonify(pet_health_issues)

# pet health issues count by categories
def count_health_issue_categories(file_path):
    try:
        df = pd.read_excel(file_path)
        # Initialize a dictionary to store counts for each category
        category_counts = {}
        # Iterate through each row
        for row in df['pet_health_issue_list']:
            if isinstance(row, str):
                # Split the row by comma and iterate through categories
                categories = [x.strip() for x in row.split(',')]
                for category in categories:
                    # Update counts for each category
                    category_counts[category] = category_counts.get(category, 0) + 1
        return category_counts
    except Exception as e:
        return str(e)

@app.route('/health_issue_category_counts')
def get_health_issue_category_counts():
    category_counts = count_health_issue_categories(excel_file_path)
    return jsonify(category_counts)

# pet allergen
def read_excel_file_pet_allergen(file_path):
    try:
        df = pd.read_excel(file_path)
        # Get all unique allergen issue categories
        categories = set()
        for row in df['pet_allergen_list']:
            if isinstance(row, str):
                categories.update([x.strip() for x in row.split(' ')])
        return list(categories)
    except Exception as e:
        return str(e)
    
@app.route('/pet_allergen_list')
def get_pet_allergen():
    pet_health_issues = read_excel_file_pet_allergen(excel_file_path)
    return jsonify(pet_health_issues)

# pet health issues count by categories
def count_pet_allergen_categories(file_path):
    try:
        df = pd.read_excel(file_path)
        # Initialize a dictionary to store counts for each category
        category_counts = {}
        # Iterate through each row
        for row in df['pet_allergen_list']:
            if isinstance(row, str):
                # Split the row by comma and iterate through categories
                categories = [x.strip() for x in row.split(' ')]
                for category in categories:
                    # Update counts for each category
                    category_counts[category] = category_counts.get(category, 0) + 1
        return category_counts
    except Exception as e:
        return str(e)

@app.route('/pet_allergen_category_counts')
def get_pet_allergen_category_counts():
    category_counts = count_pet_allergen_categories(excel_file_path)
    return jsonify(category_counts)


# count average pet order
def calculate_average_order_number(file_path):
    try:
        df = pd.read_excel(file_path)
        # Group by pet_id and calculate the mean of pet_order_number for each group
        average_order_numbers = df.groupby('pet_id')['pet_order_number'].mean().to_dict()
        return average_order_numbers
    except Exception as e:
        return str(e)

@app.route('/average_order_number_per_pet')
def get_average_order_number_per_pet():
    average_order_numbers = calculate_average_order_number(excel_file_path)
    return jsonify(average_order_numbers)

# overall total pet order average
def calculate_total_average_order_number(file_path):
    try:
        df = pd.read_excel(file_path)
        # Calculate the mean of pet_order_number for all rows
        total_average_order_number = df['pet_order_number'].mean()
        return total_average_order_number
    except Exception as e:
        return str(e)

@app.route('/total_average_order_numbers')
def get_total_average_order_number():
    total_average_order_number = calculate_total_average_order_number(excel_file_path)
    return jsonify({'total_average_order_number': total_average_order_number})

# overall total pet wet food order average
def calculate_total_average_wet_food_order_number(file_path):
    try:
        df = pd.read_excel(file_path)
        # Calculate the mean of pet_order_number for all rows
        total_average_wet_order_number = df['wet_food_order_number'].mean()
        return total_average_wet_order_number
    except Exception as e:
        return str(e)

@app.route('/total_average_wet_food_order_numbers')
def get_total_average_wet_order_number():
    total_average_wet_order_number = calculate_total_average_wet_food_order_number(excel_file_path)
    return jsonify({'total_average_order_number': total_average_wet_order_number})

# pets subscription
def calculate_subscription_statistics(file_path):
    try:
        df = pd.read_excel(file_path)
        # Calculate count and percentage of pets with active subscriptions
        total_pets = len(df)
        pets_with_subscription = df['pet_has_active_subscription'].sum()
        percentage_with_subscription = (pets_with_subscription / total_pets) * 100
        # Convert int64 values to standard Python integers
        pets_with_subscription = int(pets_with_subscription)
        percentage_with_subscription = int(percentage_with_subscription)
        return pets_with_subscription, percentage_with_subscription
    except Exception as e:
        return str(e)

@app.route('/subscription_statistics')
def get_subscription_statistics():
    pets_with_subscription, percentage_with_subscription = calculate_subscription_statistics(excel_file_path)
    return jsonify({
        'pets_with_subscription': pets_with_subscription,
        'percentage_with_subscription': percentage_with_subscription
    })


# food tier
def count_food_tier_categories(file_path):
    try:
        df = pd.read_excel(file_path)
        # Initialize a dictionary to store counts for each category
        category_counts = {}
        # Iterate through each row
        for row in df['pet_food_tier']:
            if isinstance(row, str):
                # Update counts for each category
                category_counts[row] = category_counts.get(row, 0) + 1
        return category_counts
    except Exception as e:
        return str(e)

@app.route('/food_tier_category_counts')
def get_food_tier_category_counts():
    category_counts = count_food_tier_categories(excel_file_path)
    return jsonify(category_counts)

# gender counts
def count_gender_categories(file_path):
    try:
        df = pd.read_excel(file_path)
        # Initialize a dictionary to store counts for each category
        category_counts = {}
        # Iterate through each row
        for row in df['gender']:
            if isinstance(row, str):
                # Update counts for each category
                category_counts[row] = category_counts.get(row, 0) + 1
        return category_counts
    except Exception as e:
        return str(e)

@app.route('/gender_category_counts')
def get_gender_category_counts():
    category_counts = count_gender_categories(excel_file_path)
    return jsonify(category_counts)

# breed size
def count_breed_size_categories(file_path):
    try:
        df = pd.read_excel(file_path)
        # Initialize a dictionary to store counts for each category
        category_counts = {}
        # Iterate through each row
        for row in df['pet_breed_size']:
            if isinstance(row, str):
                # Update counts for each category
                category_counts[row] = category_counts.get(row, 0) + 1
        return category_counts
    except Exception as e:
        return str(e)

@app.route('/breed_size_category_counts')
def get_breed_size_category_counts():
    category_counts = count_breed_size_categories(excel_file_path)
    return jsonify(category_counts)

# pet fave flavor
def count_favorite_flavor_categories(file_path):
    try:
        df = pd.read_excel(file_path)
        # Initialize a dictionary to store counts for each category
        category_counts = {}
        # Iterate through each row
        for row in df['pet_fav_flavour_list']:
            if isinstance(row, str):
                # Split the row by comma and iterate through flavors
                flavors = [x.strip() for x in row.split(' ')]
                for flavor in flavors:
                    # Update counts for each flavor
                    category_counts[flavor] = category_counts.get(flavor, 0) + 1
        return category_counts
    except Exception as e:
        return str(e)

@app.route('/favorite_flavor_category_counts')
def get_favorite_flavor_category_counts():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    excel_file_path = os.path.join(current_dir, 'dataset.xlsx')
    category_counts = count_favorite_flavor_categories(excel_file_path)
    return jsonify(category_counts)

# neutered
def count_neutered_categories(file_path):
    try:
        df = pd.read_excel(file_path)
        # Count the occurrences of each category in the 'neutered' column
        category_counts = df['neutered'].value_counts().to_dict()
        return category_counts
    except Exception as e:
        return str(e)

@app.route('/neutered_category_counts')
def get_neutered_category_counts():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    excel_file_path = os.path.join(current_dir, 'dataset.xlsx')
    category_counts = count_neutered_categories(excel_file_path)
    return jsonify(category_counts)

# pet lie stage
def count_life_stage_categories(file_path):
    try:
        df = pd.read_excel(file_path)
        # Initialize a dictionary to store counts for each category
        category_counts = {}
        # Iterate through each row
        for row in df['pet_life_stage_at_order']:
            if isinstance(row, str):
                # Update counts for each category
                category_counts[row] = category_counts.get(row, 0) + 1
        return category_counts
    except Exception as e:
        return str(e)

@app.route('/life_stage_category_counts')
def get_life_stage_category_counts():
    category_counts = count_life_stage_categories(excel_file_path)
    return jsonify(category_counts)

# dry food brands
def count_dry_food_brand_categories(file_path):
    try:
        df = pd.read_excel(file_path)
        # Initialize a dictionary to store counts for each category
        category_counts = {}
        # Iterate through each row
        for row in df['dry_food_brand_pre_tails']:
            if isinstance(row, str):
                # Update counts for each category
                category_counts[row] = category_counts.get(row, 0) + 1
        return category_counts
    except Exception as e:
        return str(e)

@app.route('/dry_food_brand_category_counts')
def get_dry_food_brand_category_counts():
    category_counts = count_dry_food_brand_categories(excel_file_path)
    return jsonify(category_counts)

# total order kcal
def format_large_number(number):
    if number >= 1_000_000:
        return f"{int(number / 1_000_000)}M"
    elif number >= 1_000:
        return f"{int(number / 1_000)}K"
    else:
        return str(number)

def calculate_total_order_kcal(file_path):
    try:
        df = pd.read_excel(file_path)
        # Calculate the total order kcal
        total_kcal = df['total_order_kcal'].sum()
        # Format the total kcal with appropriate suffix
        total_kcal_formatted = format_large_number(total_kcal)
        return total_kcal_formatted
    except Exception as e:
        return str(e)

@app.route('/total_order_kcal')
def get_total_order_kcal():
    total_kcal = calculate_total_order_kcal(excel_file_path)
    return jsonify({'total_order_kcal': total_kcal})

# search function
@app.route('/search', methods=['GET'])
def search():
    try:
        # Read the Excel file
        df = pd.read_excel(excel_file_path)
        
        # Get the first row of the DataFrame's head
        first_row = df.head(1)
        print(first_row)
        # Convert the first row DataFrame to JSON and return
        return first_row.to_json(orient='records')
    
    except Exception as e:
        print("Error occurred:", e)
        return jsonify({"error": "An error occurred while processing your request."}), 500

if __name__ == '__main__':
    app.run(debug=True)
