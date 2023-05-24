export default
{
  '/healthcheck': {
    get: {
      tags: ['Health Check'],
      description: '',
      parameters: [],
      responses: {
        200: {
          description: 'OK'
        },
        500: {
          description: 'Internal Server Error'
        }
      }
    }
  }
  // '/api/v1/menu': {
  //   get: {
  //     tags: [
  //       'Menu'
  //     ],
  //     description: '',
  //     parameters: [],
  //     responses: {
  //       200: {
  //         description: 'OK'
  //       }
  //     }
  //   },
  //   post: {
  //     tags: [
  //       'Menu'
  //     ],
  //     description: 'Create a new menu or submenu',
  //     parameters: [
  //       {
  //         name: 'name',
  //         in: 'body',
  //         required: true,
  //         description: "name it's required string, relatedId not required string",
  //         schema: {
  //           type: 'object',
  //           properties: {
  //             name: {
  //               type: 'string',
  //               example: ''
  //             },
  //             relatedId: {
  //               type: 'string',
  //               example: ''
  //             }
  //           }
  //         }
  //       }
  //     ],
  //     responses: {
  //       201: {
  //         description: "{ id : '624de433daf4dce5aac6693a' }"
  //       }
  //     }
  //   }
  // },
  // '/api/v1/menu/{id}': {
  //   delete: {
  //     tags: [
  //       'Menu'
  //     ],
  //     description: 'Delete a menu and all submenus',
  //     parameters: [
  //       {
  //         name: 'id',
  //         in: 'path',
  //         required: true,
  //         type: 'string'
  //       }
  //     ],
  //     responses: {
  //       200: {
  //         description: '"remove": "REMOVE xxxx LEVEL 624de4f208a56f404e16662a"'
  //       }
  //     }
  //   }
  // },
  // '/api/v1/user': {
  //   get: {
  //     tags: [
  //       'User'
  //     ],
  //     description: '',
  //     parameters: [],
  //     responses: {
  //       200: {
  //         description: 'OK'
  //       }
  //     }
  //   },
  //   post: {
  //     tags: [
  //       'User'
  //     ],
  //     description: 'Create a new User',
  //     parameters: [
  //       {
  //         name: 'name',
  //         in: 'body',
  //         required: true,
  //         description: "name, email and password it's required",
  //         schema: {
  //           type: 'object',
  //           properties: {
  //             name: {
  //               type: 'string',
  //               example: ''
  //             },
  //             email: {
  //               type: 'string',
  //               example: ''
  //             },
  //             password: {
  //               type: 'string',
  //               example: ''
  //             },
  //             dob: {
  //               type: 'string',
  //               example: ''
  //             }
  //           }
  //         }
  //       }
  //     ],
  //     responses: {
  //       201: {
  //         description: "{ id : '624de433daf4dce5aac6693a' }"
  //       }
  //     }
  //   }
  // },
  // '/api/v1/user/{id}': {
  //   delete: {
  //     tags: [
  //       'User'
  //     ],
  //     description: 'Delete a User',
  //     parameters: [
  //       {
  //         name: 'id',
  //         in: 'path',
  //         required: true,
  //         type: 'string'
  //       }
  //     ],
  //     responses: {
  //       200: {
  //         description: 'OK'
  //       }
  //     }
  //   },
  //   get: {
  //     tags: [
  //       'User'
  //     ],
  //     description: 'Search a User',
  //     parameters: [
  //       {
  //         name: 'id',
  //         in: 'path',
  //         required: true,
  //         type: 'string'
  //       }
  //     ],
  //     responses: {
  //       200: {
  //         description: 'OK'
  //       }
  //     }
  //   },
  //   put: {
  //     tags: [
  //       'User'
  //     ],
  //     description: 'Update a User',
  //     parameters: [
  //       {
  //         name: 'id',
  //         in: 'path',
  //         required: true,
  //         type: 'string'
  //       },
  //       {
  //         name: 'name',
  //         in: 'body',
  //         required: true,
  //         description: "name, email and password it's required",
  //         schema: {
  //           type: 'object',
  //           properties: {
  //             name: {
  //               type: 'string',
  //               example: ''
  //             },
  //             email: {
  //               type: 'string',
  //               example: ''
  //             },
  //             password: {
  //               type: 'string',
  //               example: ''
  //             },
  //             dob: {
  //               type: 'string',
  //               example: ''
  //             }
  //           }
  //         }
  //       }
  //     ],
  //     responses: {
  //       200: {
  //         description: 'OK'
  //       }
  //     }
  //   }
  // }
}
