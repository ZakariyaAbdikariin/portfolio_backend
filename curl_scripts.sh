curl -X POST http://localhost:3000/api/profile \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sakariye Abdikariin",
    "bio": "Full-stack developer specializing in Node.js, TypeScript, and MySQL",
    "location": "New York, USA",
    "nationality": "American",
    "availability": "Immediate",
    "dateOfBirth": "1990-05-15",
    "email": "sakariye@example.com",
    "phone": "+1234567890",
    "address": "123 Main St, New York, NY",
    "github": "https://github.com/sakariye",
    "twitter": "https://twitter.com/sakariye",
    "linkedin": "https://linkedin.com/in/sakariye",
    "expectedSalary": 120000,
    "ownACar": true,
    "haveDrivingLicense": true,
    "noticePeriod": "2 weeks",
    "immigrationStatus": "Citizen",
    "referees": "Jane Smith, Bob Johnson",
    "willingToRelocate": true,
    "languages": "English, Spanish",
    "skills": "Node.js, TypeScript, Sequelize, Express, MySQL"
  }'