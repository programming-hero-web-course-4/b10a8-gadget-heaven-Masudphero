
function AboutUs() {

    return (
        <>
            <section className="w-10/12 mx-auto mb-32">

                <h2 className="text-3xl font-bold my-10">About us</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 my-4">Welcome</h3>
                        <p className="text-gray-600 p-4 bg-white rounded-xl">At Gadget Heaven, we are passionate about bringing you the latest and greatest in technology and innovation. <br /> <br /> Our mission is to provide you with cutting-edge gadgets and accessories that enhance your lifestyle and elevate your tech experience.</p>
                    </div>

                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 my-4">Our Story</h3>
                        <p className="text-gray-600 p-4 bg-white rounded-xl flex-1">Founded in 2024, Gadget Heaven started with a simple idea: to make advanced technology accessible to everyone. <br /> <br /> Over the years, we have grown into a trusted source for high-quality gadgets, from smart devices to essential home appliances.</p>
                    </div>

                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 my-4">Our Commitment</h3>
                        <p className="text-gray-600 p-4 bg-white rounded-xl">We are committed to providing exceptional customer service and support. Our team is here to help you with any questions or concerns you may have. <br /> <br /> We believe in building lasting relationships with our customers and ensuring your satisfaction with every purchase.</p>
                    </div>
                </div>

                <hr className="my-20" />

                <div className="gap-4 justify-between">

                    <div className="text-gray-500">
                        <h3 className="text-lg font-semibold text-gray-800 mt-2">What We Offer</h3>
                        <div className="space-y-1 py-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="space-y-2 bg-white p-4 rounded-xl">
                                <strong className="text-gray-600 w-max mx-auto">Home Appliances</strong>
                                <p>Upgrade your home with our range of smart and efficient appliances.</p>
                            </div>

                            <div className="space-y-2 bg-white p-4 rounded-xl">
                                <strong className="text-gray-600">Electronics</strong>
                                <p>Discover the latest in audio, visual, and computing technology.</p>
                            </div>

                            <div className="space-y-2 bg-white p-4 rounded-xl">
                                <strong className="text-gray-600">Fitness & Outdoor</strong>
                                <p>Stay active and enjoy the outdoors with our fitness and outdoor gear.</p>
                            </div>

                            <div className="space-y-2 bg-white p-4 rounded-xl">
                                <strong className="text-gray-600">Accessories</strong>
                                <p>Find the perfect accessories to complement your tech.</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-20" />

                    <div className="text-gray-600 my-4 flex max-lg:flex-col gap-4 justify-between">

                        <div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 my-2">Our History</h3>

                                <p className="max-w-[45ch] md:p-4 rounded-tl-xl rounded-tr-xl"> Our extensive experience in the industry has enabled us to refine our processes, expand our product range, and enhance customer satisfaction.</p>
                            </div>

                            <div className="flex max-md:flex-col gap-4 pt-6 md:p-6 rounded-br-xl rounded-bl-xl w-max">
                                <div>
                                    <p className="text-6xl font-black text-gray-700">12</p>
                                    <p>Years Experience</p>
                                </div>

                                <div>
                                    <p className="text-6xl font-black text-gray-700">10K</p>
                                    <p>Happy Customers</p>
                                </div>

                                <div>
                                    <p className="text-6xl font-black text-gray-700">100%</p>
                                    <p>Clients Satisfaction</p>
                                </div>
                            </div>

                        </div>

                        
                    </div>

                </div>
            </section>

        </>
    )
}

export default AboutUs;