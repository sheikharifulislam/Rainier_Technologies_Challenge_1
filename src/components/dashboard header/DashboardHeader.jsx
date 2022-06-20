import { MdArrowForwardIos } from "react-icons/md";

const DashboardHeader = () => {
    return (
        <div>
            <h1>
                Dashboard{" "}
                <MdArrowForwardIos style={{ display: "inline-block" }} /> Supply
                Room
            </h1>
            <div className="mt-3">
                <input
                    type="text"
                    placeholder="Search Items"
                    className="rounded border py-1 pl-2 text-xs"
                />
            </div>
        </div>
    );
};

export default DashboardHeader;
