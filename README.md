# Sleek.Ke
 A Product Of Mboa Technologies


Sleek.Ke is a Django-based web application by Mboa Technologies, integrating services like M-Pesa and Africa's Talking. It offers modules for financial transactions, peer-to-peer services, user profile management, and more, ensuring a seamless experience for end-users.


---

Features

M-Pesa Integration: Handle payments and transactions securely.

Africa's Talking API: Power SMS, voice, and USSD services.

User Management: Profiles, roles, and permissions.

Custom Modules: Transactions, peer-to-peer functionality, and admin tools.

Front-end Frameworks: Built with HTML, CSS, JavaScript for a responsive UI.



---

Prerequisites

Python 3.8 or higher

Django 4.x

SQLite or a production-ready database (e.g., PostgreSQL)

Virtualenv (optional but recommended)

Git



---

Installation and Setup

1. Clone the Repository

```git clone https://github.com/sleek-ke/sleek.ke.git```
```cd sleek.ke```

2. Create a Virtual Environment

```python -m venv venv```
```source venv/bin/activate  # Linux/macOS```
```venv\Scripts\activate     # Windows```

3. Install Dependencies

```pip install -r requirements.txt```

4. Configure Environment Variables

1. Copy the example .env file:

```cp .env.example .env```


2. Update the .env file with:

```SECRET_KEY: Generate a new key using python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())".```

API keys and configurations for M-Pesa and Africa's Talking.




5. Apply Migrations

Run migrations to set up the database schema:

```python manage.py makemigrations```
```python manage.py migrate```

Example manage.py Script:
```
#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sleek_ke.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)

6. Load Initial Data (Optional)

If there is a fixtures file, load it:

python manage.py loaddata initial_data.json
```

7. Run the Development Server
```
python manage.py runserver
```

Visit http://127.0.0.1:8000/ you can as well use 
your other free ports
in your browser.


---

Running Tests

To run the test suite:
```
python manage.py test

```
---

Deployment

For deployment, configure a production server with tools like Gunicorn or uWSGI, and a web server like Nginx. Use a robust database (e.g., PostgreSQL) and set DEBUG = False in production settings.


---

Contributing

We welcome contributions! Fork the repository and submit a pull request. Adhere to our coding standards and include tests for any new features or fixes.


---

License

This project is licensed under the MIT License. See the LICENSE file for details.

