import React, { useEffect, useState } from "react";
import Note from "../components/note";
import Padawan from "../components/padawan";
const notesData = [10, 12, 14, 8, 20, 5, 24];
const padawansData = ["Alexandre", "Elena", "Thibault", "Clémence"];

const Test = (props) => {
  const [notes, setNotes] = useState([]);
  const [padawans, setPadawans] = useState([]);
  const [currentPadawan, setCurrentPadawan] = useState(null);

  useEffect(() => {
    //S'effectue une seule fois
    setNotes(notesData);
    setPadawans(padawansData);
  }, []);

  return (
    <div className="flex flex-col">
      <ul>
        {padawans.map((padawan) => (
          <Padawan
            key={padawan}
            name={padawan}
            handleClickPadawan={setCurrentPadawan}
          />
        ))}
      </ul>
      <div className="mt-4">
        <span>{currentPadawan}</span>
      </div>
    </div>
  );
};
export default Test;
