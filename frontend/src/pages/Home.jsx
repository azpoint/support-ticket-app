import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
    return (
        <>
            <section className="flex flex-col items-center">
                <h1 className="text-4xl">What do you need help with?</h1>
                <p className="text-xl text-gray-500 font-semibold">
                    Please choose from an option below
                </p>
            </section>

            <div className="w-1/2 mx-auto flex flex-col items-center space-y-10 my-10">
                <Link to="/new-ticket" className="flex justify-center items-center gap-2 border-2 border-gray-500 bg-white text-gray-900 text-2xl w-full py-3 rounded-lg font-semibold hover:bg-gray-500 hover:text-gray-50">
                    <FaQuestionCircle /> Create New Ticket
                </Link>

                <Link to="/new-ticket" className="flex justify-center items-center gap-2 bg-gray-900 text-gray-50 text-2xl w-full py-3 rounded-lg font-semibold hover:bg-gray-500 border-2 border-gray-900 hover:border-gray-500">
                    <FaTicketAlt /> View My Tickets
                </Link>
            </div>
        </>
    );
}
export default Home;
