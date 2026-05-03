#!/bin/bash
# One-time setup: serves the De Luca site at http://localhost
# Run once with: bash setup-localhost.sh

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
CONF=/etc/apache2/other/deluca.conf

echo "Setting up http://localhost → $SITE_DIR"

# Ensure Apache log directory exists
mkdir -p /private/var/log/apache2

# Write the vhost config
sudo tee "$CONF" > /dev/null <<EOF
ServerName localhost

<VirtualHost *:80>
  DocumentRoot "$SITE_DIR"
  <Directory "$SITE_DIR">
    Options FollowSymLinks
    AllowOverride None
    Require all granted
  </Directory>
  DirectoryIndex index.html
  ErrorLog /tmp/apache_deluca_error.log
  CustomLog /tmp/apache_deluca_access.log combined
</VirtualHost>
EOF

sudo apachectl -t && sudo apachectl restart && echo "Done — open http://localhost"
