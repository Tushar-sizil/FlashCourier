// All site content lives here so it is easy to edit.
// Images point at the original site; to self-host, download them into /public/images
// and change the paths below (e.g. "/images/courier-services.jpg").
const IMG = "http://www.flashcouriercargo.com/uploaded_files";

export const company = {
  name: "Flash Courier & Cargo",
  phone: "+91-9999219227",
  email: "JPSINGH@FLASHCOURIERCARGO.COM",
  gst: "07AXXPS2425F1Z2",
  address: "MB-14, NAURANG HOUSE 21, K G MARG CP SAC CODE 996812, New Delhi, Delhi, India",
  whatsapp: "https://wa.me/919999219227",
  logo: "http://www.flashcouriercargo.com/header_files/logo2.png",
  about:
    "Established since 17 years ago, we are operational with government organization also through tender. We are MSME registered.",
  social: {
    facebook: "https://www.facebook.com/sizilsoftec.com",
    twitter: "https://twitter.com/sizilsoftec.com",
    linkedin: "http://in.linkedin.com/in/sizilsoftec.com",
  },
};

export const services = [
  {
    slug: "courier-services",
    title: "Courier Services",
    image: `https://plus.unsplash.com/premium_photo-1664297616681-81ae24954249?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D`,
    detail_image: `https://media.istockphoto.com/id/1460953998/photo/group-of-warehouse-workers-loading-a-truck-with-boxes.webp?a=1&b=1&s=612x612&w=0&k=20&c=66L-6LvUyL5MM6AMYo9-SCWhBpQNEPPES2g6Jc2a7Yk=`,
    summary: "Flash Courier & Cargo Company provides the best Courier Services in New Delhi India.",
    detail_summary: "Flash Courier & Cargo Company provides the best Courier Services in New Delhi India, we have the expert level workers for Courier Services at reasonable charges. We are offering a host of courier services such as door-to-door delivery services, international courier services and domestic courier services. \n\nOur Courier Services provide the transportation and delivery of goods, packages, mail and also involves various processes such as pick-up, transportation, storage, and delivery. \n\nThere are various modes of transportation used in our Courier Services, including air, ground, and sea transportation. We use of GPS tracking and automation systems to improve the accuracy and efficiency of delivery.",
    miniServices: [
      {
        title: "Domestic Courier Services",
        desc: "We are one of the renowned service providers engaged in offering effective Domestic Courier Services, Since-10 years.",
        image: "http://www.flashcouriercargo.com/uploaded_files/domestic-courier-services.jpg",
        link: "/services/domestic-courier-services",
      },
      {
        title: "Door To Door Courier Services",
        desc: "We provide domestic Door To Door Courier Services for customers, who want to simplify logistics management, to reduce costs.",
        image: "http://www.flashcouriercargo.com/uploaded_files/door-to-door-courier-services.jpg",
        link: "/services/door-to-door-courier-services",
      },
      {
        title: "International Courier Services",
        desc: "Our clients can find with us the industry leading rates for International Courier services, to offer effective and reliable courier services.",
        image: "http://www.flashcouriercargo.com/uploaded_files/international-courier-services.jpg",
        link: "/services/international-courier-services",
      },
    ],
  },
  {
    slug: "road-cargo-services",
    title: "Cargo Services",
    image: `https://images.unsplash.com/photo-1635690926948-06e5d7af93bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D`,
    detail_image: `https://images.unsplash.com/photo-1596434220574-9af8bf9a0891?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D`,
    summary: "Flash Courier & Cargo provides the best Cargo Services in New Delhi India.",
    detail_summary: "Flash Courier & Cargo provides the best Cargo Services in New Delhi India, we have the best workers for Road Cargo Services at reasonable charges. We are India's Leading Domestic and International Road Cargo Services provider. Our services are known for advanced methodology, cost effectiveness & flexibility worldwide. \n\n Our Cargo services provide the transportation and delivery of goods, packages, mail and also involves various processes such as pick-up, transportation, storage, and delivery.",
    miniServices: [
      {
        title: "Cargo Handling Systems",
        desc: "Flash Courier & Cargo is one of the best Courier Company in New Delhi India to provide Cargo Handling Systems Services.",
        image: "https://images.unsplash.com/photo-1592844002373-a55ecd7af140?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        link: "/services/domestic-courier-services",
      },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics Services",
    image: `https://images.unsplash.com/photo-1635434473843-bac9feff5e8e?q=80&w=1045&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D`,
    detail_image: `https://images.unsplash.com/photo-1605705658744-45f0fe8f9663?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D`,
    summary: "Flash Courier & Cargo is India’s no 1 Company for providing best Logistics Services.",
    detail_summary: "Flash Courier & Cargo is India’s no 1 Company for providing best Logistics Services in New Delhi India, we always provides the best Logistics Services at reasonable charges. \n\nAs a consequence of our long experience in the logistic/ Courier industry working on top positions, it has been visualized by us that nonwe of the logistics/Courier companies operating presently in india are capable enough to make deliveries efficiently on PAN india basis. Almost all the companies are having some perfect \"strong delivery destinations\" and some \"imperfect/weak delivery destinations\" according to their own strongholds/preferred areas i. e. Zone-wise/ state-wise/ pin code wise\" etc. of course, this may be because of so many limitations/constraints as no existing company is in a position to open a large number of offices which can enable them to make a 100% coverage on PAN INDIA basis. \n\n Taking into consideration all these faactors in mind, we have decided to provide \"BEB MULTI-LINK SERVICES\" (best-to-best) to all our valued clients whereby we are utilizing mix type of services of almost all reputed logistic companies according to their strongholds/preferred locations/ destinations by adopting \"NEW CONCEPT & NEW TECHNOLOGY\" with our well designed \"SYSTEMS & CONTROLS\" \n\nIn our pursuit for exccellence and endeavor to provide customized I.T. enabled/professionalized complete logistical solution to all our esteemed clients under one roof, we are backed and supported by our."
  },
];

export const clients = [
  { name: "Client One", logo: "http://www.flashcouriercargo.com/client_logo/Daiichi%20Sankyo%20(i)%20pharma%20ltd.jpg" },
  { name: "Client Two", logo: "http://www.flashcouriercargo.com/client_logo/dalmia%20healthcare%20limited.jpg" },
  { name: "Client Three", logo: "http://www.flashcouriercargo.com/client_logo/GAIL,%20HEAD%20OFFICE,%20BCP%20NEW%20DELHI.jpg" },
  { name: "Client Four", logo: "http://www.flashcouriercargo.com/client_logo/green%20light%20planet%20(i)%20pvt%20ltd.jpg" },
  { name: "Client Five", logo: "http://www.flashcouriercargo.com/client_logo/HSIL%20ltd,%20gurgaon.jpg" },
  { name: "Client Six", logo: "http://www.flashcouriercargo.com/client_logo/icici%20bank.jpg" },
  { name: "Client Seven", logo: "http://www.flashcouriercargo.com/client_logo/IDBI%20Bank.jpg" },
  { name: "Client Eight", logo: "http://www.flashcouriercargo.com/client_logo/ITC%20Limited.png" },
  { name: "Client Nine", logo: "http://www.flashcouriercargo.com/client_logo/kei%20industries%20ltd.jpg" },
  { name: "Client Ten", logo: "http://www.flashcouriercargo.com/client_logo/master%20capital%20%20services%20ltd.jpg" },
  { name: "Client Eleven", logo: "http://www.flashcouriercargo.com/client_logo/national%20accreditation%20board%20for%20testing%20&%20calibration%20labs.jpg" },
  { name: "Client Twelve", logo: "http://www.flashcouriercargo.com/client_logo/tetra%20pack%20pvt%20ltd.png" },
  { name: "Client Thirteen", logo: "http://www.flashcouriercargo.com/client_logo/rd%20plast%20pvt%20ltd.jpg" },
  { name: "Client Forteen", logo: "http://www.flashcouriercargo.com/client_logo/Sun%20Pharmaceutical%20Industries%20Ltd.png" },
  { name: "Client Fifteen", logo: "http://www.flashcouriercargo.com/client_logo/TCIL-Logo.jpg" },
  { name: "Client Sixteen", logo: "http://www.flashcouriercargo.com/client_logo/anupam%20industries.png" },
  { name: "Client Seventeen", logo: "http://www.flashcouriercargo.com/client_logo/arvind%20limited.jpg" },
  { name: "Client Eighteen", logo: "http://www.flashcouriercargo.com/client_logo/comparex%20india%20pvt%20ltd.jpg" },
  { name: "Client Nineteen", logo: "http://www.flashcouriercargo.com/client_logo/adhunik%20automation%20pvt%20ltd.jpg" },
  { name: "Client Twenty", logo: "http://www.flashcouriercargo.com/client_logo/smc%20insurance%20brokers%20pvt%20ltd.jpg" },
  { name: "Client Twenty One", logo: "http://www.flashcouriercargo.com/client_logo/apeejay%20oxford%20bookstores%20pvt%20ltd.png" },
  { name: "Client Twenty Two", logo: "http://www.flashcouriercargo.com/client_logo/d%20link%20india%20ltd.jpg" },
];