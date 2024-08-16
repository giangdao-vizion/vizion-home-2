const whatIsMock = [
    {
        whatIsId: 'industry-4-0',
        title: 'What is Vizion for Industry 4.0?',
        text: 'Vizion for Industry 4.0 enables manufacturers to leverage AR, VR, IoT, and Digital Twin technologies for smart factories. With one scan, your plant will be digitized and ready for editing, turning your factory into a smart factory in days. Seamlessly integrate factory operations, optimize processes, and achieve improved ROI.',
        buttonText: 'Contact Sales',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'real-estate-architecture',
        title: 'Unique and Innovative  Solutions',
        text: 'The use of virtual tours for real estate marketing and architecture strategies is essential. Make your property stand out from the competition by providing an immersive marketing experience unlike any other',
        buttonText: 'Contact Sales',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'retail-showrooms',
        title: 'Explore an exciting new way for customers to shop',
        text: 'Be an early adopter and offer web3 retail experiences to your customers. Why? Because buyers will have the experience of a physical store AND the convenience of online shopping',
        buttonText: 'Contact Sales',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'market-adv',
        title: 'Unique and Innovative Solutions',
        text: 'Vizion offers ground-breaking 3D tour marketing and advertising solutions with innovative ways to engage and attract users, enabling you to achieve an 80% rise in engagement rates.',
        buttonText: 'Contact Sales',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'planning-design',
        title: 'Unique and Innovative Solutions',
        text: 'Vizion digital twin design and planning solutions allow you to streamline documentation, visualize your space, and organize it beforehand to maximize architectural, engineering, and construction efficiency.',
        buttonText: 'Contact Sales',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'indoor-nav',
        title: 'Unique and Innovative Solutions',
        text: 'Improve location pinpointing and wayfinding with Vizion Digital Twins AR Indoor Navigation. Improve your visitors’ experience with real time data.',
        buttonText: 'Contact Sales',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'online-shopping',
        title: 'Unique and Innovative Solutions',
        text: 'Be an early adopter and offer web3 retail experiences to your customers. Why? Because buyers will have the experience of a physical store AND the convenience of online shopping',
        buttonText: 'Let’s Talk!',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'facilities-management',
        title: 'Unique and Innovative Solutions',
        text: 'Achieve more effective and efficient facilities management with enhanced digital twins. It ensures you have the right data to make informed and reliable decisions.',
        buttonText: 'Contact Sales',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'immersive-training',
        title: 'Elevating Training with Immersive Solutions',
        text: 'Vizion is leading the way in immersive training and maintenance solutions designed for Industry 4.0, safety, and connected workers. Our platform leverages the power of augmented reality (AR) and virtual reality (VR) to transform on-site training and streamline maintenance procedures. This ensures employees are prepared for the challenges of the connected workplace while optimizing operational efficiency.',
        buttonText: 'Contact Sales',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
]

export default whatIsMock