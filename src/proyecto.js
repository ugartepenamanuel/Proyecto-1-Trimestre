db.proyecto.insertMany([
	{
		_id: 1,
        marca: "Lenovo", 
        modelo: "E15",
		precio: 500,
		tipo_de_ordenador: "Sobremesa",
	    fechaLanzamiento: new Date ("2020-11-23"),
		hardware: [
			"Monitor", 
			"Ratón",
			"Teclado"
		],
		componentes: {
			procesador: "AMD",
			modelo_procesador: "Ryzen 3",
            memoria_RAM: 8,
            tarjeta_gráfica: "Gigabyte geforce gtx 1050 ti"
		
		},
		Sistema_Operativo: false, 
		discosDuros: [
		{
			marca: "KINGSTONG",
			tipo: "SSD",
			capacidad: 250
		},
		{
			marca: "Seagate",
			tipo: "HDD",
			capacidad: 1000
			
		}
	]
},
	{
		_id: 2,
        marca: "MSI", 
        modelo: "GF65",
		precio: 700,
		tipo_de_ordenador: "Sobremesa",
		fechaLanzamiento: new Date ("2021-06-17"),
		hardware: [
			"Monitor", 
			"Teclado",
			"Microfono"
		],
		componentes: {
            procesador: "AMD",
			modelo_procesador: "Ryzen 5",
            memoria_RAM: 16,
            tarjeta_gráfica: "Gigabyte GeForce GTX 1660 OC 6G"
		},
		Sistema_Operativo: true, 
		discosDuros: [
            {
                marca: "Samsung",
                tipo: "SSD",
                capacidad: 400
            },
            {
                marca: "Seagate",
                tipo: "HDD",
                capacidad: 500
                
            }
	]
},
	{
		_id: 3,
        marca: "ACER",
        modelo: "Nitro 5",
		precio: 1000,
		tipo_de_ordenador: "Portatil",
		fechaLanzamiento: new Date ("2021-05-27"),
		hardware: [
			"Web cam", 
			"Auriculares"
		],
		componentes: {
            procesador: "AMD",
			modelo_procesador: "Ryzen 5",
            memoria_RAM: 16,
            tarjeta_gráfica: "GTX 1660"
		},
		Sistema_Operativo: false, 
		discosDuros: [
            {
                marca: "Samsung",
                tipo: "SSD",
                capacidad: 512
            }   
	]
},
    {
        _id: 4,
        marca: "HP",
        modelo: "FP54",
		precio: 900,
		tipo_de_ordenador: "Portatil",
        fechaLanzamiento: new Date ("2022-03-10"),
        hardware: [
            "Microfono", 
            "Ratón"
    ],
    componentes: {
        procesador: "Intel",
        modelo_procesador: "Core i5-9400F",
        memoria_RAM: 8,
        tarjeta_gráfica: "Gigabyte GeForce GTX 1660 OC 6G"
    },
    Sistema_Operativo: false, 
    discosDuros: [
        {
            marca: "Samsung",
            tipo: "SSD",
            capacidad: 500
        } 
        
]
},
	{
		_id: 5,
        marca: 'ASUS', 
        modelo: "EU100",
		precio: 1500,
		tipo_de_ordenador: "Sobremesa",
		fechaLanzamiento: new Date("2021-07-12"),
		hardware: [
			"ratón", 
			"teclado",
			"altavoces"
		],
		componentes: {
            procesador: "Intel",
            modelo_procesador: "Core i9",
            memoria_RAM: 16,
            tarjeta_gráfica: "RTX 2060"
		},
		Sistema_Operativo: true, 
		discosDuros: [
		{
			marca: "Seagate",
			tipo: "HDD",
			capacidad: 2000
			
		},
		{
			marca: "TOSHIBA",
			tipo: "SSD",
			capacidad: 500
		}
	]
},
	{
		_id: 6,
        marca: 'Gigabyte', 
        modelo: "AORUS 7",
		precio: 2000,
		tipo_de_ordenador: "Sobremesa",
		fechaLanzamiento: new Date("2023-10-19"),
		hardware: [
			"teclado", 
			"impresora",
			"ratón"
		],
		componentes: {
			procesador: "Intel",
            modelo_procesador: "Core i9",
			Memoria_RAM: 16,
            tarjeta_gráfica: "RX 5600"
		},
		Sistema_Operativo: true, 
		discosDuros: [
		{
			marca: "MICRON",
			tipo: "SSD",
			capacidad: 1000
		}
	
	]
},
	{
		_id: 7,
        marca: "ASUS", 
        modelo: "UX430",
		precio: 650,
		tipo_de_ordenador: "Portatil",
		fechaLanzamiento: new Date("2020-12-29"),
		hardware: [
			"microfono",
			"web cam"
		],
		componentes: {
			procesador: "Intel",
            modelo_procesador: "Core i3",
			memoria_RAM: 8,
            tarjeta_gráfica: "RX 5600"
		},
		Sistema_Operativo: true, 
		discosDuros: [
		{
			marca: "Samsung",
			tipo: "SSD",
			capacidad: 120
		}
	]
},
{
    _id: 8,
    marca: "HP", 
    modelo: "E255",
	precio: 1250,
	tipo_de_ordenador: "Sobremesa",
    fechaLanzamiento: new Date("2020-11-19"),
    hardware: [
        "ratón", 
        "microfono",
        "teclado"
    ],
    componentes: {
        procesador: "AMD",
        modelo_procesador: "Ryzen 7",
        memoria_RAM: 16,
        tarjeta_gráfica: "RTX 2600"
    },
    Sistema_Operativo: false, 
    discosDuros: [
    {
        marca: "Samsung",
        tipo: "SSD",
        capacidad: 120
    },
    {
        marca: 'Seagate',
        tipo: "HDD",
        capacidad: 1000,
        
    }
]
}

])