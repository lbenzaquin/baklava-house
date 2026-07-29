export type Page =
  | 'home' | 'catalog' | 'product' | 'boxes'
  | 'cart' | 'checkout' | 'confirmation'
  | 'events' | 'story'

export interface Product {
  id: string
  name: string
  category: 'individual' | 'box' | 'bandeja'
  short: string
  description: string
  price: number
  unit: string
  image: string
  tag?: string
  allergens?: string
  ingredients?: string[]
  presentations: string[]
}

export interface CartItem {
  product: Product
  quantity: number
  presentation: string
}

/** Set to true to re-enable cart / checkout UI. */
export const CART_ENABLED = false

export const PRODUCTS: Product[] = [
  {
    id: 'turron-armenio',
    name: 'Turrón armenio',
    category: 'individual',
    short: 'Clásico de frutos secos. Doce porciones para compartir.',
    description:
      'Turrón armenio artesanal, denso y aromático, con frutos secos seleccionados. Ideal para la mesa o para regalar. Doce porciones.',
    price: 30000,
    unit: '12 porciones',
    image: '/images/products/turron-armenio.jpg',
    ingredients: ['Frutos secos', 'Azúcar', 'Especias'],
    presentations: ['12 porciones'],
  },
  {
    id: 'mamoul',
    name: 'Mamoul de nuez o dátiles',
    category: 'individual',
    short: 'Galletitas de sémola rellenas. Elegí nuez o dátiles.',
    description:
      'Mamoul tradicionales de sémola, suaves y especiados, rellenos de nuez o pasta de dátil. Sin almíbar. Perfectos con té o café.',
    price: 30000,
    unit: '6 unidades',
    image: '/images/products/mamoul.jpg',
    ingredients: ['Sémola', 'Manteca', 'Nuez o pasta de dátil', 'Especias'],
    presentations: ['Nuez', 'Dátiles'],
  },
  {
    id: 'canastitas-pistacho',
    name: 'Canastitas de pistacho',
    category: 'individual',
    short: 'Nidos de masa con pistacho. Crocantes y almibarados.',
    description:
      'Canastitas de masa kataifi rellenas de pistacho, bañadas en almíbar. Crocantes, doradas y con el sabor clásico de la casa.',
    price: 30000,
    unit: '1/4 kg',
    image: '/images/products/canastitas-pistacho.jpg',
    tag: 'Más pedida',
    ingredients: ['Masa kataifi', 'Pistacho', 'Almíbar'],
    presentations: ['1/4 kg'],
  },
  {
    id: 'mydie',
    name: 'Mydie',
    category: 'individual',
    short: 'Piezas de masa filo con frutos secos y almíbar.',
    description:
      'Mydie artesanal: masa filo crocante con relleno de frutos secos y el punto justo de almíbar. Presentación por cuarto kilo.',
    price: 30000,
    unit: '1/4 kg',
    image: '/images/products/mydie.jpg',
    ingredients: ['Masa filo', 'Frutos secos', 'Almíbar'],
    presentations: ['1/4 kg'],
  },
  {
    id: 'cannolis',
    name: 'Cannolis',
    category: 'individual',
    short: 'Rollitos de masa filo rellenos, por cuarto kilo.',
    description:
      'Cannolis de masa filo dorada, rellenos y almibarados. Una presentación compacta para disfrutar o compartir.',
    price: 30000,
    unit: '1/4 kg',
    image: '/images/products/cannolis.jpg',
    ingredients: ['Masa filo', 'Relleno de frutos secos', 'Almíbar'],
    presentations: ['1/4 kg'],
  },
  {
    id: 'burma',
    name: 'Burma',
    category: 'individual',
    short: 'Rollos de masa filo con nuez. Tradicionales y crocantes.',
    description:
      'Burma enrollada a mano, con nuez visible y masa filo crocante bañada en almíbar. Un clásico de la pastelería árabe.',
    price: 30000,
    unit: '1/4 kg',
    image: '/images/products/burma.jpg',
    ingredients: ['Masa filo', 'Nuez', 'Almíbar'],
    presentations: ['1/4 kg'],
  },
  {
    id: 'roll-chocolate',
    name: 'Roll de chocolate',
    category: 'individual',
    short: 'Rollos de masa con chocolate y pistacho.',
    description:
      'Roll de chocolate artesanal: masa filo con relleno de chocolate y toque de pistacho, bañado en almíbar. Por cuarto kilo.',
    price: 40000,
    unit: '1/4 kg',
    image: '/images/products/roll-chocolate.jpg',
    tag: 'Novedad',
    ingredients: ['Masa filo', 'Chocolate', 'Pistacho', 'Almíbar'],
    presentations: ['1/4 kg'],
  },
]

