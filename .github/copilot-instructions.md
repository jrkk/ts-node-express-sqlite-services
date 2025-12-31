# GitHub Copilot Instructions for Express TypeScript Node Services

## Project Overview

This is a production-ready Express.js API built with TypeScript, following clean architecture principles and modern best practices.

## Tech Stack & Dependencies

- **Runtime**: Node.js 24
- **Framework**: Express.js 5.x
- **Language**: TypeScript 5.x
- **ORM**: Sequelize 6.x with PostgreSQL
- **Testing**: Mocha & Chai
- **Code Quality**: ESLint, Prettier
- **Process Management**: Nodemon (development)

## Project Structure & Architecture

```
src/
├── Bootstrap.ts              # App bootstrap logic
├── Index.ts                  # Entry point
├── Config/                   # Configuration files (App, Database)
├── Controller/               # Request handlers and API logic
├── Entities/                 # Database models/entities
├── Middleware/               # Express middleware (auth, validation, error handling)
├── Plugins/                  # Reusable plugins (logger, etc.)
├── Routes/                   # API route definitions
├── Schemas/                  # Validation schemas and types
├── Services/                 # Business logic layer
test/                        # Unit and integration tests
```

## Coding Standards & Conventions

### TypeScript Guidelines

- Use strict TypeScript configuration
- Prefer explicit typing over `any`
- Use interfaces for object shapes
- Export types and interfaces from dedicated files
- Use async/await over promises for better readability

### Express.js Patterns

- Follow MVC pattern: Routes → Controllers → Services → Entities
- Use middleware for cross-cutting concerns (logging, validation, error handling)
- Keep controllers thin - delegate business logic to services
- Use proper HTTP status codes and error responses
- Implement proper error handling with centralized error middleware

### File Naming Conventions

- Use PascalCase for classes, interfaces, and TypeScript files: `UserController.ts`
- Use camelCase for functions and variables: `getUserById`
- Use kebab-case for route files: `user-routes.ts`
- Use descriptive names that indicate purpose

### Code Organization

- One class per file
- Group related functionality in services
- Use dependency injection where appropriate
- Keep functions small and focused (single responsibility)

## Database & ORM Guidelines

- Use Sequelize models in `src/Entities/`
- Define model associations clearly
- Use TypeScript interfaces for model attributes
- Implement proper validation at model level
- Use transactions for multi-step operations

## API Design Principles

- Follow RESTful conventions
- Use proper HTTP methods (GET, POST, PUT, DELETE, PATCH)
- Implement consistent response formats
- Include proper error messages and status codes
- Use middleware for authentication and authorization
- Validate input data before processing

## Testing Standards

- Write unit tests for services and utilities
- Use descriptive test names that explain the scenario
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Test error scenarios and edge cases

## Error Handling

- Use centralized error handling middleware
- Create custom error classes for different error types
- Log errors appropriately (use the logger plugin)
- Return consistent error response format
- Never expose internal errors to clients

## Environment & Configuration

- Use `.env` files for environment variables
- Keep sensitive data out of source code
- Use `Config/` directory for application configuration
- Support different environments (development, testing, production)

## Docker & Deployment

- Multi-stage Dockerfile for optimized production images
- Use non-root user for security
- Include health checks
- Optimize for smaller image size

## Development Workflow

- Use nodemon for development with hot reload
- Run linting and formatting before commits
- Build TypeScript before production deployment
- Use the provided npm scripts for consistency

## Security Considerations

- Validate and sanitize all inputs
- Use proper authentication and authorization
- Implement rate limiting where appropriate
- Keep dependencies up to date
- Use secure headers middleware

## Performance Guidelines

- Use connection pooling for database
- Implement proper caching strategies
- Use compression middleware
- Optimize database queries
- Monitor and log performance metrics

## Logging

- Use the centralized logger plugin (`src/Plugins/logger.plugin.ts`)
- Log at appropriate levels (error, warn, info, debug)
- Include relevant context in log messages
- Avoid logging sensitive information

## Code Generation Preferences

When generating new code:

1. Follow the existing project structure
2. Use TypeScript with proper typing
3. Include error handling
4. Add appropriate logging
5. Follow the established naming conventions
6. Include basic documentation/comments
7. Write corresponding tests when applicable
8. Use async/await for asynchronous operations
9. Implement proper input validation
10. Follow the service-controller pattern

## Common Patterns to Follow

- Controller methods should validate input, call services, and return responses
- Services contain business logic and interact with the database
- Use middleware for cross-cutting concerns
- Implement proper error handling at each layer
- Use TypeScript interfaces for data contracts
- Follow the existing code style and patterns

## Avoid These Anti-patterns

- Don't put business logic in controllers
- Don't use synchronous operations for I/O
- Don't ignore errors or use empty catch blocks
- Don't expose sensitive information in error messages
- Don't mix concerns between layers
- Don't use `any` type unless absolutely necessary
- Don't commit sensitive data or credentials
