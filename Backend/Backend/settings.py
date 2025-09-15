from pathlib import Path
from datetime import timedelta

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-5w6v0rxc4fnovlmd&a!wh(4x&+t0ekux6st23mzspw%f6hz(7&'

DEBUG = True

ALLOWED_HOSTS = []


# ====================
# APPS
# ====================
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    "django.contrib.sites",

    # Auth
    "allauth",
    "allauth.account",
    "allauth.socialaccount",

    "dj_rest_auth",
    "dj_rest_auth.registration",

    # REST API
    "rest_framework",
    "rest_framework.authtoken",
    "rest_framework_simplejwt",

    # Swagger
    "drf_yasg",

    "corsheaders",
]

SITE_ID = 1


# ====================
# MIDDLEWARE
# ====================
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    'django.middleware.security.SecurityMiddleware',
    "whitenoise.middleware.WhiteNoiseMiddleware",
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    "allauth.account.middleware.AccountMiddleware",
]

CORS_ALLOW_ALL_ORIGINS = True  # для тестов (НЕ на проде)
CORS_ALLOW_CREDENTIALS = True

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",   # React (web)
    "http://127.0.0.1:3000",
]

# ====================
# URLS / WSGI
# ====================
ROOT_URLCONF = 'Backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR, "templates"],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'Backend.wsgi.application'


# ====================
# DATABASE
# ====================
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / "db.sqlite3",
    }
}


# ====================
# PASSWORDS
# ====================
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]


# ====================
# INTERNATIONALIZATION
# ====================
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True


# ====================
# STATIC FILES
# ====================
STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / "static"

STORAGES = {
    "default": {"BACKEND": "django.core.files.storage.FileSystemStorage"},
    "staticfiles": {"BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage"},
}


# ====================
# DEFAULTS
# ====================
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# ====================
# DJANGO-ALLAUTH
# ====================
ACCOUNT_AUTHENTICATION_METHOD = "email"
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_UNIQUE_EMAIL = True

AUTHENTICATION_BACKENDS = [
  "django.contrib.auth.backends.ModelBackend",
  "allauth.account.auth_backends.AuthenticationBackend",
]

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_USE_TLS = True
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_HOST_USER = "g7kazbek@gmail.com"
EMAIL_HOST_PASSWORD = "rxhrusrhoiffmkcp"
DEFAULT_FROM_EMAIL = "g7kazbek@gmail.com"



# 


# ====================
# DRF + JWT
# ====================
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

REST_AUTH = {
  "USE_JWT": True,
  "JWT_AUTH_HTTPONLY": True,
  "JWT_AUTH_COOKIE": "core-app-auth",
  "JWT_AUTH_REFRESH_COOKIE": "core-refresh-token"
}

SIMPLE_JWT = {
  "ACCESS_TOKEN_LIFETIME": timedelta(days=30),
  "REFRESH_TOKEN_LIFETIME": timedelta(days=90),
  "AUTH_HEADER_TYPES": ("Bearer",),
}


# ====================
# SWAGGER
# ====================
SWAGGER_SETTINGS = {
  "SECURITY_DEFINITIONS": {
    "Bearer": {"type": "apiKey", "name": "Authorization", "in": "header"}
  }
}
