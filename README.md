

# ✔️ 1. **Go to your project root directory**

This is the folder that contains:

```
docker-compose.yml
frontend/
backend/
```

Use:

```
cd <your-project-folder>
```

---

# ✔️ 2. **Make sure Docker Desktop is running**

Open Docker Desktop and ensure it is active.

---

# ✔️ 3. **Run the project**

Execute this command:

```bash
docker-compose up --build
```

This does the following:

* Builds frontend image
* Builds backend image
* Creates a Docker network
* Starts both services
* Maps ports to your machine

---

# ✔️ 4. **Access your project in the browser**

### Frontend:

```
http://localhost:3000
```

### Backend (optional testing):

```
http://localhost:5000
```

---

# ✔️ 5. **Stopping the project**

Press:

```
Ctrl + C
```

To fully remove containers and free resources:

```bash
docker-compose down
```

---

# ✔️ 6. **If images are already pushed to Docker Hub**

You can modify `docker-compose.yml` to use your Docker Hub images instead of building them locally.

Example:

```yaml
services:
  frontend:
    image: <username>/express-frontend:latest
    ports:
      - "3000:3000"

  backend:
    image: <username>/flask-backend:latest
    ports:
      - "5000:5000"
```

Then simply run:

```bash
docker-compose up
```

No need to build anything.

---

# ✔️ 7. **Common issues & fixes**

### Issue: "docker-compose: command not found"

Install Docker Desktop or update PATH.

---

### Issue: Port already in use (3000 or 5000)

Close other running apps using:

```bash
docker ps
docker stop <container-id>
```

Or change ports in docker-compose.yml:

```
"3001:3000"
"5001:5000"
```

---

### Issue: Cannot connect to backend

Ensure the frontend calls:

```
http://backend:5000
```

—not localhost.

---

# ✔️ You are now ready to run the project anywhere
