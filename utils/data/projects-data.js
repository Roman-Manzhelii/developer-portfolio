import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Game Blog',
        description: "I developed a web application using Laravel 8, tailored for gaming enthusiasts. The application includes user authentication, CRUD operations for posts and games, commenting features, dynamic routing, and a responsive design.",
        tools: ['PHP', 'Laravel', 'Tailwind', 'CSS', 'MySQL'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: "Bug's Life",
        description: "Bug's Life is a C++ application that simulates the movement and interaction of various bugs on a 10x10 grid Bug Board. The board supports different types of bugs with unique behaviors. When the board is tapped, all bugs move, potentially leading to interactions where bugs fight, and the largest bug eats the others.",
        tools: ['C++', 'SFML'],
        role: 'Solo Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Cool T-shirts',
        description: "Cool T-shirts is a web application for an online t-shirt store. The site allows users to browse, add to cart, and purchase t-shirts. Administrators can manage products and users. The application features user registration and login using JSON Web Tokens (JWT), CRUD operations for products, PayPal integration for payments, and both client-side and server-side validation.",
        tools: ['React', 'Express', 'MongoDB', 'JWT', 'Multer', 'CSS'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
];