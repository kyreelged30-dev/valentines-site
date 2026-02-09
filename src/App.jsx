import { useState } from "react";
import { motion } from "framer-motion";

export default function ValentinesPage() {
  const [answered, setAnswered] = useState(false);
  const [yes, setYes] = useState(false);
  const [noClicks, setNoClicks] = useState(0);

  const noMessages = [
    "Ulol ",
    "Hindi ka kay Donny ",
    "Talagang Pinipilit nya",
    "Okay ang awkward na 😭",
    "Umo oo ka na lng",
    "PINDOTIN MO YES",
  ];

  const handleNo = () => setNoClicks(noClicks + 1);
  const handleYes = () => {
    setAnswered(true);
    setYes(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-300 via-purple-300 to-fuchsia-300 flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center shadow-2xl rounded-2xl bg-white p-10">
        {!answered && (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <h1 className="text-4xl font-bold mb-6">Hi My love!</h1>
            <p className="text-lg mb-8">Meron Ako Mahalagang Tanong Sayo...</p>
            <h2 className="text-3xl font-semibold mb-10">
              I Know it sucks na hindi tayo makakapag date sa mismong Valentines day, so will you be my Earlyntines Date? 💖
            </h2>

            <div className="flex gap-6 justify-center">
              <button
                onClick={handleYes}
                className="text-xl px-8 py-6 rounded-2xl bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                OO NAMAN
              </button>

              <motion.div
                animate={{ x: noClicks % 2 === 0 ? 0 : 80, y: noClicks % 3 === 0 ? 0 : -40 }}
                transition={{ type: "spring" }}
              >
                <button
                  onClick={handleNo}
                  className="text-xl px-8 py-6 rounded-2xl border border-purple-600 text-purple-700 bg-white hover:bg-purple-100 transition"
                >
                  PASS kAY DONNY LNG AKO
                </button>
              </motion.div>
            </div>

            {noClicks > 0 && (
              <p className="mt-6 text-sm">
                {noMessages[Math.min(noClicks - 1, noMessages.length - 1)]}
              </p>
            )}
          </motion.div>
        )}

        {answered && yes && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
            <h1 className="text-4xl font-bold mb-6">WOWWWW!!</h1>
            <p className="text-xl mb-4">You just made me the happiest person ❤️</p>
            <p className="text-lg mb-6">I can’t wait for our Earlyntines date 💐</p>

            <img
              src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
              alt="flower"
              className="mx-auto rounded-2xl shadow-lg"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}