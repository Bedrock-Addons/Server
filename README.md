# Bedrock-Addons-Server
This is the server-side data management software for the Bedrock Addons application.


## You will need:
* A server with root access.
* Atleast 500MB of memory, and 8GB of storage. Recommended: 1GB of memory, and 30GB of storage.
* Lots of bandwidth, as Bedrock Addons is very media and file-sharing focused.

## How to install
* Start up a server with atleast 500MB of memory, and 8GB of storage.
* Install a LAMP stack (Linux, Apache, MySQL, and PHP) and configure it.
* Upload everything except the `Bedrock-Addons.sql` file to the `/var/www/html/` directory on your server.
* Upload `Bedrock-Addons.sql` to the database, and configure a username and password.
* Open the `conf.php` file found in `/services/` and change the database credentials to match the ones you set previously.
* Go to your server IP address and you should see a login page. Login with username `BA2021` and password `BAforMC2021` and change the default credentials.
* I recommend that you connect a domain and configure SSL for your server, but it is not required for the bare-minimum operation.
* Congrats! You've got a server running the Universal Addons Project (UAP) data managment software.

