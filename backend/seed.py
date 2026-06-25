# from .database import SessionLocal
# from .models import User

# db = SessionLocal()

# users = [
#     User(
#         email="admin@holicare.com",
#         phone_number="9999999991",
#         password_hash="admin123",
        
#     ),
#     User(
#         email="dentist@holicare.com",
#         phone_number="9999999992",
#         password_hash="dentist123",
       
#     ),
#     User(
#         email="patient@holicare.com",
#         phone_number="9999999993",
#         password_hash="patient123",
        
#     )
# ]

# db.add_all(users)

# db.commit()

# print("3 users added successfully!")

# db.close()
import sqlite3

conn = sqlite3.connect("holicare_patient_portal.db")

cursor = conn.cursor()

cursor.execute("SELECT * FROM users")

for row in cursor.fetchall():
    print(row)

conn.close()