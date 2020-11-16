

/*
Discos duros que sea de la marca Seagate, que el tipo de ordenador sea de sobremesa y 
que el precio sea menor o igual a 2000€
*/
db.proyecto.find(
{$and: [
    {"discosDuros.marca": "Seagate" },
    { tipo_de_ordenador: "Sobremesa"},
    { precio: {$lte: 2000}}
]
}
).pretty()

/*......RESULTADO......*/

/*
{
        "_id" : 1,
        "marca" : "Lenovo",
        "modelo" : "E15",
        "precio" : 500,
        "tipo_de_ordenador" : "Sobremesa",
        "fechaLanzamiento" : ISODate("2020-11-23T00:00:00Z"),
        "hardware" : [
                "Monitor",
                "Ratón",
                "Teclado"
        ],
        "componentes" : {
                "procesador" : "AMD",
                "modelo_procesador" : "Ryzen 3",
                "memoria_RAM" : 8,
                "tarjeta_gráfica" : "Gigabyte geforce gtx 1050 ti"
        },
        "Sistema_Operativo" : false,
        "discosDuros" : [
                {
                        "marca" : "KINGSTONG",
                        "tipo" : "SSD",
                        "capacidad" : 250
                },
                {
                        "marca" : "Seagate",
                        "tipo" : "HDD",
                        "capacidad" : 1000
                }
        ]
}
{
        "_id" : 2,
        "marca" : "MSI",
        "modelo" : "GF65",
        "precio" : 700,
        "tipo_de_ordenador" : "Sobremesa",
        "fechaLanzamiento" : ISODate("2021-06-17T00:00:00Z"),
        "hardware" : [
                "Monitor",
                "Teclado",
                "Microfono"
        ],
        "componentes" : {
                "procesador" : "AMD",
                "modelo_procesador" : "Ryzen 5",
                "memoria_RAM" : 16,
                "tarjeta_gráfica" : "Gigabyte GeForce GTX 1660 OC 6G"
        },
        "Sistema_Operativo" : true,
        "discosDuros" : [
                {
                        "marca" : "Samsung",
                        "tipo" : "SSD",
                        "capacidad" : 400
                },
                {
                        "marca" : "Seagate",
                        "tipo" : "HDD",
                        "capacidad" : 500
                }
        ]
}
{
        "_id" : 5,
        "marca" : "ASUS",
        "modelo" : "EU100",
        "precio" : 1500,
        "tipo_de_ordenador" : "Sobremesa",
        "fechaLanzamiento" : ISODate("2021-07-12T00:00:00Z"),
        "hardware" : [
                "ratón",
                "teclado",
                "altavoces"
        ],
        "componentes" : {
                "procesador" : "Intel",
                "modelo_procesador" : "Core i9",
                "memoria_RAM" : 16,
                "tarjeta_gráfica" : "RTX 2060"
        },
        "Sistema_Operativo" : true,
        "discosDuros" : [
                {
                        "marca" : "Seagate",
                        "tipo" : "HDD",
                        "capacidad" : 2000
                },
                {
                        "marca" : "TOSHIBA",
                        "tipo" : "SSD",
                        "capacidad" : 500
                }
        ]
}
{
        "_id" : 8,
        "marca" : "HP",
        "modelo" : "E255",
        "precio" : 1250,
        "tipo_de_ordenador" : "Sobremesa",
        "fechaLanzamiento" : ISODate("2020-11-19T00:00:00Z"),
        "hardware" : [
                "ratón",
                "microfono",
                "teclado"
        ],
        "componentes" : {
                "procesador" : "AMD",
                "modelo_procesador" : "Ryzen 7",
                "memoria_RAM" : 16,
                "tarjeta_gráfica" : "RTX 2600"
        },
        "Sistema_Operativo" : false,
        "discosDuros" : [
                {
                        "marca" : "Samsung",
                        "tipo" : "SSD",
                        "capacidad" : 120
                },
                {
                        "marca" : "Seagate",
                        "tipo" : "HDD",
                        "capacidad" : 1000
                }
        ]
}
*/





