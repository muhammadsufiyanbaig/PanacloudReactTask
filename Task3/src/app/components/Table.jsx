"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Alldata from "./data.json";
import { RiArrowDropDownFill } from "react-icons/ri";
import Chart1 from "./Chart1";
const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setData(Alldata);
  }, []);

  const startIndexCut = (currentPage - 1) * dataPerPage;
  const endIndexCut = Math.min(startIndexCut + dataPerPage, data.length);
  let paginatedData = data.slice(startIndexCut, endIndexCut);
  const totalPages = Math.ceil(data.length / dataPerPage);

  const handleSortByPrice = () => {
    const sortedData = [...paginatedData];
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? a.current_price - b.current_price
        : b.current_price - a.current_price;
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setCurrentPage(1);
  };

  const handleSortByMarketCap = () => {
    const sortedData = [...paginatedData];
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? a.market_cap - b.market_cap
        : b.market_cap - a.market_cap;
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setCurrentPage(1);
  };
  const handleSortBy24hr = () => {
    const sortedData = [...paginatedData];
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? a.price_change_percentage_24h - b.price_change_percentage_24h
        : b.price_change_percentage_24h - a.price_change_percentage_24h;
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setCurrentPage(1);
  };
  const handleSortBy1hr = () => {
    const sortedData = [...paginatedData];
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? a.price_change_percentage_24h / 24 -
            b.price_change_percentage_24h / 24
        : b.price_change_percentage_24h / 24 -
            a.price_change_percentage_24h / 24;
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setCurrentPage(1);
  };
  const handleSortBy7days = () => {
    const sortedData = [...paginatedData];
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? a.price_change_percentage_24h * 7 - b.price_change_percentage_24h * 7
        : b.price_change_percentage_24h * 7 - a.price_change_percentage_24h * 7;
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setCurrentPage(1);
  };
  const handleSortByCirculatingSupply = () => {
    const sortedData = [...paginatedData];
    sortedData.sort((a, b) => {
      return sortOrder === "asc"
        ? a.circulating_supply - b.circulating_supply
        : b.circulating_supply - a.circulating_supply;
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePerPageChange = (e) => {
    const perPage = parseInt(e.target.value);
    setDataPerPage(perPage);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-lg text-gray-700 bg-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                Product name
              </th>
              <th
                onClick={handleSortByPrice}
                scope="col"
                className="px-6 py-3 cursor-pointer"
              >
                Price
              </th>
              <th
                onClick={handleSortBy1hr}
                scope="col"
                className="px-6 py-3 cursor-pointer"
              >
                1h%
              </th>
              <th
                onClick={handleSortBy24hr}
                scope="col"
                className="px-6 py-3 cursor-pointer"
              >
                24h%
              </th>
              <th
                onClick={handleSortBy7days}
                scope="col"
                className="px-6 py-3 cursor-pointer"
              >
                7d%
              </th>
              <th
                onClick={handleSortByMarketCap}
                scope="col"
                className="px-6 py-3 cursor-pointer"
              >
                Market Cap
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                Volume(24h)
              </th>
              <th
                onClick={handleSortByCirculatingSupply}
                scope="col"
                className="px-6 py-3 cursor-pointer"
              >
                Circulating Supply
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                Last 7 Days
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={startIndexCut + index}
                className="bg-white border-b border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4 cursor-pointer">
                  {item.market_cap_rank}
                </td>
                <td className="px-6 py-4 cursor-pointer">
                  <div className="flex gap-x-2">
                    <Image
                      className="w-6 h-6 rounded-full cursor-pointer"
                      alt="pic"
                      src={item.image}
                      loading="lazy"
                      width={50}
                      height={50}
                    />
                    <p>{item.name}</p>
                    <p className="uppercase cursor-pointer">{item.symbol}</p>
                  </div>
                </td>
                <td className="px-6 py-4 cursor-pointer">
                  ${item.current_price}
                </td>
                <td
                  className={`px-6 py-4 cursor-pointer ${
                    item.price_change_percentage_24h / 24 > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {(item.price_change_percentage_24h / 24).toFixed(2)}%
                </td>
                <td
                  className={`px-6 py-4 cursor-pointer ${
                    item.price_change_percentage_24h > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td
                  className={`px-6 py-4 cursor-pointer ${
                    item.price_change_percentage_24h * 7 > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {(item.price_change_percentage_24h * 7).toFixed(2)}%
                </td>
                <td className="px-6 py-4 cursor-pointer">${item.market_cap}</td>
                <td className="px-6 py-4 cursor-pointer">
                  ${item.sparkline_in_7d.price[0]}
                </td>
                <td className="px-6 py-4 cursor-pointer">
                  ${item.circulating_supply}
                </td>
                <td className="px-6 py-4 cursor-pointer">
                  <div>
                    <Chart1 data={item} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          {currentPage > 1 && (
            <button
              className="mr-2 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
              onClick={handlePrevPage}
            >
              {"<<"}
            </button>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (page) =>
                page >= currentPage - 2 &&
                page <= currentPage + 2 &&
                page >= 1 &&
                page <= totalPages
            )
            .map((page) => (
              <button
                key={page}
                className={`mr-2 px-3 py-1 border border-gray-300 rounded ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          {currentPage < totalPages && (
            <button
              className="mr-2 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
              onClick={handleNextPage}
            >
              {">>"}
            </button>
          )}
          <div className="relative ml-2">
            <select
              className="block appearance-none w-24 bg-white border border-gray-300 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={handlePerPageChange}
              value={dataPerPage}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <p className=" text-gray-700 font-black text-2xl">
                <RiArrowDropDownFill />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
