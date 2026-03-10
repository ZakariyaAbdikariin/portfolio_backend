import swaggerJSDoc, { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Profile API",
      version: "1.0.0",
      description: "API documentation for Profile management",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local development server",
      },
    ],

    paths: {
      "/api/profiles": {
        post: {
          summary: "Create a new profile",
          tags: ["Profiles"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Profile",
                },
              },
            },
          },
          responses: {
            "201": {
              description: "Profile created successfully",
            },
            "500": {
              description: "Server error",
            },
          },
        },
      },

      "/api/profiles/{id}": {
        put: {
          summary: "Update an existing profile",
          tags: ["Profiles"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "integer",
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Profile",
                },
              },
            },
          },
          responses: {
            "200": {
              description: "Profile updated successfully",
            },
            "404": {
              description: "Profile not found",
            },
          },
        },
      },
    },

    components: {
      schemas: {
        Profile: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            name: { type: "string", example: "John Doe" },
            bio: { type: "string", example: "Backend developer" },
            location: { type: "string", example: "London" },
            nationality: { type: "string", example: "British" },
            availability: { type: "string", example: "Immediately" },
            dateOfBirth: {
              type: "string",
              format: "date",
              example: "1995-05-10",
            },
            email: {
              type: "string",
              format: "email",
              example: "john@example.com",
            },
            phone: { type: "string", example: "+447123456789" },
            address: { type: "string" },
            github: { type: "string" },
            twitter: { type: "string" },
            linkedin: { type: "string" },
            expectedSalary: { type: "number", example: 60000 },
            ownACar: { type: "boolean", example: true },
            haveDrivingLicense: { type: "boolean", example: true },
            noticePeriod: { type: "string", example: "1 month" },
            immigrationStatus: { type: "string" },
            referees: { type: "string" },
            willingToRelocate: { type: "boolean", example: true },
            languages: { type: "string" },
            skills: { type: "string" },
          },
          required: ["name", "email"],
        },
      },
    },
  },

  apis: [],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
