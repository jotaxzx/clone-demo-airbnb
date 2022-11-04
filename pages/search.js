import { format } from "date-fns";
import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = ({ searchResults }) => {

    const router = useRouter();

    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");

    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className=" text-xs">300 + Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className="text-3xl mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex space-x-4 mb-5 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and beds </p>
                        <p className="button">More filters </p>
                    </div>


                    <div>
                        {
                            searchResults.map(item => (
                                <InfoCard
                                    key={item.title}
                                    img={item.img}
                                    location={item.location}
                                    title={item.title}
                                    description={item.description}
                                    star={item.star}
                                    price={item.price}
                                    total={item.total}
                                />
                            ))
                        }

                    </div>
                </section>

                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map searchResults={searchResults} />
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(res => res.json());

    return {
        props: {
            searchResults
        }
    }
}