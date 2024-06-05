import React, { useState } from 'react';

export default function NewTagesplaner({ onCancel }) {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [note, setNote] = useState('');
  const [goals, setGoals] = useState(Array(7).fill(''));

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

  const handleSave = () => {
    // Implementieren Sie die Logik zum Speichern der Daten
    console.log('Saved', { date, time, note, goals });
  };

  const getDayOfWeek = (date) => {
    const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const dayIndex = new Date(date).getDay();
    return days[dayIndex];
  };

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block">Uhrzeit</label>
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label className="block">Datum</label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label className="block">Tag der Woche</label>
          <p className="border p-2 rounded">{getDayOfWeek(date)}</p>
        </div>
      </div>

      <div className="mb-4">
        <label className="block">Notizinhalt</label>
        <input
          type="text"
          value={note}
          onChange={handleNoteChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Tagesziele</h3>
        <ol>
          {goals.map((goal, index) => (
            <li key={index} className="mb-2">
              <input
                type="text"
                value={goal}
                onChange={(e) => handleGoalChange(index, e.target.value)}
                className="border p-2 rounded w-full"
                placeholder={`Ziel ${index + 1}`}
              />
            </li>
          ))}
        </ol>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleSave}
          className="bg-bold-green text-white px-4 py-2 rounded hover:bg-bold-blue"
        >
          Speichern
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
}
