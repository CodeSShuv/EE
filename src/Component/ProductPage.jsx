import "./product.css"
const ProductPage = () => {
    const product = {
        name: "Amazing Product",
        price: "$49.99",
        description: "Join our expertly designed English course tailored for learners at all levels! Whether you're starting from scratch or looking to refine your skills, we have the perfect package for you. Our course is structured into four progressive levels: General, Basic, Intermediate, and Advanced English, ensuring that you build a strong foundation and advance confidently."
        , courseDetails: "",
        image: "./English Elevation(1).png" // Placeholder image
    };

    return (
        <div className="product-page">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-des">

                <h1 className="product-title">Unlock Your Potential with Our Comprehensive English Course!</h1>

                <p className="product-description">

                    Join our expertly designed English course tailored for learners at all levels! Whether you're starting from scratch or looking to refine your skills, we have the perfect package for you. Our course is structured into four progressive levels: General, Basic, Intermediate, and Advanced English, ensuring that you build a strong foundation and advance confidently.

                </p>



                <h2 className="package-title">Course Packages:</h2>

                <ul className="package-list">

                    <li>

                        <strong>4-Week Package:</strong> Perfect for beginners! Immerse yourself in the essentials of English with our intensive 4-week course, designed to give you a solid introduction to the language. You'll learn fundamental grammar, vocabulary, and basic conversational skills to kickstart your journey.

                    </li>

                    <li>

                        <strong>3-Month Package:</strong> Ideal for those who want to deepen their understanding. Over three months, you'll cover essential grammar, vocabulary, and conversational skills, setting you up for success in everyday situations. This package includes interactive lessons and practical exercises to enhance your learning experience.

                    </li>

                    <li>

                        <strong>6-Month Package:</strong> Take your English to the next level! This comprehensive package allows for a more in-depth exploration of the language, with a focus on fluency and comprehension. You'll engage in real-world conversations and develop the skills necessary for professional settings, ensuring you're prepared for any situation.

                    </li>

                    <li>

                        <strong>12-Month Package:</strong> Our most extensive offering! Commit to a year of learning and mastery. This package includes advanced topics, specialized vocabulary, and the opportunity to practice your skills in various contexts. With personalized feedback and support, you'll become a confident and proficient English speaker, ready to tackle any challenge.

                    </li>

                </ul>


                <h2 className="why-choose-title">Why Choose Us?</h2>

                <ul className="why-choose-list">

                    <li>

                        <strong>Expert Instructors:</strong> Learn from experienced teachers who are dedicated to your success and passionate about helping you achieve your goals.

                    </li>

                    <li>

                        <strong>Interactive Learning:</strong> Engage in dynamic lessons that incorporate speaking, listening, reading, and writing exercises, making learning enjoyable and effective.

                    </li>

                    <li>

                        <strong>Flexible Scheduling:</strong> Choose a package that fits your lifestyle and learning pace, allowing you to balance your studies with other commitments.

                    </li>

                    <li>

                        <strong>Supportive Community:</strong> Join a network of learners who share your goals and aspirations, providing encouragement and motivation throughout your journey.

                    </li>

                </ul>


                <p className="call-to-action">

                    Start your journey to fluency today! Enroll now and transform your English skills with our comprehensive courses designed for every learner. Unlock new opportunities and gain the confidence to communicate effectively in English!

                </p>

            </div>
            {/* <p className="product-price">{product.price}</p> */}
            <button className="join-now-btn">Join Now</button>
        </div>
    );
};

export default ProductPage