/* Ordenadores que el disco duro sea Seagate que la marca sea H y lo que quiera y que la fecha de lanzamiento sea  mayor a 01/01/2020 */

    db.proyecto.find(
        {
            $and: [
                {"discosDuros.marca": "Seagate" },
                { marca:   { $regex: "^H"}},
                { fechaLanzamiento: { $gt: ISODate("2020-01-01")}}
            ]
        }
        ).pretty()


/*......RESULTADO......*/
/*
{
    "_id" : 8,
    "marca" : "HP",
    "modelo" : "E255",
    "precio" : 1250,
    "tipo_de_ordenador" : "Sobremesa",
    "fechaLanzamiento" : ISODate("2020-11-19T00:00:00Z"),
    "hardware" : [
            "ratón",
            "microfono",
            "teclado"
    ],
    "componentes" : {
            "procesador" : "AMD",
            "modelo_procesador" : "Ryzen 7",
            "memoria_RAM" : 16,
            "tarjeta_gráfica" : "RTX 2600"
    },
    "Sistema_Operativo" : false,
    "discosDuros" : [
            {
                    "marca" : "Samsung",
                    "tipo" : "SSD",
                    "capacidad" : 120
            },
            {
                    "marca" : "Seagate",
                    "tipo" : "HDD",
                    "capacidad" : 1000
            }
    ]
}
*/

/* Ordenadores que el tipo de discos duros sea SSD , que la marca la primera letra sea M y luego lo que sea, 
que la fecha de lanzamiento sea mayor a 01/01/2021 y que los discos duros la capacidad sea entre 400 y 1000*/

        db.proyecto.find(
            {
                $and: [
                    {"discosDuros.tipo": "SSD" },
                    { marca:   { $regex: "^M"}},
                    { fechaLanzamiento: { $gt: ISODate("2021-01-01")}},
                    { discosDuros: { $elemMatch: { capacidad: { $gte: 400, $lte: 1000} } } }
                ]
            }
            ).pretty()

/*......RESULTADO......*/
/*
{
    "_id" : 2,
    "marca" : "MSI",
    "modelo" : "GF65",
    "precio" : 700,
    "tipo_de_ordenador" : "Sobremesa",
    "fechaLanzamiento" : ISODate("2021-06-17T00:00:00Z"),
    "hardware" : [
            "Monitor",
            "Teclado",
            "Microfono"
    ],
    "componentes" : {
            "procesador" : "AMD",
            "modelo_procesador" : "Ryzen 5",
            "memoria_RAM" : 16,
            "tarjeta_gráfica" : "Gigabyte GeForce GTX 1660 OC 6G"
    },
    "Sistema_Operativo" : true,
    "discosDuros" : [
            {
                    "marca" : "Samsung",
                    "tipo" : "SSD",
                    "capacidad" : 400
            },
            {
                    "marca" : "Seagate",
                    "tipo" : "HDD",
                    "capacidad" : 500
            }
    ]
}
*/


/* Ordenadores que tenga sistema operativo, que del campo de hardware que no sea monitor
 y impresora y que la fecha de lanzamiento sea menor igual a 01/01/2022 y que el hardware 
 sea ratón, teclado y altavoces  */

 db.proyecto.find(
    {
        $and: [
            {
                $nor: [
                    { Sistema_Operativo: false},
                    { hardware: ["Monitor", "impresora"]}
                ]
            },
            {
                $or: [
                    {fechaLanzamiento:{ $lte: ISODate("2022-01-01")}},
                    {hardware: ["ratón", "teclado","altavoces"]}
                ]
            }
        ]
    }
).pretty()

