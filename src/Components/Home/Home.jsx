import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import './Home.css';

import Hamburger from '../../Assets/Hamburger.svg';
import closeButtonIcon from '../../Assets/closeButtonIcon.svg';
import personImage from '../../Assets/jessica-radanavong-IchPBHFD0pw-unsplash.png';
import starIcon from '../../Assets/StarIcon.svg';
import star_for from '../../Assets/star_4.svg';
import ArrowIcon from '../../Assets/ArrowIcon.svg';
import personImageMobile from '../../Assets/jessica-radanavong-IchPBHFD0pw-unsplash_mobile.png'
import bigStar from '../../Assets/BigStarIcon.svg'

const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
        name: 'Our Products',
        id: 'product',
        child: [
            { name: 'Product 1', id: 'p1' },
            { name: 'Product 2', id: 'p2' },
            { name: 'Product 3', id: 'p3' },
            { name: 'Product 4', id: 'p4' },
        ],
    },
    { name: 'Contact Us', id: 'contact' },
];

const Home = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const removeAllActiveHeadings = () => {
        const headings = document.querySelectorAll('.nav_bottom_items_heading');
        headings.forEach((heading) => {
            heading.classList.remove('nav_bottom_items_heading_active');
        });
    };

    useEffect(() => {
        const bottomNav = document.querySelector('.nav_bottom');

        const handleNavClick = (e) => {
            removeAllActiveHeadings();
            const target = e.target;

            if (target.tagName === 'H1') {
                target.classList.add('nav_bottom_items_heading_active');
                const targetChild = target.nextElementSibling;

                if (targetChild && targetChild.tagName === 'UL') {
                    targetChild.classList.toggle('nav_bottom_items_child_active');
                }
            }
        };

        bottomNav.addEventListener('click', handleNavClick);

        return () => {
            bottomNav.removeEventListener('click', handleNavClick);
        };
    }, []);

    return (
        <div id="Home" className="w-full">
            <div className="home_container w-full">
                <Header />
                <div className="nav">
                    <div className="nav_top">
                        <div className="nav_top_left">
                            <h1>ShopKart</h1>
                        </div>
                        <div className="nav_top_right">
                            <h3>Wishlist (0)</h3>
                            <h3>Bag (0)</h3>
                            <img
                                src={isNavOpen ? closeButtonIcon : Hamburger}
                                alt=""
                                height="24px"
                                width="24px"
                                style={{ zIndex: "999" }}
                                onClick={() => setIsNavOpen(!isNavOpen)}
                            />
                        </div>
                        <div className="starIcon">
                            <img src={starIcon} alt="" width="22" height="22" />
                        </div>
                    </div>

                    <div className="nav_bottom">
                        {navbar.map((item) => (
                            <div className="nav_bottom_items" key={item.id}>
                                <h1 className="nav_item nav_bottom_items_heading">{item.name}</h1>
                                {item.child && (
                                    <ul className="nav_bottom_items_child_inactive" style={{ position: "absolute" }}>
                                        {item.child.map((child) => (
                                            <li
                                                key={child.id}
                                                style={{
                                                    fontSize: "14px",
                                                    fontFamily: "Work Sans",
                                                    fontWeight: "200",
                                                }}
                                            >
                                                {child.name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="sliding_navbar">
                    <ul className={isNavOpen ? "sliding_navbar_child_active" : "sliding_navbar_child_inactive"}>
                        {navbar.map((item) => (
                            <li className="sliding_navbar_child_items" key={item.id}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="home_hero">
                    <div className="home_content">
                        <div className="home_content_left">
                            <h1>Fresh</h1>
                            <p>2022</p>
                            <h1 style={{ paddingLeft: "12px" }}>Look</h1>
                            <img src={star_for} alt="" />
                        </div>
                        <div className="home_content_right">
                            <p>OREGON JACKET <br /> $124</p>
                        </div>
                    </div>

                    <div className="orange_bar_two" style={{ color: "white" }}></div>

                    <img src={personImage} alt="" className="person_image" />
                    <img src={personImageMobile} alt="" className="person_image_mobile" />
                    <img src={bigStar} alt="" className="starBig_image" />

                    <div className="button">
                        <p>See more</p>
                        <img src={ArrowIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;





// import React, { useState, useEffect } from 'react';
// import Header from '../../Components/Header/Header';
// import './Home.css';
// import Hamburger from '../../Assets/Hamburger.svg';
// import closeButtonIcon from '../../Assets/closeButtonIcon.svg'
// import personImageMobile from '../../Assets/jessica-radanavong-IchPBHFD0pw-unsplash_mobile.png'
// import personImage from '../../Assets/jessica-radanavong-IchPBHFD0pw-unsplash.png'
// import starIcon from '../../Assets/StarIcon.svg';
// import bigStar from '../../Assets/BigStarIcon.svg'
// import star_for from '../../Assets/star_4.svg'
// import ArrowIcon from '../../Assets/ArrowIcon.svg'

// const Home = () => {
//     const [isNavOpen, setIsNavOpen] = useState(false);

//     const navbar = [
//         { name: 'Home', id: 'home' },
//         { name: 'About', id: 'about' },
//         {
//             name: 'Our Products', id: 'product', child: [
//                 { name: 'Product 1', id: 'p1' },
//                 { name: 'Product 2', id: 'p2' },
//                 { name: 'Product 3', id: 'p3' },
//                 { name: 'Product 4', id: 'p4' },
//             ]
//         },
//         { name: 'Contact Us', id: 'contact' },
//     ];

//     function removeAllActiveHeadings() {
//         const headings = document.querySelectorAll(".nav_bottom_items_heading");
//         headings.forEach(heading => {
//             heading.classList.remove("nav_bottom_items_heading_active");
//         });
//     }
    
//     useEffect(() => {
//         const bottomNav = document.querySelector(".nav_bottom");
    
//         function handleNavClick(e) {
//             removeAllActiveHeadings();
//             const target = e.target;
    
//             if (target.tagName === "H1") {
//                 target.classList.add("nav_bottom_items_heading_active");
//                 const targetChild = target.nextElementSibling;
    
//                 if (targetChild && targetChild.tagName === "UL") {
//                     targetChild.classList.toggle("nav_bottom_items_child_active");
//                 }
//             }
//         }
    
//         bottomNav.addEventListener("click", handleNavClick);
    
//         return () => {
//             bottomNav.removeEventListener("click", handleNavClick);
//         };
//     }, []);


//     return (
//         <div id="Home w-full">
//             <div className="home_container w-full">
//             <Header />
//                 <div className="nav">
//                     <div className="nav_top">
//                         <div className="nav_top_left">
//                             <h1>ShopKart</h1>
//                         </div>
//                         <div className="nav_top_right">
//                             <h3>Wishlist (0)</h3>
//                             <h3>Bag (0)</h3>
//                             <img
//                                 src={isNavOpen ? closeButtonIcon : Hamburger}

//                                 alt=""
//                                 height="24px"
//                                 width="24px"
//                                 style={{ zIndex: "999" }}
//                                 onClick={() => setIsNavOpen(!isNavOpen)}
//                             />
//                         </div>
//                         <div className="starIcon">
//                             <img src={starIcon} alt="" width="22" height="22px" />
//                         </div>
//                     </div>

//                     <div className="nav_bottom">
//                         {navbar.map(item => (
//                             <div className="nav_bottom_items" key={item.id}>
//                                 <h1 className="nav_item nav_bottom_items_heading">{item.name}</h1>
//                                 {item.child && (
//                                     <ul className="nav_bottom_items_child_inactive" style={{ position: "absolute" }} >
//                                         {item.child.map(child => (
//                                             <li
//                                                 key={child.id}
//                                                 style={{
//                                                     fontSize: "14px",
//                                                     fontFamily: "Work Sans",
//                                                     fontWeight: "200",
//                                                 }}
//                                             >
//                                                 {child.name}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="sliding_navbar">
//                     <ul className={isNavOpen ? "sliding_navbar_child_active" : "sliding_navbar_child_inactive"}>
//                         {navbar.map(item => (
//                             <li className="sliding_navbar_child_items" key={item.id}>
//                                 {item.name}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>


//                 <div className="home_hero">

//                     <div className="home_content">
//                         <div className="home_content_left">
//                             <h1>Fresh</h1>
//                             <p>2022</p>
//                             <h1 style={{ paddingLeft: "12px" }}>Look</h1>
//                             <img src={star_for} alt="" />
//                         </div>

//                         <div className="home_content_right">
//                             <p>OREGON JACKET <br /> $124</p>
//                         </div>
//                     </div>

//                     {/* <div className="orange_bar" style={{ color: "white" }}>

//                     </div> */}
//                     <div className="orange_bar_two" style={{ color: "white" }}>

//                     </div>

//                     <img src={personImageMobile} alt="" className="person_image_mobile" />
//                     <img src={personImage} alt="" className="person_image" />
//                     <img src={bigStar} alt="" className="starBig_image" />

//                     <div className="button">
//                         <p>See more</p>
//                         <img src={ArrowIcon} alt="" />
//                     </div>

//                 </div>



//             </div>
//         </div>
//     );
// };

// export default Home;

