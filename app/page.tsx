'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'eventos' | 'libro' | 'biblioteca';

interface MediaItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag?: string;
  price?: string;
  aymaraTag?: string;
}

export default function ElAltoAesthetics() {
  const [activeTab, setActiveTab] = useState<TabType>('eventos');

  const datosColectivo = {
    nombre: "EAAE",
    largo: "El Alto Aesthetics",
    contacto: {
      correo: "elalto.aesthetics@gmail.com",
      instagram: "@elalto_aesthetics",
    }
  };

  const content: Record<TabType, MediaItem[]> = {
    eventos: [
      {
        id: 'ev-poster',
        title: 'Afiche Oficial: Célula de la Palabra',
        description: 'Convocatoria oficial para el Micrófono Abierto en el Puente Río Seco. Transmisión directa vía TikTok Live.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.01.05 PM0.jpeg',
        tag: 'Convocatoria',
        aymaraTag: 'ARUSKIPAWI'
      },
      {
        id: 'ev-1',
        title: 'Célula de la Palabra: Micrófono Abierto',
        description: 'Movilización nocturna y agitación en el territorio. Ocupación del espacio público mediante la palabra viva.',
        image: '/images/WhatsApp Image 2026-06-11 at 10.53.45 PM45.jpeg',
        tag: 'Acción de Calle',
        aymaraTag: 'JAWILLAWI'
      },
      {
        id: 'ev-2',
        title: 'Soporte Técnico y Transmisión Glitch',
        description: 'Montaje de dispositivos móviles para la difusión simultánea y autónoma en plataformas digitales.',
        image: '/images/WhatsApp Image 2026-06-11 at 10.53.45 PM4.jpeg',
        tag: 'Transmisión',
        aymaraTag: 'CH\'IXI DIGITAL'
      },
      {
        id: 'ev-3',
        title: 'Logística Rebelde y Parlante Vivo',
        description: 'Instalación de sonido y despliegue de wiphalas en la base del Puente Río Seco.',
        image: '/images/WhatsApp Image 2026-06-11 at 10.53.45 PM3.jpeg',
        tag: 'Parlante Vivo',
        aymaraTag: 'AMUYT\'AWI'
      },
      {
        id: 'ev-4',
        title: 'Mesa de Debate / Contra-Feria',
        description: 'Intervención crítica y paneles de discusión sobre la producción impresa independiente en las calles.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.01.03 PM16.jpeg',
        tag: 'Exposición',
        aymaraTag: 'YATIQAWI'
      },
      {
        id: 'ev-5',
        title: 'Círculo de la Palabra Nocturno',
        description: 'Asamblea operativa y debate grupal bajo iluminación móvil. Organización desde las bases.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.01.04 PM20.jpeg',
        tag: 'Célula Operativa',
        aymaraTag: 'TANTACHAWI'
      },
      {
        id: 'ev-6',
        title: 'Presentación del Libro con la Comunidad',
        description: 'Retrato de los colaboradores sosteniendo la edición impresa independiente al cierre del mitin.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.01.03 PM17.jpeg',
        tag: 'Celebración',
        aymaraTag: 'LURAWI'
      },
      {
        id: 'ev-7',
        title: 'Gráfica Identitaria en Escenario',
        description: 'Intervención visual del escenario utilizando los lienzos morados de El Alto Aesthetics.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.01.05 PM21.jpeg',
        tag: 'Estética Andina',
        aymaraTag: 'SAMPA CH\'IXI'
      }
    ],
    libro: [
      {
        id: 'lib-1',
        title: 'Libro Oficial: El Alto Aesthetics',
        description: 'Compendio impreso de análisis visual, arquitectónico y social sobre el desarrollo urbano alteño.',
        image: '/images/WhatsApp Image 2026-06-11 at 10.42.45 PM.jpeg',
        price: '60 Bs',
        tag: 'Publicación',
        aymaraTag: 'PANKA'
      },
      {
        id: 'lib-2',
        title: 'Altar Visual y Fotolibro objeto',
        description: 'Presentación simbólica de la obra física rodeada de billetes rituales de alasitas y hojas de coca.',
        image: '/images/00000.jpeg',
        price: '60 Bs',
        tag: 'Arte Objeto',
        aymaraTag: 'REVOLUCIÓN'
      },
      {
        id: 'lib-3',
        title: 'Registro de Portada con Brillos',
        description: 'Primer plano del fotolibro mostrando los acabados de impresión independientes y el diseño técnico.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.01.03 PM18.jpeg',
        price: '60 Bs',
        tag: 'Tapa Oficial',
        aymaraTag: 'UYA'
      },
      {
        id: 'lib-4',
        title: 'Puesto Autónomo / Feria 16 de Julio',
        description: 'Distribución directa y comercialización sin intermediarios en las calles alteñas.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.00.59 PM9.jpeg',
        price: 'Alteñización',
        tag: 'Feria',
        aymaraTag: 'ALASITA'
      }
    ],
    biblioteca: [
      {
        id: 'bib-reinaga',
        title: 'Pase de Lectura: La Revolución India',
        description: 'Volante y credencial autónoma editada por EAAE para el círculo de estudio sobre Fausto Reinaga en Altusa.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.01.02 PM13_2.jpeg',
        tag: 'Fanzinoteca',
        aymaraTag: 'REINAGA VIVE'
      },
      {
        id: 'bib-pixel',
        title: 'Iconografía Cyber-Andina: Qullatron',
        description: 'Mapeo pixel art de deidades tiwanakotas, la wiphala y robótica de baja tecnología aplicada al imaginario local.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.01.04 PM.jpeg',
        tag: 'Pixel Art',
        aymaraTag: 'AMUYU BOT'
      },
      {
        id: 'bib-llame',
        title: 'Apropiación Visual: ¿Quién Mató a la Llamita Blanca?',
        description: 'Intervención y collage sobre la gráfica cinematográfica popular, resignificando la estética de la calle.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.01.05 PM.jpeg',
        tag: 'Sátira Visual',
        aymaraTag: 'CHALLWA'
      },
      {
        id: 'bib-1',
        title: 'Puesto de Diseño de Casas - 20 BS',
        description: 'Intervención callejera para democratizar y desacralizar los planos de arquitectura técnica.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.00.58 PM8.jpeg',
        tag: 'Acción Económica',
        aymaraTag: 'UTA CHANI'
      },
      {
        id: 'bib-2',
        title: 'Folleto Impreso: La Revolución India',
        description: 'Material histórico distribuido originalmente en los círculos de lectura del colectivo.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.01.02 PM13.jpeg',
        tag: 'Fanzinoteca',
        aymaraTag: 'AMUYT\'A'
      },
      {
        id: 'bib-3',
        title: 'Afiche: Moda para Niñas Saturn',
        description: 'Registro de piezas de diseño gráfico e indumentaria futurista extraídas del archivo digital.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.00.59 PM99.jpeg',
        tag: 'Gráfica Digital',
        aymaraTag: 'MACHQA'
      },
      {
        id: 'bib-4',
        title: 'Obra Iconográfica: Serpiente Pixelada',
        description: 'Diseño vectorial y pixel art experimental basado en deidades tiwanakotas.',
        image: '/images/WhatsApp Image 2026-06-11 at 11.01.04 PM22.jpeg',
        tag: 'Contra-Cultura',
        aymaraTag: 'KATARI'
      }
    ]
  };

  const actividadesPasadas = [
    {
      id: 'past-1',
      title: 'Logística de Campo y Despliegue',
      description: 'Fotografía grupal junto al transporte rumbo a las activaciones y ferias regionales.',
      image: '/images/000.jpeg',
      tag: 'Archivo Histórico',
      fecha: '2026'
    },
    {
      id: 'past-2',
      title: 'Estéticas de las Fraternidades Folclóricas',
      description: 'Análisis y registro de color, indumentaria e identidad de los bloques de morenos y achachis.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.45.05 PM_2.jpeg',
      tag: 'Identidad Chola',
      fecha: '2026'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-mono antialiased selection:bg-yellow-400 selection:text-stone-900 relative p-3 sm:p-4 overflow-x-hidden">
      
      {/* SECCIÓN REGISTRO - OCULTA EN MÓVILES CHICOS PARA EVITAR DESBORDES */}
      <div className="absolute top-4 right-4 text-[10px] text-stone-600 select-none pointer-events-none hidden lg:block">
        FANZINE DIGITAL // REV_026 <br />
        CORTES: +0.23mm _ COLLANIZACIÓN <br />
        ██████████████████ 100%
      </div>

      {/* RECTAS DE IMPRENTA - LÍNEAS DE CORTE GENERAL */}
      <div className="absolute top-0 left-6 sm:left-12 w-[1px] h-full bg-stone-800/40 pointer-events-none" />
      <div className="absolute top-0 right-6 sm:right-12 w-[1px] h-full bg-stone-800/40 pointer-events-none" />

      {/* MANIFIESTO APERTURA */}
      <section className="max-w-7xl mx-auto border-4 border-stone-100 bg-black p-4 sm:p-8 my-2 sm:my-4 shadow-[5px_5px_0px_0px_#dc2626] sm:shadow-[8px_8px_0px_0px_#dc2626]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-1 items-center">
          <div className="lg:col-span-2 space-y-3">
            <div className="inline-block bg-red-600 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 py-0.5">
              MANIFIESTO // CÉLULA DE LA PALABRA
            </div>
            <h2 className="text-2xl sm:text-5xl font-black uppercase tracking-tighter text-yellow-400 font-sans leading-none italic">
              ALTEÑIZACIÓN O BARBARIE.
            </h2>
            <p className="text-[11px] sm:text-sm leading-relaxed max-w-2xl text-stone-300">
              No somos una agencia, no somos una corporación. Documentamos la estética chola contemporánea, los cholets, la feria y la resistencia visual desde el asfalto y el adoquín. Esta plataforma es un registro vivo de nuestra ocupación territorial. Una contra-narrativa <span className="text-fuchsia-400 font-bold">ch\'ixi</span>.
            </p>
          </div>
          <div className="border-2 border-dashed border-stone-700 p-2 text-center bg-stone-950 hidden sm:block">
            <span className="text-2xl block font-sans font-black tracking-tighter text-stone-500">★ ★ ★</span>
            <p className="text-[9px] text-stone-400 uppercase tracking-widest font-bold">EL ALTO AESTHETICS COLECTIVO</p>
          </div>
        </div>
      </section>

      {/* CABECERA BRUTALISTA CON SCROLL HORIZONTAL FLUIDO EN MÓVILES */}
      <header className="max-w-7xl mx-auto bg-stone-950 border-4 border-stone-100 mt-4 sm:mt-8 sticky top-2 z-40 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="p-3 sm:p-4 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3">
          <div>
            <h1 className="text-xl sm:text-4xl font-black uppercase tracking-tight text-stone-100 font-sans leading-none">
              {datosColectivo.largo.toUpperCase()}
            </h1>
            <p className="text-[9px] text-yellow-400 font-bold tracking-wider mt-1 uppercase">
              [ Timeline: Cholonización → Alteñización → Hoy ]
            </p>
          </div>
          
          {/* Barra de Navegación con Scroll Táctil Seguro en Android/iOS */}
          <nav className="flex overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0 scrollbar-none space-x-1 bg-stone-900 md:bg-transparent border-t-2 border-stone-800 md:border-0 pt-2 md:pt-0">
            <div className="flex bg-stone-900 border-2 border-stone-100 p-0.5 whitespace-nowrap">
              {(Object.keys(content) as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-[10px] sm:text-xs uppercase font-black tracking-widest transition-all rounded-none ${
                    activeTab === tab 
                      ? 'bg-yellow-400 text-stone-950 font-bold border border-stone-950' 
                      : 'text-stone-400 hover:text-stone-100'
                  }`}
                >
                  {tab === 'eventos' ? '⚡ ACTIVIDADES' : tab === 'libro' ? '📖 PUBLICACIÓN' : '🗄️ ARCHIZINE'}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* CUADRÍCULA ADAPTABLE TOTALMENTE COMPATIBLE */}
      <main className="max-w-7xl mx-auto py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {content[activeTab].map((item, index) => {
              const esImpar = index % 2 !== 0;
              const shadowColor = esImpar ? 'shadow-[5px_5px_0px_0px_#dc2626]' : 'shadow-[5px_5px_0px_0px_#a3e635]';

              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`flex flex-col bg-stone-950 border-4 border-stone-100 rounded-none overflow-hidden transition-all ${shadowColor} active:scale-[0.99]`}
                >
                  {/* Contenedor de Imagen de Alto Impacto */}
                  <div className="relative aspect-[4/3] bg-black overflow-hidden border-b-4 border-stone-100 group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale contrast-125 brightness-90 md:group-hover:grayscale-0 md:group-hover:contrast-100 md:group-hover:scale-105 transition-all duration-200"
                      loading="lazy"
                    />
                    
                    {/* Bloque Informativo Alternativo para Móviles e Interacción Hover para Escritorio */}
                    <div className="absolute inset-0 bg-yellow-400 text-stone-950 p-3 opacity-0 md:group-hover:opacity-100 transition-opacity duration-150 flex flex-col justify-between pointer-events-none">
                      <span className="text-[9px] font-black tracking-widest">// CONTEXTO DIGITAL</span>
                      <h4 className="text-2xl font-sans font-black tracking-tighter uppercase leading-none">
                        {item.aymaraTag}
                      </h4>
                      <p className="text-[10px] leading-tight font-bold">
                        REGISTRO PROPIO - EAAE
                      </p>
                    </div>

                    {/* Tags Superpuestos */}
                    <div className="absolute top-2 left-2 flex gap-1 pointer-events-none">
                      <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-stone-100 text-stone-950 border border-stone-950">
                        {item.tag}
                      </span>
                      {item.price && (
                        <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-red-600 text-white">
                          {item.price}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-2 right-2 text-[9px] text-stone-400 font-bold bg-black px-1.5 py-0.5 border border-stone-800 pointer-events-none">
                      PÁG. 0{index + 1}
                    </div>
                  </div>

                  {/* Cuerpo del Texto - Visible e Inteligente */}
                  <div className="p-4 flex-grow flex flex-col justify-between bg-black">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center border-b border-stone-800 pb-1">
                        <h3 className="text-xs sm:text-sm font-black tracking-tight text-white uppercase font-sans">
                          {item.title}
                        </h3>
                        {/* En móviles, dejamos el tag andino visible aquí de forma sutil */}
                        <span className="text-[9px] font-bold text-yellow-400 bg-stone-900 px-1 md:hidden">
                          {item.aymaraTag}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {activeTab === 'libro' && (
                      <div className="mt-4 pt-3 border-t-2 border-stone-100 flex items-center justify-between">
                        <span className="text-[9px] text-stone-500">EDICIÓN EN LA CALLE</span>
                        <button 
                          onClick={() => alert(`Envía un mensaje directo a ${datosColectivo.contacto.instagram} para adquirir tu copia.`)}
                          className="px-2.5 py-1 text-[10px] uppercase font-black bg-yellow-400 text-stone-950 font-bold active:bg-white border border-stone-950"
                        >
                          ADQUIRIR COPIA →
                        </button>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* REGISTRO DE ARCHIVO COMPLEMENTARIO */}
        <section className="mt-12 sm:mt-20 border-t-4 border-dashed border-stone-700 pt-8 sm:pt-12">
          <div className="max-w-3xl mb-8">
            <span className="text-red-600 font-black text-xs block mb-1 tracking-widest">// MEMORIA VISUAL</span>
            <h2 className="text-xl sm:text-4xl font-black uppercase text-white font-sans tracking-tight">
              ACTIVIDADES COMPLEMENTARIAS & REGISTRO DE CAMPO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {actividadesPasadas.map((act) => (
              <div 
                key={act.id} 
                className="flex flex-col sm:flex-row bg-stone-950 border-4 border-stone-100 shadow-[4px_4px_0px_0px_#1c1c1c]"
              >
                <div className="sm:w-1/2 aspect-[4/3] sm:aspect-auto bg-black relative overflow-hidden border-b-4 sm:border-b-0 sm:border-r-4 border-stone-100">
                  <img 
                    src={act.image} 
                    alt={act.title}
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  <span className="absolute bottom-2 left-2 px-1.5 py-0.5 text-[9px] font-black bg-stone-100 text-stone-950">
                    AÑO: {act.fecha}
                  </span>
                </div>

                <div className="p-4 sm:w-1/2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[9px] text-fuchsia-400 font-bold uppercase tracking-widest block">
                      // {act.tag}
                    </span>
                    <h3 className="text-xs sm:text-sm font-black uppercase text-stone-100 font-sans leading-tight">
                      {act.title}
                    </h3>
                    <p className="text-[11px] text-stone-400 leading-snug">
                      {act.description}
                    </p>
                  </div>
                  <div className="pt-2 text-[9px] text-stone-600 font-bold uppercase">
                    [ ESTADO: ARCHIVADO ]
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* PIE DE PÁGINA MILITANTE */}
      <footer className="w-full border-t-4 border-stone-100 bg-black mt-12 sm:mt-20 py-8 px-4 text-center space-y-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-left space-y-1">
            <p className="text-sm font-black text-white uppercase font-sans tracking-tight">
              {datosColectivo.nombre} // {datosColectivo.largo.toUpperCase()}
            </p>
            <p className="text-[10px] text-stone-500 max-w-md">
              Hecho de forma independiente por personas. Impreso digitalmente desde las calles de El Alto, Bolivia.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] font-black">
            <a href={`https://instagram.com/${datosColectivo.contacto.instagram}`} className="px-2 py-1 bg-yellow-400 text-stone-950 border border-stone-950">
              [INSTAGRAM]
            </a>
            <span className="text-stone-400 self-center font-mono">2026 // CH'IXI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
