from pathlib import Path
import os
from decouple import config

# from dotenv import load_dotenv
#
# # from datetime import timedelta
#
# load_dotenv() 

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve(strict=True).parent.parent


# SECURITY WARNING: keep the secret key used in production.cer secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production.cer!
DEBUG = config('DEBUG')

# ALLOWED_HOSTS = ['localhost','7f5c-41-81-29-38.ngrok-free.app']

ALLOWED_HOSTS = ["*"]

# Application definition

# Rest Framework JWT From Code with Tim
# REST_FRAMEWORK = {
#     "DEFAULT_AUTHENTICATION_CLASSES":(
#         "rest_framework_simplejwt.authentication.JWTAuthentication",
#     ),
#
#     "DEFAULT_PERMISSION_CLASSES":(
#         "rest_framework.permissions.IsAuthenticated"
#     )
# }

#
# SIMPLE_JWT = {
#     "ACCESS_TOKEN_LIFETIME":timedelta(minutes=30),
#     "REFRESH_TOKEN_LIFETIME":timedelta(days=1),
# }


CSRF_TRUSTED_ORIGINS = [
    'http://localhost:8000',
    'https://localhost:8000',
	'https://obscure-space-fishstick-97jrrww6v4grh7rjj-8000.app.github.dev/',
]



INSTALLED_APPS = [
	'admin_black.apps.AdminBlackConfig',
	'django.contrib.admin',
	'django.contrib.humanize',
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',
	'django.contrib.sites',
	'plug',
	'mpesa',
	'openSoko',
	'django_celery_beat',
	#'widget_tweaks',
	
	'accounts',
	'conversation',
	'transactions',
	'sleek_profile',
	'peer_to_peer',
	'positions',
	'django_browser_reload',
]

MIDDLEWARE = [
	'django.middleware.security.SecurityMiddleware',
	'whitenoise.middleware.WhiteNoiseMiddleware',
	'django.contrib.sessions.middleware.SessionMiddleware',
	'django.middleware.common.CommonMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'django.contrib.auth.middleware.AuthenticationMiddleware',
	'django.contrib.messages.middleware.MessageMiddleware',
	'django.middleware.clickjacking.XFrameOptionsMiddleware',
	'django_browser_reload.middleware.BrowserReloadMiddleware',
]

ROOT_URLCONF = 'sleek_main_hub.urls'
AUTH_USER_MODEL = 'accounts.User'
AUTH_USER_WALLET = 'accounts.UserBankAccount'
AUTH_USER_ADDRESS = 'accounts.UserAddress'

USERNAME_FIELD = 'email'

DJANGO_SETTINGS_MODULE = 'settings'

TEMPLATES = [
	{
		'BACKEND': 'django.template.backends.django.DjangoTemplates',
		'DIRS': [os.path.join(BASE_DIR / 'templates')],
		'APP_DIRS': True,
		'OPTIONS': {
			'context_processors': [
				'django.template.context_processors.debug',
				'django.template.context_processors.request',
				'django.contrib.auth.context_processors.auth',
				'django.contrib.messages.context_processors.messages',
			],
		},
	},
]

WSGI_APPLICATION = 'sleek_main_hub.wsgi.application'
TIME_ZONE = 'UTC'
# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.sqlite3',
		'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
		'TIME_ZONE': TIME_ZONE,
	}
}

# DATABASES = {
# 'default': {
#  'ENGINE': 'django.db.backends.postgresql_psycopg2',
# 'NAME': config('DB_NAME'),
# 'USER': config('DB_USER'),
# 'PASSWORD': config('DB_PASSWORD'),
# 'HOST': config('DB_HOST'),
# 'PORT': ''
# }
# }


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
	{
		'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
	},
]

# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static_root')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

#    STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

MEDIA_URL = '/media/'
MBOA_ID_URL = '/plug/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MBOA_ID_ROOT = os.path.join(BASE_DIR, 'sleek_keys_logs')

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


###############################=================M-PESA DARAJA APIS
#######################################Tilll Number################################################
MPESA_CONSUMER_KEY = config('MPESA_CONSUMER_KEY')
MPESA_CONSUMER_SECRET = config('MPESA_CONSUMER_SECRET')
MPESA_SHORTCODE_TYPE = config('MPESA_SHORTCODE_TYPE')

MPESA_SHORTCODE = config('MPESA_SHORTCODE')
MY_MPESA_TILL_NUMBER = config('MY_MPESA_TILL_NUMBER')
MPESA_PASSKEY = config('MPESA_PASSKEY')
MPESA_INITIATOR_USERNAME = config('MPESA_INITIATOR_USERNAME')
MPESA_INITIATOR_SECURITY_CREDENTIAL = config('MPESA_INITIATOR_SECURITY_CREDENTIAL')
LNM_PHONE_NUMBER = config('LNM_PHONE_NUMBER')
MPESA_EXPRESS_SHORTCODE = config('MPESA_EXPRESS_SHORTCODE')

#################################Client Data Lipa Na M-Pesa###########################################

# MPESA_INITIATOR_USERNAME = config('MPESA_INITIATOR_USERNAME_Client')
# MPESA_SHORTCODE_TYPE = config('MPESA_SHORTCODE_TYPE_ClientTill' )
# MPESA_SHORTCODE_TYPE = config('MPESA_SHORTCODE_TYPE_ClientPayBill ')
# MPESA_CONSUMER_KEY = config("MPESA_CONSUMER_KEY_Client")
# MPESA_CONSUMER_SECRET = config('MPESA_CONSUMER_SECRET_Client')
# MPESA_SHORTCODE = config('MPESA_SHORTCODE_Client')
# MPESA_PASSKEY = config('MPESA_PASSKEY_Client')
# MPESA_INITIATOR_SECURITY_CREDENTIAL = config('MPESA_INITIATOR_SECURITY_CREDENTIAL_Client')
# B2C_PHONE_NUMBER_ = config('B2C_PHONE_NUMBER_Client')
# MBOAPAY_Client_Email = config('MBOAPAY_Client_Email')

#################################Client Data Lipa Na M-Pesa###########################################




AT_YOUR_USERNAME = config('AT_YOUR_USERNAME')
AT_YOUR_API_KEY = config('AT_YOUR_API_KEY')

STRIPE_PUBLIC_KEY = config('STRIPE_LIVE_PUBLIC_KEY')
STRIPE_SECRET_KEY = config('STRIPE_LIVE_SECRET_KEY')


ACCOUNT_NUMBER_START_FROM = config('ACCOUNT_NUMBER_START_FROM')
MINIMUM_DEPOSIT_AMOUNT = config('MINIMUM_DEPOSIT_AMOUNT')
MINIMUM_WITHDRAWAL_AMOUNT = config('MINIMUM_WITHDRAWAL_AMOUNT')
MINIMUM_LOAN_AMOUNT = config('MINIMUM_LOAN_AMOUNT')
MAXIMUM_LOAN_AMOUNT = config('MAXIMUM_LOAN_AMOUNT')
USE_THOUSAND_SEPARATOR = False

# Login redirect
SITE_ID = 1
LOGIN_REDIRECT_URL = 'setting'

# Celery Settings
CELERY_BROKER_URL = 'redis://localhost:6379'
CELERY_RESULT_BACKEND = 'redis://localhost:6379'
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = TIME_ZONE
CRISPY_TEMPLATE_PACK = 'bootstrap4'