/* ......RESULTADO......*/
/*
{
    "_id" : 2,
    "marca" : "MSI",
    "modelo" : "GF65",
    "precio" : 700,
    "tipo_de_ordenador" : "Sobremesa",
    "fechaLanzamiento" : ISODate("2021-06-17T00:00:00Z"),
    "hardware" : [
            "Monitor",
            "Teclado",
            "Microfono"
    ],
    "componentes" : {
            "procesador" : "AMD",
            "modelo_procesador" : "Ryzen 5",
            "memoria_RAM" : 16,
            "tarjeta_gráfica" : "Gigabyte GeForce GTX 1660 OC 6G"
    },
    "Sistema_Operativo" : true,
    "discosDuros" : [
            {
                    "marca" : "Samsung",
                    "tipo" : "SSD",
                    "capacidad" : 400
            },
            {
                    "marca" : "Seagate",
                    "tipo" : "HDD",
                    "capacidad" : 500
            }
    ]
}
{
    "_id" : 5,
    "marca" : "ASUS",
    "modelo" : "EU100",
    "precio" : 1500,
    "tipo_de_ordenador" : "Sobremesa",
    "fechaLanzamiento" : ISODate("2021-07-12T00:00:00Z"),
    "hardware" : [
            "ratón",
            "teclado",
            "altavoces"
    ],
    "componentes" : {
            "procesador" : "Intel",
            "modelo_procesador" : "Core i9",
            "memoria_RAM" : 16,
            "tarjeta_gráfica" : "RTX 2060"
    },
    "Sistema_Operativo" : true,
    "discosDuros" : [
            {
                    "marca" : "Seagate",
                    "tipo" : "HDD",
                    "capacidad" : 2000
            },
            {
                    "marca" : "TOSHIBA",
                    "tipo" : "SSD",
                    "capacidad" : 500
            }
    ]
}
{
    "_id" : 7,
    "marca" : "ASUS",
    "modelo" : "UX430",
    "precio" : 650,
    "tipo_de_ordenador" : "Portatil",
    "fechaLanzamiento" : ISODate("2020-12-29T00:00:00Z"),
    "hardware" : [
            "microfono",
            "web cam"
    ],
    "componentes" : {
            "procesador" : "Intel",
            "modelo_procesador" : "Core i3",
            "memoria_RAM" : 8,
            "tarjeta_gráfica" : "RX 5600"
    },
    "Sistema_Operativo" : true,
    "discosDuros" : [
            {
                    "marca" : "Samsung",
                    "tipo" : "SSD",
                    "capacidad" : 120
            }
    ]
}

*/



/*Ordenadores que tenga una capacidad entre 500 y 2000 y que el hardware que este compuesto por 3 valores, 
o que la marca sea igual HP*/

            db.proyecto.find(
                {
                    $or: [
                        {
                            $and: [
                                { discosDuros: 
                                    { $elemMatch: 
                                        { capacidad: { $gte: 500, $lte: 2000}}}},

                                { hardware: { $size: 3}}
                            ]
                        },
                        {
                            marca: { $eq: "HP"}
                        }
                    ]
                }
            ).pretty()


