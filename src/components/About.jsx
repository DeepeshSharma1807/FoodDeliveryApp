
import UserClass from "./UserClass";

const About = () => {
    return(
        <div className="max-w-4xl mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About FoodieExpress</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We're passionate about connecting food lovers with their favorite restaurants, 
                    delivering delicious meals right to your doorstep.
                </p>
            </div>

            {/* Mission Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    At FoodieExpress, we believe that great food brings people together. Our mission is to make 
                    food delivery fast, reliable, and enjoyable for everyone. We partner with the best local 
                    restaurants to bring you a diverse selection of cuisines.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Whether you're craving comfort food, exploring new flavors, or feeding a crowd, 
                    we're here to make your dining experience exceptional.
                </p>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-orange-50 rounded-lg p-6 text-center">
                    <div className="text-3xl mb-3">🚀</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Delivery</h3>
                    <p className="text-gray-600 text-sm">Quick and reliable delivery to your doorstep</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 text-center">
                    <div className="text-3xl mb-3">🍽️</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Food</h3>
                    <p className="text-gray-600 text-sm">Partnered with the best restaurants in town</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 text-center">
                    <div className="text-3xl mb-3">📱</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy Ordering</h3>
                    <p className="text-gray-600 text-sm">Simple and intuitive ordering experience</p>
                </div>
            </div>

            {/* Developer Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Meet the Developer</h2>
                <UserClass name={"Deepesh Sharma"}/>
            </div>
        </div>
    );
};
export default About;
