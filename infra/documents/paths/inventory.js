export default
{
  //inventory module
  '/v1/inventory/id': {
    get: {
      summary: 'Search inventory',
      description: 'Search inventory',
      tags: ['Inventory'],
      parameters: [
        {
          name: 'id',
          in: 'query',
          required: true,
          type: 'string'
        }
      ],
      responses: {
        200: {
          description: 'Successfully located'
        },
        400: {
          description: 'Bad request'
        },
        404: {
          description: 'Not found'
        },
        500: {
          description: 'Internal server Error'
        }
      }
    },
    put: {
      summary: 'Update inventory',
      tags: ['Inventory'],
      description: 'Update inventory',
      parameters: [
        {
          in: 'query',
          name: 'id',
          description: 'Require material with past code',
          required: true,
          type: 'string'
        },
        {
          in: 'query',
          name: 'type',
          description: 'Update type',
          required: false,
          type: 'string'
        },
        {
          in: 'query',
          name: 'model',
          description: 'Update model',
          required: false,
          type: 'string'
        },
        {
          in: 'query',
          name: 'brand',
          description: 'Update brand',
          required: false,
          type: 'string'
        },
        {
          in: 'query',
          name: 'patrimony',
          description: 'Update patrimony',
          required: false,
          type: 'string'
        },
        {
          in: 'query',
          name: 'series',
          description: 'Update series',
          required: false,
          type: 'string'
        }
      ],
      responses: {
        201: {
          description: 'Material successfully changed'
        },
        400: {
          description: 'Bad Request'
        },
        404: {
          description: 'Not found'
        },

        500: {
          description: 'Internal Server Error'
        }
      }
    },
    delete: {
      summary: "Remove Inventory",
      description: "Delete item from inventory",
      tags: ["Inventory"],
      parameters: [
        {
          in: "query",
          name: "id",
          description: "Inventory Id",
          required: true,
          type: "string",
          format: "uuid"
        }
      ],
      responses: {
        200: {
          description: "Deleted successfully.",
        },
        400: {
          description: "Bad Request",
        },
        404: {
          description: "Not found",
        },
        500: {
          description: "Internal Server Error",
        }
      }
      }
    },
  // inventory post module without required id
  '/v1/inventory/': {
    post: {
        summary: 'Create inventory',
        tags: ['Inventory'],
        description: 'Create inventory',
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'description',
            require: 'require',
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  require: true,
                  example: 'Computador'
                },
                model: {
                  type: 'string',
                  require: true,
                  example: 'Notebook'
                },
                brand: {
                  type: 'string',
                  require: true,
                  example: 'DELL'
                },
                patrimony: {
                  type: 'string',
                  require: true,
                  example: '222000111'
                },
                series: {
                  type: 'string',
                  require: true,
                  example: 'PE001'
                }
              }
            }
          }
        ],
        responses: {
          201: {
            description: 'User created successfully'
          },
          400: {
            description: 'Bad Request'
          },
          404: {
            description: 'Not found'
          },

          500: {
            description: 'Internal Server Error'
          }
        }
      }
    },

    //user module
  '/v1/user/id': {
    get: {
      summary: 'Search user',
      description: 'Search user',
      tags: ['Users'],
      parameters: [
        {
          name: 'id',
          in: 'query',
          required: true,
          type: 'string'
        }
      ],
      responses: {
        201: {
          description: 'User successfully located'
        },
        400: {
          description: 'Error searching User'
        },
        404: {
          description: 'Error: bad request'
        },
        422: {
          description: 'Error searching User'
        },
        500: {
          description: 'Internal server Error'
        }
      }
    },
    delete: {
      summary: "Remove user",
      description: "Delete user",
      tags: ["Users"],
      parameters: [
        {
          in: "query",
          name: "id",
          description: "User Id",
          required: true,
          type: "string",
          format: "uuid"
        }
      ],
      responses: {
        200: {
          description: "Deleted successfully.",
        },
        400: {
          description: "Bad Request",
        },
        404: {
          description: "Not found",
        },
        500: {
          description: "Internal Server Error",
        }
      }
      }
    },

  '/v1/user/': {
    post: {
      summary: 'Create user',
      tags: ['Users'],
      description: 'Create user',
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'description',
          require: 'require',
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                require: true,
                example: 'Piterson Murilo Boscolo'
              },
              cpf: {
                type: 'string',
                require: true,
                example: '12345678900'
              },
              email: {
                type: 'string',
                require: true,
                example: 'teste@email.com'
              }
            }
          }
        }
      ],
      responses: {
        201: {
          description: 'User created successfully'
        },
        400: {
          description: 'Bad Request'
        },
        404: {
          description: 'Not found'
        },

        500: {
          description: 'Internal Server Error'
        }
      }
      }
    }
}


