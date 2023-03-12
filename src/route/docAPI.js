const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API",
    version: "0.0.1",
    description: "Full API in server",
  },
  servers: [
    {
      url: "https://api.thanhlam.gq",
      description: "Public dev",
    },
    {
      url: "http://lam.ntt.edu.vn:3001",
      description: "Test dev",
    },
    {
      url: "http://localhost:3001",
      description: "Dev",
    },
  ],

  tags: [
    {
      name: "Checkport",
      description: "Kiểm tra port theo IP Wan",
    },
  ],
  paths: {
    "/api/checkport": {
      get: {
        tags: ["Checkport"],
        summary: "Check port",
        description: "Check port",
        parameters: [
          {
            name: "port",
            in: "query",
            description: "Nhập port muốn kiểm tra",
            type: "string",
            example: "80",
          },
          {
            name: "host",
            in: "query",
            description: "Nhập IP muốn kiểm tra",
            type: "string",
            example: "xxx.xxx.xxx.xxx",
          },
        ],
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },
  },
};

module.exports = swaggerDocument;
