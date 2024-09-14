import SideBar from "../components/sideBar";
import HomePageRouter from "../pages/Router";

export default function HomePage() {
    return (
        <div>
            <div className="sticky flex h-screen flex-row gap-4 overflow-y-auto rounded-lg sm:overflow-x-hidden font-poppins font-extralight">

                <SideBar/>

                <div className="flex w-full flex-row flex-wrap gap-4 p-6">
                    <div className="flex flex-col items-center justify-center">

                    <HomePageRouter/>

                    </div>
                </div>
            </div>
        </div>
    )
}
