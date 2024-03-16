# Step-by-Step Deployment Guide
This guide provides detailed steps on how to deploy the Assignment Management Service. Follow these steps to ensure a successful deployment.

# 1. Clone the Project Repository
First, you need to clone the project repository to your local machine or the server where you intend to deploy the application.

```
  git clone <repository-url>
  cd <project-directory> 
```   
# 2. Prepare the Environment
Create a .env file in the project root directory containing all the necessary environment variables required by your application.

Example .env file:
```
  APP=dev
  PORT=4005

  DB_DIALECT=mysql
```  
# 3. Deploy MySQL Container
The project uses Docker Compose to set up a MySQL container. The docker-compose.yml file specifies the MySQL service configuration.

Navigate to the project directory.
Run the following command to start the MySQL container in the background:

```
docker-compose up -d
```

# 4. Build and Run the Application Container
The build.sh script is provided to automate the building and running of the application container.

Execute the build.sh script to deploy the application:

```
chmod +x build.sh
./build.sh
```

# 5. Verify the Deployment
After running the script, ensure that both the MySQL and application containers are running by executing:

```
docker ps
```

