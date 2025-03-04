import { Injectable, signal } from '@angular/core';
import { Fair } from '../Interfaces/fair.interface';

@Injectable({
  providedIn: 'root',
})
export class FairService {
  private fairs = signal<Fair[]>([
    {
      id: 1,
      title: 'KCD Costa Rica 2025',
      shortDescription:
        'Compartiendo conocimiento de tecnologías nativas de la nube y código abierto en Costa Rica',
      description:
        'Naturaleza del Evento KCD Costa Rica, está diseñado como un encuentro para entusiastas de Kubernetes y Cloud Native, con charlas técnicas, talleres prácticos y paneles enfocados en temas clave como DevOps, seguridad, observabilidad y prácticas recomendadas para la implementación de infraestructuras modernas.',
      category: 'Tecnología',
      image:
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-cncf/events/Portada%201_nykaaTX.png',
      publishDate: new Date('2025-02-24 00:00'),
      fairStartDate: new Date('2025-05-03 00:00'),
      hourStart: '08:00 ',
      hourEnd: '17:00',
      location:
        'Auditorio Institucional Cora Ferro Calabrese, Campus El Higuerón',
      capacity: 1200,
      cost: 5150,
      conditions: {
        internet: true,
        cable: true,
        light: true,
        water: true,
      },
      contents: [
        {
          id: 1,
          title: 'Introducción a Kubernetes',
          description:
            'En este taller, aprenderás a instalar y configurar Kubernetes en tu máquina virtual, así como a crear y administrar un cluster de Kubernetes. Aprenderás sobre los conceptos básicos de Kubernetes, cómo funciona y cómo se puede usar para automatizar la configuración de los servidores y los contenedores. También aprenderás cómo crear y gestionar recursos en Kubernetes, como pods, services y replicas.',
          hour: '08:00',
        },
        {
          id: 2,
          title: 'Despliegue de aplicaciones en Kubernetes',
          description:
            'aprenderás a desplegar aplicaciones en Kubernetes. Aprenderás a crear y gestionar contenedores, a desplegar aplicaciones en Kubernetes y a escalarlas según sea necesario. También aprenderás a monitorizar y depurar tus aplicaciones en Kubernetes.',
          hour: '12:00',
        },
      ],
    },
    {
      id: 2,
      title: 'Tech Week 2025',
      shortDescription:
        'En un mundo que cambia a diario, tenemos que estar siempre INNOVANDO',
      description:
        'En su 20° aniversario, Tech Day se transforma en Tech Week: una semana llena de experiencias únicas para conectar, aprender y moldear el futuro de la tecnología en la región. Seguirá activándose el CIO Club, un espacio exclusivo diseñado para reunir y conectar a los 1,000 líderes tecnológicos más destacados de la región. El club tiene como objetivo compartir experiencias y fomentar tanto el crecimiento personal como profesional de sus miembros.',
      category: 'Tecnología',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhYYNKkWrZ34qmZjkCxOTMTdbibVSF5rJLA&s',
      publishDate: new Date('2025-02-27 00:00'),
      fairStartDate: new Date('2025-05-05 00:00'),
      fairEndDate: new Date('2025-05-09 00:00'),
      hourStart: '09:00',
      hourEnd: undefined,
      location: 'Centro de Convenciones, Heredia, Costa Rica',
      capacity: 945,
      cost: 6000,
      conditions: {
        internet: true,
        cable: false,
        light: true,
        water: true,
      },
      contents: [
        {
          id: 1,
          title: 'Conferencias',
          description:
            'Con un enfoque en conferencias y oportunidades de networking',
        },
        {
          id: 2,
          title: 'Diversidad de Alimentos',
          description:
            'incluirá actividades exclusivas y descentralizadas como desayunos, almuerzos, cócteles, experiencias virtuales y visitas privadas',
        },
        {
          id: 3,
          title: 'Variedad de Experiencias',
          description:
            'La posibilidad de vivir la tecnología desde diversas perspectivas y crear conexiones en un entorno más íntimo y personalizado.',
        },
      ],
    },
    {
      id: 3,
      title: 'ICT Summit 2025',
      shortDescription:
        'Explorando técnicas y experiencias para afrontar los retos de la IA y la Sustentabilidad',
      description:
        'En un evento de dos días en donde reunirá a profesionales de los sectores de las TIC y las Telecomunicaciones para explorar el dinámico ambiente de la conectividad digital. En esta edición del ICT Summer contaremos con 2 días completos de exhibición comercial y de experiencias de aprendizaje en los últimos avances en infraestructura digital que prometen exponer una perspectiva holística sobre el rol de la infraestructura física en la actual evolución debido a la demanda de la Inteligencia Artificial y las Redes Sostenibles.',
      category: 'Tecnología',
      image:
        'https://bicsi-cala.org/calaeventos/wp-content/uploads/2024/11/bicsi-cala-cr2025-feat-1b.webp',
      publishDate: new Date('2025-01-29 00:00'),
      fairStartDate: new Date('2025-02-26 00:00'),
      fairEndDate: new Date('2025-02-27 00:00'),
      hourStart: '08:30',
      hourEnd:'18:00',
      location: 'Hotel Crowne Plaza Corobici, San José, Costa Rica',
      capacity: 1200,
      cost: 8000,
      conditions: {
        internet: true,
        cable: false,
        light: true,
        water: false,
      },
      contents: [
        {
          id: 1,
          title: 'Estándares y Mejoras Prácticas para Proyectos TIC ',
          description: 'Perspectivas del entorno tecnológico en Costa Rica',
          hour: '09:10',
        },
        {
          id: 2,
          title: 'Smart Buildings',
          description: 'El Futuro de los Edificios Comerciales',
          hour: '09:35',
        },
        {
          id: 3,
          title: 'Infraestructua Inteligente para Telecomunicaciones',
          description: 'Redes privadas 5G como habilitador de la Industria 4.0',
          hour: '12:10',
        },
        {
          id: 4,
          title: 'Desarrollos en Infraestructura Sustentable',
          description: 'Optimizando las soluciones de conectividad y energía ',
          hour: '14:30',
        },
      ],
    },
    {
      id: 4,
      title: 'Expo Motriz 2025',
      shortDescription:
        'Innovación y las mejores ofertas automotrices con la llegada de Expo Motriz 2025.',
      description:
        'Este evento, pensado para todos los actores del sector y el público en general, reunirá a expertos, empresarios, profesionales, expositores nacionales e internacionales y aficionados, en un espacio único donde las últimas tendencias del sector automotriz se combinan con actividades prácticas, educativas y promociones imperdibles para quienes buscan llevar su experiencia con los vehículos al siguiente nivel. Expo Motriz 2025 ofrecerá una agenda diversa, con énfasis en las nuevas tecnologías y las soluciones sostenibles para el transporte. Desde vehículos eléctricos hasta conversiones a gas LP, los asistentes podrán descubrir cómo la industria automotriz está evolucionando para enfrentar los retos del futuro.“Queremos que este evento sea un espacio donde los profesionales, los empresarios, los expertos y las personas en general puedan aprender, reflexionar y disfrutar de variadas actividades. Expo Motriz no es solo una feria, es una experiencia donde conectamos con las tendencias globales y resaltamos la capacidad del talento costarricense,” comentó Daniel Picado, organizador de la actividad. ',
      category: 'Automotriz',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEIijSsANW_ZYRSSifwODrgZ7I0-VY5v7zFzLZymhoWf_WWKzpW8Y4SV8D9O6U6nerlyQ&usqp=CAU',
      publishDate: new Date('2025-01-21 00:00'),
      fairStartDate: new Date('2025-02-07 00:00'),
      fairEndDate: new Date('2025-02-09 00:00'),
      hourStart: '09:00',
      hourEnd: '17:00',
      location: 'Centro de Convenciones, Heredia, Costa Rica',
      capacity: 945,
      cost: 0,
      conditions: {
        internet: true,
        cable: true,
        light: true,
        water: true,
      },
      contents: [
        {
          id: 1,
          title: 'Un Outlet Automotriz con todo lo que necesitás',
          description:
            'Uno de los grandes atractivos del evento será el Outlet Automotriz, un espacio diseñado para que los asistentes puedan adquirir repuestos, herramientas y accesorios automotrices a precios especiales. Empresas líderes del sector ofrecerán promociones exclusivas, desde descuentos en repuestos certificados hasta demostraciones interactivas con productos de última tecnología.',
        },
        {
          id: 2,
          title: 'IV Congreso en Tecnología Automotriz y Electromovilidad',
          description:
            'Dentro de las actividades de Expo Motriz, se llevará a cabo el IV Congreso Internacional en Tecnología Automotriz y Electromovilidad, AutoXperts 2025, específicamente el sábado 8 de febrero. ',
        },
        {
          id: 3,
          title: 'Educación y cultura automotriz para todas las personas',
          description:
            'Expo Motriz 2025 no se limita a los negocios; el evento también está diseñado para generar conciencia y conocimiento práctico en el público. Los asistentes podrán participar en talleres interactivos sobre mantenimiento preventivo, seguridad vial y manejo eficiente, adaptados para todas las edades.',
        },
      ],
    },
  ]);

  getFairs(){
    return this.fairs();
  }

  getFairById(id: number) {
    return this.fairs().find((fair) => fair.id === id);
  }
}
