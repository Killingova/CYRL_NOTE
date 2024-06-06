import React, { useState, useRef } from 'react';

const questions = [
  "Was ist dein Hauptziel für heute?",
  "Welche Aufgaben müssen erledigt werden?",
  "Welche Prioritäten hast du heute?",
  "Was sind deine langfristigen Ziele?",
  "Was kannst du heute tun, um deine Ziele zu erreichen?",
];

export default function NewTagesplaner({ onCancel, onSave }) {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [note, setNote] = useState('');
  const [goals, setGoals] = useState(Array(1).fill(''));
  const [priority, setPriority] = useState(null);
  const currentQuestion = useRef(Math.floor(Math.random() * questions.length));

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleGoalChange = (index, value) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const handleSave = () => {
    const data = {
      id: `priority-${priority}`,
      date,
      time,
      note,
      goals: goals[0],
      priority,
    };
    onSave(data);
  };

  const getDayOfWeek = (date) => {
    const days = ['SONNTAG', 'MONTAG', 'DIENSTAG', 'MITTWOCH', 'DONNERSTAG', 'FREITAG', 'SAMSTAG'];
    const dayIndex = new Date(date).getDay();
    return days[dayIndex];
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-pastel-blue">
      <div className="flex justify-center items-center w-full mt-16 mb-4">
        <div className="text-2xl font-bold text-bold-green text-center">{questions[currentQuestion.current]}</div>
      </div>
      <div className="p-16 bg-pastel-blue max-w-5xl w-full mx-4 mt-4 mb-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-center">

          <div>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="border-2 border-earth-terracotta p-2 rounded w-full shadow-lg"
            />
          </div>

          <div>
            <p className="text-earth-terracotta text-4xl">{getDayOfWeek(date)}</p>
          </div>

          <div>
            <input
              type="time"
              value={time}
              onChange={handleTimeChange}
              className="border-2 border-earth-terracotta p-2 rounded w-full shadow-lg"
            />
          </div>
        </div>

        <div className="mb-4">
          <textarea
            value={note}
            onChange={handleNoteChange}
            className="border-2 border-bold-green p-2 rounded w-full h-32 shadow-lg"
            placeholder="Notizinhalt"
          />
        </div>

        <div className="mb-4">
          <textarea
            value={goals[0]}
            onChange={(e) => handleGoalChange(0, e.target.value)}
            className="border-2 border-earth-terracotta p-2 rounded w-full h-20 shadow-lg"
            placeholder="Tagesziel"
          />
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="flex flex-col items-center mx-1">
                <span>{num}</span>
                <div
                  onClick={() => handlePriorityChange(num)}
                  className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 cursor-pointer ${priority === num ? 'bg-bold-green' : 'bg-white'}`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className="bg-bold-green text-white px-4 py-2 rounded hover:bg-bold-blue shadow-lg"
          >
            Speichern
          </button>
          <button
            onClick={onCancel}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 shadow-lg"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
}
