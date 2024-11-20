MALE = 'M'
FEMALE = 'F'

GENDER_CHOICES = (
	(MALE, "Male"),
	(FEMALE, "Female"),
)

CATEGORY_CHOICES = (
	('S', 'Shirt'),
	('SW', 'Sport wear'),
	('OW', 'Outwear')
)

MODE_PAY = (
	('PP', 'Paypal'),
	('MC', 'MasterCard'),
	
)

LABEL_CHOICES = (
	('P', 'Female'),
	('S', 'Male'),
	('D', 'Children'),
	('B', 'Both')
)

CORTEX_CHOICES = (
	('Python', 'Python'),
	('JavaScript', 'JavaScript'),
	('C++', 'C++'),
	('Kotlin', 'Kotlin'),
	('Java', 'Java')
)


ADDRESS_CHOICES = (
	('B', 'Billing'),
	('S', 'Shipping'),
)

Cardy_TYPE_CHOICES = (
	('National ID', "National Identification Card"),
	('Passport', 'Travel Passport'),
	('NHIF Card', 'National Health Insurance Fund'),
	('Drivers Licence', 'Driving Licence'),
	('NSSF', 'NSSF Card'),
	('Special Card', 'Persons With Disability Card'),
)

SOCIAL_TYPE_CHOICES =(
	('FB', 'FaceBook'),
	('Tiktok', 'Tiktok')
)