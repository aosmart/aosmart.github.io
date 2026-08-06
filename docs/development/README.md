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
