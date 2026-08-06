## Development Installation

> **Remark:** These instructions were written using a Linux-based operating system (Raspberry Pi OS Lite). You should be able to follow them on any other Linux-based distribution as well.

The project has both a **production** and a **development** version. This allows you to test most changes on your local machine before deploying them to production. Installing the development version is straightforward.

### 1. Install Docker

Install **Docker** and **Docker Compose** on your machine, then add your user to the `docker` group.

### 2. Create the `FOREST_DEV` environment variable

On my computer, I created the environment variable by doing the following:

1. Open your shell configuration file:
   ```bash
   nano ~/.bashrc
   ```

2. Add the following line at the end of the file:
   ```bash
   export FOREST_DEV=1
   ```

3. Save the file, then apply the changes:
   ```bash
   source ~/.bashrc
   ```

### 3. Clone the repository

Clone the project's GitHub repository:

```bash
git clone https://github.com/aosmart/forestDataPipeline.git
```

Then enter the repository directory.

### 4. Start the development environment

From the repository directory, run:

```bash
docker compose -f docker-compose.dev.yml up -d --build
```

> **Remark:** The development and production environments use almost the same Docker commands. For the development environment, simply add `-f docker-compose.dev.yml` to your `docker compose` commands.

That's it! Everything should now be installed on your machine.

You can verify that all containers are running by executing:

```bash
docker ps
```

You should see something similar to the following:

<img width="2021" height="167" alt="image" src="https://github.com/user-attachments/assets/0742701b-5c32-4740-a1fb-ab935d042fa5" />

## `fake_publisher_dev` and `fake_http_publisher_dev`

These two services simulate the data loggers by publishing fake data through **MQTT** and **HTTP**. This allows you to test changes locally without requiring access to the physical devices.

For example, if you want to create a new table on a data logger and have its data stored in the database, you can modify one of these services to publish the same table (using fake data). You can then verify that your changes correctly process and save the data in the database.

The source code for these services can be found here:

- **`fake_publisher_dev`**: <https://github.com/aosmart/forestDataPipeline/tree/main/mosquitto-broker/tests>
- **`fake_http_publisher_dev`**: <https://github.com/aosmart/forestDataPipeline/tree/main/django_api/test>

For example, after installing `mosquitto-clients` on your machine, you can run:

```bash
mosquitto_sub -h localhost -t "#" -v
```

This subscribes to every MQTT topic and displays all published messages in real time. You should see the fake data continuously published by `fake_publisher_dev` to the Mosquitto broker.

## Sending Changes to Production

The general workflow for modifying the application is as follows:

1. Modify the files in `forestDataPipeline` corresponding to the container you want to change.
2. Rebuild and restart the modified service in the development environment:
   ```bash
   docker compose -f docker-compose.dev.yml up -d --build <service_name>
   ```
3. Verify that the changes work as intended.
4. Push your changes to GitHub.
5. On the Raspberry Pi, pull the latest changes from the repository.
6. Rebuild and restart the corresponding service in the production environment:
   ```bash
   docker compose up -d --build <service_name>
   ```
