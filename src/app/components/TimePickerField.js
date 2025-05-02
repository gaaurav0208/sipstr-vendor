'use client';
import React, { useEffect, useState } from 'react';
import { FaRegClock } from 'react-icons/fa';

const TimePickerField = ({ label, name, value, onChange, error }) => {
    const [hours, setHours] = useState('12');
    const [minutes, setMinutes] = useState('00');
    const [ampm, setAmpm] = useState('AM');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Parse initial value
    useEffect(() => {
        if (value) {
            const date = new Date(value);
            let hrs = date.getHours();
            const mins = date.getMinutes();

            const ampmValue = hrs >= 12 ? 'PM' : 'AM';
            hrs = hrs % 12 || 12;

            setHours(hrs.toString().padStart(2, '0'));
            setMinutes(mins.toString().padStart(2, '0'));
            setAmpm(ampmValue);
        }
    }, [value]);

    const handleChange = (newHours = hours, newMinutes = minutes, newAmpm = ampm) => {
        let hrs = parseInt(newHours, 10);
        if (newAmpm === 'PM' && hrs !== 12) hrs += 12;
        if (newAmpm === 'AM' && hrs === 12) hrs = 0;

        const now = new Date();
        now.setHours(hrs, parseInt(newMinutes, 10), 0, 0);
        onChange({ target: { name, value: now.toISOString() } });
    };

    const handleHourChange = (e) => {
        const newVal = e.target.value;
        setHours(newVal);
        handleChange(newVal, minutes, ampm);
    };

    const handleMinuteChange = (e) => {
        const newVal = e.target.value;
        setMinutes(newVal);
        handleChange(hours, newVal, ampm);
    };

    const handleAmpmChange = (e) => {
        const newVal = e.target.value;
        setAmpm(newVal);
        handleChange(hours, minutes, newVal);
    };

    const handleInputClick = () => {
        setIsDropdownVisible((prev) => !prev);
    };

    return (
        <div className="flex flex-col mb-4 w-full relative">
            <label className="font-semibold mb-1">{label}</label>
            <div className="border border-gray-300 rounded-md relative flex items-center focus-within:ring-2 focus-within:ring-[#EA580C]">
                <input
                    type="text"
                    name={name}
                    value={`${hours}:${minutes} ${ampm}`}
                    readOnly
                    onClick={handleInputClick}
                    className="w-full p-2 pr-10 pl-3 text-left cursor-pointer rounded-md"
                    placeholder="hh:mm AM/PM"
                />
                <FaRegClock
                    size={20}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={handleInputClick}
                />
            </div>

            {isDropdownVisible && (
                <div className="absolute top-full left-0 mt-2 bg-white border p-4 rounded-md shadow-lg z-10">
                    <div className="flex gap-2 mb-2">
                        <select
                            name={`${name}-hour`}
                            value={hours}
                            onChange={handleHourChange}
                            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                        >
                            {Array.from({ length: 12 }, (_, i) => {
                                const hourVal = (i + 1).toString().padStart(2, '0');
                                return <option key={hourVal} value={hourVal}>{hourVal}</option>;
                            })}
                        </select>

                        <select
                            name={`${name}-minute`}
                            value={minutes}
                            onChange={handleMinuteChange}
                            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                        >
                            {['00', '15', '30', '45'].map((minute) => (
                                <option key={minute} value={minute}>{minute}</option>
                            ))}
                        </select>

                        <select
                            name={`${name}-ampm`}
                            value={ampm}
                            onChange={handleAmpmChange}
                            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                </div>
            )}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        </div>
    );
};

export default TimePickerField;
