import { BsFillPatchQuestionFill } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import playstore from "/get-it-on-google-play.png";
import appstore from "/download-on-the-app-store.svg";

const Home = () => {
  const [price, setPrice] = useState(0),
    [platform, setPlatform] = useState("generic"),
    fetchPrice = () => {
      fetch("https://api.coinbase.com/v2/prices/spot?currency=USD")
        .then((res) => res.json())
        .then((data) =>
          setPrice(
            data.data.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          )
        );
    };

  let fetched = false;
  useEffect(() => {
    if (!fetched) {
      fetchPrice();
      fetched = true;
    }

    setInterval(fetchPrice, 5000);
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    switch (true) {
      case /iPad|iPhone|iPod/.test(userAgent):
        setPlatform("ios");
        break;
      case /Android/.test(userAgent):
        setPlatform("android");
        break;
    }
  }, []);

  return (
    <div className="content">
      <p className="font-bold text-7xl text-cyan-500">Coinbase</p>
      <p className="mt-3 text-2xl text-gray-800">
        A simple, easy and secure way to <b>buy and sell cryptocurrencies.</b>
      </p>
      <Link href="/about">
        <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-xl text-white py-2 px-4 rounded-full">
          <BsFillPatchQuestionFill className="icon" /> Learn More
        </button>
      </Link>
      <div className="text-center mt-20">
        <p className="text-5xl text-gray-800">
          Current price of <span className="text-yellow-600">Bitcoin</span> is{" "}
          <b>${price} USD</b>
          <br />
          <a href="https://coinbase.com/" target="_blank">
            <button className="mt-10 bg-green-500 hover:bg-green-700 text-xl text-white py-2 px-4 rounded-full">
              <BiMoney className="icon" /> Invest Now
            </button>
          </a>
          <a href="https://www.coinbase.com/en/price" target="_blank">
            <button className="ml-5 bg-gray-400 hover:bg-gray-700 text-xl text-white py-2 px-4 rounded-full">
              Check Pricing
            </button>
          </a>
        </p>
      </div>
      <div className="text-center mt-20 text-gray-800">
        <p className="text-5xl">
          <b>Download Coinbase today</b>
        </p>
        <br />
        {platform === "ios" && (
          <a
            href="https://apps.apple.com/us/app/coinbase-buy-bitcoin-ether/id886427730"
            target="_blank"
          >
            <img
              src={appstore}
              alt="appstore"
              width="195"
              className="mx-auto inline-block"
            />
          </a>
        )}
        {platform === "android" && (
          <a
            href="https://play.google.com/store/apps/details?id=com.coinbase.android&hl=es_MX&gl=US"
            target="_blank"
          >
            <img
              src={playstore}
              alt="playstore"
              width="240"
              className="mx-auto inline-block"
            />
          </a>
        )}
        {platform === "generic" && (
          <span className="mt-2">
            <a
              href="https://apps.apple.com/us/app/coinbase-buy-bitcoin-ether/id886427730"
              target="_blank"
            >
              <img
                src={appstore}
                alt="appstore"
                width="195"
                className="mx-auto inline-block"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.coinbase.android&hl=es_MX&gl=US"
              target="_blank"
            >
              <img
                src={playstore}
                alt="playstore"
                width="240"
                className="mx-auto inline-block"
              />
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default Home;