export const BOXES: Product[] = [
  {
    id: 'baklava-cake',
    name: 'Baklava cake',
    category: 'box',
    short: 'Pastel redondo de baklava. Doce porciones, ~1 kg.',
    description:
      'Baklava cake artesanal en formato pastel: masa filo capa a capa, frutos secos y almíbar. Doce porciones, aproximadamente 1 kilo. Ideal para celebraciones.',
    price: 47000,
    unit: '~1 kg · 12 porciones',
    image: '/images/products/baklava-cake.jpg',
    tag: 'Para compartir',
    ingredients: ['Masa filo artesanal', 'Frutos secos', 'Almíbar', 'Decoración con pistacho o pétalos'],
    presentations: ['12 porciones (~1 kg)'],
  },
  {
    id: 'mini-baklava-cake',
    name: 'Mini baklava cake',
    category: 'box',
    short: 'Versión mini del cake. Ocho porciones, ~500 g.',
    description:
      'Mini baklava cake para mesas más chicas o regalos especiales. Ocho mini porciones, aproximadamente 500 gramos, con la misma receta de la casa.',
    price: 30000,
    unit: '~500 g · 8 mini porciones',
    image: '/images/products/mini-baklava-cake.jpg',
    ingredients: ['Masa filo artesanal', 'Frutos secos', 'Almíbar'],
    presentations: ['8 mini porciones (~500 g)'],
  },
  {
    id: 'caja-kilo',
    name: 'Caja de kilo surtida',
    category: 'box',
    short: 'Un kilo de baklava surtida. La más generosa.',
    description:
      'Caja de un kilo con surtido de baklava de la casa. Variedad de formas y rellenos, lista para compartir o regalar.',
    price: 40000,
    unit: '1 kg',
    image: '/images/products/caja-kilo.jpg',
    tag: 'Para regalar',
    ingredients: ['Surtido de baklava', 'Presentación en caja'],
    presentations: ['1 kg surtida'],
  },
  {
    id: 'caja-medio',
    name: 'Caja de medio kilo surtida',
    category: 'box',
    short: 'Medio kilo surtido. Ideal para probar o regalar.',
    description:
      'Caja de medio kilo con selección surtida de dulces árabes. Equilibrio perfecto entre variedad y tamaño.',
    price: 30000,
    unit: '1/2 kg',
    image: '/images/products/caja-medio.jpg',
    ingredients: ['Surtido de baklava', 'Presentación en caja'],
    presentations: ['1/2 kg surtida'],
  },
  {
    id: 'caja-cuarto',
    name: 'Caja de cuarto kilo',
    category: 'box',
    short: 'Cuarto kilo surtido. Para probar o un gusto personal.',
    description:
      'Caja de cuarto kilo con surtido de la casa. Ideal para conocer los dulces o para un regalo más chico.',
    price: 20000,
    unit: '1/4 kg',
    image: '/images/products/caja-cuarto.jpg',
    ingredients: ['Surtido de baklava', 'Presentación en caja'],
    presentations: ['1/4 kg'],
  },
]

export const ALL_PRODUCTS = [...PRODUCTS, ...BOXES]

export const FAQ_DATA = [
  {
    q: '¿Con cuánta anticipación tengo que hacer el pedido?',
    a: 'Necesitamos al menos 48 horas para pedidos individuales. Para bandejas y eventos, con 4-5 días de anticipación. Si es urgente, consultanos por WhatsApp y vemos si podemos ayudarte.',
  },
  {
    q: '¿Hacen envíos?',
    a: 'Sí, hacemos envíos dentro de Córdoba Capital. El costo varía según la zona y se coordina por WhatsApp.',
  },
  {
    q: '¿Los productos tienen almíbar?',
    a: 'Los dulces de masa filo (baklava, canastitas, burma, rolls y similares) llevan almíbar. El mamoul no lleva almíbar. Si tenés alguna restricción, consultanos.',
  },
  {
    q: '¿Tienen opciones sin gluten o veganas?',
    a: 'Por ahora no contamos con versiones sin gluten. Para consultas sobre ingredientes específicos, escribinos por WhatsApp.',
  },
  {
    q: '¿Se puede poner una dedicatoria en la caja?',
    a: '¡Claro que sí! Al hacer el pedido indicanos el texto y lo incluimos sin costo adicional.',
  },
  {
    q: '¿Cuánto duran los productos?',
    a: 'Los dulces de masa filo se conservan bien 5-7 días a temperatura ambiente en lugar fresco y seco. Los mamoul duran hasta 10 días. No hace falta refrigerar.',
  },
  {
    q: '¿Puedo cambiar el armado de las boxes?',
    a: 'Sí. Al hacer el pedido indicanos qué combinación querés y lo armamos a medida.',
  },
]

export const WA_PHONE = '5492964474478'

export function fmt(n: number) {
  return `$${n.toLocaleString('es-AR')}`
}

export function buildProductWA(product: Product, presentation?: string, qty = 1) {
  const pres = presentation ?? product.presentations[0]
  const msg = `¡Hola! Quiero pedir ${qty} × ${product.name} (${pres}) 🌿`
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`
}

export function buildWAMessage(cart: CartItem[], delivery = '', date = '', notes = '') {
  const lines = cart.map(
    (i) => `• ${i.product.name} (${i.presentation}) ×${i.quantity} — ${fmt(i.product.price * i.quantity)}`
  )
  const total = cart.reduce((s, i) => s + i.product.price * i.quantity, 0)
  const parts = [
    '¡Hola! Quiero hacer un pedido 🌿',
    '',
    ...lines,
    '',
    `Total estimado: ${fmt(total)}`,
    delivery ? `Modalidad: ${delivery}` : '',
    date ? `Fecha: ${date}` : '',
    notes ? `Notas: ${notes}` : '',
    '',
    '¡Gracias!',
  ]
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(parts.filter(Boolean).join('\n'))}`
}
