<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# MICRO-SERVERCIOS-ECOMMERCE

<em>Empowering Seamless Commerce at Scale</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/Erik-egam/micro-servercios-ecommerce?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/Erik-egam/micro-servercios-ecommerce?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/Erik-egam/micro-servercios-ecommerce?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat&logo=Mongoose&logoColor=white" alt="Mongoose">
<img src="https://img.shields.io/badge/SQLAlchemy-D71F00.svg?style=flat&logo=SQLAlchemy&logoColor=white" alt="SQLAlchemy">
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
<br>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/FastAPI-009688.svg?style=flat&logo=FastAPI&logoColor=white" alt="FastAPI">
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
<img src="https://img.shields.io/badge/Python-3776AB.svg?style=flat&logo=Python&logoColor=white" alt="Python">
<img src="https://img.shields.io/badge/Pydantic-E92063.svg?style=flat&logo=Pydantic&logoColor=white" alt="Pydantic">
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white" alt="YAML">

</div>
<br>

---

## 📄 Table of Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
    - [Prerequisites](#-prerequisites)
    - [Installation](#-installation)
    - [Usage](#-usage)
    - [Testing](#-testing)
- [Project Structure](#-project-structure)
    - [Project Index](#-project-index)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)

---

## ✨ Overview

micro-servercios-ecommerce is a full-stack microservices architecture tailored for scalable e-commerce applications. It leverages Docker Compose and Kubernetes to orchestrate core services like user management, product catalog, and data storage, ensuring high availability and flexibility.

**Why micro-servercios-ecommerce?**

This project simplifies building, deploying, and maintaining a microservices-based e-commerce platform. The core features include:

- 🛠️ **Containerized Environment:** Uses Docker and Docker Compose for consistent local development and deployment.
- 🚀 **Kubernetes Integration:** Provides deployment manifests for scalable, resilient microservices with autoscaling capabilities.
- 🔒 **Secure Secrets Management:** Centralized handling of sensitive credentials via Kubernetes secrets.
- 💾 **Persistent Storage:** Ensures data durability with persistent volume claims for databases.
- ⚙️ **Modular Architecture:** Clear separation of services for users, products, frontend, and databases, facilitating maintainability and updates.
- 🌐 **Unified Traffic Routing:** Ingress configuration for seamless external access and service discovery.

---

## 📁 Project Structure

```sh
└── micro-servercios-ecommerce/
    ├── docker-compose.yml
    ├── frontend
    │   ├── Dockerfile
    │   ├── index.html
    │   └── script.js
    ├── k8s
    │   ├── frontend-deployment.yaml
    │   ├── frontend-service.yaml
    │   ├── hpa.yaml
    │   ├── ingress.yaml
    │   ├── mongo-deployment.yaml
    │   ├── mongo-pvc.yaml
    │   ├── namespace.yaml
    │   ├── postgres-deployment.yaml
    │   ├── postgres-pvc.yaml
    │   ├── products-deployment.yaml
    │   ├── products-service.yaml
    │   ├── secrets.yaml
    │   ├── users-deployment.yaml
    │   └── users-service.yaml
    ├── products-service
    │   ├── Dockerfile
    │   ├── app
    │   └── requirements.txt
    └── users-service
        ├── Dockerfile
        ├── package.json
        └── src
```

---

### 📑 Project Index

<details open>
	<summary><b><code>MICRO-SERVERCIOS-ECOMMERCE/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/docker-compose.yml'>docker-compose.yml</a></b></td>
					<td style='padding: 8px;'>- Defines the multi-container architecture orchestrating the applications core services, including databases, user and product APIs, and frontend interface<br>- Facilitates seamless integration and deployment of data storage, backend logic, and user interface components, ensuring scalable, isolated, and maintainable environments for the overall system.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- products-service Submodule -->
	<details>
		<summary><b>products-service</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ products-service</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/products-service/Dockerfile'>Dockerfile</a></b></td>
					<td style='padding: 8px;'>- Defines the container environment for the products service, establishing the setup for deploying the FastAPI application<br>- It ensures the correct Python version, dependencies, and server configuration are in place, enabling scalable and consistent deployment of product-related functionalities within the overall microservices architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/products-service/requirements.txt'>requirements.txt</a></b></td>
					<td style='padding: 8px;'>- Defines the dependencies required for the products-service, ensuring the environment supports FastAPI, database interactions via SQLAlchemy and psycopg2, and configuration management with python-dotenv<br>- These dependencies facilitate the development and deployment of a scalable, high-performance API that manages product data within the overall architecture, enabling efficient data handling, API responsiveness, and environment configuration.</td>
				</tr>
			</table>
			<!-- app Submodule -->
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ products-service.app</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/products-service/app/main.py'>main.py</a></b></td>
							<td style='padding: 8px;'>- Defines the core API endpoints for managing product data within the service architecture<br>- Facilitates creation, retrieval, and listing of products, ensuring seamless interaction with the PostgreSQL database<br>- Serves as the primary interface for product-related operations, supporting the overall functionality and data flow of the microservice-based e-commerce platform.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/products-service/app/models.py'>models.py</a></b></td>
							<td style='padding: 8px;'>- Defines the product data model and schema for the service, facilitating database interactions and data validation<br>- It establishes the structure for storing product information, including identifiers, names, and prices, ensuring consistency across the application<br>- This file plays a crucial role in managing product-related data within the overall architecture of the products service.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- k8s Submodule -->
	<details>
		<summary><b>k8s</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ k8s</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/frontend-deployment.yaml'>frontend-deployment.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines the deployment configuration for the frontend service within the microservices architecture, ensuring the application runs reliably in the Kubernetes environment<br>- It specifies the deployment parameters, including container image, replica count, and network ports, facilitating scalable and consistent delivery of the user interface component in the overall system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/secrets.yaml'>secrets.yaml</a></b></td>
					<td style='padding: 8px;'>Defines a Kubernetes secret that securely stores database credentials for the microservices-demo environment, facilitating safe and centralized management of sensitive information required for database connectivity across the architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/postgres-deployment.yaml'>postgres-deployment.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines the deployment configuration for a PostgreSQL database within the microservices architecture, establishing a persistent, single-instance database environment<br>- It ensures the database is correctly configured with environment secrets, persistent storage, and network access, serving as the foundational data store for the applications services and maintaining data integrity across the system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/users-service.yaml'>users-service.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines the Kubernetes service for the users microservice, enabling internal network communication within the cluster<br>- It exposes port 3000, allowing other services to interact with the users service seamlessly<br>- This configuration is essential for routing traffic and maintaining service discoverability within the microservices architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/namespace.yaml'>namespace.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines the Kubernetes namespace for the microservices demo environment, establishing an isolated scope for deploying and managing related microservices within the cluster<br>- It ensures organized resource allocation and separation, facilitating streamlined deployment, scaling, and maintenance of the microservices architecture in a structured and manageable manner.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/products-service.yaml'>products-service.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines a Kubernetes Service that exposes the products microservice within the cluster, enabling internal communication and load balancing on port 8000<br>- It facilitates seamless integration of the products component into the overall microservices architecture, ensuring reliable access and scalability within the microservices-demo environment.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/mongo-deployment.yaml'>mongo-deployment.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines a Kubernetes deployment for a MongoDB database within the microservices architecture, establishing a scalable, resilient data storage layer<br>- It orchestrates a three-replica MongoDB cluster, ensuring persistent data storage through volume claims, and facilitates reliable data management essential for the overall applications data-driven functionalities.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/ingress.yaml'>ingress.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines the ingress configuration for routing external traffic to specific microservices within the Kubernetes cluster<br>- It manages URL path mappings for user, product, and frontend services, enabling seamless access through a unified hostname<br>- This setup facilitates efficient traffic distribution and simplifies service exposure in the overall microservices architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/products-deployment.yaml'>products-deployment.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines the deployment configuration for the products microservice within the Kubernetes cluster, ensuring scalable and reliable operation<br>- It orchestrates containerized instances, manages environment variables for database connectivity, and facilitates seamless integration with other services in the microservices architecture<br>- This setup supports consistent deployment and high availability of the products service in the overall system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/users-deployment.yaml'>users-deployment.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines the deployment configuration for the users microservice within the Kubernetes cluster, ensuring scalable and reliable operation<br>- It orchestrates the deployment of multiple replicas, manages container specifications, and sets environment variables for database connectivity, facilitating seamless integration within the overall microservices architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/mongo-pvc.yaml'>mongo-pvc.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines a PersistentVolumeClaim for MongoDB storage within the microservices architecture, ensuring reliable and scalable data persistence<br>- It allocates a 1Gi volume with read-write access, facilitating seamless data management for the MongoDB instance in the Kubernetes environment<br>- This component integrates storage provisioning into the overall deployment, supporting the applications data durability and availability.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/hpa.yaml'>hpa.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines horizontal pod autoscaling configurations for the microservices-demo deployment, enabling dynamic adjustment of replica counts based on CPU utilization<br>- Facilitates efficient resource management and ensures application scalability and availability within the Kubernetes architecture<br>- This setup supports maintaining optimal performance and cost-efficiency across the microservices ecosystem.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/postgres-pvc.yaml'>postgres-pvc.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines a PersistentVolumeClaim for PostgreSQL storage within the microservices architecture, ensuring reliable and scalable data persistence<br>- It allocates a 1Gi volume with read-write access, integrating seamlessly into the Kubernetes environment to support the databases durability and availability as part of the overall infrastructure.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/k8s/frontend-service.yaml'>frontend-service.yaml</a></b></td>
					<td style='padding: 8px;'>- Defines the internal Kubernetes service for the frontend application within the microservices architecture, enabling seamless communication and load balancing across the cluster<br>- It ensures the frontend is accessible on port 80 within the designated namespace, facilitating user interactions and integration with other microservices in the deployment environment.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- users-service Submodule -->
	<details>
		<summary><b>users-service</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ users-service</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/users-service/Dockerfile'>Dockerfile</a></b></td>
					<td style='padding: 8px;'>- Defines the Docker environment for the users-service, enabling consistent deployment of the Node.js application<br>- It streamlines the setup process by installing dependencies, copying source code, and exposing the service port, ensuring the users-service runs reliably across different environments within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/users-service/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the core user management service within the architecture, enabling creation, retrieval, updating, and deletion of user data<br>- It facilitates user authentication and profile handling, serving as a foundational component for user-related functionalities across the system<br>- This service integrates with other microservices to support secure and scalable user operations within the broader application ecosystem.</td>
				</tr>
			</table>
			<!-- src Submodule -->
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ users-service.src</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/users-service/src/index.js'>index.js</a></b></td>
							<td style='padding: 8px;'>- Provides RESTful API endpoints for managing user data within the microservices architecture<br>- Facilitates creation, retrieval, and health monitoring of user records, integrating with MongoDB for persistent storage<br>- Serves as the core interface for user-related operations, supporting seamless data access and manipulation across the overall system.</td>
						</tr>
					</table>
					<!-- models Submodule -->
					<details>
						<summary><b>models</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ users-service.src.models</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/users-service/src/models/user.js'>user.js</a></b></td>
									<td style='padding: 8px;'>- Defines the user data model within the users-service, establishing the structure and constraints for user information stored in the database<br>- It enables consistent handling of user entities across the application, supporting functionalities such as user registration, retrieval, and management within the overall microservices architecture.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- frontend Submodule -->
	<details>
		<summary><b>frontend</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ frontend</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/frontend/Dockerfile'>Dockerfile</a></b></td>
					<td style='padding: 8px;'>- Sets up the web server environment for the frontend by deploying static assets to an Apache HTTP Server container<br>- It ensures that the frontend interface is accessible and properly served within the overall architecture, facilitating seamless user interactions and integration with backend services<br>- This configuration is essential for delivering a reliable and scalable user-facing component of the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/frontend/script.js'>script.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates dynamic retrieval and display of user and product data from backend services within the frontend interface<br>- Enables real-time updates by fetching data asynchronously, managing loading states and error handling to ensure a seamless user experience<br>- Serves as a bridge between the user interface and backend APIs, supporting the overall architecture of data-driven interactions.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Erik-egam/micro-servercios-ecommerce/blob/master/frontend/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Provides a user interface for an e-commerce dashboard, enabling dynamic loading and display of user and product data<br>- Facilitates interaction with backend services through buttons, manages loading states and error handling, and organizes content into clear sections for efficient data visualization within the overall architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
</details>

---

## 🚀 Getting Started

### 📋 Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript, Python
- **Package Manager:** Pip, Npm
- **Container Runtime:** Docker

### ⚙️ Installation

Build micro-servercios-ecommerce from the source and install dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/Erik-egam/micro-servercios-ecommerce
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd micro-servercios-ecommerce
    ```

3. **Install the dependencies:**

**Using [docker](https://www.docker.com/):**

```sh
❯ docker build -t Erik-egam/micro-servercios-ecommerce .
```
**Using [pip](https://pypi.org/project/pip/):**

```sh
❯ pip install -r products-service/requirements.txt
```
**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### 💻 Usage

Run the project with:

**Using [docker](https://www.docker.com/):**

```sh
docker run -it {image_name}
```
**Using [pip](https://pypi.org/project/pip/):**

```sh
python {entrypoint}
```
**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### 🧪 Testing

Micro-servercios-ecommerce uses the {__test_framework__} test framework. Run the test suite with:

**Using [docker](https://www.docker.com/):**

```sh
echo 'INSERT-TEST-COMMAND-HERE'
```
**Using [pip](https://pypi.org/project/pip/):**

```sh
pytest
```
**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

## 🤝 Contributing

- **💬 [Join the Discussions](https://github.com/Erik-egam/micro-servercios-ecommerce/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/Erik-egam/micro-servercios-ecommerce/issues)**: Submit bugs found or log feature requests for the `micro-servercios-ecommerce` project.
- **💡 [Submit Pull Requests](https://github.com/Erik-egam/micro-servercios-ecommerce/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Erik-egam/micro-servercios-ecommerce
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="[https://github.com{/Erik-egam/micro-servercios-ecommerce/}graphs/contributors](https://github.com/Erik-egam)">
      <img src="https://contrib.rocks/image?repo=Erik-egam/micro-servercios-ecommerce">
   </a>
   <a href="[https://github.com{/Erik-egam/micro-servercios-ecommerce/}graphs/contributors](https://github.com/Erik-egam)">
      <img src="[https://contrib.rocks/image?repo=Erik-egam/micro-servercios-ecommerce](https://avatars.githubusercontent.com/u/158068182?v=4)">
   </a>
</p>
</details>

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
