import React from "react";
import "./globals.css";

// Ensure global styles are imported

export const Home: React.FC = () => {
  return (
    <div className="flex justify-center w-full bg-white">
      <div className="bg-white border border-black max-w-[393px] w-full p-5">
        <div className="text-center">
          <img className="w-full max-w-[393px] rounded-lg" alt="Cafe UNO" src="/img/CafeUNOfrontside1.png" />
          <p className="text-lg text-center p-2">
            Café UNO er en ungdomskafe i hjertet av Hamar sentrum.
            <br />
            UNO har en kaffebar med god kvalitet til snille priser.
          </p>
        </div>

        <div className="bg-[#7d290f] text-white text-center p-4 rounded-lg my-4">
          <h2 className="text-xl">Åpningstider</h2>
          <p>Tirsdag, Torsdag: 13:00 - 19:00</p>
          <p>Lørdag: 11:30 - 17:30</p>
          <p className="text-red-500 font-bold">Stengt: Mandag, Onsdag, Fredag, Søndag</p>
        </div>

        <div className="text-center my-4">
          <h2 className="text-xl text-gray-800">Meny</h2>
          <div className="grid grid-cols-2 gap-4 justify-center">
            {[
              { src: "/img/latte1.png", title: "Latte", desc: "Kaffe det er latte" },
              { src: "/img/svartest kaffe1.png", title: "Svart", desc: "Kølsvart" },
              { src: "/img/americano.png", title: "Americano", desc: "God bless USA" },
              { src: "/img/machaito1.png", title: "Machaito", desc: "Rå smak" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                <img src={item.src} alt={item.title} className="w-20 h-20 object-cover" />
                <h3 className="text-lg text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between p-2 bg-[#7d290f] rounded-lg">
          <img className="h-8" alt="Cafe Uno logo" src="/img/logo.png" />
          <img className="h-8" alt="Instagram" src="/img/Instagram.svg" />
        </div>
      </div>
    </div>
  );
};
