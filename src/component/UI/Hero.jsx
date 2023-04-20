import React from "react";

//custom
function Hero() {
    return(
    <div
        className="overflow-hidden bg-[url('/public/image/landscape/bg.jpg')] bg-cover bg-center bg-no-repeat mt-20"
    >
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="text-center ltr:sm:text-left rtl:sm:text-left">
                <p
                    className="max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
                >
                    New Zealand is a travel paradise because of its stunning natural landscapes, unique culture, and delicious cuisine.
                </p>
            </div>
        </div>
    </div>


)
}

export default Hero