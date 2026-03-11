# InClassMarch10

This project implements a simple RESTful API using Node.js and Express. The goal of the assignment was to design and organize API endpoints following REST principles while maintaining a clean project structure.

First, the project resources were identified. In this case, the main resource used was products, which represents items that can be retrieved or managed through the API.

Next, RESTful endpoints were designed to allow interaction with the resource. For example, a GET endpoint /api/products was created to retrieve all products. Additional endpoints can be extended to support operations such as retrieving a single product, creating a product, updating, or deleting a product.

The codebase was organized into separate folders to maintain a clear structure. Routes, controllers, and services were separated so that each component has a specific responsibility. Routes define the API endpoints, controllers handle incoming requests and responses, and services contain the business logic and data handling.

Routes were implemented using Express Router. These routes map HTTP requests to controller functions. For example, the route router.get('/', getProducts) connects the GET request to the controller responsible for retrieving product data.

Controllers were implemented to process incoming requests. They extract values from req.params, req.query, or req.body, call the appropriate service functions, and return responses to the client using res.json().

Services were implemented to handle the data logic. For this assignment, a JSON file is used as a temporary data source to simulate a database. The service reads the JSON file and returns the requested data to the controller.

Overall, the project demonstrates a basic RESTful API structure with proper separation of concerns using routes, controllers, and services. The implementation provides a scalable structure that can easily be extended in the future by connecting it to a real database.
