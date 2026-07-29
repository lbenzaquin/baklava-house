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

export const PRODUCTS: Product[] = [
  {
    id: 'baklawa-pistacho',
    name: 'Baklawa de Pistacho',
    category: 'individual',
    short: 'El clásico de siempre, con pistacho molido y almíbar de miel.',
    description:
      'Masa filo crocante, hecha a mano capa a capa, rellena con pistacho molido y bañada en almíbar de miel de abejas. La más pedida de la colección.',
    price: 1800,
    unit: 'por 4 piezas',
    image:
      'https://images.unsplash.com/photo-1778448563279-e7b39093933c?w=700&h=700&fit=crop&auto=format',
    tag: 'Más pedida',
    ingredients: ['Masa filo artesanal', 'Pistacho molido', 'Almíbar de miel', 'Manteca clarificada'],
    presentations: ['4 piezas', '8 piezas', '12 piezas'],
  },
  {
    id: 'baklawa-nuez',
    name: 'Baklawa de Nuez',
    category: 'individual',
    short: 'Tradicional con nuez picada, canela y almíbar de agua de rosas.',
    description:
      'La receta de la familia. Nuez picada fina con canela, envuelta en capas de masa filo y bañada con almíbar perfumado con agua de rosas.',
    price: 1700,
    unit: 'por 4 piezas',
    image:
      'https://images.unsplash.com/photo-1778448806128-18e8354356e1?w=700&h=700&fit=crop&auto=format',
    ingredients: ['Masa filo artesanal', 'Nuez picada', 'Canela', 'Almíbar con agua de rosas'],
    presentations: ['4 piezas', '8 piezas', '12 piezas'],
  },
  {
    id: 'fingers-kataifi',
    name: 'Fingers de Kataifi',
    category: 'individual',
    short: 'Masa kataifi (filo rallado) con pistacho. Crocantes y livianos.',
    description:
      'Masa kataifi —filo convertida en hebras finísimas— enrollada con pistacho entero y bañada en almíbar. Crocantes, livianos y muy adictivos.',
    price: 1900,
    unit: 'por 4 piezas',
    image:
      'https://images.unsplash.com/photo-1778447830669-8fe9626ed738?w=700&h=700&fit=crop&auto=format',
    tag: 'Novedad',
    ingredients: ['Masa kataifi', 'Pistacho entero', 'Almíbar de miel', 'Manteca clarificada'],
    presentations: ['4 piezas', '8 piezas', '12 piezas'],
  },
  {
    id: 'rolls-filo',
    name: 'Rolls de Filo',
    category: 'individual',
    short: 'Cilindros de masa filo con frutos secos y almíbar.',
    description:
      'Rollos de masa filo rellenos con una mezcla de frutos secos (pistacho, nuez, almendra) y especias. Crocantes, dorados y bien almibados.',
    price: 1700,
    unit: 'por 4 piezas',
    image:
      'https://images.unsplash.com/photo-1778447812923-88a9e3e6b567?w=700&h=700&fit=crop&auto=format',
    ingredients: ['Masa filo', 'Mix de frutos secos', 'Especias árabes', 'Almíbar de naranja'],
    presentations: ['4 piezas', '8 piezas', '12 piezas'],
  },
  {
    id: 'mamoul-datil',
    name: 'Mamoul de Dátil',
    category: 'individual',
    short: 'Galletitas de sémola rellenas con pasta de dátil. Sin almíbar.',
    description:
      'Galletitas tradicionales de sémola con un corazón de pasta de dátil. Suaves, especiadas y sin almíbar. Perfectas para tomar con té.',
    price: 1500,
    unit: 'por 6 piezas',
    image:
      'https://images.unsplash.com/photo-1664123122003-15558de0bbc5?w=700&h=700&fit=crop&auto=format',
    ingredients: ['Sémola', 'Manteca', 'Pasta de dátil', 'Especias'],
    presentations: ['6 piezas', '12 piezas'],
  },
  {
    id: 'mix-arabe',
    name: 'Mix Árabe',
    category: 'individual',
    short: 'Los cuatro clásicos de Baklawa House en una sola caja.',
    description:
      'Selección de nuestros cuatro favoritos: baklawa de pistacho, baklawa de nuez, fingers de kataifi y rolls de filo. Ideal para descubrir la colección.',
    price: 2400,
    unit: 'por 8 piezas',
    image:
      'https://images.unsplash.com/photo-1772729294786-7a264601887b?w=700&h=700&fit=crop&auto=format',
    tag: 'Recomendado',
    ingredients: ['2 Baklawa de Pistacho', '2 Baklawa de Nuez', '2 Fingers de Kataifi', '2 Rolls de Filo'],
    presentations: ['8 piezas (2 de cada)', '16 piezas (4 de cada)'],
  },
]

