import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        console.log("click");
        router.push({
            pathname: "/products",
            query: {
                search: searchTerm,
            },
        });
        setSearchTerm("");
    };

    const handleInput = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };
    return (
        <>
            <form>
                <select className="select-active text-center gap-2">
                    <option>همه دسته بندی ها</option>
                    <option>گوشی موبایل</option>
                    <option>تبلت</option>
                    <option>لوازم جانبی</option>
                    <option>لپ تاپ</option>
                    <option>کنسول بازی</option>
                    <option>ساعت هوشمند</option>
                    <option>لپ تاپ</option>
                    <option>هدفون و هندزفری</option>
                </select>
                <input
                    className="search-bar"
                    value={searchTerm}
                    onKeyDown={handleInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="جست و جو"
                />
            </form>
        </>
    );
};

export default Search;
