import { Icta, Ifeatures, Ihero, Ipricing, IsinglePricing } from "./structure";

//1. Data for Hero Section

const heroData: Ihero = {
  heading: "Transform Your Business Card Experience: Go Digital",
  subHeading:
    "Create your digital business card in minutes and share it with anyone, anywhere.",
};

//2. Data for Features Section

const featuresData: Ifeatures = {
  heading: "Thequick, brown fox jumps over a lazy dog",
  subHeading:
    "DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.",
  features: [
    {
      name: "Unlimited Blocks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas.",
    },
    {
      name: "Unlimited Blocks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas.",
    },
    {
      name: "Unlimited Blocks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas.",
    },
  ],
};

//3. Data for SinglePricing Section

const singlePricingData: IsinglePricing = {
  heading: "Thequick, brown fox jumps over a lazy dog",
  subHeading:
    "DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.",
  discount: "50%",
  pricingFeatures: [
    {
      name: "Unlimited Blocks",
    },
    {
      name: "Unlimited Blocks",
    },
    {
      name: "Unlimited Blocks",
    },
  ],
  note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas.",
};

//4. Data for Pricing Section

const pricingData: Ipricing = {
  pricing: [
    {
      name: "Free",
      price: "$0",
      features: [
        {
          name: "Unlimited Blocks",
        },
        {
          name: "Unlimited Blocks",
        },
        {
          name: "Unlimited Blocks",
        },
      ],
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas.",
    },
    {
      name: "Pro",
      price: "$19",
      features: [
        {
          name: "Unlimited Blocks",
        },
        {
          name: "Unlimited Blocks",
        },
        {
          name: "Unlimited Blocks",
        },
      ],
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas.",
    },
    {
      name: "Enterprise",
      price: "$49",
      features: [
        {
          name: "Unlimited Blocks",
        },
        {
          name: "Unlimited Blocks",
        },
        {
          name: "Unlimited Blocks",
        },
      ],
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas.",
    },
  ],
};

//5. Data for CTA Section

const ctaData: Icta = {
  heading: "Thequick, brown fox jumps over a lazy dog",
  subHeading:
    "DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.",
};

export { heroData, featuresData, singlePricingData, pricingData, ctaData };
