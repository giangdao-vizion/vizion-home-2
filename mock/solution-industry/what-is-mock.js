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
    {
        whatIsId: '3d-creators',
        title: 'What\'s Vizion for 3D Creators?',
        text: 'With our platform, you can enhance your digital twins and create immersive experiences without coding knowledge, stage empty places with thousands of digital assets, incorporate Augmented and Virtual Reality into all of your projects.– and much more.',
        buttonText: 'Contact Sales',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'enterprise',
        title: 'What\'s the Enterprise Program?',
        text: 'We offer individually-tailored management solutions, handling every aspect of your project and ensuring it meets your requirements.',
        buttonText: 'Contact Sales',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'virtual-reality',
        title: 'What is Virtual Reality?',
        text: 'Unleash the Full Potential of your Tours in VR with Vizion.\n As the only Matterport overlay platform offering VR support for any of our digital twins, we provide access to cutting-edge features that will take your experience to the next level.',
        buttonText: 'Get Started for Free',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'augmented-reality',
        title: 'What is the Augmented Reality App?',
        text: 'The Augmented Reality App by Treedis enables businesses to experience your digital twin in its physical environment. Whether you are in manufacturing, retail, malls, or any other industry, our versatile app can be applied to create seamless blends of the virtual and physical worlds. With AR, you can overlay digital information, virtual objects, interactive elements, and even enable indoor navigation, captivating and engaging your audience in innovative ways.',
        buttonText: 'Get Started',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'experience-creator',
        title: 'What is the Experience Creator?',
        text: 'The Vizion Experience Creator enables you to create immersive experiences based on your 3D twins. You can combine these twins and 3D graphics with real-world physical spaces to create experiences that captivate users and deeply immerse them in the scene.',
        buttonText: 'Get Started for Free',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
    {
        whatIsId: 'analytics',
        title: 'What are Vizion Analytics?',
        text: 'Utilizing powerful analytics is the key to success. They allow you to capture leads and analyze customer engagement. Subsequently, they can help improve your sales process and bottom line.\n Track all the information you need online with a comprehensive Treedis analytics dashboard.',
        buttonText: 'Get Started for Free',
        desktopImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637101f601967339b6c17cd9_video-bg-pinky.svg',
        mobileImage: 'https://cdn.prod.website-files.com/636d1da0a8aa09416247d194/637103e071bc73478bb4ba64_video-bg-pinky-mobile.svg',
        video: 'https://vizion-homepage-video-s3.s3.ap-southeast-1.amazonaws.com/vizion-home-desktop.mp4'
    },
]

export default whatIsMock