export const BOXES: Product[] = [
  {
    id: 'box-12',
    name: 'Box 12 piezas',
    category: 'box',
    short: 'Una caja para compartir. Mix a elección, con lazo.',
    description:
      'Nuestra caja de regalo para momentos especiales. 12 piezas a elección del comprador, presentadas en caja con lazo. Podés incluir una dedicatoria personal.',
    price: 5400,
    unit: 'para 2-3 personas',
    image:
      'https://images.unsplash.com/photo-1784386124506-617d0bec2e02?w=700&h=700&fit=crop&auto=format',
    tag: 'Para regalar',
    ingredients: ['12 piezas a elección', 'Presentación en caja con lazo', 'Tarjeta de dedicatoria incluida'],
    presentations: ['Mix a elección', 'Solo pistacho', 'Solo nuez', 'Selección de la casa'],
  },
  {
    id: 'box-24',
    name: 'Box 24 piezas',
    category: 'box',
    short: 'La caja grande. Para reuniones o para el que no puede elegir.',
    description:
      'La caja grande. 24 piezas con la colección completa de Baklawa House, en caja con lazo. Perfecta para llevar a una reunión o para tener en casa toda la semana.',
    price: 9800,
    unit: 'para 4-6 personas',
    image:
      'https://images.unsplash.com/photo-1767796777227-32ef3200fab8?w=700&h=700&fit=crop&auto=format',
    ingredients: ['6 Baklawa de Pistacho', '6 Baklawa de Nuez', '6 Fingers de Kataifi', '6 Rolls de Filo'],
    presentations: ['Colección completa', 'Armado a elección'],
  },
  {
    id: 'bandeja-familiar',
    name: 'Bandeja Familiar',
    category: 'bandeja',
    short: 'Bandeja generosa para agasajar en reuniones y celebraciones.',
    description:
      'La bandeja para agasajar a todos. Mix completo de la colección, presentado en bandeja grande lista para servir. Ideal para cumpleaños, fiestas y reuniones familiares.',
    price: 18000,
    unit: 'para 15-20 personas',
    image:
      'https://images.unsplash.com/photo-1571823915295-c450f2c3f27a?w=700&h=700&fit=crop&auto=format',
    tag: 'Eventos',
    ingredients: ['Mix completo a elección', 'Bandeja descartable presentable', 'Etiqueta Baklawa House'],
    presentations: ['Bandeja chica ~30 piezas', 'Bandeja grande ~50 piezas'],
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
    a: 'Sí, hacemos envíos dentro de Córdoba Capital. El costo varía según la zona. También podés retirar por el local (dirección a confirmar por WhatsApp).',
  },
  {
    q: '¿Los productos tienen almíbar?',
    a: 'Todos los dulces de masa filo (baklawa, fingers y rolls) llevan almíbar. El mamoul no lleva almíbar. Si tenés alguna restricción, consultanos.',
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

export const WA_PHONE = '5493510000000'

export function fmt(n: number) {
  return `$${n.toLocaleString('es-AR')}`
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
