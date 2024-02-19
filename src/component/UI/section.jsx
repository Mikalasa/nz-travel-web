import React from "react";


//custom
//import '../../index.css';

function Section() {
    return(
        <section className="overflow-hidden bg-gray-0 sm:grid sm:grid-cols-2 py-8 ">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        While traveling in New Zealand
                    </h2>

                    <p className="hidden text-gray-500 md:mt-4 md:block">
                        While traveling in New Zealand, visitors will find the number of sheep in the country to be quite astonishing.
                        The sheep population far exceeds the number of people, and they roam freely on vast pastures,
                        forming an indispensable part of the New Zealand landscape.
                        For tourists, watching these leisurely sheep is a unique experience that allows them to relax and enjoy the tranquility and beauty of nature.
                    </p>

                    <div className="mt-4 md:mt-8">
                        <a
                            href="#"
                            className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get More
                        </a>
                    </div>
                </div>
            </div>

            <img
                alt="Student"
                src="/image/landscape/l2.jpg"
                className="h-56 w-full object-cover sm:h-full"
            />
        </section>
    );
}

export default Section