/* ......RESULTADO......*/
/*
{
    "_id" : 1,
    "marca" : "Lenovo",
    "modelo" : "E15",
    "precio" : 500,
    "tipo_de_ordenador" : "Sobremesa",
    "fechaLanzamiento" : ISODate("2020-11-23T00:00:00Z"),
    "hardware" : [
            "Monitor",
            "Ratón",
            "Teclado"
    ],
    "componentes" : {
            "procesador" : "AMD",
            "modelo_procesador" : "Ryzen 3",
            "memoria_RAM" : 8,
            "tarjeta_gráfica" : "Gigabyte geforce gtx 1050 ti"
    },
    "Sistema_Operativo" : false,
    "discosDuros" : [
            {
                    "marca" : "KINGSTONG",
                    "tipo" : "SSD",
                    "capacidad" : 250
            },
            {
                    "marca" : "Seagate",
                    "tipo" : "HDD",
                    "capacidad" : 1000
            }
    ]
}
{
    "_id" : 2,
    "marca" : "MSI",
    "modelo" : "GF65",
    "precio" : 700,
    "tipo_de_ordenador" : "Sobremesa",
    "fechaLanzamiento" : ISODate("2021-06-17T00:00:00Z"),
    "hardware" : [
            "Monitor",
            "Teclado",
            "Microfono"
    ],
    "componentes" : {
            "procesador" : "AMD",
            "modelo_procesador" : "Ryzen 5",
            "memoria_RAM" : 16,
            "tarjeta_gráfica" : "Gigabyte GeForce GTX 1660 OC 6G"
    },
    "Sistema_Operativo" : true,
    "discosDuros" : [
            {
                    "marca" : "Samsung",
                    "tipo" : "SSD",
                    "capacidad" : 400
            },
            {
                    "marca" : "Seagate",
                    "tipo" : "HDD",
                    "capacidad" : 500
            }
    ]
}
{
    "_id" : 4,
    "marca" : "HP",
    "modelo" : "FP54",
    "precio" : 900,
    "tipo_de_ordenador" : "Portatil",
    "fechaLanzamiento" : ISODate("2022-03-10T00:00:00Z"),
    "hardware" : [
            "Microfono",
            "Ratón"
    ],
    "componentes" : {
            "procesador" : "Intel",
            "modelo_procesador" : "Core i5-9400F",
            "memoria_RAM" : 8,
            "tarjeta_gráfica" : "Gigabyte GeForce GTX 1660 OC 6G"
    },
    "Sistema_Operativo" : false,
    "discosDuros" : [
            {
                    "marca" : "Samsung",
                    "tipo" : "SSD",
                    "capacidad" : 500
            }
    ]
}
{
    "_id" : 5,
    "marca" : "ASUS",
    "modelo" : "EU100",
    "precio" : 1500,
    "tipo_de_ordenador" : "Sobremesa",
    "fechaLanzamiento" : ISODate("2021-07-12T00:00:00Z"),
    "hardware" : [
            "ratón",
            "teclado",
            "altavoces"
    ],
    "componentes" : {
            "procesador" : "Intel",
            "modelo_procesador" : "Core i9",
            "memoria_RAM" : 16,
            "tarjeta_gráfica" : "RTX 2060"
    },
    "Sistema_Operativo" : true,
    "discosDuros" : [
            {
                    "marca" : "Seagate",
                    "tipo" : "HDD",
                    "capacidad" : 2000
            },
            {
                    "marca" : "TOSHIBA",
                    "tipo" : "SSD",
                    "capacidad" : 500
            }
    ]
}
{
    "_id" : 6,
    "marca" : "Gigabyte",
    "modelo" : "AORUS 7",
    "precio" : 2000,
    "tipo_de_ordenador" : "Sobremesa",
    "fechaLanzamiento" : ISODate("2023-10-19T00:00:00Z"),
    "hardware" : [
            "teclado",
            "impresora",
            "ratón"
    ],
    "componentes" : {
            "procesador" : "Intel",
            "modelo_procesador" : "Core i9",
            "Memoria_RAM" : 16,
            "tarjeta_gráfica" : "RX 5600"
    },
    "Sistema_Operativo" : true,
    "discosDuros" : [
            {
                    "marca" : "MICRON",
                    "tipo" : "SSD",
                    "capacidad" : 1000
            }
    ]
}
{
    "_id" : 8,
    "marca" : "HP",
    "modelo" : "E255",
    "precio" : 1250,
    "tipo_de_ordenador" : "Sobremesa",
    "fechaLanzamiento" : ISODate("2020-11-19T00:00:00Z"),
    "hardware" : [
            "ratón",
            "microfono",
            "teclado"
    ],
    "componentes" : {
            "procesador" : "AMD",
            "modelo_procesador" : "Ryzen 7",
            "memoria_RAM" : 16,
            "tarjeta_gráfica" : "RTX 2600"
    },
    "Sistema_Operativo" : false,
    "discosDuros" : [
            {
                    "marca" : "Samsung",
                    "tipo" : "SSD",
                    "capacidad" : 120
            },
            {
                    "marca" : "Seagate",
                    "tipo" : "HDD",
                    "capacidad" : 1000
            }
    ]
}
*/


    
















