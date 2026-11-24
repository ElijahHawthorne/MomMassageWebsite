import { site } from '@/site.config';
import JsonLd from '@/components/JsonLd';
import ContactForm from '@/components/ContactForm';
import PhotoSlideshow from '@/components/PhotoSlideshow';


const tel = site.phone.replace(/[^\d+]/g, '');

export default function Home() {
  return (
    <>
      <JsonLd />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <header className="border-b border-gold-200 bg-gold-50/90">
        <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#top" className="shrink-0 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-600">
            <img
              src="/images/logo/logo-deep-lavender-no-tagline.svg"
              alt={site.name}
              width={238}
              height={206}
              className="h-16 w-auto sm:h-24"
            />
          </a>
          <ul className="hidden gap-8 text-base font-medium sm:flex lg:gap-10 lg:text-lg">
            <li><a className="hover:underline" href="#services">Services</a></li>
            <li><a className="hover:underline" href="#about">About</a></li>
            <li><a className="hover:underline" href="#visit">Visit</a></li>
            <li><a className="hover:underline" href="#contact">Contact</a></li>
          </ul>
          <a
            href={site.bookingUrl}
            className="rounded-full bg-lavender-700 px-4 py-2 text-sm font-medium text-white lg:px-6 lg:py-2.5 lg:text-base hover:bg-lavender-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-600 focus-visible:ring-offset-2"
          >
            Book now
          </a>
        </nav>
      </header>

      <main id="main">
        
        <section id="top" className="relative">
          <PhotoSlideshow
    images={['/images/pic1.jpeg', '/images/pic2.jpeg']}
  />
            <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center text-white sm:py-28">
    <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{site.tagline}</h1>
    <p className="mx-auto mt-4 max-w-2xl text-lg">{site.serviceArea}</p>
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <a
        href={site.bookingUrl}
        className="rounded-full bg-gold-300 px-6 py-3 font-medium text-lavender-900 hover:bg-gold-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-lavender-900"
      >
        Book a session
      </a>
      <a
        href={`tel:${tel}`}
        className="rounded-full border border-white px-6 py-3 font-medium text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Call {site.phone}
      </a>
    </div>
  </div>
        </section>

        <section id="services" className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="font-serif text-3xl font-semibold">Services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((s) => (
              <article key={s.name} className="rounded-xl border border-gold-200 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-lavender-700">{s.description}</p>
                <ul className="mt-4 space-y-1 text-sm">
                  {s.prices.map((p) => (
                    <li key={p.length} className="flex justify-between border-t border-gold-200 pt-1">
                      <span>{p.length}</span>
                      <span className="font-medium">{p.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-lavender-100">
          <div className="mx-auto max-w-3xl px-4 py-16">
            <h2 className="font-serif text-3xl font-semibold">About {site.therapist}</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              {site.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-sm text-lavender-700">License: {site.licenseNumber}</p>
          </div>
        </section>

        <section id="visit" className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="font-serif text-3xl font-semibold">Visit</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold">Location</h3>
              <address className="mt-2 not-italic">
                {site.address.street}<br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
              <p className="mt-4 text-lavender-700">{site.policies}</p>
            </div>
            <div>
              <h3 className="font-semibold">Hours</h3>
              <ul className="mt-2 space-y-1">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4 border-b border-gold-200 pb-1">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gold-100">
          <div className="mx-auto max-w-3xl px-4 py-16">
            <h2 className="font-serif text-3xl font-semibold">Get in touch</h2>
            <p className="mt-3">
              Call <a className="underline" href={`tel:${tel}`}>{site.phone}</a> or email{' '}
              <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-lavender-400 py-8 text-center text-sm text-lavender-900">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </footer>
    </>
  );
}
