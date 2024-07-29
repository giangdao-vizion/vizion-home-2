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
            link: "/cac-linh-vuc/showroom-xe-hoi"
          },
          {
            title: "Space Analytics",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/showroom-xe-hoi"
          },
        ]
      },
      {
        title: "Product by Client type",
        children: [
          {
            title: "3D Creators",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "Photographers",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/bat-dong-san"
          },
          {
            title: "Enterprise",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
        ]
      },
      {
        title: "Product By Technology",
        children: [
          {
            title: "360 Virtual Tour",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "Virtual Reality",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/bat-dong-san"
          },
          {
            title: "Augmented Reality",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
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
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "Industry 4.0",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "Retail and Showrooms",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
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
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "Planning and Design",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "Indoor Navigation",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "Online Shopping",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "Facilities Management",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "Immersive Training",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
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
            title: "Real Estate & Architecture",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "Industry 4.0",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
          },
          {
            title: "Retail and Showrooms",
            icon: DigitalTwinIcon,
            link: "/cac-linh-vuc/nha-may-san-xuat"
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
