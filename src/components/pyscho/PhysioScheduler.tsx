import React, { useState } from 'react';

interface Availability {
    [day: string]: string[];
}

const PhysioScheduler: React.FC = () => {
    const [availability, setAvailability] = useState<Availability>({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
    });

    const timeSlots: string[] = [
        '5:30 AM', '5:45 AM', '6:00 AM', '6:15 AM', '6:30 AM', '6:45 AM', '7:00 AM', '7:15 AM', '7:30 AM', '8:00 AM', '8:15 AM',
        '10:45 PM', '11:00 PM'
    ];

    const getDatesForWeek = (): string[] => {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
        console.log("dayofweek", dayOfWeek)
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - dayOfWeek);
        const dates: string[] = [];
        for (let i = 1; i <= 7; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);
            dates.push(currentDate.toDateString());
        }
        return dates;
        // console.log(weekDates)
    };

    const handleAvailabilityChange = (day: string, selectedSlots: string[], date: string) => {
        setAvailability((prevAvailability) => ({
            ...prevAvailability,
            [day]: selectedSlots,
        }));
        console.log(availability, date)
    };

    const weekDates = getDatesForWeek();
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-semibold mb-8">Physio Availability Scheduler</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.keys(availability).map((day, index) => (
                    <div key={day} className="bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">{day}</h2>
                        <p className="text-gray-500 mb-2">{weekDates[index]}</p>
                        <p className="mb-2">Select available slots:</p>
                        <div className="flex flex-wrap gap-2">
                            {timeSlots.map((slot) => (
                                <button
                                    key={slot}
                                    onClick={() => {
                                        const selectedSlots = availability[day].includes(slot)
                                            ? availability[day].filter((s) => s !== slot)
                                            : [...availability[day], slot];
                                        handleAvailabilityChange(day, selectedSlots, weekDates[index]);
                                    }}
                                    className={`bg-blue-500 text-white px-4 py-2 rounded focus:outline-none ${availability[day].includes(slot) ? 'bg-blue-700' : ''}`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Weekly Schedule</h2>
                {Object.keys(availability).map((day, index) => (
                    <div key={day} className="bg-gray-100 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold mb-2">{day}</h3>
                        <p className="text-gray-500 mb-2">{weekDates[index]}</p>
                        <ul>
                            {availability[day].map((slot) => (
                                <li key={slot} className="list-disc ml-4">{slot}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhysioScheduler;
