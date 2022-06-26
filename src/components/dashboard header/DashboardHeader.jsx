import { useState } from "react";
import { BsChevronDown, BsSliders, BsX } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { TbArrowsDownUp } from "react-icons/tb";

const DashboardHeader = () => {
    const [bookmarks, setBookmarks] = useState([]);

    const [handleDropdown, setHandleDropdown] = useState({
        tag: false,
        filter: false,
    });
    return (
        <div className="sticky top-0 bg-white py-6">
            <h1>
                Dashboard{" "}
                <MdArrowForwardIos style={{ display: "inline-block" }} /> Supply
                Room
            </h1>
            <div className="mt-3 flex items-center gap-3">
                <input
                    type="text"
                    placeholder="Search Items..."
                    className="rounded border py-2 pl-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#333] focus:ring-offset-0"
                />
                {["Tag", "Filter"].map((item, index) => (
                    <div className="relative ml-3" key={index}>
                        <div>
                            <button
                                onClick={() =>
                                    setHandleDropdown({
                                        ...handleDropdown,
                                        tag:
                                            item === "Tag" &&
                                            !handleDropdown.tag,
                                        filter:
                                            item === "Filter" &&
                                            !handleDropdown.filter,
                                    })
                                }
                                type="button"
                                className="flex max-w-xs items-center gap-2 rounded border bg-white p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-0"
                            >
                                {item === "Tag" ? (
                                    <BsSliders />
                                ) : (
                                    <TbArrowsDownUp />
                                )}
                                <BsChevronDown />
                            </button>
                        </div>

                        <div
                            className={`${
                                (
                                    item === "Tag"
                                        ? handleDropdown.tag
                                        : handleDropdown.filter
                                )
                                    ? "scale-100 transform opacity-100"
                                    : "pointer-events-none scale-95 transform opacity-0"
                            } absolute right-0 mt-2 w-max origin-top-right rounded-md bg-white px-1 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition duration-500 ease-out focus:outline-none`}
                        >
                            {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                            {[...Array(5)].map((_, index) => {
                                const select = `${item} ${index + 1}`;
                                return (
                                    <button
                                        onClick={() => {
                                            setBookmarks([
                                                ...bookmarks,
                                                !bookmarks.includes(select)
                                                    ? select
                                                    : null,
                                            ]);
                                            setHandleDropdown({
                                                tag: false,
                                                filter: false,
                                            });
                                        }}
                                        key={index}
                                        className="block px-4 py-2 text-sm text-gray-700"
                                    >
                                        {item} {index + 1}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
                <div className="flex items-center gap-2">
                    {bookmarks.filter(Boolean).map((bookmark) => (
                        <h1 className="flex items-center gap-2 rounded border bg-white p-2 text-xs">
                            {bookmark}{" "}
                            <BsX
                                className="h-4 w-4 cursor-pointer"
                                onClick={() =>
                                    setBookmarks(
                                        bookmarks.filter(
                                            (item) => item !== bookmark
                                        )
                                    )
                                }
                            />{" "}
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
