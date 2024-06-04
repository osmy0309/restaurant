export const StatusTranslations = [
  {
    name: "CREATING",
    translation: "Creando",
  },
  {
    name: "SEARCHING",
    translation: "Buscando",
  },
  {
    name: "ACCEPTED",
    translation: "Aceptado",
  },
  {
    name: "STARTED",
    translation: "Aceptado",
  },
  {
    name: "ARRIVED",
    translation: "Conductor llego",
  },
  {
    name: "PICKEDUP",
    translation: "En viaje",
  },
  {
    name: "DROPPED",
    translation: "En destino",
  },
  {
    name: "TRAVELING",
    translation: "En viaje",
  },
  {
    name: "CANCELLED",
    translation: "Cancelado",
  },
  {
    name: "SCHEDULED",
    translation: "Agendado",
  },
  {
    name: "COMPLETED",
    translation: "Finalizado",
  },
  {
    name: "FINISHED",
    translation: "Finalizado",
  },
];

interface Props {
  name: string;
  translation: string;
}
interface IndexST {
  [key: string]: Props;
}

export const IndexStatusTranslations: IndexST = {
  CREATING: {
    name: "CREATING",
    translation: "Creando",
  },
  SEARCHING: {
    name: "SEARCHING",
    translation: "Buscando",
  },
  ACCEPTED: {
    name: "ACCEPTED",
    translation: "Aceptado",
  },
  STARTED: {
    name: "STARTED",
    translation: "Aceptado",
  },
  ARRIVED: {
    name: "ARRIVED",
    translation: "Conductor llego",
  },
  PICKEDUP: {
    name: "PICKEDUP",
    translation: "En viaje",
  },
  DROPPED: {
    name: "DROPPED",
    translation: "En destino",
  },
  TRAVELING: {
    name: "TRAVELING",
    translation: "En viaje",
  },
  CANCELLED: {
    name: "CANCELLED",
    translation: "Cancelado",
  },
  SCHEDULED: {
    name: "SCHEDULED",
    translation: "Agendado",
  },
  COMPLETED: {
    name: "COMPLETED",
    translation: "Finalizado",
  },
  FINISHED: {
    name: "FINISHED",
    translation: "Finalizado",
  },
};
