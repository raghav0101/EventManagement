# EventManagement
Steps for Ubuntu 18.04

1. Install mysql:
  ```ubuntu
      sudo apt-get update
      sudo apt-get install mysql-server
      mysql_secure_installation
  ```
  2. Install python2.7 and follow following steps to create a virtualenv:
  ```ubuntu
      wget https://bootstrap.pypa.io/get-pip.py
      sudo python2 get-pip.py
      pip install virtualenv
      virtualenv venv_IS
      source venv_IS/bin/activate
  ```
  3. Setup the environment:
  ```ubuntu
      source venv_IS/bin/activate
      mkdir EventManagement
      cd EventManagement
      git clone https://github.com/raghav0101/EventManagement.git
      cd EventManagement
      pip install -r requirements.txt
  ```
  4. Running the application:
  ```ubuntu
      mysql -u root -p
  ```
  - Enter password if prompted.
  - Copy paste all the commands from dbc.sql here.
  - Run frontend/evms/demo.ovathemes.com/eventmana/index.html in a browser and enjoy as the application works :).
  
