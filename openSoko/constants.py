

CATEGORY_CHOICES = (
    ('CW', 'Church wear'),
    ('SW', 'Sport wear'),
    ('OW', 'Outwear'),
    ('BW', 'Bash wear'),
    ('FW', 'Function wear'),
)

LABEL_CHOICES = (
    ('M', 'Male'),
    ('F', 'Female'),
    ('B', 'Both Gender'),
    ('K', 'Kids')
)

ADDRESS_CHOICES = (
    ('B', 'Billing'),
    ('S', 'Delivery'),
    ('H', 'My Home'),
    ('W', 'Work Place')
)

PAYMENT_CHOICES = (
    ('S', 'Stripe'),
    ('P', 'PayPal'),
    ('M', 'M-Pesa')
)
STATUS_CHOICES = (
    ('created', 'Created'),
    ('paid', 'Paid'),
    ('abandoned', 'Abandoned'),
)