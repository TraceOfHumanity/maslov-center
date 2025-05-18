export type ServiceItem = {
  serviceTitle: string;
  serviceDescription: string;
  variants: {
    title: string;
    description?: string;
    image?: string;
  }[];
};
