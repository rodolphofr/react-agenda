export const phoneTypes = [
    {
        id: 1,
        name: 'Celular'
    },
    {
        id: 2,
        name: 'Residencial'
    },
    {
        id: 3,
        name: 'Comercial'
    },
    {
        id: 4,
        name: 'Pager'
    }
]

export const contacts = [
    {
        id: 1,
        name: 'Erica Cristina',
        avatar: 'erica-avatar',
        contacts: {
            phoneNumbers: [
                {
                    number: 11969043971,
                    phoneType: { 
                        id: 1 
                    }
                },
                {
                    number: 11534312312,
                    phoneType: { 
                        id: 3 
                    }
                },
            ],
            emails: [
                'erica.cristina@b2wdigital.com'
            ]
        }
    },
    {
        id: 2,
        name: 'Camila Karina',
        avatar: 'camila-avatar',
        contacts: {
            phoneNumbers: [
                {
                    number: 11973058665,
                    phoneType: { 
                        id: 1 
                    }
                }
            ],
            emails: [
                'camila.karina@b2wdigital.com'
            ]
        }
    },
    {
        id: 3,
        name: 'Rodolpho Rodrigues',
        avatar: 'rodolpho-avatar',
        contacts: {
            phoneNumbers: [
                {
                    number: 11991936175,
                    phoneType: { 
                        id: 1 
                    }
                },
                {
                    number: 1120985420,
                    phoneType: { 
                        id: 2
                    }
                }
            ],
            emails: [
                'rodolpho.rodrigues@b2wdigital.com'
            ]
        }
    },
    {
        id: 4,
        name: 'Cristiane Zia Lopes',
        avatar: 'cristiane-avatar',
        contacts: {
            phoneNumbers: [
                {
                    number: 11983118411,
                    phoneType: { 
                        id: 1 
                    }
                }
            ],
            emails: [
                'cristzlopes@gmail.com'
            ]
        }
    },
    {
        id: 5,
        name: 'Alessandro de São Vicente',
        avatar: 'alessandro-avatar',
        contacts: {
            phoneNumbers: [
                {
                    number: 11991749680,
                    phoneType: { 
                        id: 1 
                    }
                }
            ],
            emails: [
                'alessandro.muscles@saindodajaula.com.br'
            ]
        }
    },
    {
        id: 6,
        name: 'Eric Jorge Barbos',
        avatar: 'eric-avatar',
        contacts: {
            phoneNumbers: [
                {
                    number: 11973058665,
                    phoneType: { 
                        id: 1 
                    }
                }
            ],
            emails: [
                'eric.jorge@b2wdigital.com'
            ]
        }
    },
    {
        id: 7,
        name: 'Julio Cesar Pocielan',
        avatar: 'julio-avatar',
        contacts: {
            phoneNumbers: [
                {
                    number: 11975393068,
                    phoneType: { 
                        id: 1 
                    }
                }
            ],
            emails: [
                'julio.pocielan@b2wdigital.com'
            ]
        }
    }
]
.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
});