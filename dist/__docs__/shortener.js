"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    openapi: '3.0.1',
    info: {
        title: 'Shortener API',
        description: 'Simples encurtador de URL com persistencia e controle de validade. Basta informar uma url valida que a api te devolverá uma versão curta. Ao acessar a versão curta ocorrerá o redirecionamento para a url original.',
        version: 'v1',
    },
    servers: [
        {
            url: 'http://localhost:8081',
        },
    ],
    paths: {
        '/encurtador': {
            post: {
                description: 'Recebe uma url válida e retorna uma url curta com validade até o primeiro dia do mês atual do próximo ano.',
                tags: [
                    'Encurtador',
                ],
                requestBody: {
                    content: {
                        'application/json-patch+json': {
                            schema: {
                                $ref: '#/components/schemas/Shortener',
                            },
                        },
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Shortener',
                            },
                        },
                        'text/json': {
                            schema: {
                                $ref: '#/components/schemas/Shortener',
                            },
                        },
                        'application/*+json': {
                            schema: {
                                $ref: '#/components/schemas/Shortener',
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: 'Success',
                    },
                    404: {
                        description: 'Not Found',
                    },
                },
            },
        },
        '/{shortUrl}': {
            get: {
                description: 'Recebe uma url curta e efetua o redirecionamento para a url original.',
                tags: [
                    'Encurtador',
                ],
                parameters: [
                    {
                        name: 'shortUrl',
                        in: 'path',
                        schema: {
                            type: 'string',
                            nullable: false,
                        },
                        description: 'Url curta',
                        maxLength: 10,
                        minLength: 5,
                    },
                ],
                responses: {
                    200: {
                        description: 'Success',
                    },
                    302: {
                        description: 'Redirect',
                    },
                    404: {
                        description: 'Not Found',
                    },
                },
            },
        },
    },
    components: {
        schemas: {
            Shortener: {
                required: [
                    'url',
                ],
                type: 'object',
                properties: {
                    url: {
                        type: 'string',
                        format: 'url',
                    },
                },
                additionalProperties: false,
            },
        },
    },
};
//# sourceMappingURL=shortener.js.map