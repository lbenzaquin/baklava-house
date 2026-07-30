import { useState, useEffect, type FormEvent } from 'react'
import {
  type Page, type Product, type CartItem,
  PRODUCTS, BOXES, FAQ_DATA,
  fmt, buildWAMessage, buildProductWA, WA_PHONE, CART_ENABLED,
} from './data'

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconCart({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  )
}
function IconX({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}
function IconMinus({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
}
function IconPlus({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
}
function IconChevronDown({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
}
function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
function IconTruck({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  )
}
function IconWhatsApp({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}
function IconCheck({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}
function IconMenu({ size = 22 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
}
function IconArrowLeft({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
}

// ─── Tag badge ────────────────────────────────────────────────────────────────

function Tag({ label, variant = 'honey' }: { label: string; variant?: 'honey' | 'green' | 'bark' }) {
  const styles: Record<string, string> = {
    honey: 'bg-honey-light text-honey border border-honey/30',
    green: 'bg-pistachio-light text-pistachio border border-pistachio/20',
    bark: 'bg-almond text-bark border border-almond',
  }
  return (
    <span className={`inline-block text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${styles[variant]}`}>
      {label}
    </span>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({
  setPage,
  cartCount,
}: {
  setPage: (p: Page, product?: Product) => void
  cartCount: number
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links: { label: string; page: Page }[] = [
    { label: 'Dulces', page: 'catalog' },
    { label: 'Boxes', page: 'boxes' },
    { label: 'Para eventos', page: 'events' },
    { label: 'Nuestra historia', page: 'story' },
  ]

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-ivory/95 backdrop-blur-sm shadow-sm' : 'bg-ivory'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button
          onClick={() => setPage('home')}
          className="font-serif font-semibold text-xl tracking-tight text-pistachio leading-none"
        >
          Baklawa House
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => setPage(l.page)}
              className="text-[14px] font-medium text-dust hover:text-bark transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {CART_ENABLED && (
            <button
              onClick={() => setPage('cart')}
              className="relative flex items-center gap-1.5 text-bark hover:text-pistachio transition-colors"
            >
              <IconCart />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-honey text-ivory text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-bark p-1"
          >
            {open ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-ivory border-t border-almond px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => { setPage(l.page); setOpen(false) }}
              className="text-left text-[15px] font-medium text-bark py-1"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

// ─── WhatsApp FAB ──────────────────────────────────────────────────────────────

function WAFab({ cart }: { cart: CartItem[] }) {
  const href = CART_ENABLED && cart.length > 0 ? buildWAMessage(cart) : `https://wa.me/${WA_PHONE}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-wa text-white rounded-full shadow-xl px-4 py-3 hover:scale-105 transition-transform"
    >
      <IconWhatsApp size={19} />
      <span className="hidden sm:inline text-[13px] font-semibold">
        {CART_ENABLED && cart.length > 0 ? 'Pedí por WhatsApp' : 'Consultanos'}
      </span>
    </a>
  )
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  onView,
  onAdd,
}: {
  product: Product
  onView: () => void
  onAdd: (p: Product, pres: string) => void
}) {
  return (
    <article
      className="bg-white rounded-2xl overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
      onClick={onView}
    >
      <div className="aspect-square overflow-hidden bg-almond">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-serif text-[17px] font-semibold text-bark leading-snug">{product.name}</h3>
          {product.tag && <Tag label={product.tag} variant={product.tag === 'Novedad' ? 'green' : 'honey'} />}
        </div>
        <p className="text-[13px] text-dust mb-3 line-clamp-2">{product.short}</p>
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="font-semibold text-bark text-[16px]">{fmt(product.price)}</span>
            <span className="text-dust text-[12px] ml-1">{product.unit}</span>
          </div>
          {CART_ENABLED ? (
            <button
              className="text-[13px] font-semibold bg-pistachio text-ivory px-3.5 py-1.5 rounded-full hover:bg-pistachio-mid transition-colors"
              onClick={(e) => { e.stopPropagation(); onAdd(product, product.presentations[0]) }}
            >
              Agregar
            </button>
          ) : (
            <a
              href={buildProductWA(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold bg-wa text-white px-3.5 py-1.5 rounded-full hover:opacity-90 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              Pedir
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

// ─── Section heading ──────────────────────────────────────────────────────────

function SectionHeading({ tag, title, sub }: { tag?: string; title: string; sub?: string }) {
  return (
    <div className="mb-10">
      {tag && <p className="text-[11px] font-semibold uppercase tracking-widest text-honey mb-2">{tag}</p>}
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-bark">{title}</h2>
      {sub && <p className="mt-3 text-dust text-[15px] max-w-md">{sub}</p>}
    </div>
  )
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="divide-y divide-almond">
      {FAQ_DATA.map((item, i) => (
        <div key={i}>
          <button
            className="flex items-center justify-between w-full py-4 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium text-bark text-[15px]">{item.q}</span>
            <span className={`text-dust shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}>
              <IconChevronDown />
            </span>
          </button>
          {open === i && (
            <p className="pb-4 text-dust text-[14px] leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Home Page ─────────────────────────────────────────────────────────────────

function HomePage({
  setPage,
  addToCart,
}: {
  setPage: (p: Page, product?: Product) => void
  addToCart: (p: Product, pres: string) => void
}) {
  const featured = PRODUCTS.find((p) => p.id === 'roll-chocolate') ?? PRODUCTS[0]
  const instagramImages = [
    '/images/products/baklava-cake.jpg',
    '/images/products/caja-kilo.jpg',
    '/images/products/canastitas-pistacho.jpg',
    '/images/products/burma.jpg',
    '/images/products/mamoul.jpg',
    '/images/products/caja-medio.jpg',
  ]

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end pb-16 overflow-hidden bg-bark">
        <img
          src="/images/products/caja-kilo.jpg"
          alt="Baklava artesanal de Baklawa House"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/30 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-honey mb-4">
            Córdoba, Argentina
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-ivory leading-[1.05] mb-6 max-w-xl">
            <em className="not-italic">Artesanos de</em>
            <br />
            dulces árabes
          </h1>
          <p className="text-ivory/80 text-[16px] mb-8 max-w-sm leading-relaxed">
            Preparados a mano en Córdoba, capa a capa, con ingredientes de primera.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setPage('catalog')}
              className="bg-ivory text-bark font-semibold px-7 py-3.5 rounded-full hover:bg-almond transition-colors text-[14px]"
            >
              Ver nuestros dulces
            </button>
            <a
              href={`https://wa.me/${WA_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-wa text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity text-[14px]"
            >
              <IconWhatsApp size={16} />
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="La colección"
          title="Nuestros dulces"
          sub="Cada pieza hecha a mano el mismo día. Masa filo crocante, almíbar justo y los mejores frutos secos."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {PRODUCTS.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onView={() => setPage('product', p)}
              onAdd={addToCart}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => setPage('catalog')}
            className="border border-pistachio text-pistachio font-semibold px-8 py-3 rounded-full hover:bg-pistachio hover:text-ivory transition-colors text-[14px]"
          >
            Ver catálogo completo
          </button>
        </div>
      </section>

      {/* NOVEDAD FEATURE */}
      <section className="bg-parchment py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-almond">
              <img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              {featured.tag && <Tag label={featured.tag} variant="green" />}
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-bark mt-3 mb-4 leading-tight">
                {featured.name}
              </h2>
              <p className="text-dust text-[15px] leading-relaxed mb-6">
                {featured.description}
              </p>
              <div className="flex gap-3 flex-wrap">
                {CART_ENABLED ? (
                  <button
                    onClick={() => { addToCart(featured, featured.presentations[0]); }}
                    className="bg-pistachio text-ivory font-semibold px-6 py-3 rounded-full hover:bg-pistachio-mid transition-colors text-[14px]"
                  >
                    Agregar al carrito
                  </button>
                ) : (
                  <a
                    href={buildProductWA(featured)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-wa text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-[14px]"
                  >
                    <IconWhatsApp size={16} />
                    Pedir por WhatsApp
                  </a>
                )}
                <button
                  onClick={() => setPage('product', featured)}
                  className="text-pistachio font-semibold px-6 py-3 rounded-full border border-pistachio hover:bg-pistachio/5 transition-colors text-[14px]"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOXES */}
      <section className="py-16 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="Para compartir"
          title="Una caja para cada momento"
          sub="Armadas con cuidado, listas para regalar o llevar a la mesa."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BOXES.map((box) => (
            <article
              key={box.id}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer group hover:shadow-md transition-shadow"
              onClick={() => setPage('product', box)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-almond">
                <img
                  src={box.image}
                  alt={box.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                {box.tag && <Tag label={box.tag} variant="honey" />}
                <h3 className="font-serif text-[18px] font-semibold text-bark mt-2 mb-1">{box.name}</h3>
                <p className="text-dust text-[13px] mb-3 line-clamp-2">{box.short}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-bark">{fmt(box.price)}</span>
                    <span className="text-dust text-[12px] ml-1">{box.unit}</span>
                  </div>
                  {CART_ENABLED ? (
                    <button
                      className="text-[13px] font-semibold border border-pistachio text-pistachio px-3.5 py-1.5 rounded-full hover:bg-pistachio hover:text-ivory transition-colors"
                      onClick={(e) => { e.stopPropagation(); addToCart(box, box.presentations[0]) }}
                    >
                      Agregar
                    </button>
                  ) : (
                    <a
                      href={buildProductWA(box)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold bg-wa text-white px-3.5 py-1.5 rounded-full hover:opacity-90 transition-opacity"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Pedir
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => setPage('boxes')}
            className="border border-pistachio text-pistachio font-semibold px-8 py-3 rounded-full hover:bg-pistachio hover:text-ivory transition-colors text-[14px]"
          >
            Ver todas las boxes
          </button>
        </div>
      </section>

      {/* EVENTS BANNER */}
      <section className="bg-pistachio py-14 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-pistachio-light text-[11px] font-semibold uppercase tracking-widest mb-3">Cumpleaños · Casamientos · Empresas</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ivory mb-4 leading-tight">
              Pedidos para eventos y celebraciones
            </h2>
            <p className="text-ivory/75 text-[15px] leading-relaxed mb-6">
              Bandejas, boxes personalizadas y presentaciones especiales para agasajar en grande. Consultanos con anticipación y lo armamos a medida.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setPage('events')}
                className="bg-ivory text-pistachio font-semibold px-6 py-3 rounded-full hover:bg-almond transition-colors text-[14px]"
              >
                Consultar para mi evento
              </button>
              <a
                href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent('¡Hola! Quiero consultar sobre pedidos para un evento 🌿')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-wa text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-[14px]"
              >
                <IconWhatsApp size={15} />
                Escribinos
              </a>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-pistachio-mid">
            <img
              src="/images/products/caja-kilo.jpg"
              alt="Caja surtida para eventos"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* ARTESANOS / STORY */}
      <section className="py-16 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-honey mb-3">Quiénes somos</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-bark mb-5 leading-tight">
              Artesanos de<br />dulces árabes
            </h2>
            <p className="text-dust text-[15px] leading-relaxed mb-4">
              Preparamos cada pieza a mano, siguiendo recetas de familia que llegaron de Medio Oriente. Sin atajos. Con masa filo que laminamos nosotros, frutos secos de primera y el almíbar justo.
            </p>
            <p className="text-dust text-[15px] leading-relaxed mb-6">
              Estamos en Córdoba y vendemos por WhatsApp. Cada pedido se prepara artesanalmente para el día de entrega.
            </p>
            <button
              onClick={() => setPage('story')}
              className="text-pistachio font-semibold text-[14px] underline underline-offset-4 hover:text-bark transition-colors"
            >
              Conocé nuestra historia →
            </button>
          </div>
          <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-almond">
            <img
              src="/images/camila-baklava-shop.jpg"
              alt="Camila, fundadora de Baklawa House"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ENVÍOS */}
      <section className="bg-honey-light py-12 sm:py-14">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: <IconTruck size={24} />, title: 'Envíos en Córdoba', text: 'Hacemos envíos a domicilio dentro de Córdoba Capital. El costo se coordina por WhatsApp.' },
              { icon: <IconInstagram size={24} />, title: 'Seguinos en Instagram', text: 'Novedades, pedidos especiales y lo que vamos horneando, en @baklawa_house.' },
              { icon: <IconWhatsApp size={24} />, title: 'Pedido por WhatsApp', text: 'Todos los pedidos se coordinan por WhatsApp. Respondemos rápido.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="text-honey mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <p className="font-semibold text-bark mb-1">{item.title}</p>
                  <p className="text-dust text-[13px] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="py-16 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="text-bark">
            <IconInstagram size={22} />
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold text-bark">Seguinos en Instagram</h2>
            <a
              href="https://instagram.com/baklawa_house"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dust text-[13px] hover:text-honey transition-colors"
            >
              @baklawa_house
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
          {instagramImages.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/baklawa_house"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded-lg bg-almond group"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover group-hover:opacity-85 transition-opacity"
              />
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-parchment">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <SectionHeading tag="FAQ" title="Preguntas frecuentes" />
          <FAQ />
        </div>
      </section>

      {/* HORARIOS + CTA FINAL */}
      <section className="py-14 sm:py-16 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-bark mb-4">Horarios de atención</h2>
            <div className="space-y-2 text-[15px]">
              {[
                { days: 'Lunes a viernes', hours: '10:00 — 19:00' },
                { days: 'Sábados', hours: '10:00 — 14:00' },
                { days: 'Domingos', hours: 'Cerrado' },
              ].map((r) => (
                <div key={r.days} className="flex justify-between border-b border-almond pb-2">
                  <span className="text-dust">{r.days}</span>
                  <span className="font-medium text-bark">{r.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-dust text-[13px] mt-4">
              Los pedidos para el fin de semana se reciben hasta el viernes al mediodía.
            </p>
          </div>
          <div className="bg-pistachio rounded-2xl p-8 text-center">
            <h3 className="font-serif text-2xl font-semibold text-ivory mb-3">¿Ya sabés lo que querés?</h3>
            <p className="text-ivory/70 text-[14px] mb-6">Hacé tu pedido directamente por WhatsApp y te confirmamos en el momento.</p>
            <a
              href={`https://wa.me/${WA_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-wa text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              <IconWhatsApp />
              Hacé tu pedido
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── Catalog Page ─────────────────────────────────────────────────────────────

function CatalogPage({
  setPage,
  addToCart,
}: {
  setPage: (p: Page, product?: Product) => void
  addToCart: (p: Product, pres: string) => void
}) {
  const [filter, setFilter] = useState<'all' | 'individual' | 'box'>('all')
  const all = [...PRODUCTS, ...BOXES]
  const shown = filter === 'all' ? all : all.filter((p) => p.category === filter || (filter === 'box' && p.category === 'bandeja'))

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <button onClick={() => setPage('home')} className="flex items-center gap-1.5 text-dust text-[13px] hover:text-bark mb-4">
          <IconArrowLeft size={16} /> Inicio
        </button>
        <h1 className="font-serif text-4xl font-semibold text-bark">Catálogo</h1>
        <p className="text-dust mt-2 text-[15px]">Todos nuestros dulces árabes, preparados artesanalmente en Córdoba.</p>
      </div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {[
          { id: 'all', label: 'Todo' },
          { id: 'individual', label: 'Piezas individuales' },
          { id: 'box', label: 'Cakes y cajas' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id as typeof filter)}
            className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-colors ${
              filter === f.id
                ? 'bg-pistachio text-ivory border-pistachio'
                : 'border-almond text-dust hover:border-bark'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {shown.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onView={() => setPage('product', p)}
            onAdd={addToCart}
          />
        ))}
      </div>
    </main>
  )
}

// ─── Product Detail ───────────────────────────────────────────────────────────

function ProductPage({
  product,
  setPage,
  addToCart,
}: {
  product: Product
  setPage: (p: Page, product?: Product) => void
  addToCart: (p: Product, pres: string) => void
}) {
  const [selected, setSelected] = useState(product.presentations[0])
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product, selected)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
      <button
        onClick={() => window.history.length > 1 ? setPage('catalog') : setPage('home')}
        className="flex items-center gap-1.5 text-dust text-[13px] hover:text-bark mb-8"
      >
        <IconArrowLeft size={16} /> Volver al catálogo
      </button>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <div className="aspect-square rounded-2xl overflow-hidden bg-almond">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div>
          {product.tag && <Tag label={product.tag} variant={product.tag === 'Novedad' ? 'green' : 'honey'} />}
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-bark mt-3 mb-2">{product.name}</h1>
          <p className="text-dust text-[15px] leading-relaxed mb-6">{product.description}</p>

          {product.ingredients && (
            <div className="bg-parchment rounded-xl p-4 mb-6">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-dust mb-2">Ingredientes</p>
              <ul className="space-y-1">
                {product.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center gap-2 text-[13px] text-bark">
                    <span className="w-1.5 h-1.5 rounded-full bg-honey shrink-0" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-5">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-dust mb-2">Presentación</p>
            <div className="flex gap-2 flex-wrap">
              {product.presentations.map((p) => (
                <button
                  key={p}
                  onClick={() => setSelected(p)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-colors ${
                    selected === p
                      ? 'bg-pistachio text-ivory border-pistachio'
                      : 'border-almond text-dust hover:border-pistachio'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-almond rounded-full overflow-hidden">
              <button
                className="px-3 py-2 hover:bg-almond transition-colors text-bark"
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                <IconMinus />
              </button>
              <span className="px-4 font-semibold text-bark min-w-[2.5rem] text-center">{qty}</span>
              <button
                className="px-3 py-2 hover:bg-almond transition-colors text-bark"
                onClick={() => setQty(qty + 1)}
              >
                <IconPlus />
              </button>
            </div>
            <div>
              <span className="font-semibold text-2xl text-bark">{fmt(product.price * qty)}</span>
              <span className="text-dust text-[13px] ml-1.5">{product.unit}</span>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            {CART_ENABLED && (
              <button
                onClick={handleAdd}
                className={`flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all text-[14px] ${
                  added
                    ? 'bg-pistachio-light text-pistachio border border-pistachio'
                    : 'bg-pistachio text-ivory hover:bg-pistachio-mid'
                }`}
              >
                {added ? <><IconCheck size={16} /> Agregado</> : 'Agregar al carrito'}
              </button>
            )}
            <a
              href={buildProductWA(product, selected, qty)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-wa text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity text-[14px]"
            >
              <IconWhatsApp size={16} />
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

// ─── Boxes Page ───────────────────────────────────────────────────────────────

function BoxesPage({
  setPage,
  addToCart,
}: {
  setPage: (p: Page, product?: Product) => void
  addToCart: (p: Product, pres: string) => void
}) {
  return (
    <main className="py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <button onClick={() => setPage('home')} className="flex items-center gap-1.5 text-dust text-[13px] hover:text-bark mb-6">
          <IconArrowLeft size={16} /> Inicio
        </button>
        <SectionHeading
          tag="Para compartir"
          title="Cakes y cajas"
          sub="Armadas con cuidado, listas para regalar o llevar a la mesa."
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8">
        {BOXES.map((box, i) => (
          <article key={box.id} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-almond cursor-pointer group" onClick={() => setPage('product', box)}>
              <img src={box.image} alt={box.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              {box.tag && <Tag label={box.tag} variant="honey" />}
              <h2 className="font-serif text-3xl font-semibold text-bark mt-3 mb-2">{box.name}</h2>
              <p className="text-dust mb-1">{fmt(box.price)} <span className="text-[13px]">{box.unit}</span></p>
              <p className="text-dust text-[15px] leading-relaxed mb-5">{box.description}</p>
              {box.ingredients && (
                <ul className="space-y-1 mb-6">
                  {box.ingredients.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-dust">
                      <IconCheck size={14} /> {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex gap-3 flex-wrap">
                {CART_ENABLED ? (
                  <button
                    onClick={() => addToCart(box, box.presentations[0])}
                    className="bg-pistachio text-ivory font-semibold px-6 py-3 rounded-full hover:bg-pistachio-mid transition-colors text-[14px]"
                  >
                    Agregar al carrito
                  </button>
                ) : (
                  <a
                    href={buildProductWA(box)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-wa text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-[14px]"
                  >
                    <IconWhatsApp size={16} />
                    Pedir por WhatsApp
                  </a>
                )}
                <button
                  onClick={() => setPage('product', box)}
                  className="border border-pistachio text-pistachio font-semibold px-6 py-3 rounded-full hover:bg-pistachio hover:text-ivory transition-colors text-[14px]"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-16 bg-honey-light rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="font-serif text-2xl font-semibold text-bark mb-2">¿Es para regalar? Sumale una dedicatoria.</h3>
          <p className="text-dust text-[14px]">Indicanos el texto al hacer el pedido y lo incluimos sin cargo adicional.</p>
        </div>
        <a
          href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent('¡Hola! Quiero pedir una box con dedicatoria 🌿')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-wa text-white font-semibold px-6 py-3 rounded-full whitespace-nowrap hover:opacity-90 transition-opacity text-[14px] shrink-0"
        >
          <IconWhatsApp size={16} />
          Consultanos
        </a>
      </div>
    </main>
  )
}

// ─── Cart Page ────────────────────────────────────────────────────────────────

function CartPage({
  cart,
  updateQty,
  setPage,
}: {
  cart: CartItem[]
  updateQty: (id: string, pres: string, qty: number) => void
  setPage: (p: Page) => void
}) {
  const total = cart.reduce((s, i) => s + i.product.price * i.quantity, 0)

  if (cart.length === 0) {
    return (
      <main className="max-w-[600px] mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-5">🌿</div>
        <h2 className="font-serif text-2xl font-semibold text-bark mb-3">Tu carrito está vacío</h2>
        <p className="text-dust mb-8">Elegí tus favoritos y volvé por acá.</p>
        <button
          onClick={() => setPage('catalog')}
          className="bg-pistachio text-ivory font-semibold px-8 py-3.5 rounded-full hover:bg-pistachio-mid transition-colors"
        >
          Ver catálogo
        </button>
      </main>
    )
  }

  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-3xl font-semibold text-bark mb-8">Tu carrito</h1>
      <div className="grid md:grid-cols-[1fr_320px] gap-8">
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.product.id + item.presentation} className="flex gap-4 bg-white rounded-2xl p-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-almond shrink-0">
                <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-bark">{item.product.name}</p>
                    <p className="text-dust text-[13px]">{item.presentation}</p>
                  </div>
                  <button
                    onClick={() => updateQty(item.product.id, item.presentation, 0)}
                    className="text-dust hover:text-bark transition-colors"
                  >
                    <IconX size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-almond rounded-full overflow-hidden">
                    <button
                      className="px-2.5 py-1.5 hover:bg-almond transition-colors"
                      onClick={() => updateQty(item.product.id, item.presentation, item.quantity - 1)}
                    >
                      <IconMinus size={14} />
                    </button>
                    <span className="px-3 text-[14px] font-semibold">{item.quantity}</span>
                    <button
                      className="px-2.5 py-1.5 hover:bg-almond transition-colors"
                      onClick={() => updateQty(item.product.id, item.presentation, item.quantity + 1)}
                    >
                      <IconPlus size={14} />
                    </button>
                  </div>
                  <span className="font-semibold text-bark">{fmt(item.product.price * item.quantity)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-parchment rounded-2xl p-6 h-fit sticky top-24">
          <h3 className="font-serif text-xl font-semibold text-bark mb-4">Resumen</h3>
          <div className="space-y-2 mb-4">
            {cart.map((i) => (
              <div key={i.product.id + i.presentation} className="flex justify-between text-[13px]">
                <span className="text-dust">{i.product.name} ×{i.quantity}</span>
                <span className="text-bark font-medium">{fmt(i.product.price * i.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-almond pt-3 flex justify-between font-semibold text-bark mb-5">
            <span>Total</span>
            <span className="text-xl">{fmt(total)}</span>
          </div>
          <p className="text-dust text-[12px] mb-4">Envío a coordinar por WhatsApp según zona.</p>
          <div className="space-y-2.5">
            <button
              onClick={() => setPage('checkout')}
              className="w-full bg-pistachio text-ivory font-semibold py-3.5 rounded-full hover:bg-pistachio-mid transition-colors text-[14px]"
            >
              Continuar con el pedido
            </button>
            <a
              href={buildWAMessage(cart)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-wa text-white font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity text-[14px]"
            >
              <IconWhatsApp size={16} />
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

// ─── Checkout Page ────────────────────────────────────────────────────────────

function CheckoutPage({
  cart,
  setPage,
  setOrderNum,
  clearCart,
}: {
  cart: CartItem[]
  setPage: (p: Page) => void
  setOrderNum: (n: string) => void
  clearCart: () => void
}) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '', date: '', notes: '',
  })
  const total = cart.reduce((s, i) => s + i.product.price * i.quantity, 0)

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const num = `BH-${Date.now().toString(36).toUpperCase().slice(-5)}`
    setOrderNum(num)
    clearCart()
    setPage('confirmation')
  }

  const handleWA = () => {
    const href = buildWAMessage(cart, `Envío a ${form.address || 'coordinar'}`, form.date, form.notes)
    window.open(href, '_blank')
  }

  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-12">
      <button onClick={() => setPage('cart')} className="flex items-center gap-1.5 text-dust text-[13px] hover:text-bark mb-6">
        <IconArrowLeft size={16} /> Volver al carrito
      </button>
      <h1 className="font-serif text-3xl font-semibold text-bark mb-8">Finalizar pedido</h1>

      <div className="grid md:grid-cols-[1fr_300px] gap-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-dust block mb-1.5">Nombre *</span>
              <input required value={form.name} onChange={(e) => set('name', e.target.value)}
                className="w-full border border-almond rounded-xl px-4 py-3 text-[14px] bg-white focus:outline-none focus:border-pistachio transition-colors" placeholder="Tu nombre" />
            </label>
            <label className="block">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-dust block mb-1.5">Teléfono *</span>
              <input required value={form.phone} onChange={(e) => set('phone', e.target.value)}
                className="w-full border border-almond rounded-xl px-4 py-3 text-[14px] bg-white focus:outline-none focus:border-pistachio transition-colors" placeholder="351 000-0000" />
            </label>
          </div>
          <label className="block">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-dust block mb-1.5">Email</span>
            <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)}
              className="w-full border border-almond rounded-xl px-4 py-3 text-[14px] bg-white focus:outline-none focus:border-pistachio transition-colors" placeholder="tu@email.com" />
          </label>

          <label className="block">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-dust block mb-1.5">Dirección de envío *</span>
            <input required value={form.address} onChange={(e) => set('address', e.target.value)}
              className="w-full border border-almond rounded-xl px-4 py-3 text-[14px] bg-white focus:outline-none focus:border-pistachio transition-colors" placeholder="Calle, número, barrio" />
          </label>

          <label className="block">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-dust block mb-1.5">Fecha deseada de entrega</span>
            <input type="date" value={form.date} onChange={(e) => set('date', e.target.value)}
              className="w-full border border-almond rounded-xl px-4 py-3 text-[14px] bg-white focus:outline-none focus:border-pistachio transition-colors" />
          </label>

          <label className="block">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-dust block mb-1.5">Observaciones / dedicatoria</span>
            <textarea value={form.notes} onChange={(e) => set('notes', e.target.value)} rows={3}
              className="w-full border border-almond rounded-xl px-4 py-3 text-[14px] bg-white focus:outline-none focus:border-pistachio transition-colors resize-none"
              placeholder="¿Es para regalar? ¿Alguna preferencia especial?" />
          </label>

          <div className="space-y-3 pt-2">
            <button type="submit"
              className="w-full bg-pistachio text-ivory font-semibold py-4 rounded-full hover:bg-pistachio-mid transition-colors text-[15px]"
            >
              Confirmar pedido
            </button>
            <button type="button" onClick={handleWA}
              className="w-full flex items-center justify-center gap-2 bg-wa text-white font-semibold py-4 rounded-full hover:opacity-90 transition-opacity text-[15px]"
            >
              <IconWhatsApp />
              Finalizar por WhatsApp
            </button>
          </div>
        </form>

        <div className="bg-parchment rounded-2xl p-5 h-fit sticky top-24">
          <h3 className="font-serif text-lg font-semibold text-bark mb-3">Tu pedido</h3>
          <div className="space-y-2 mb-3">
            {cart.map((i) => (
              <div key={i.product.id + i.presentation} className="flex justify-between text-[13px]">
                <span className="text-dust">{i.product.name} ×{i.quantity}</span>
                <span className="font-medium">{fmt(i.product.price * i.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-almond pt-2 flex justify-between font-semibold">
            <span>Total</span>
            <span>{fmt(total)}</span>
          </div>
          <p className="text-dust text-[11px] mt-3 leading-relaxed">El costo de envío se acuerda por WhatsApp según la zona de entrega.</p>
        </div>
      </div>
    </main>
  )
}

// ─── Confirmation ──────────────────────────────────────────────────────────────

function ConfirmationPage({ orderNum, setPage }: { orderNum: string; setPage: (p: Page) => void }) {
  return (
    <main className="max-w-[560px] mx-auto px-4 py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-pistachio-light flex items-center justify-center mx-auto mb-5">
        <span className="text-pistachio"><IconCheck size={28} /></span>
      </div>
      <h1 className="font-serif text-3xl font-semibold text-bark mb-3">¡Pedido recibido!</h1>
      <p className="text-dust mb-2">Número de pedido: <strong className="text-bark">{orderNum}</strong></p>
      <p className="text-dust text-[15px] leading-relaxed mb-8">
        Te vamos a contactar pronto para confirmar los detalles y coordinar la entrega.
        Si tenés dudas, escribinos por WhatsApp.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <button
          onClick={() => setPage('home')}
          className="border border-pistachio text-pistachio font-semibold px-7 py-3 rounded-full hover:bg-pistachio hover:text-ivory transition-colors"
        >
          Volver al inicio
        </button>
        <a
          href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`Hola, hice un pedido (${orderNum}) y quiero hacer un seguimiento 🌿`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-wa text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          <IconWhatsApp size={16} />
          Seguir por WhatsApp
        </a>
      </div>
    </main>
  )
}

// ─── Events Page ──────────────────────────────────────────────────────────────

function EventsPage({ setPage }: { setPage: (p: Page) => void }) {
  const [form, setForm] = useState({ name: '', phone: '', event: '', guests: '', date: '', notes: '' })
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleWA = (e: FormEvent) => {
    e.preventDefault()
    const msg = [
      '¡Hola! Quiero consultar para un evento 🌿',
      `Nombre: ${form.name}`,
      `Teléfono: ${form.phone}`,
      `Tipo de evento: ${form.event}`,
      `Cantidad de personas: ${form.guests}`,
      `Fecha: ${form.date}`,
      form.notes ? `Notas: ${form.notes}` : '',
    ].filter(Boolean).join('\n')
    window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <main>
      <div className="bg-pistachio py-16 mb-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <button onClick={() => setPage('home')} className="flex items-center gap-1.5 text-ivory/60 text-[13px] hover:text-ivory mb-6">
            <IconArrowLeft size={16} /> Inicio
          </button>
          <p className="text-pistachio-light text-[11px] font-semibold uppercase tracking-widest mb-3">Cumpleaños · Casamientos · Baby showers · Eventos corporativos</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-ivory mb-4">Pedidos para eventos</h1>
          <p className="text-ivory/70 text-[16px] max-w-lg">Bandejas, boxes y presentaciones especiales para agasajar en grande. Consultanos con anticipación y lo armamos a medida.</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
        <div className="grid md:grid-cols-[1fr_480px] gap-12 items-start">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-bark mb-6">¿Qué ofrecemos para eventos?</h2>
            <div className="space-y-4">
              {[
                { title: 'Bandejas para servir', desc: 'De 30 a 100+ piezas, presentadas en bandeja con etiqueta Baklawa House. Perfectas para cumpleaños y reuniones.' },
                { title: 'Boxes personalizadas', desc: 'Cajas individuales o grupales con armado a elección y dedicatoria. Ideales como regalo corporativo o souvenir.' },
                { title: 'Mesas dulces árabes', desc: 'Presentación completa con variedad de dulces, ambientación y tarjetas. Para casamientos y eventos especiales.' },
                { title: 'Kits para regalar', desc: 'Box + té árabe + tarjeta personalizada. Completos, elegantes, listos para entregar.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-honey mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-bark">{item.title}</p>
                    <p className="text-dust text-[13px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-almond rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src="/images/products/caja-medio.jpg"
                alt="Caja surtida para eventos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-parchment rounded-2xl p-7">
            <h2 className="font-serif text-xl font-semibold text-bark mb-5">Consultanos para tu evento</h2>
            <form onSubmit={handleWA} className="space-y-4">
              {[
                { id: 'name', label: 'Nombre', placeholder: 'Tu nombre', type: 'text', required: true },
                { id: 'phone', label: 'Teléfono / WhatsApp', placeholder: '351 000-0000', type: 'tel', required: true },
                { id: 'event', label: 'Tipo de evento', placeholder: 'Cumpleaños, casamiento, etc.', type: 'text', required: true },
                { id: 'guests', label: 'Cantidad de personas', placeholder: 'Aprox. 50 personas', type: 'text', required: false },
                { id: 'date', label: 'Fecha del evento', placeholder: '', type: 'date', required: false },
              ].map((f) => (
                <label key={f.id} className="block">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-dust block mb-1.5">{f.label}{f.required ? ' *' : ''}</span>
                  <input
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={(form as Record<string, string>)[f.id]}
                    onChange={(e) => set(f.id, e.target.value)}
                    className="w-full border border-almond rounded-xl px-4 py-2.5 text-[14px] bg-white focus:outline-none focus:border-pistachio transition-colors"
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-dust block mb-1.5">Notas</span>
                <textarea
                  value={form.notes}
                  onChange={(e) => set('notes', e.target.value)}
                  rows={3}
                  placeholder="¿Tenés alguna idea o pedido especial?"
                  className="w-full border border-almond rounded-xl px-4 py-2.5 text-[14px] bg-white focus:outline-none focus:border-pistachio transition-colors resize-none"
                />
              </label>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-wa text-white font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity mt-2"
              >
                <IconWhatsApp />
                Enviar consulta por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

// ─── Story Page ───────────────────────────────────────────────────────────────

function StoryPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <main>
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-16">
        <button onClick={() => setPage('home')} className="flex items-center gap-1.5 text-dust text-[13px] hover:text-bark mb-8">
          <IconArrowLeft size={16} /> Inicio
        </button>

        <div className="mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-honey mb-3">Quiénes somos</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-bark leading-tight mb-6">
            Nuestra historia
          </h1>
          <p className="text-dust text-[16px] leading-relaxed max-w-xl">
            Artesanos de dulces árabes en Córdoba, Argentina. Preparamos cada pieza a mano, siguiendo recetas de familia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-almond">
            <img
              src="/images/camila-baklava-shop.jpg"
              alt="Camila de Baklawa House"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-almond">
            <img
              src="/images/products/baklava-cake.jpg"
              alt="Dulces árabes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-5">
          {[
            'Baklawa House nació de un amor de familia por los dulces árabes. Las recetas llegaron desde Medio Oriente y fueron pasando de generación en generación, adaptadas con ingredientes de acá.',
            'Cada pieza se prepara a mano el mismo día del pedido. Usamos masa filo de calidad, frutos secos seleccionados —pistacho iraní, nuez, almendra— y un almíbar que balanceamos para que complemente sin tapar el sabor del relleno.',
            'Estamos en Córdoba y vendemos por WhatsApp. Hacemos envíos dentro de la ciudad.',
            'Si querés conocernos mejor o tenés alguna duda sobre cómo trabajamos, escribinos. Respondemos siempre.',
          ].map((p, i) => (
            <p key={i} className="text-dust text-[15px] leading-relaxed">{p}</p>
          ))}
        </div>

        <div className="mt-12 bg-pistachio rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-semibold text-ivory mb-2">¿Querés saber más?</h3>
            <p className="text-ivory/70 text-[14px]">Seguinos en Instagram y escribinos por WhatsApp. Estamos cerca.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://instagram.com/baklawa_house"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 text-ivory font-semibold px-5 py-3 rounded-full hover:bg-white/20 transition-colors text-[14px]"
            >
              <IconInstagram size={17} />
              Instagram
            </a>
            <a
              href={`https://wa.me/${WA_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-wa text-white font-semibold px-5 py-3 rounded-full hover:opacity-90 transition-opacity text-[14px]"
            >
              <IconWhatsApp size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-pistachio text-ivory/80 pt-12 pb-8 mt-0">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl font-semibold text-ivory mb-2">Baklawa House</h3>
            <p className="text-ivory/60 text-[13px] leading-relaxed mb-4">
              Artesanos de dulces árabes.<br />Córdoba, Argentina.
            </p>
            <a
              href="https://instagram.com/baklawa_house"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ivory/60 hover:text-ivory text-[13px] transition-colors"
            >
              <IconInstagram size={15} /> @baklawa_house
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-ivory/40 mb-3">Menú</p>
            <div className="space-y-2">
              {[
                { label: 'Dulces', page: 'catalog' as Page },
                { label: 'Boxes', page: 'boxes' as Page },
                { label: 'Para eventos', page: 'events' as Page },
                { label: 'Nuestra historia', page: 'story' as Page },
              ].map((l) => (
                <button key={l.page} onClick={() => setPage(l.page)}
                  className="block text-[13px] text-ivory/60 hover:text-ivory transition-colors">
                  {l.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-ivory/40 mb-3">Horarios</p>
            <div className="space-y-1 text-[13px] text-ivory/60">
              <p>Lun a vie — 10:00 a 19:00</p>
              <p>Sábados — 10:00 a 14:00</p>
              <p>Domingos — Cerrado</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-ivory/40 mb-3">Contacto</p>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${WA_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-ivory/60 hover:text-ivory transition-colors"
              >
                <IconWhatsApp size={14} /> WhatsApp
              </a>
              <a
                href="https://instagram.com/baklawa_house"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-ivory/60 hover:text-ivory transition-colors"
              >
                <IconInstagram size={14} /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-ivory/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-ivory/40">
          <p>© {new Date().getFullYear()} Baklawa House — Córdoba, Argentina</p>
          <p>
            Powered by{' '}
            <a
              href="https://www.koozco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/55 hover:text-ivory transition-colors underline underline-offset-2"
            >
              Koozco Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [cart, setCart] = useState<CartItem[]>([])
  const [selected, setSelected] = useState<Product | null>(null)
  const [orderNum, setOrderNum] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0)

  const navigate = (p: Page, product?: Product) => {
    if (!CART_ENABLED && (p === 'cart' || p === 'checkout' || p === 'confirmation')) {
      setPage('catalog')
      return
    }
    if (product) setSelected(product)
    setPage(p)
  }

  const addToCart = (product: Product, presentation: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id && i.presentation === presentation)
      if (existing) return prev.map((i) => i === existing ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { product, quantity: 1, presentation }]
    })
  }

  const updateQty = (productId: string, pres: string, qty: number) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((i) => !(i.product.id === productId && i.presentation === pres)))
    } else {
      setCart((prev) => prev.map((i) => i.product.id === productId && i.presentation === pres ? { ...i, quantity: qty } : i))
    }
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar setPage={navigate} cartCount={cartCount} />

      {page === 'home' && <HomePage setPage={navigate} addToCart={addToCart} />}
      {page === 'catalog' && <CatalogPage setPage={navigate} addToCart={addToCart} />}
      {page === 'product' && selected && <ProductPage product={selected} setPage={navigate} addToCart={addToCart} />}
      {page === 'boxes' && <BoxesPage setPage={navigate} addToCart={addToCart} />}
      {CART_ENABLED && page === 'cart' && <CartPage cart={cart} updateQty={updateQty} setPage={setPage} />}
      {CART_ENABLED && page === 'checkout' && (
        <CheckoutPage
          cart={cart}
          setPage={setPage}
          setOrderNum={setOrderNum}
          clearCart={() => setCart([])}
        />
      )}
      {CART_ENABLED && page === 'confirmation' && <ConfirmationPage orderNum={orderNum} setPage={setPage} />}
      {page === 'events' && <EventsPage setPage={setPage} />}
      {page === 'story' && <StoryPage setPage={setPage} />}

      <Footer setPage={navigate} />
      <WAFab cart={cart} />
    </div>
  )
}
