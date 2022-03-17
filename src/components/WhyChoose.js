import React from "react"

export const caracteristicas = [
  {
    name: 'Descubre productos exclusivos',
    description:
      'Contamos con la más amplia variedad de productos únicos en el mercado.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>

  },
  {
    name: 'Compra al por mayor',
    description:
      'Superando en tu compra el monto de $10000.00 ,accederas a descuentos especiales .',
    icon:<svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    name: 'Ayuda a tu comunidad',
    description:
      "Al comprar nuestros productos, estás ayudando a hacer crecer nuestro ecosistema alimentario local, creando empleos y apoyando a familias y empresarios en su comunidad.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
  },
  {
    name: 'Disfruta de la mejor calidad',
    description:
      'Solo ofrecemos productos que cumplan con los estandares más altos de calidad.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
  },
]

export default function PorqueElejirnos() {
  return (
    <div className="py-12 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-4xl font-bold leading-10 tracking-tight text-center text-gray-900 font-cormorant">
            Porque elejir <span className="text-[#FF8126] leading-10">Pet Shop FullStack</span>
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {caracteristicas.map((caracteristicas) => (
              <div key={caracteristicas.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-10 h-10">{caracteristicas.icon}</div>

                  <p className="ml-16 text-lg font-bold leading-6 text-gray-900 font-poppins">{caracteristicas.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 font-poppins">{caracteristicas.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}