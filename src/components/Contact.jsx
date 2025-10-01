const Contact = () => {
    return(
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
                <p className="text-xl text-gray-600">
                    Have questions? We'd love to hear from you. Send us a message!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea 
                                rows="4"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                        
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="text-orange-500 text-xl mr-4">📧</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Email</h3>
                                    <p className="text-gray-600">deepesh.sharma@foodieexpress.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-orange-500 text-xl mr-4">📱</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Phone</h3>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-orange-500 text-xl mr-4">📍</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Address</h3>
                                    <p className="text-gray-600">
                                        123 Food Street<br/>
                                        Delhi, India 110001
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="text-orange-500 text-xl mr-4">🕒</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                                    <p className="text-gray-600">
                                        Monday - Sunday<br/>
                                        9:00 AM - 11:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default Contact;