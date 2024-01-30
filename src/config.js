import search from './assets/workingOrderImages/note2.svg'
import clients from './assets/workingOrderImages/graph3.svg'
import award from './assets/workingOrderImages/piggy.svg'
import john from './assets/teamImages/john.jpg';
import alexandra from './assets/teamImages/alexandra.jpg';
import elisa from './assets/teamImages/elisa.jpg';
import worker from './assets/teamImages/worker.jpg';
import { FaFacebookF,FaTwitter, FaPinterest, FaDribbble, FaRocket, FaTrophy, FaGift, FaLeaf } from "react-icons/fa";
import tools from './assets/companyServiceImages/tools.svg'
import users from './assets/companyServiceImages/users.svg'
import bell from './assets/companyServiceImages/bell.svg'
import chat from './assets/companyServiceImages/chat.svg'
import world from './assets/companyServiceImages/world.svg'
import piggy from './assets/companyServiceImages/piggy.svg'
import blog1 from "./assets/latest-news/blog1.jpg";
import blog2 from "./assets/latest-news/blog2.jpg";
import blog3 from "./assets/latest-news/blog3.jpg";
import slide1 from "./slider-bg0.jpg";
import slide2 from "./slider-bg1.jpg";
import slide3 from "./slider-bg2.jpg";

const CONFIG = {
    slider: [
        {
            id: 1,
            slide: slide1
        },
        {
            id: 2,
            slide: slide2
        },
        {
            id: 3,
            slide: slide3
        }
    ],
    navConfig: {
        home: "Home",
        about: "about",
        gallery: "gallery",
        team: "team",
        services: "services",
        features: "features",
        pricing: "pricing",
        blog: "blog",
        getStarted: "get started",
    },
    workingOrder: {
        searchOps: {
            img: search,
            title: "Search Opportunities",
            description: "Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed aliquam ets vitae dictis netsum."
        },
        reachClient: {
            img: clients,
            title: "Reach Clients",
            description: "Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed aliquam ets vitae dictis netsum."
        },
        award: {
            img: award,
            title: "Get Awarded",
            description: "Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed aliquam ets vitae dictis netsum."
        }
    },
    teamInfo: [
        {
            id: 1,
             img: john,
             name: "JOHNATHAN HAWKINS",
             posInTeam: "Head of Seo",
             about: "Johnathan is our co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.",
             socialIcons: [
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaTwitter />
                },
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaPinterest />
                },
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaFacebookF />
                },
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaDribbble />
                }
             ]
        },
        {
            id: 2,
            img: alexandra,
            name: "ALEXANDRA SMITHS",
            posInTeam: "SEO Specialist",
            about: "Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she's lucky enough to do it as part of her new job inside our agency.",
            socialIcons: [
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaTwitter />
                },
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaPinterest />
                },
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaFacebookF />
                },
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaDribbble />
                }
             ]
        },
       {
            id: 3,
            img: elisa,
            name: "ELISA JOHANSON",
            posInTeam: "Marketing Manager",
            about: "Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.",
            socialIcons: [
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaTwitter />
                },
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaPinterest />
                },
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaFacebookF />
                },
                {
                    id: Math.random() * 50 + 5,
                    icon: <FaDribbble />
                }
             ]
        },
    ],
    workers: [
        {
            image: worker,
            description: 'The attention of a traveller, should be particularly turned, in the first place, to the various works of Nature, to mark the distinctions of the climates he may explore, and to offer such useful observations on the different productions as may occur.',
            name: 'Jeniffer Smith - ',
            position: 'Web Designer'
        },
        {
            image: worker,
            description: 'The attention of a traveller, should be particularly turned, in the first place, to the various works of Nature, to mark the distinctions of the climates he may explore, and to offer such useful observations on the different productions as may occur.',
            name: 'Jeniffer Doe - ',
            position: 'Magazine Editor'
        },
        {
            image: worker,
            description: 'The attention of a traveller, should be particularly turned, in the first place, to the various works of Nature, to mark the distinctions of the climates he may explore, and to offer such useful observations on the different productions as may occur.',
            name: 'Jeniffer Doe - ',
            position: 'App Magazine Editor'
        },
    ],
    services: [
        {
            id: 1,
            icon: tools,
            title: "Support 24/7",
            description: "Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat, wisi ad minim."
        },
        {
            id: 2,
            icon: users,
            title: "User Friendly",
            description: "Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat, wisi ad minim."
        },
        {
            id: 3,
            icon: bell,
            title: "Notifications",
            description: "Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat, wisi ad minim."
        },
        {
            id: 4,
            icon: chat,
            title: "Chat With Friends",
            description: "Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat, wisi ad minim."
        },
        {
            id: 5,
            icon: world,
            title: "Accesability",
            description: "Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat, wisi ad minim."
        },
        {
            id: 6,
            icon: piggy,
            title: "Cost Control",
            description: "Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat, wisi ad minim."
        }
    ],
    collapse: [
        {
            id: 1,
            icon: <FaRocket />,
            title: "Is the app available in all countries?",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum loris fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et quis autem velis reprehenderit et quis voluptate velit esse quam nihil poris ratione sequi enim ipsam voluptatem quia volupti tempor."
        },
        {
            id: 2,
            icon: <FaTrophy />,
            title: "How can I manage or stop the notification I receive?",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum loris fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et quis autem velis reprehenderit et quis voluptate velit esse quam nihil poris ratione sequi enim ipsam voluptatem quia volupti tempor."
        },
        {
            id: 3,
            icon: <FaGift />,
            title: "Can I use the subscription on more than one device?",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum loris fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et quis autem velis reprehenderit et quis voluptate velit esse quam nihil poris ratione sequi enim ipsam voluptatem quia volupti tempor."
        },
        {
            id: 4,
            icon: <FaLeaf />,
            title: "Can I use the subscription on more than one device?",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum loris fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et quis autem velis reprehenderit et quis voluptate velit esse quam nihil poris ratione sequi enim ipsam voluptatem quia volupti tempor."
        }
    ],
    userPlan: [
        {
            id: 1,
            type: "STANDARD",
            price: "$19",
            priceType: "Per Month",
            btn: "GET STARTED",
            support: "24/7 Support",
            bandwith: "50 Gb Bandwith",
            themes: "10 Themes"
        },
        {
            id: 2,
            type: "SILVER",
            price: "$29",
            priceType: "Per Month",
            btn: "GET STARTED",
            support: "24/7 Support",
            bandwith: "200 Gb Bandwith",
            themes: "Unlimited Expreiences"
        },
        {
            id: 3,
            type: "GOLD",
            price: "$99",
            priceType: "Per Month",
            btn: "GET STARTED",
            support: "24/7 Support",
            bandwith: "Unlimited Bandwith",
            themes: "All Experiences"
        }
    ],
    latestNews: [
        {
            id: 1,
            img: blog1,
            title: "Affinity Designer Quick Start",
            name: "Paul Smith",
            position: "WordPress",
            description: "Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.",
            btn: "Read More!"
        },
        {
            id: 2,
            img: blog2,
            title: "Solid HTML Form Structure",
            name: "By John Doe",
            position: "Marketing",
            description: "Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.",
            btn: "Read More!"
        },
        {
            id: 3,
            img: blog3,
            title: "New WordPress Theme",
            name: "By John Doe",
            position: "Design",
            description: "Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.",
            btn: "Read More!"
        },
    ]
}
export default CONFIG;