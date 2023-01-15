// Home page for displaying the options... For now

import Carbs from "../components/Carbs";
import Veggies from "../components/Veggies";
import Protien from "../components/Protiens";

function Home() {
    return (
        <div>
            <Protien />
            <Veggies />
            <Carbs />
        </div>
    )
}

export default Home