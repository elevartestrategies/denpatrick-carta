export type Lang = 'ca' | 'es' | 'fr'

export type TextMultilang = { ca: string; es: string; fr: string }

export type Producte = {
  nom: TextMultilang
  descripcio?: TextMultilang
  preu: number
  sensGluten?: boolean
  vegan?: boolean
  temporada?: boolean
}

export type Subcategoria = {
  nom: TextMultilang
  productes: Producte[]
}

export type Categoria = {
  id: string
  nom: TextMultilang
  emoji: string
  productes?: Producte[]
  subcategories?: Subcategoria[]
}

export const categories: Categoria[] = [
  // ─────────────────────────────────────────────────────────────
  // CRÊPES DOLCES
  // ─────────────────────────────────────────────────────────────
  {
    id: 'crepes-dolces',
    nom: {
      ca: 'Crêpes Dolces',
      es: 'Crêpes Dulces',
      fr: 'Crêpes Sucrées',
    },
    emoji: '🥞',
    subcategories: [
      {
        nom: {
          ca: 'Passió Cacau',
          es: 'Pasión Cacao',
          fr: 'Passion Cacao',
        },
        productes: [
          {
            nom: {
              ca: 'Poma al forn, xocolata i sèsam',
              es: 'Manzana al horno, chocolate y sésamo',
              fr: 'Pomme au four, chocolat et sésame',
            },
            preu: 6.80,
          },
          {
            nom: {
              ca: 'Xocolata negra o blanca o Nutella',
              es: 'Chocolate negro o blanco o Nutella',
              fr: 'Chocolat noir ou blanc ou Nutella',
            },
            preu: 5.20,
          },
          {
            nom: {
              ca: 'Xoco negra & blanca',
              es: 'Choco negro & blanco',
              fr: 'Choco noir & blanc',
            },
            preu: 6.20,
          },
          {
            nom: {
              ca: 'Nutella i xoco blanca',
              es: 'Nutella y choco blanco',
              fr: 'Nutella et choco blanc',
            },
            preu: 6.20,
          },
          {
            nom: {
              ca: 'Xocolata, plàtan, coco i nata muntada',
              es: 'Chocolate, plátano, coco y nata montada',
              fr: 'Chocolat, banane, coco et crème fouettée',
            },
            preu: 7.30,
          },
          {
            nom: {
              ca: 'Xocolata, confitura de gerds i crocanti d\'ametlles',
              es: 'Chocolate, confitura de frambuesa y crocanti de almendras',
              fr: 'Chocolat, confiture de framboise et croquant d\'amandes',
            },
            preu: 6.20,
          },
          {
            nom: {
              ca: 'Xocolata i plàtan',
              es: 'Chocolate y plátano',
              fr: 'Chocolat et banane',
            },
            preu: 6.20,
          },
          {
            nom: {
              ca: 'Xocolata i dolç de llet',
              es: 'Chocolate y dulce de leche',
              fr: 'Chocolat et dulce de leche',
            },
            preu: 6.20,
          },
        ],
      },
      {
        nom: {
          ca: 'De la Iaia',
          es: 'De la Abuela',
          fr: 'De la Grand-mère',
        },
        productes: [
          {
            nom: {
              ca: 'Poma al forn amb canyella',
              es: 'Manzana al horno con canela',
              fr: 'Pomme au four à la cannelle',
            },
            preu: 6.00,
          },
          {
            nom: {
              ca: 'Tahina, mel, plàtan i sèsam',
              es: 'Tahina, miel, plátano y sésamo',
              fr: 'Tahin, miel, banane et sésame',
            },
            preu: 6.20,
          },
          {
            nom: {
              ca: 'Mel, plàtan i nous',
              es: 'Miel, plátano y nueces',
              fr: 'Miel, banane et noix',
            },
            preu: 5.50,
          },
          {
            nom: {
              ca: 'Plàtan i dolç de llet',
              es: 'Plátano y dulce de leche',
              fr: 'Banane et dulce de leche',
            },
            preu: 6.20,
          },
          {
            nom: {
              ca: 'Llet condensada i coco',
              es: 'Leche condensada y coco',
              fr: 'Lait concentré sucré et coco',
            },
            preu: 5.50,
          },
          {
            nom: {
              ca: 'Sucre amb mantega i canyella',
              es: 'Azúcar con mantequilla y canela',
              fr: 'Sucre beurre cannelle',
            },
            preu: 4.10,
          },
          {
            nom: {
              ca: 'Tahina, mel i sèsam',
              es: 'Tahina, miel y sésamo',
              fr: 'Tahin, miel et sésame',
            },
            preu: 5.30,
          },
          {
            nom: {
              ca: 'Confitura',
              es: 'Confitura',
              fr: 'Confiture',
            },
            preu: 5.10,
          },
          {
            nom: {
              ca: 'Dolç de llet o llet condensada',
              es: 'Dulce de leche o leche condensada',
              fr: 'Dulce de leche ou lait concentré sucré',
            },
            preu: 5.20,
          },
          {
            nom: {
              ca: 'Llimona',
              es: 'Limón',
              fr: 'Citron',
            },
            preu: 4.75,
          },
          {
            nom: {
              ca: 'Maduixes, nata muntada i xocolata',
              es: 'Fresas, nata montada y chocolate',
              fr: 'Fraises, crème fouettée et chocolat',
            },
            preu: 6.80,
            temporada: true,
          },
        ],
      },
      {
        nom: {
          ca: 'Crêpes Flamejades',
          es: 'Crêpes Flambeadas',
          fr: 'Crêpes Flambées',
        },
        productes: [
          {
            nom: {
              ca: 'Suzette',
              es: 'Suzette',
              fr: 'Suzette',
            },
            descripcio: {
              ca: 'Clàssica crêpe flamejada amb mantega de taronja i Grand Marnier',
              es: 'Clásica crêpe flambeada con mantequilla de naranja y Grand Marnier',
              fr: 'Classique crêpe flambée au beurre d\'orange et Grand Marnier',
            },
            preu: 6.90,
          },
          {
            nom: {
              ca: 'Banane Flambée',
              es: 'Banane Flambée',
              fr: 'Banane Flambée',
            },
            descripcio: {
              ca: 'Plàtan flamejat amb rom i caramel',
              es: 'Plátano flambeado con ron y caramelo',
              fr: 'Banane flambée au rhum et caramel',
            },
            preu: 7.50,
          },
          {
            nom: {
              ca: 'Delit Obscur',
              es: 'Delit Obscur',
              fr: 'Delit Obscur',
            },
            descripcio: {
              ca: 'Xocolata negra flamejada amb licor de cafè',
              es: 'Chocolate negro flambeado con licor de café',
              fr: 'Chocolat noir flambé au liqueur de café',
            },
            preu: 6.90,
          },
        ],
      },
      {
        nom: {
          ca: 'Crêpes amb Gelat',
          es: 'Crêpes con Helado',
          fr: 'Crêpes avec Glace',
        },
        productes: [
          {
            nom: {
              ca: 'Poma-Xic',
              es: 'Poma-Xic',
              fr: 'Poma-Xic',
            },
            descripcio: {
              ca: 'Poma al forn, xocolata i gelat de vainilla',
              es: 'Manzana al horno, chocolate y helado de vainilla',
              fr: 'Pomme au four, chocolat et glace vanille',
            },
            preu: 8.30,
          },
          {
            nom: {
              ca: 'Belle-Noisette',
              es: 'Belle-Noisette',
              fr: 'Belle-Noisette',
            },
            descripcio: {
              ca: 'Crêpe amb avellana, xocolata i gelat',
              es: 'Crêpe con avellana, chocolate y helado',
              fr: 'Crêpe noisette, chocolat et glace',
            },
            preu: 8.30,
          },
          {
            nom: {
              ca: 'Chiz-Délice',
              es: 'Chiz-Délice',
              fr: 'Chiz-Délice',
            },
            descripcio: {
              ca: 'Crêpe de formatge fresc, mel i gelat',
              es: 'Crêpe de queso fresco, miel y helado',
              fr: 'Crêpe fromage frais, miel et glace',
            },
            preu: 8.30,
          },
          {
            nom: {
              ca: 'Banana-Strass',
              es: 'Banana-Strass',
              fr: 'Banana-Strass',
            },
            descripcio: {
              ca: 'Plàtan, xocolata, coco i gelat',
              es: 'Plátano, chocolate, coco y helado',
              fr: 'Banane, chocolat, coco et glace',
            },
            preu: 8.30,
          },
        ],
      },
      {
        nom: {
          ca: 'Suplements Crêpes Dolces',
          es: 'Suplementos Crêpes Dulces',
          fr: 'Suppléments Crêpes Sucrées',
        },
        productes: [
          {
            nom: {
              ca: 'Bola de gelat',
              es: 'Bola de helado',
              fr: 'Boule de glace',
            },
            preu: 2.10,
          },
          {
            nom: {
              ca: 'Altres suplements',
              es: 'Otros suplementos',
              fr: 'Autres suppléments',
            },
            preu: 1.10,
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // CRÊPES BRETONES (GALETTES)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'galettes',
    nom: {
      ca: 'Crêpes Bretones',
      es: 'Crêpes Bretonas',
      fr: 'Galettes Bretonnes',
    },
    emoji: '🌾',
    subcategories: [
      {
        nom: {
          ca: 'Sabor Tradicional',
          es: 'Sabor Tradicional',
          fr: 'Saveur Traditionnelle',
        },
        productes: [
          {
            nom: { ca: 'La Galette', es: 'La Galette', fr: 'La Galette' },
            descripcio: {
              ca: 'Mantega i ou',
              es: 'Mantequilla y huevo',
              fr: 'Beurre et œuf',
            },
            preu: 6.90,
            sensGluten: true,
          },
          {
            nom: { ca: 'Crepini', es: 'Crepini', fr: 'Crepini' },
            descripcio: {
              ca: 'Ou, formatge i pernil',
              es: 'Huevo, queso y jamón',
              fr: 'Œuf, fromage et jambon',
            },
            preu: 8.80,
            sensGluten: true,
          },
          {
            nom: { ca: 'Complète', es: 'Complète', fr: 'Complète' },
            descripcio: {
              ca: 'Ou, formatge, pernil i bolets',
              es: 'Huevo, queso, jamón y setas',
              fr: 'Œuf, fromage, jambon et champignons',
            },
            preu: 9.60,
            sensGluten: true,
          },
          {
            nom: { ca: 'Fromagère', es: 'Fromagère', fr: 'Fromagère' },
            descripcio: {
              ca: 'Selecció de formatges i ou',
              es: 'Selección de quesos y huevo',
              fr: 'Sélection de fromages et œuf',
            },
            preu: 9.80,
            sensGluten: true,
          },
          {
            nom: { ca: 'Forestière', es: 'Forestière', fr: 'Forestière' },
            descripcio: {
              ca: 'Ou, formatge, bolets del bosc i crema',
              es: 'Huevo, queso, setas del bosque y crema',
              fr: 'Œuf, fromage, champignons des bois et crème',
            },
            preu: 10.00,
            sensGluten: true,
          },
        ],
      },
      {
        nom: {
          ca: 'Delícies Veggies',
          es: 'Delicias Veggies',
          fr: 'Délices Veggies',
        },
        productes: [
          {
            nom: { ca: 'Koaven', es: 'Koaven', fr: 'Koaven' },
            descripcio: {
              ca: 'Espàrrecs, ou, formatge de cabra i crema de porro',
              es: 'Espárragos, huevo, queso de cabra y crema de puerro',
              fr: 'Asperges, œuf, chèvre et crème de poireau',
            },
            preu: 12.90,
            sensGluten: true,
            vegan: false,
          },
          {
            nom: { ca: 'Guacamole', es: 'Guacamole', fr: 'Guacamole' },
            descripcio: {
              ca: 'Guacamole, tomàquet, ceba morada i coriandre',
              es: 'Guacamole, tomate, cebolla morada y cilantro',
              fr: 'Guacamole, tomate, oignon rouge et coriandre',
            },
            preu: 11.30,
            sensGluten: true,
            vegan: true,
          },
          {
            nom: { ca: 'Hortelana', es: 'Hortelana', fr: 'Hortelana' },
            descripcio: {
              ca: 'Verdures de temporada, formatge i ou',
              es: 'Verduras de temporada, queso y huevo',
              fr: 'Légumes de saison, fromage et œuf',
            },
            preu: 13.10,
            sensGluten: true,
          },
          {
            nom: { ca: 'Belle Verte', es: 'Belle Verte', fr: 'Belle Verte' },
            descripcio: {
              ca: 'Espinacs, ou, formatge brie i nous',
              es: 'Espinacas, huevo, queso brie y nueces',
              fr: 'Épinards, œuf, brie et noix',
            },
            preu: 11.80,
            sensGluten: true,
          },
          {
            nom: { ca: 'Courgette', es: 'Courgette', fr: 'Courgette' },
            descripcio: {
              ca: 'Carbassó, formatge fresc, ou i herbes',
              es: 'Calabacín, queso fresco, huevo y hierbas',
              fr: 'Courgette, fromage frais, œuf et herbes',
            },
            preu: 11.50,
            sensGluten: true,
          },
        ],
      },
      {
        nom: {
          ca: 'Tast de la Terra',
          es: 'Sabor de la Tierra',
          fr: 'Goût de la Terre',
        },
        productes: [
          {
            nom: { ca: 'Gwadegenn', es: 'Gwadegenn', fr: 'Gwadegenn' },
            descripcio: {
              ca: 'Pollastre, bolets, crema de porro i formatge',
              es: 'Pollo, setas, crema de puerro y queso',
              fr: 'Poulet, champignons, crème de poireau et fromage',
            },
            preu: 12.80,
            sensGluten: true,
          },
          {
            nom: { ca: 'Paysanne', es: 'Paysanne', fr: 'Paysanne' },
            descripcio: {
              ca: 'Ou, pernil curat, formatge i crema',
              es: 'Huevo, jamón curado, queso y crema',
              fr: 'Œuf, jambon sec, fromage et crème',
            },
            preu: 11.50,
            sensGluten: true,
          },
          {
            nom: { ca: 'Bergère', es: 'Bergère', fr: 'Bergère' },
            descripcio: {
              ca: 'Ou, formatge de ovella, tomàquet i rúcula',
              es: 'Huevo, queso de oveja, tomate y rúcula',
              fr: 'Œuf, fromage de brebis, tomate et roquette',
            },
            preu: 11.80,
            sensGluten: true,
          },
          {
            nom: { ca: 'Éloïse', es: 'Éloïse', fr: 'Éloïse' },
            descripcio: {
              ca: 'Salmó fumat, ou, crema i ceba',
              es: 'Salmón ahumado, huevo, crema y cebolla',
              fr: 'Saumon fumé, œuf, crème et oignon',
            },
            preu: 13.10,
            sensGluten: true,
          },
          {
            nom: { ca: 'Carbonara', es: 'Carbonara', fr: 'Carbonara' },
            descripcio: {
              ca: 'Ou, bacó, formatge parmesà i crema',
              es: 'Huevo, bacon, queso parmesano y crema',
              fr: 'Œuf, lardons, parmesan et crème',
            },
            preu: 11.20,
            sensGluten: true,
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // GOFRES & NIUS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'gofres',
    nom: {
      ca: 'Gofres & Nius',
      es: 'Gofres & Nidos',
      fr: 'Gaufres & Nids',
    },
    emoji: '🧇',
    subcategories: [
      {
        nom: {
          ca: 'Gofres',
          es: 'Gofres',
          fr: 'Gaufres',
        },
        productes: [
          {
            nom: {
              ca: 'Gofre sol',
              es: 'Gofre solo',
              fr: 'Gaufre nature',
            },
            preu: 2.30,
          },
          {
            nom: {
              ca: 'Gofre amb 1 bola de gelat',
              es: 'Gofre con 1 bola de helado',
              fr: 'Gaufre avec 1 boule de glace',
            },
            preu: 4.40,
          },
          {
            nom: {
              ca: 'Suplement gofre',
              es: 'Suplemento gofre',
              fr: 'Supplément gaufre',
            },
            preu: 1.00,
          },
          {
            nom: {
              ca: 'Bola de gelat',
              es: 'Bola de helado',
              fr: 'Boule de glace',
            },
            preu: 2.10,
          },
        ],
      },
      {
        nom: {
          ca: 'Nius',
          es: 'Nidos',
          fr: 'Nids',
        },
        productes: [
          {
            nom: {
              ca: 'Niu amb 1 o 2 sabors + 2 toppings',
              es: 'Nido con 1 o 2 sabores + 2 toppings',
              fr: 'Nid avec 1 ou 2 parfums + 2 toppings',
            },
            preu: 5.90,
          },
        ],
      },
      {
        nom: {
          ca: 'Cookies Gegantes (Bio)',
          es: 'Cookies Gigantes (Bio)',
          fr: 'Cookies Géants (Bio)',
        },
        productes: [
          {
            nom: {
              ca: 'Xips de xocolata',
              es: 'Chips de chocolate',
              fr: 'Pépites de chocolat',
            },
            preu: 3.70,
          },
          {
            nom: {
              ca: 'Doble xocolata brownie',
              es: 'Doble chocolate brownie',
              fr: 'Double chocolat brownie',
            },
            preu: 3.70,
          },
          {
            nom: {
              ca: 'Civada i xips de xocolata',
              es: 'Avena y chips de chocolate',
              fr: 'Avoine et pépites de chocolat',
            },
            preu: 3.70,
            sensGluten: true,
          },
          {
            nom: {
              ca: 'Cacauet',
              es: 'Cacahuete',
              fr: 'Cacahuète',
            },
            preu: 3.70,
            sensGluten: true,
          },
          {
            nom: {
              ca: 'Canyella',
              es: 'Canela',
              fr: 'Cannelle',
            },
            preu: 3.70,
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // BIKINIS GOURMET
  // ─────────────────────────────────────────────────────────────
  {
    id: 'bikinis',
    nom: {
      ca: 'Bikinis Gourmet',
      es: 'Bikinis Gourmet',
      fr: 'Croque-Monsieur Gourmet',
    },
    emoji: '🥪',
    productes: [
      {
        nom: {
          ca: 'Clàssic',
          es: 'Clásico',
          fr: 'Classique',
        },
        descripcio: {
          ca: 'Pernil i formatge',
          es: 'Jamón y queso',
          fr: 'Jambon et fromage',
        },
        preu: 3.90,
      },
      {
        nom: {
          ca: 'Capritxós',
          es: 'Caprichoso',
          fr: 'Capricieux',
        },
        descripcio: {
          ca: 'Pernil, formatge i tomàquet',
          es: 'Jamón, queso y tomate',
          fr: 'Jambon, fromage et tomate',
        },
        preu: 5.00,
      },
      {
        nom: {
          ca: 'Ambiciós',
          es: 'Ambicioso',
          fr: 'Ambitieux',
        },
        descripcio: {
          ca: 'Pernil ibèric, formatge, tomàquet i rúcula',
          es: 'Jamón ibérico, queso, tomate y rúcula',
          fr: 'Jambon ibérique, fromage, tomate et roquette',
        },
        preu: 6.30,
      },
      {
        nom: {
          ca: 'Rodamón',
          es: 'Trotamundos',
          fr: 'Globe-Trotter',
        },
        descripcio: {
          ca: 'Formatge brie, nous i mel',
          es: 'Queso brie, nueces y miel',
          fr: 'Fromage brie, noix et miel',
        },
        preu: 5.00,
      },
      {
        nom: {
          ca: 'Menorquí',
          es: 'Menorquín',
          fr: 'Minorquin',
        },
        descripcio: {
          ca: 'Formatge mahonès i sobrassada',
          es: 'Queso mahonés y sobrasada',
          fr: 'Fromage de Mahon et sobrasada',
        },
        preu: 4.50,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // BEGUDES & CAFÈS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'begudes',
    nom: {
      ca: 'Begudes & Cafès',
      es: 'Bebidas & Cafés',
      fr: 'Boissons & Cafés',
    },
    emoji: '☕',
    subcategories: [
      {
        nom: {
          ca: 'Rituals a la Tassa',
          es: 'Rituales en Taza',
          fr: 'Rituels en Tasse',
        },
        productes: [
          {
            nom: {
              ca: 'Xocolata a la tassa',
              es: 'Chocolate a la taza',
              fr: 'Chocolat chaud',
            },
            preu: 3.10,
          },
          {
            nom: {
              ca: 'Xocolata a la tassa amb dos melindros',
              es: 'Chocolate a la taza con dos melindros',
              fr: 'Chocolat chaud avec deux biscuits',
            },
            preu: 5.10,
          },
          {
            nom: {
              ca: 'Suís',
              es: 'Suizo',
              fr: 'Suisse',
            },
            descripcio: {
              ca: 'Xocolata calenta amb nata muntada',
              es: 'Chocolate caliente con nata montada',
              fr: 'Chocolat chaud avec crème fouettée',
            },
            preu: 4.10,
          },
          {
            nom: {
              ca: 'Xocolata desfeta amb gelat',
              es: 'Chocolate caliente con helado',
              fr: 'Chocolat chaud avec glace',
            },
            preu: 5.10,
          },
          {
            nom: {
              ca: 'Xocolata Liégeois',
              es: 'Chocolat Liégeois',
              fr: 'Chocolat Liégeois',
            },
            descripcio: {
              ca: 'Xocolata freda amb gelat i nata muntada',
              es: 'Chocolate frío con helado y nata montada',
              fr: 'Chocolat froid avec glace et crème fouettée',
            },
            preu: 5.70,
          },
          {
            nom: {
              ca: 'Mini xocolata a la tassa',
              es: 'Mini chocolate a la taza',
              fr: 'Mini chocolat chaud',
            },
            preu: 1.80,
          },
          {
            nom: {
              ca: 'Mini Suís',
              es: 'Mini Suizo',
              fr: 'Mini Suisse',
            },
            preu: 2.80,
          },
        ],
      },
      {
        nom: {
          ca: 'Cafès',
          es: 'Cafés',
          fr: 'Cafés',
        },
        productes: [
          {
            nom: { ca: 'Cafè sol', es: 'Café solo', fr: 'Café express' },
            preu: 1.30,
          },
          {
            nom: { ca: 'Tallat', es: 'Cortado', fr: 'Noisette' },
            preu: 1.50,
          },
          {
            nom: { ca: 'Cafè amb llet', es: 'Café con leche', fr: 'Café au lait' },
            preu: 1.70,
          },
          {
            nom: { ca: 'Capuccino', es: 'Capuccino', fr: 'Cappuccino' },
            preu: 2.40,
          },
          {
            nom: { ca: 'Cigaló', es: 'Cigaló', fr: 'Cigaló' },
            preu: 2.00,
          },
          {
            nom: { ca: 'Bons eco', es: 'Bons eco', fr: 'Bons eco' },
            preu: 2.10,
          },
          {
            nom: { ca: 'Rooibos latte', es: 'Rooibos latte', fr: 'Rooibos latte' },
            preu: 2.40,
          },
          {
            nom: { ca: 'Matcha latte', es: 'Matcha latte', fr: 'Matcha latte' },
            preu: 2.40,
          },
          {
            nom: { ca: 'Cafè Liégeois', es: 'Café Liégeois', fr: 'Café Liégeois' },
            descripcio: {
              ca: 'Cafè fred amb gelat i nata muntada',
              es: 'Café frío con helado y nata montada',
              fr: 'Café froid avec glace et crème fouettée',
            },
            preu: 4.60,
          },
          {
            nom: { ca: 'Cafè Vienès', es: 'Café Vienés', fr: 'Café Viennois' },
            descripcio: {
              ca: 'Cafè amb nata muntada',
              es: 'Café con nata montada',
              fr: 'Café avec crème fouettée',
            },
            preu: 2.40,
          },
          {
            nom: { ca: 'Affogato', es: 'Affogato', fr: 'Affogato' },
            descripcio: {
              ca: 'Cafè sobre gelat de vainilla',
              es: 'Café sobre helado de vainilla',
              fr: 'Espresso sur glace vanille',
            },
            preu: 3.40,
          },
        ],
      },
      {
        nom: {
          ca: 'Refrescs',
          es: 'Refrescos',
          fr: 'Rafraîchissements',
        },
        productes: [
          {
            nom: { ca: 'Aigua petita', es: 'Agua pequeña', fr: 'Eau petite' },
            preu: 1.20,
          },
          {
            nom: { ca: 'Aigua gran', es: 'Agua grande', fr: 'Eau grande' },
            preu: 1.80,
          },
          {
            nom: { ca: 'Sodes', es: 'Sodas', fr: 'Sodas' },
            preu: 2.10,
          },
          {
            nom: { ca: 'Tònica Vichy Catalan', es: 'Tónica Vichy Catalan', fr: 'Tonique Vichy Catalan' },
            preu: 2.30,
          },
          {
            nom: { ca: 'Cacaolat', es: 'Cacaolat', fr: 'Cacaolat' },
            preu: 2.60,
          },
          {
            nom: { ca: 'Sodes bio', es: 'Sodas bio', fr: 'Sodas bio' },
            preu: 3.60,
          },
          {
            nom: { ca: 'Suc de fruita bio', es: 'Zumo de fruta bio', fr: 'Jus de fruits bio' },
            preu: 2.50,
          },
          {
            nom: { ca: 'Kombucha bio', es: 'Kombucha bio', fr: 'Kombucha bio' },
            preu: 4.70,
          },
          {
            nom: {
              ca: 'Suc de taronja natural',
              es: 'Zumo de naranja natural',
              fr: 'Jus d\'orange pressé',
            },
            preu: 3.20,
            temporada: true,
          },
        ],
      },
      {
        nom: {
          ca: 'Cerveses',
          es: 'Cervezas',
          fr: 'Bières',
        },
        productes: [
          {
            nom: { ca: 'Moritz-7', es: 'Moritz-7', fr: 'Moritz-7' },
            preu: 2.40,
          },
          {
            nom: { ca: 'Moritz torrada 0,0', es: 'Moritz tostada 0,0', fr: 'Moritz ambré 0,0' },
            preu: 3.40,
          },
          {
            nom: { ca: 'Moritz 0,0', es: 'Moritz 0,0', fr: 'Moritz 0,0' },
            preu: 2.40,
          },
          {
            nom: { ca: 'Epidor', es: 'Epidor', fr: 'Epidor' },
            preu: 3.00,
          },
          {
            nom: { ca: 'Radler', es: 'Radler', fr: 'Radler' },
            preu: 2.60,
          },
          {
            nom: { ca: 'Àmbar sense gluten', es: 'Àmbar sin gluten', fr: 'Àmbar sans gluten' },
            preu: 2.80,
            sensGluten: true,
          },
          {
            nom: { ca: 'IPA Montseny', es: 'IPA Montseny', fr: 'IPA Montseny' },
            descripcio: {
              ca: 'Cervesa artesana',
              es: 'Cerveza artesana',
              fr: 'Bière artisanale',
            },
            preu: 4.20,
          },
          {
            nom: { ca: 'Lager Montseny', es: 'Lager Montseny', fr: 'Lager Montseny' },
            descripcio: {
              ca: 'Cervesa artesana',
              es: 'Cerveza artesana',
              fr: 'Bière artisanale',
            },
            preu: 3.90,
          },
          {
            nom: { ca: 'Blat Montseny', es: 'Trigo Montseny', fr: 'Blé Montseny' },
            descripcio: {
              ca: 'Cervesa artesana de blat',
              es: 'Cerveza artesana de trigo',
              fr: 'Bière artisanale de blé',
            },
            preu: 3.90,
          },
        ],
      },
      {
        nom: {
          ca: 'Sidra Bretona',
          es: 'Sidra Bretona',
          fr: 'Cidre Breton',
        },
        productes: [
          {
            nom: { ca: 'Sidra sec 25cl', es: 'Sidra seco 25cl', fr: 'Cidre brut 25cl' },
            preu: 5.50,
          },
          {
            nom: { ca: 'Sidra dolç 25cl', es: 'Sidra dulce 25cl', fr: 'Cidre doux 25cl' },
            preu: 5.20,
          },
          {
            nom: { ca: 'Sidra sec 75cl', es: 'Sidra seco 75cl', fr: 'Cidre brut 75cl' },
            preu: 13.20,
          },
          {
            nom: { ca: 'Sidra bio 75cl', es: 'Sidra bio 75cl', fr: 'Cidre bio 75cl' },
            preu: 14.20,
          },
          {
            nom: { ca: 'Sidra dolç 75cl', es: 'Sidra dulce 75cl', fr: 'Cidre doux 75cl' },
            preu: 12.20,
          },
        ],
      },
      {
        nom: {
          ca: 'Licors i Vins',
          es: 'Licores y Vinos',
          fr: 'Liqueurs et Vins',
        },
        productes: [
          {
            nom: { ca: 'Gin-tònic', es: 'Gin-tónico', fr: 'Gin-tonic' },
            preu: 7.50,
          },
          {
            nom: { ca: 'Vermut', es: 'Vermut', fr: 'Vermouth' },
            preu: 3.30,
          },
          {
            nom: { ca: 'Xarrup de ratafia', es: 'Chupito de ratafia', fr: 'Verre de ratafia' },
            preu: 2.70,
          },
          {
            nom: { ca: 'Copa de vi', es: 'Copa de vino', fr: 'Verre de vin' },
            preu: 2.60,
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // GELATS & CORNETS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'gelats',
    nom: {
      ca: 'Gelats & Cornets',
      es: 'Helados & Cornets',
      fr: 'Glaces & Cornets',
    },
    emoji: '🍦',
    subcategories: [
      {
        nom: {
          ca: 'Cornets',
          es: 'Cornets',
          fr: 'Cornets',
        },
        productes: [
          {
            nom: { ca: 'Cornet mini', es: 'Cornet mini', fr: 'Cornet mini' },
            preu: 1.20,
          },
          {
            nom: { ca: 'Cornet mitjà', es: 'Cornet mediano', fr: 'Cornet moyen' },
            preu: 3.10,
          },
          {
            nom: { ca: 'Cornet gran', es: 'Cornet grande', fr: 'Cornet grand' },
            preu: 4.90,
          },
          {
            nom: { ca: 'Cornet de xocolata', es: 'Cornet de chocolate', fr: 'Cornet chocolat' },
            preu: 4.10,
          },
          {
            nom: { ca: 'Cornet sense gluten', es: 'Cornet sin gluten', fr: 'Cornet sans gluten' },
            preu: 3.40,
            sensGluten: true,
          },
        ],
      },
      {
        nom: {
          ca: 'Per gaudir a casa',
          es: 'Para disfrutar en casa',
          fr: 'À emporter',
        },
        productes: [
          {
            nom: { ca: 'Envàs 0,5 lt', es: 'Envase 0,5 lt', fr: 'Bac 0,5 lt' },
            preu: 9.50,
          },
          {
            nom: { ca: 'Envàs 1 lt', es: 'Envase 1 lt', fr: 'Bac 1 lt' },
            preu: 18.90,
          },
        ],
      },
      {
        nom: {
          ca: 'Terrines',
          es: 'Tarrinas',
          fr: 'Verrines',
        },
        productes: [
          {
            nom: { ca: 'Terrina petita', es: 'Tarrina pequeña', fr: 'Verrine petite' },
            preu: 3.10,
          },
          {
            nom: { ca: 'Terrina mitjana', es: 'Tarrina mediana', fr: 'Verrine moyenne' },
            preu: 4.10,
          },
          {
            nom: { ca: 'Terrina gran', es: 'Tarrina grande', fr: 'Verrine grande' },
            preu: 5.10,
          },
        ],
      },
      {
        nom: {
          ca: 'A l\'estiu',
          es: 'En verano',
          fr: 'En été',
        },
        productes: [
          {
            nom: { ca: 'Orxata petita', es: 'Horchata pequeña', fr: 'Horchata petite' },
            preu: 3.10,
            temporada: true,
          },
          {
            nom: { ca: 'Orxata gran', es: 'Horchata grande', fr: 'Horchata grande' },
            preu: 5.10,
            temporada: true,
          },
          {
            nom: { ca: 'Cubanito petit', es: 'Cubanito pequeño', fr: 'Cubanito petit' },
            preu: 4.50,
            temporada: true,
          },
          {
            nom: { ca: 'Cubanito gran', es: 'Cubanito grande', fr: 'Cubanito grand' },
            preu: 6.60,
            temporada: true,
          },
          {
            nom: { ca: 'Granissat petit', es: 'Granizado pequeño', fr: 'Granité petit' },
            preu: 3.10,
            temporada: true,
          },
          {
            nom: { ca: 'Granissat gran', es: 'Granizado grande', fr: 'Granité grand' },
            preu: 5.10,
            temporada: true,
          },
          {
            nom: { ca: 'Clara Iceberg', es: 'Clara Iceberg', fr: 'Clara Iceberg' },
            preu: 3.20,
            temporada: true,
          },
          {
            nom: { ca: 'Palmera', es: 'Palmera', fr: 'Palmier' },
            preu: 3.10,
            temporada: true,
          },
        ],
      },
    ],
  },
]
