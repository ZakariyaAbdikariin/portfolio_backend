"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
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
                get: {
                    summary: "Get all profiles",
                    tags: ["Profiles"],
                    responses: {
                        "200": {
                            description: "List of all profiles",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/Profile",
                                        },
                                    },
                                },
                            },
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
                delete: {
                    summary: "Delete a profile by ID",
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
                    responses: {
                        "200": {
                            description: "Profile deleted successfully",
                        },
                        "404": {
                            description: "Profile not found",
                        },
                        "500": {
                            description: "Server error",
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
                        name: {
                            type: "string",
                        },
                        bio: {
                            type: "string",
                        },
                        location: {
                            type: "string",
                        },
                        nationality: {
                            type: "string",
                        },
                        availability: {
                            type: "string",
                        },
                        dateOfBirth: {
                            type: "string",
                            format: "date",
                        },
                        email: {
                            type: "string",
                            format: "email",
                        },
                        phone: {
                            type: "string",
                        },
                        address: {
                            type: "string",
                        },
                        github: {
                            type: "string",
                        },
                        twitter: {
                            type: "string",
                        },
                        linkedin: {
                            type: "string",
                        },
                        expectedSalary: {
                            type: "number",
                        },
                        ownACar: {
                            type: "boolean",
                        },
                        haveDrivingLicense: {
                            type: "boolean",
                        },
                        noticePeriod: {
                            type: "string",
                        },
                        immigrationStatus: {
                            type: "string",
                        },
                        referees: {
                            type: "string",
                        },
                        willingToRelocate: {
                            type: "boolean",
                        },
                        languages: {
                            type: "string",
                        },
                        skills: {
                            type: "string",
                        },
                    },
                    required: ["name", "email"],
                },
            },
        },
    },
    apis: [],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
