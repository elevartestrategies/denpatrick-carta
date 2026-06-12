export type Lang = 'ca' | 'es' | 'fr' | 'en'

export type TextMultilang = { ca: string; es: string; fr: string; en: string }

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

// Category and subcategory names are translated; product names stay in Catalan across all languages
function n(ca: string, es: string, fr: string, en: string): TextMultilang {
  return { ca, es, fr, en }
}
function pn(ca: string): TextMultilang {
  return { ca, es: ca, fr: ca, en: ca }
}
function pd(ca: string, es: string, fr: string, en: string): TextMultilang {
  return { ca, es, fr, en }
}

export const categories: Categoria[] = [
  // ─────────────────────────────────────────────────────────────
  // CRÊPES DOLCES
  // ─────────────────────────────────────────────────────────────
  {
    id: 'crepes-dolces',
    nom: n('Crêpes Dolces', 'Crêpes Dulces', 'Crêpes Sucrées', 'Sweet Crêpes'),
    emoji: '🥞',
    subcategories: [
      {
        nom: n('Passió Cacau', 'Pasión Cacao', 'Passion Cacao', 'Cacao Passion'),
        productes: [
          { nom: pn('Poma al forn, xocolata i sèsam'), preu: 6.80 },
          { nom: pn('Xocolata negra o blanca o Nutella'), preu: 5.20 },
          { nom: pn('Xoco negra & blanca'), preu: 6.20 },
          { nom: pn('Nutella i xoco blanca'), preu: 6.20 },
          { nom: pn('Xocolata, plàtan, coco i nata muntada'), preu: 7.30 },
          { nom: pn("Xocolata, confitura de gerds i crocanti d'ametlles"), preu: 6.20 },
          { nom: pn('Xocolata i plàtan'), preu: 6.20 },
          { nom: pn('Xocolata i dolç de llet'), preu: 6.20 },
        ],
      },
      {
        nom: n('De la Iaia', 'De la Abuela', 'De la Grand-mère', "Grandma's Style"),
        productes: [
          { nom: pn('Poma al forn amb canyella'), preu: 6.00 },
          { nom: pn('Tahina, mel, plàtan i sèsam'), preu: 6.20 },
          { nom: pn('Mel, plàtan i nous'), preu: 5.50 },
          { nom: pn('Plàtan i dolç de llet'), preu: 6.20 },
          { nom: pn('Llet condensada i coco'), preu: 5.50 },
          { nom: pn('Sucre amb mantega i canyella'), preu: 4.10 },
          { nom: pn('Tahina, mel i sèsam'), preu: 5.30 },
          { nom: pn('Confitura'), preu: 5.10 },
          { nom: pn('Dolç de llet o llet condensada'), preu: 5.20 },
          { nom: pn('Llimona'), preu: 4.75 },
          { nom: pn('Maduixes, nata muntada i xocolata'), preu: 6.80, temporada: true },
        ],
      },
      {
        nom: n('Crêpes Flamejades', 'Crêpes Flambeadas', 'Crêpes Flambées', 'Flambéed Crêpes'),
        productes: [
          {
            nom: pn('Suzette'),
            descripcio: pd(
              "Clàssica crêpe flamejada amb mantega de taronja i Grand Marnier",
              "Clásica crêpe flambeada con mantequilla de naranja y Grand Marnier",
              "Classique crêpe flambée au beurre d'orange et Grand Marnier",
              "Classic flambéed crêpe with orange butter and Grand Marnier",
            ),
            preu: 6.90,
          },
          {
            nom: pn('Banane Flambée'),
            descripcio: pd(
              'Plàtan flamejat amb rom i caramel',
              'Plátano flambeado con ron y caramelo',
              'Banane flambée au rhum et caramel',
              'Banana flambéed with rum and caramel',
            ),
            preu: 7.50,
          },
          {
            nom: pn('Delit Obscur'),
            descripcio: pd(
              'Xocolata negra flamejada amb licor de cafè',
              'Chocolate negro flambeado con licor de café',
              'Chocolat noir flambé au liqueur de café',
              'Dark chocolate flambéed with coffee liqueur',
            ),
            preu: 6.90,
          },
        ],
      },
      {
        nom: n('Crêpes amb Gelat', 'Crêpes con Helado', 'Crêpes avec Glace', 'Crêpes with Ice Cream'),
        productes: [
          {
            nom: pn('Poma-Xic'),
            descripcio: pd(
              'Poma al forn, xocolata i gelat de vainilla',
              'Manzana al horno, chocolate y helado de vainilla',
              'Pomme au four, chocolat et glace vanille',
              'Baked apple, chocolate and vanilla ice cream',
            ),
            preu: 8.30,
          },
          {
            nom: pn('Belle-Noisette'),
            descripcio: pd(
              'Crêpe amb avellana, xocolata i gelat',
              'Crêpe con avellana, chocolate y helado',
              'Crêpe noisette, chocolat et glace',
              'Crêpe with hazelnut, chocolate and ice cream',
            ),
            preu: 8.30,
          },
          {
            nom: pn('Chiz-Délice'),
            descripcio: pd(
              'Crêpe de formatge fresc, mel i gelat',
              'Crêpe de queso fresco, miel y helado',
              'Crêpe fromage frais, miel et glace',
              'Crêpe with fresh cheese, honey and ice cream',
            ),
            preu: 8.30,
          },
          {
            nom: pn('Banana-Strass'),
            descripcio: pd(
              'Plàtan, xocolata, coco i gelat',
              'Plátano, chocolate, coco y helado',
              'Banane, chocolat, coco et glace',
              'Banana, chocolate, coconut and ice cream',
            ),
            preu: 8.30,
          },
        ],
      },
      {
        nom: n('Suplements Crêpes Dolces', 'Suplementos Crêpes Dulces', 'Suppléments Crêpes Sucrées', 'Sweet Crêpe Add-ons'),
        productes: [
          { nom: pn('Bola de gelat'), preu: 2.10 },
          { nom: pn('Altres suplements'), preu: 1.10 },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // CRÊPES BRETONES (GALETTES)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'galettes',
    nom: n('Crêpes Bretones', 'Crêpes Bretonas', 'Galettes Bretonnes', 'Breton Crêpes'),
    emoji: '🌾',
    subcategories: [
      {
        nom: n('Sabor Tradicional', 'Sabor Tradicional', 'Saveur Traditionnelle', 'Traditional Flavour'),
        productes: [
          {
            nom: pn('La Galette'),
            descripcio: pd('Mantega i ou', 'Mantequilla y huevo', 'Beurre et œuf', 'Butter and egg'),
            preu: 6.90, sensGluten: true,
          },
          {
            nom: pn('Crepini'),
            descripcio: pd('Ou, formatge i pernil', 'Huevo, queso y jamón', 'Œuf, fromage et jambon', 'Egg, cheese and ham'),
            preu: 8.80, sensGluten: true,
          },
          {
            nom: pn('Complète'),
            descripcio: pd('Ou, formatge, pernil i bolets', 'Huevo, queso, jamón y setas', 'Œuf, fromage, jambon et champignons', 'Egg, cheese, ham and mushrooms'),
            preu: 9.60, sensGluten: true,
          },
          {
            nom: pn('Fromagère'),
            descripcio: pd('Selecció de formatges i ou', 'Selección de quesos y huevo', 'Sélection de fromages et œuf', 'Selection of cheeses and egg'),
            preu: 9.80, sensGluten: true,
          },
          {
            nom: pn('Forestière'),
            descripcio: pd('Ou, formatge, bolets del bosc i crema', 'Huevo, queso, setas del bosque y crema', 'Œuf, fromage, champignons des bois et crème', 'Egg, cheese, wild mushrooms and cream'),
            preu: 10.00, sensGluten: true,
          },
        ],
      },
      {
        nom: n('Delícies Veggies', 'Delicias Veggies', 'Délices Veggies', 'Veggie Delights'),
        productes: [
          {
            nom: pn('Koaven'),
            descripcio: pd(
              'Espàrrecs, ou, formatge de cabra i crema de porro',
              'Espárragos, huevo, queso de cabra y crema de puerro',
              'Asperges, œuf, chèvre et crème de poireau',
              'Asparagus, egg, goat cheese and leek cream',
            ),
            preu: 12.90, sensGluten: true, vegan: false,
          },
          {
            nom: pn('Guacamole'),
            descripcio: pd(
              'Guacamole, tomàquet, ceba morada i coriandre',
              'Guacamole, tomate, cebolla morada y cilantro',
              'Guacamole, tomate, oignon rouge et coriandre',
              'Guacamole, tomato, red onion and coriander',
            ),
            preu: 11.30, sensGluten: true, vegan: true,
          },
          {
            nom: pn('Hortelana'),
            descripcio: pd(
              'Verdures de temporada, formatge i ou',
              'Verduras de temporada, queso y huevo',
              'Légumes de saison, fromage et œuf',
              'Seasonal vegetables, cheese and egg',
            ),
            preu: 13.10, sensGluten: true,
          },
          {
            nom: pn('Belle Verte'),
            descripcio: pd(
              'Espinacs, ou, formatge brie i nous',
              'Espinacas, huevo, queso brie y nueces',
              'Épinards, œuf, brie et noix',
              'Spinach, egg, brie cheese and walnuts',
            ),
            preu: 11.80, sensGluten: true,
          },
          {
            nom: pn('Courgette'),
            descripcio: pd(
              'Carbassó, formatge fresc, ou i herbes',
              'Calabacín, queso fresco, huevo y hierbas',
              'Courgette, fromage frais, œuf et herbes',
              'Courgette, fresh cheese, egg and herbs',
            ),
            preu: 11.50, sensGluten: true,
          },
        ],
      },
      {
        nom: n('Tast de la Terra', 'Sabor de la Tierra', 'Goût de la Terre', 'Taste of the Land'),
        productes: [
          {
            nom: pn('Gwadegenn'),
            descripcio: pd(
              'Pollastre, bolets, crema de porro i formatge',
              'Pollo, setas, crema de puerro y queso',
              'Poulet, champignons, crème de poireau et fromage',
              'Chicken, mushrooms, leek cream and cheese',
            ),
            preu: 12.80, sensGluten: true,
          },
          {
            nom: pn('Paysanne'),
            descripcio: pd(
              'Ou, pernil curat, formatge i crema',
              'Huevo, jamón curado, queso y crema',
              'Œuf, jambon sec, fromage et crème',
              'Egg, cured ham, cheese and cream',
            ),
            preu: 11.50, sensGluten: true,
          },
          {
            nom: pn('Bergère'),
            descripcio: pd(
              'Ou, formatge de ovella, tomàquet i rúcula',
              'Huevo, queso de oveja, tomate y rúcula',
              'Œuf, fromage de brebis, tomate et roquette',
              'Egg, sheep cheese, tomato and rocket',
            ),
            preu: 11.80, sensGluten: true,
          },
          {
            nom: pn('Éloïse'),
            descripcio: pd(
              'Salmó fumat, ou, crema i ceba',
              'Salmón ahumado, huevo, crema y cebolla',
              'Saumon fumé, œuf, crème et oignon',
              'Smoked salmon, egg, cream and onion',
            ),
            preu: 13.10, sensGluten: true,
          },
          {
            nom: pn('Carbonara'),
            descripcio: pd(
              'Ou, bacó, formatge parmesà i crema',
              'Huevo, bacon, queso parmesano y crema',
              'Œuf, lardons, parmesan et crème',
              'Egg, bacon, Parmesan cheese and cream',
            ),
            preu: 11.20, sensGluten: true,
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
    nom: n('Gofres & Nius', 'Gofres & Nidos', 'Gaufres & Nids', 'Waffles & Nests'),
    emoji: '🧇',
    subcategories: [
      {
        nom: n('Gofres', 'Gofres', 'Gaufres', 'Waffles'),
        productes: [
          { nom: pn('Gofre sol'), preu: 2.30 },
          { nom: pn('Gofre amb 1 bola de gelat'), preu: 4.40 },
          { nom: pn('Suplement gofre'), preu: 1.00 },
          { nom: pn('Bola de gelat'), preu: 2.10 },
        ],
      },
      {
        nom: n('Nius', 'Nidos', 'Nids', 'Nests'),
        productes: [
          { nom: pn('Niu amb 1 o 2 sabors + 2 toppings'), preu: 5.90 },
        ],
      },
      {
        nom: n('Cookies Gegantes (Bio)', 'Cookies Gigantes (Bio)', 'Cookies Géants (Bio)', 'Giant Cookies (Organic)'),
        productes: [
          { nom: pn('Xips de xocolata'), preu: 3.70 },
          { nom: pn('Doble xocolata brownie'), preu: 3.70 },
          { nom: pn('Civada i xips de xocolata'), preu: 3.70, sensGluten: true },
          { nom: pn('Cacauet'), preu: 3.70, sensGluten: true },
          { nom: pn('Canyella'), preu: 3.70 },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // BIKINIS GOURMET
  // ─────────────────────────────────────────────────────────────
  {
    id: 'bikinis',
    nom: n('Bikinis Gourmet', 'Bikinis Gourmet', 'Croque-Monsieur Gourmet', 'Gourmet Toasties'),
    emoji: '🥪',
    productes: [
      {
        nom: pn('Clàssic'),
        descripcio: pd('Pernil i formatge', 'Jamón y queso', 'Jambon et fromage', 'Ham and cheese'),
        preu: 3.90,
      },
      {
        nom: pn('Capritxós'),
        descripcio: pd('Pernil, formatge i tomàquet', 'Jamón, queso y tomate', 'Jambon, fromage et tomate', 'Ham, cheese and tomato'),
        preu: 5.00,
      },
      {
        nom: pn('Ambiciós'),
        descripcio: pd(
          'Pernil ibèric, formatge, tomàquet i rúcula',
          'Jamón ibérico, queso, tomate y rúcula',
          'Jambon ibérique, fromage, tomate et roquette',
          'Iberian ham, cheese, tomato and rocket',
        ),
        preu: 6.30,
      },
      {
        nom: pn('Rodamón'),
        descripcio: pd('Formatge brie, nous i mel', 'Queso brie, nueces y miel', 'Fromage brie, noix et miel', 'Brie cheese, walnuts and honey'),
        preu: 5.00,
      },
      {
        nom: pn('Menorquí'),
        descripcio: pd('Formatge mahonès i sobrassada', 'Queso mahonés y sobrasada', 'Fromage de Mahon et sobrasada', 'Mahon cheese and sobrasada'),
        preu: 4.50,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // BEGUDES & CAFÈS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'begudes',
    nom: n('Begudes & Cafès', 'Bebidas & Cafés', 'Boissons & Cafés', 'Drinks & Coffees'),
    emoji: '☕',
    subcategories: [
      {
        nom: n('Rituals a la Tassa', 'Rituales en Taza', 'Rituels en Tasse', 'Rituals in a Cup'),
        productes: [
          { nom: pn('Xocolata a la tassa'), preu: 3.10 },
          { nom: pn('Xocolata a la tassa amb dos melindros'), preu: 5.10 },
          {
            nom: pn('Suís'),
            descripcio: pd(
              'Xocolata calenta amb nata muntada',
              'Chocolate caliente con nata montada',
              'Chocolat chaud avec crème fouettée',
              'Hot chocolate with whipped cream',
            ),
            preu: 4.10,
          },
          { nom: pn('Xocolata desfeta amb gelat'), preu: 5.10 },
          {
            nom: pn('Xocolata Liégeois'),
            descripcio: pd(
              'Xocolata freda amb gelat i nata muntada',
              'Chocolate frío con helado y nata montada',
              'Chocolat froid avec glace et crème fouettée',
              'Cold chocolate with ice cream and whipped cream',
            ),
            preu: 5.70,
          },
          { nom: pn('Mini xocolata a la tassa'), preu: 1.80 },
          { nom: pn('Mini Suís'), preu: 2.80 },
        ],
      },
      {
        nom: n('Cafès', 'Cafés', 'Cafés', 'Coffees'),
        productes: [
          { nom: pn('Cafè sol'), preu: 1.30 },
          { nom: pn('Tallat'), preu: 1.50 },
          { nom: pn('Cafè amb llet'), preu: 1.70 },
          { nom: pn('Capuccino'), preu: 2.40 },
          { nom: pn('Cigaló'), preu: 2.00 },
          { nom: pn('Bons eco'), preu: 2.10 },
          { nom: pn('Rooibos latte'), preu: 2.40 },
          { nom: pn('Matcha latte'), preu: 2.40 },
          {
            nom: pn('Cafè Liégeois'),
            descripcio: pd(
              'Cafè fred amb gelat i nata muntada',
              'Café frío con helado y nata montada',
              'Café froid avec glace et crème fouettée',
              'Cold coffee with ice cream and whipped cream',
            ),
            preu: 4.60,
          },
          {
            nom: pn('Cafè Vienès'),
            descripcio: pd(
              'Cafè amb nata muntada',
              'Café con nata montada',
              'Café avec crème fouettée',
              'Coffee with whipped cream',
            ),
            preu: 2.40,
          },
          {
            nom: pn('Affogato'),
            descripcio: pd(
              'Cafè sobre gelat de vainilla',
              'Café sobre helado de vainilla',
              'Espresso sur glace vanille',
              'Espresso over vanilla ice cream',
            ),
            preu: 3.40,
          },
        ],
      },
      {
        nom: n('Refrescs', 'Refrescos', 'Rafraîchissements', 'Cold Drinks'),
        productes: [
          { nom: pn('Aigua petita'), preu: 1.20 },
          { nom: pn('Aigua gran'), preu: 1.80 },
          { nom: pn('Sodes'), preu: 2.10 },
          { nom: pn('Tònica Vichy Catalan'), preu: 2.30 },
          { nom: pn('Cacaolat'), preu: 2.60 },
          { nom: pn('Sodes bio'), preu: 3.60 },
          { nom: pn('Suc de fruita bio'), preu: 2.50 },
          { nom: pn('Kombucha bio'), preu: 4.70 },
          { nom: pn('Suc de taronja natural'), preu: 3.20, temporada: true },
        ],
      },
      {
        nom: n('Cerveses', 'Cervezas', 'Bières', 'Beers'),
        productes: [
          { nom: pn('Moritz-7'), preu: 2.40 },
          { nom: pn('Moritz torrada 0,0'), preu: 3.40 },
          { nom: pn('Moritz 0,0'), preu: 2.40 },
          { nom: pn('Epidor'), preu: 3.00 },
          { nom: pn('Radler'), preu: 2.60 },
          { nom: pn('Àmbar sense gluten'), preu: 2.80, sensGluten: true },
          {
            nom: pn('IPA Montseny'),
            descripcio: pd('Cervesa artesana', 'Cerveza artesana', 'Bière artisanale', 'Craft beer'),
            preu: 4.20,
          },
          {
            nom: pn('Lager Montseny'),
            descripcio: pd('Cervesa artesana', 'Cerveza artesana', 'Bière artisanale', 'Craft beer'),
            preu: 3.90,
          },
          {
            nom: pn('Blat Montseny'),
            descripcio: pd('Cervesa artesana de blat', 'Cerveza artesana de trigo', 'Bière artisanale de blé', 'Craft wheat beer'),
            preu: 3.90,
          },
        ],
      },
      {
        nom: n('Sidra Bretona', 'Sidra Bretona', 'Cidre Breton', 'Breton Cider'),
        productes: [
          { nom: pn('Sidra sec 25cl'), preu: 5.50 },
          { nom: pn('Sidra dolç 25cl'), preu: 5.20 },
          { nom: pn('Sidra sec 75cl'), preu: 13.20 },
          { nom: pn('Sidra bio 75cl'), preu: 14.20 },
          { nom: pn('Sidra dolç 75cl'), preu: 12.20 },
        ],
      },
      {
        nom: n('Licors i Vins', 'Licores y Vinos', 'Liqueurs et Vins', 'Spirits & Wines'),
        productes: [
          { nom: pn('Gin-tònic'), preu: 7.50 },
          { nom: pn('Vermut'), preu: 3.30 },
          { nom: pn('Xarrup de ratafia'), preu: 2.70 },
          { nom: pn('Copa de vi'), preu: 2.60 },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // GELATS & CORNETS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'gelats',
    nom: n('Gelats & Cornets', 'Helados & Cornets', 'Glaces & Cornets', 'Ice Creams & Cones'),
    emoji: '🍦',
    subcategories: [
      {
        nom: n('Cornets', 'Cornets', 'Cornets', 'Cones'),
        productes: [
          { nom: pn('Cornet mini'), preu: 1.20 },
          { nom: pn('Cornet mitjà'), preu: 3.10 },
          { nom: pn('Cornet gran'), preu: 4.90 },
          { nom: pn('Cornet de xocolata'), preu: 4.10 },
          { nom: pn('Cornet sense gluten'), preu: 3.40, sensGluten: true },
        ],
      },
      {
        nom: n('Per gaudir a casa', 'Para disfrutar en casa', 'À emporter', 'To enjoy at home'),
        productes: [
          { nom: pn('Envàs 0,5 lt'), preu: 9.50 },
          { nom: pn('Envàs 1 lt'), preu: 18.90 },
        ],
      },
      {
        nom: n('Terrines', 'Tarrinas', 'Verrines', 'Tubs'),
        productes: [
          { nom: pn('Terrina petita'), preu: 3.10 },
          { nom: pn('Terrina mitjana'), preu: 4.10 },
          { nom: pn('Terrina gran'), preu: 5.10 },
        ],
      },
      {
        nom: n("A l'estiu", 'En verano', 'En été', 'In summer'),
        productes: [
          { nom: pn('Orxata petita'), preu: 3.10, temporada: true },
          { nom: pn('Orxata gran'), preu: 5.10, temporada: true },
          { nom: pn('Cubanito petit'), preu: 4.50, temporada: true },
          { nom: pn('Cubanito gran'), preu: 6.60, temporada: true },
          { nom: pn('Granissat petit'), preu: 3.10, temporada: true },
          { nom: pn('Granissat gran'), preu: 5.10, temporada: true },
          { nom: pn('Clara Iceberg'), preu: 3.20, temporada: true },
          { nom: pn('Palmera'), preu: 3.10, temporada: true },
        ],
      },
    ],
  },
]
