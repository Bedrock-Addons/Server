<?php

class CONF {

    // Data configuration for database
    public $DB_SERVER   = "localhost";
    public $DB_USER     = "Addons";
    public $DB_PASSWORD = "BedrockAddonsApplication"; // Change this with your own database password
    public $DB_NAME     = "Bedrock Addons";
    public $FCM_TOPIC   = "/topics/ALL-DEVICE";

    // FCM key for notification
    public $FCM_KEY     = " AAAAx3bDLwM:APA91bFJT__FRxr32oPV57FrOnNMmjkx8X85QTQKZqotCt3CMyggHNmEevAh2KllPrVzB2sEZoAoEmTHhGaAxQl4KjojqjWH6lZeHdu6ZgOsG63JN4QXgrpC0lkjE7JHXZgF8b07Qoms ";

    public $SECURITY_CODE = "WhateverYouWantToNameIt"; // Change this with your own security code

    // Account reset mailer configuration
    public $SMTP_EMAIL      = "sample@your-domain.com";
    public $SMTP_PASSWORD   = "password";
    public $SMTP_HOST       = "mail.your-domain.com";
    public $SMTP_PORT       = 562;

    // Email subject line
    public $APP_NAME        = "Addons";
    public $SUBJECT_EMAIL_FORGOT_PASS = "Addons App Forgot Password";

    // Restrict webapp usage
    public $DEMO_VERSION = false;

}

?>
