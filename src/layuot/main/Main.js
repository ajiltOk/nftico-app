import Discover from "./discover/Discover";
import Drops from "./drops/Drops";
import Collections from "./collections/Collections";
import Tranding from "./tranding/Tranding";
import Resourses from "./resourses/Resourses";
import Browse from "./browse/Browse";
import Connect from "./connect/Connect";

export default function Main() {
    return(
        <main>
            <Discover />
            <Drops />
            <Collections />
            <Tranding />
            <Resourses />
            <Browse />
            <Connect />
        </main>
    )
}