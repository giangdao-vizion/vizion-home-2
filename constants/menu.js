import DigitalTwinIcon from "@/components/icons/TwinIcon";

export const MENU_TYPE = {
  PRODUCTS: "PRODUCTS",
  SOLUTIONS: "SOLUTIONS",
  RESOURCES: "RESOURCES",
}

export const menuData = [
  {
    key: MENU_TYPE.PRODUCTS,
    title: "Products",
    categories: [
      {
        title: "Product by Feature",
        children: [
          {
            title: "3D Tour",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "VR Room",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/bat-dong-san"
          },
          {
            title: "Showroom 3D",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/showroom-xe-hoi"
          },
          {
            title: "Experience Creator",
            icon: DigitalTwinIcon,
            link: "/product-by-feature/experience-creator"
          },
          {
            title: "Space Analytics",
            icon: DigitalTwinIcon,
            link: "/product-by-feature/analytics"
          },
        ]
      },
      {
        title: "Product by Client type",
        children: [
          {
            title: "3D Creators",
            icon: DigitalTwinIcon,
            link: "/product-by-type/3d-creators"
          },
          {
            title: "Photographers",
            icon: DigitalTwinIcon,
            link: "#"
          },
          {
            title: "Enterprise",
            icon: DigitalTwinIcon,
            link: "/product-by-type/enterprise"
          },
        ]
      },
      {
        title: "Product By Technology",
        children: [
          {
            title: "360 Virtual Tour",
            icon: DigitalTwinIcon,
            link: "#"
          },
          {
            title: "Virtual Reality",
            icon: DigitalTwinIcon,
            link: "/product-by-technology/virtual-reality"
          },
          {
            title: "Augmented Reality",
            icon: DigitalTwinIcon,
            link: "/product-by-technology/augmented-reality"
          },
        ]
      },
      {
        title: "Trusted by Market Leaders",
        children: [
          {
            imgUrl: "/assets/images/vizion/leaders/test.svg",
            imgAlt: "test"
          },
          {
            imgUrl: "/assets/images/vizion/leaders/test.svg",
            imgAlt: "test"
          },
          {
            imgUrl: "/assets/images/vizion/leaders/test.svg",
            imgAlt: "test"
          },
          {
            imgUrl: "/assets/images/vizion/leaders/test.svg",
            imgAlt: "test"
          },
        ]
      },
    ]
  },
  {
    key: MENU_TYPE.SOLUTIONS,
    title: "Solutions",
    categories: [
      {
        title: "Solutions by Industry",
        children: [
          {
            title: "Real Estate & Architecture",
            icon: DigitalTwinIcon,
            link: "/solutions-industry/real-estate-architecture"
          },
          {
            title: "Industry 4.0",
            icon: DigitalTwinIcon,
            link: "/solutions-industry/industry-4-0"
          },
          {
            title: "Retail and Showrooms",
            icon: DigitalTwinIcon,
            link: "/solutions-industry/retail-showrooms"
          },
        ]
      },
      {
        title: "Our Achievements",
        children: [
          {
            imgUrl: "/assets/images/vizion/achievement/sao-khue.png",
            imgAlt: "sao-khue"
          },
          {
            imgUrl: "/assets/images/vizion/achievement/startup-viet.png",
            imgAlt: "startup-viet"
          },
          {
            imgUrl: "/assets/images/vizion/achievement/techfest.png",
            imgAlt: "techfest"
          },
        ]
      },
      {
        title: "Solutions by Use Case",
        children: [
          {
            title: "Marketing and Advertising",
            icon: DigitalTwinIcon,
            link: "/solutions-usecase/market-adv"
          },
          {
            title: "Planning and Design",
            icon: DigitalTwinIcon,
            link: "/solutions-usecase/planning-design"
          },
          {
            title: "Indoor Navigation",
            icon: DigitalTwinIcon,
            link: "/solutions-usecase/indoor-nav"
          },
          {
            title: "Online Shopping",
            icon: DigitalTwinIcon,
            link: "/solutions-usecase/online-shopping"
          },
          {
            title: "Facilities Management",
            icon: DigitalTwinIcon,
            link: "/solutions-usecase/facilities-management"
          },
          {
            title: "Immersive Training",
            icon: DigitalTwinIcon,
            link: "/solutions-usecase/immersive-training"
          },
        ]
      }
    ]
  },
  {
    key: MENU_TYPE.RESOURCES,
    title: "Resources",
    categories: [
      {
        title: "Company",
        children: [
          {
            title: "Case Studies",
            icon: DigitalTwinIcon,
            link: "/case-studies"
          },
          {
            title: "Blog",
            icon: DigitalTwinIcon,
            link: "/blog"
          },
          {
            title: "Career",
            icon: DigitalTwinIcon,
            link: "/career"
          },
        ]
      },
      {
        title: "Solutions by Use Case",
        children: []
      }
    ]
  },
]
