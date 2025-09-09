// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import ProductSeals from './ProductSeals'; // Importamos el componente de los sellos
import Reviews from './Reviews'; // Importamos el componente de las reseñas

    // Definimos los sellos específicos para cada producto
    const sealsByProduct = {
        1: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ],  
        2: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ],  
         3: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ],  
         4: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ],  
         5: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ],  
         6: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ],  
         7: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
         8: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
         9: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
         10: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
         11: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        12: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
        13: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
        14: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
        15: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
        16 : [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        17: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        18: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        19: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        20: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        21: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        22: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        23: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        24: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        25: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        26: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        27: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        28: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        29: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        30: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        31: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        32: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ],
        33: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
        34: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
        35: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
        36: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
        37: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ], 
        38: [
            {img: "/images/Sellos/HechoMano.png", alt: "Hecho a mano", description: "Hecho a mano: Cada uno de nuestros productos es elaborado de manera artesanal, con dedicación y cuidado en cada detalle."},
            {img: "/images/Sellos/LibreCrueldad.png", alt: "Libre de crueldad", description: "Libre de crueldad: Nos comprometemos a no realizar pruebas en animales, garantizando que nuestros productos son éticos y respetuosos con todas las formas de vida."},
            {img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos."},
            {img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            {img: "/images/Sellos/LibreSulfato.png", alt: "Libre de Sulfatos", description: "Libre de Sulfatos: Nuestros productos están formulados sin sulfatos, garantizando una limpieza suave y efectiva sin dañar la piel ni el cabello."}
        ],
        39: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        40: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ], 
        41: [
            { img: "/images/Sellos/SELLOSPETROQUIMICOS.png", alt: "Libre de Petroquímicos", description: "Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos." },
            { img: "/images/Sellos/COSECHAAgroecologica.png", alt: "Cosecha Agroecológica", description: "Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica." },
            { img: "/images/Sellos/MujerRural.png", alt: "Mujer Rural", description: "Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente." },
            { img: "/images/Sellos/ComercioJusto.png", alt: "Comercio Justo", description: "Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas." },
            { img: "/images/Sellos/Biodegradable.png", alt: "Biodegradable", description: "Biodegradable: Nuestras materias primas son ecoamigables. Los espumantes de nuestros productos son 100% biodegradables, algunos de estos derivados de glucosas vegetales con certificación ECOCERT para cosmética natural. Libres de sal, libres de cocoamidas y cocoamido propil betaina." },
            { img: "/images/Sellos/ProtegemosElAgua.png", alt: "Cuidamos el agua", description: "Cuidamos el agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y PEG, microplásticos que se utilizan como emulsificantes que al ir al mar le hacen daño a la vida marina. Por tal motivo somos amigables con los mares, los ríos y con todas las formas de vida del planeta." },
            { img: "/images/Sellos/CuidadoAnimales.png", alt: "Crueltyfree", description: "Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales." },
            { img: "/images/Sellos/NegociosVerdes.png", alt: "Negocios verdes", description: "Negocios verdes: Estamos certificados por Cornare como Negocio Verde, avalados por el Ministerio de Ambiente y Desarrollo Sostenible." },
        ],
        42: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        43: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        44: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        45: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        46: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        47: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        48: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        49: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        50: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        51: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        52: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        53: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        54: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        55: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        56: [
            { img: "/images/Sellos/AltoRendimiento.png", alt: "Alto Rendimiento", description: "Alto Rendimiento: Nuestros productos están formulados para ofrecer un alto rendimiento, garantizando resultados efectivos y duraderos." },
            { img: "/images/Sellos/PagosYenviosSeguros.png", alt: "Pagos y envíos seguros", description: "Pagos y envíos seguros: Ofrecemos métodos de pago confiables y seguros, así como opciones de envío rápidas y eficientes para que recibas tus productos sin inconvenientes." },
            { img: "/images/Sellos/IngredientesNaturales.png", alt: "Ingredientes Naturales", description: "Ingredientes Naturales: Utilizamos ingredientes de origen natural en la formulación de nuestros productos, evitando el uso de químicos sintéticos." },
        ],
        // Puedes agregar más productos y sellos aquí...
    };

  const ProductDetail = ({ addToCart }) => {
    const { productId } = useParams(); // Obtener el ID del producto de la URL
    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState(''); // Estado para la imagen seleccionada 

    useEffect(() => {
        console.log('productId:', productId); // Verificamos el productId recibido de la URL

        // Leer el archivo JSON y obtener el producto por su ID
        fetch('/products.json')
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched:', data); // Verificamos los datos cargados del JSON

                // Aseguramos que productId y p.id sean del mismo tipo (ambos como cadenas) para la comparación
                const foundProduct = data.find(p => String(p.id) === String(productId)); // Convertir ambos a cadenas

                console.log('Found product:', foundProduct); // Verificamos el producto encontrado

                if (foundProduct) {
                    setProduct(foundProduct);
                    setCurrentImage(foundProduct?.images[0]); // Establecer la primera imagen como la inicial
                } else {
                    console.error('Producto no encontrado');
                }
            })
            .catch(error => console.error('Error loading product:', error));
    }, [productId]);

    // Si no tenemos el producto aún, mostramos un mensaje de carga
    if (!product) {
        return <p>Cargando...</p>;
    }

    // Obtenemos los sellos del producto según su id
    const productSeals = sealsByProduct[product.id] || []; // Si no se encuentra el id, no mostramos sellos

    return (
        <>
            {/* Título llamativo con descuento */}
            <div className="discount-banner">
                <h1>¡10% Descuento en tu primera compra!</h1>
            </div>
            <div className="product-detail">
                <div className="product-gallery">
                    <div className="main-image">
                        <img src={currentImage} alt={product.title} />
                    </div>

                    <div className="image-thumbnails">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index}`}
                                className="thumbnail"
                                onClick={() => setCurrentImage(image)} // Evento click para cambiar la imagen principal
                            />
                        ))}
                    </div>
                </div>

                <div className="product-info">
                    <h2>{product.title}</h2>
                    <p className="price">${product.price}</p>
                    {/* Agregar al carrito en la página de detalles */}
                    <button className="add-to-cart" onClick={() => addToCart(product)}>Agregar al carrito</button>

                    {/* Aquí se agrega la nueva lista de información de envío */}
                    <div className="shipping-info">
                        <p><strong>Envíos seguros e inmediatos a todo Colombia:</strong></p>
                        <ul>
                            <li>Ciudades principales de 1 a 4 días hábiles.</li>
                            <li>En Bogota recibes entre 1 y 2 días hábiles.</li>
                            <li>Resto del país de 3 a 8 días hábiles.</li>
                            <li>Por compras mayores a $180.000 el envío es GRATIS.</li>
                            <li>Somos una marca Colombiana.</li>
                        </ul>
                    </div>

                    <h3>Descripción:</h3>
                    <p>{product.description}</p>

                    <h3>Modo de uso:</h3>
                    <p>{product.usage}</p>
                </div>
            </div>

            {/* Div externo para las reseñas */}
            <div className="reviews-section">
                <Reviews />
            </div>

            {/* Div externo para los sellos, debe estar dentro del Fragment */}
            <div className="product-seals-section">
                <ProductSeals seals={productSeals} /> {/* Pasamos los sellos específicos como prop */}
            </div>
        </>
    );
};

export default ProductDetail;