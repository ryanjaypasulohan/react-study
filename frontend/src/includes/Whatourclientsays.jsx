import React from 'react';
import Slider from 'react-slick';  

const testimonials = [
    {
        name: 'Jhon Doe',
        title: 'CEO, Company Inc.',
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageURL: "https://placehold.co/200x200",
    },
        {
        name: "Jane Smiths",
        title: "Marketing Director",
        feedback: "I love how user-friendly and intuitive the platform is. It saved us a ton of time.",
        imageURL: "https://placehold.co/200x200", 
    },

    {
        name: "Sam Wilson",
        title: "Software Engineer",
        feedback: "A great tool for developers. Highly recommended for teams looking for efficiency.",
        imageURL: "https://placehold.co/200x200", 
    },
];

const Whatourclientsays = () => {
        const handleImageError = (e) => {
        console.error(`Failed to load image for: ${e.target.alt}`);
        e.target.src = "https://placehold.co/200x200";  // Use fallback image on error
    };

    const settings = {
        dots: true,
        prevArrow: <button className="testimonial_prev_btn"><figure><img src="/Home/testimonials/left-arrow.png" alt="left arrow" /></figure></button>,
        nextArrow: <button className="testimonial_next_btn"><figure><img src="/Home/testimonials/right-arrow.png" alt="right arrow" /></figure></button>,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    {testimonials.map((testimonial, index) => {console.log(`${testimonial.imageURL} - ${testimonial.name}`)})}
    return (
        <>
            <div className="testimonials_con py-15">
                <div className="wrapper">
                    <h2>What does our customer say?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis iste veritatis. Voluptatem eaque, consequuntur iusto nisi dolore rerum est?</p>
                      <div className="slider_con">
                        <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div className="testimonial_card" key={index}>
                                <figure><img src={testimonial.imageURL} alt={testimonial.name} onError={handleImageError} /></figure>
                                <h3>{testimonial.name} <span>{testimonial.title}</span></h3>
                                <p>{testimonial.feedback}</p>

                            </div>
                        ))}
                      </Slider>
                      </div>

                </div>
            </div>
        </>
    )
}

export default Whatourclientsays