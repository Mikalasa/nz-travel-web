//React
import React from "react";

function AboutMessage() {
    return (
        <div>
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg">
                                Thank you for visiting our website! Please leave your valuable comments
                                and suggestions here, and we will get back to you as soon as possible!
                            </p>

                            <div className="mt-8">
                                <a href="" className="text-2xl font-bold text-pink-600">
                                    Tel: +64 (***) *** ****
                                </a>

                                <address className="mt-2 not-italic">
                                    xxx xxx Street, 3rd Floor, Wellington, 6011
                                </address>
                            </div>

                            <img src="./image/landscape/map.png" className="mt-8"/>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="" className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">First Name</label>
                                    <input
                                        className="w-full rounded-lg border-black-900 p-3 text-sm"
                                        placeholder="First Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="name">Last Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Last Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default AboutMessage;