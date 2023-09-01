import imgImpresiones from "./assets/impresora.jpg";
import imgFotocopias from "./assets/copiadora.jpg";
import imgEscaner from "./assets/scaner.jpg";
import imgTranscrip from "./assets/transcripcion.jpg";
import imgCurriculum from "./assets/curriculum.jpg";
import imgTramites from "./assets/tramites.jpg";
import imgFotoscarnet from "./assets/fotoscarnet.jpg";
import imgToppers from "./assets/toppersTorta.jpg";

export const dataServices = [
  {
    id: 0,
    name: "Impresiones",
    description: "Imprimimos todo tipo de documentos e imagenes.",
    price: {
      bn: 0.2,
      color: 0.35,
    },
    img: imgImpresiones,
  },

  {
    id: 1,
    name: "Fotocopias",
    description: "Fotocopias a color y blanco y negro, precios variables.",
    price: {
      bn: 0.2,
      color: 0.3,
    },
    img: imgFotocopias,
  },

  {
    id: 2,
    name: "Trámites legales",
    description:
      "Rif, apertura de cuentas del Banco de Venezuela, solicitud de cédula por primera vez, etc.",
    price: {
      nuevoRif: 5,
      recuperacionRif: 2,
      updateRif: 1,
      newBdv: 3,
      newSaimeAcc: 3,
      recuperacionSaime: 1,
      citaSaime: 3,
    },
    img: imgTramites,
  },

  {
    id: 3,
    name: "Fotografías tipo carnet",
    description: "Pack de fotos tipo carnet y fotos ampliadas.",
    price: {
      eigthPhotos: 1,
      amplified: 2.5,
    },
    img: imgFotoscarnet,
  },

  {
    id: 4,
    name: "Actualización y creación de Currículum",
    description: "Manten al día tu curriculum con los mejores precios.",
    price: 1.5,
    img: imgCurriculum,
  },

  {
    id: 5,
    name: "Escaneos",
    description: "Digitaliza cualquier documento o fotografía.",
    price: 0.2,
    img: imgEscaner,
  },

  {
    id: 6,
    name: "Toppers para tortas",
    description: "Diseños personalizables a gusto del cliente.",
    price: 1.5,
    img: imgToppers,
  },

  {
    id: 7,
    name: "Transcripciones",
    description:
      "Digitalización manual de documentos, tesis, trabajos escolares, etc.",
    price: 0.5,
    img: imgTranscrip,
  },
];

export const dataPrices = [
  {
    id: 0,
    name: "Impresión en blanco y negro",
    price: 0.2,
    count: 0,
  },

  {
    id: 1,
    name: "Impresión a color",
    price: 0.35,
    count: 0,
  },

  {
    id: 2,
    name: "Fotocopia en blanco y negro",
    price: 0.2,
    count: 0,
  },

  {
    id: 3,
    name: "Fotocopia a color",
    price: 0.3,
    count: 0,
  },

  {
    id: 4,
    name: "Nuevo Rif",
    price: 5,
    count: 0,
  },

  {
    id: 5,
    name: "Recuperación de Rif",
    price: 1,
    count: 0,
  },

  {
    id: 6,
    name: "Apertura de cuenta Banco de Venezuela",
    price: 3,
    count: 0,
  },

  {
    id: 7,
    name: "Apertura de cuenta Portal SAIME",
    price: 3,
    count: 0,
  },

  {
    id: 8,
    name: "Recuperación de usuario SAIME",
    price: 1,
    count: 0,
  },

  {
    id: 9,
    name: "Citas para cedulación y pasaporte",
    price: 3,
    count: 0,
  },

  {
    id: 10,
    name: "8 fotos tipo carnet",
    price: 1,
    count: 0,
  },

  {
    id: 11,
    name: "Fotografía ampliada",
    price: 2.5,
    count: 0,
  },

  {
    id: 12,
    name: "Actualización y creación de Curriculum",
    price: 2,
    count: 0,
  },

  {
    id: 13,
    name: "Escaneos",
    price: 0.2,
    count: 0,
  },

  {
    id: 14,
    name: "Toppers para tortas",
    price: 1.5,
    count: 0,
  },

  {
    id: 15,
    name: "Transcripciones",
    price: 0.5,
    count: 0,
  },
];
