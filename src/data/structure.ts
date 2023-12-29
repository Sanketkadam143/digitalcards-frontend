// interfaces of different section for the landing page

//1. Hero Section
interface Ihero {
  heading: string;
  subHeading: string;
}

// 2. Features Section

type Features = {
  name: string;
  description: string;
};

interface Ifeatures {
  heading: string;
  subHeading: string;
  features: Features[];
}

// 3. SinglePricing Section

type PricingFeatures = {
  name: string;
};
interface IsinglePricing {
  heading: string;
  subHeading: string;
  discount: string;
  pricingFeatures: PricingFeatures[];
  note: string;
}

// 4. Pricing Section

type Pricing = {
  name: string;
  price: string;
  features: PricingFeatures[];
  note: string;
};

interface Ipricing {
  pricing: Pricing[];
}

//5.CTA Section

interface Icta {
  heading: string;
  subHeading: string;
}

export type {
  Ihero,
  Ifeatures,
  IsinglePricing,
  Ipricing,
  Icta,
  PricingFeatures,
};
