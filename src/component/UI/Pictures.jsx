import React from "react";

function Picture() {
    var pics = []
    function loop() {
        for (let i = 0; i < 9; i++) {
            var pic = "p" + i + ".jpg"
            pics.push(pic)
        }
    }

    loop()
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 mt-20">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Explore the beautiful world together!
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                        Wishing your journey to be filled with laughter and beautiful memories, and may you reap abundant joy at every destination!
                    </p>
                </header>

                <ul className="grid gap-4 mt-8 sm:grid-cols-3 lg:grid-cols-3">
                    {
                        pics.map((item) => {
                            let path = "./image/landscape/" + item
                            return (
                                <li>
                                    <a href="#" className="block overflow-hidden group">
                                        <img
                                            src={path}
                                            alt=""
                                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                        />
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </section>
    );
}
export default Picture