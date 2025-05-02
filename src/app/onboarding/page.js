'use client';

import React, { useEffect, useState } from 'react';
import InputField from '../components/InputField';
import DatePickerField from '../components/DatePickerField';
import TimePickerField from '../components/TimePickerField';
import DocumentUploader from '../components/DocumentUploader';
import PrimaryButton from '../components/PrimaryButton';
import { useGetOnboarding, usePostOnboarding } from '../hooks/useOnboarding';
import Logo from '../components/Logo';
import toast from 'react-hot-toast';

export const Onboarding = () => {
    const { data, isLoading } = useGetOnboarding();
    const { mutate, isPending } = usePostOnboarding();

    const [formData, setFormData] = useState({
        storeName: '',
        corporationName: '',
        ein: 0,
        licenseNumber: '',
        description: '',
        storeEmail: '',
        storeContactNumber: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        liquorLicenseUrl: '',
        weekendOpenTime: '',
        weekendCloseTime: '',
        weekDaysOpenTime: '',
        weekDaysCloseTime: '',
        holidayDates: [],
    });

    useEffect(() => {
        if (data) {
            setFormData({
                ...formData,
                ...data,
                holidayDates: data.holidayDates || [],
            });
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleTimeChange = (name, isoValue) => {
        setFormData((prev) => ({ ...prev, [name]: isoValue }));
    };

    const handleHolidayChange = (index, newDate) => {
        const updatedDates = [...formData.holidayDates];
        updatedDates[index] = newDate;
        setFormData((prev) => ({ ...prev, holidayDates: updatedDates }));
    };

    const handleAddHoliday = () => {
        setFormData((prev) => ({
            ...prev,
            holidayDates: [...prev.holidayDates, ''],
        }));
    };

    const handleRemoveHoliday = (index) => {
        const updatedDates = formData.holidayDates.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, holidayDates: updatedDates }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            holidayDates: formData.holidayDates.map(date =>
                typeof date === 'string' ? date : new Date(date).toISOString()
            ),
        };

        mutate(payload, {
            onSuccess: () => {
                toast.success('Onboarding details submitted successfully!');
            },
            onError: (error) => {
                toast.error(error?.message || 'Submission failed!');
            },
        });
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="flex justify-center h-20 mb-10">
                <Logo imageSrc="/SipStr.png" text="MyApp" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Business Details */}
                <Section title="Business Details">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Business Name" name="storeName" value={formData.storeName} onChange={handleChange} />
                        <InputField label="Corporation Name" name="corporationName" value={formData.corporationName} onChange={handleChange} />
                        <InputField label="EIN Number" name="ein" value={formData.ein} onChange={handleChange} />
                        <InputField label="License Number" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} />
                        <InputField label="Description" name="description" value={formData.description} onChange={handleChange} />
                    </div>
                </Section>

                {/* Contact Details */}
                <Section title="Contact Details">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Contact Email" name="storeEmail" value={formData.storeEmail} onChange={handleChange} />
                        <InputField label="Contact Number" name="storeContactNumber" value={formData.storeContactNumber} onChange={handleChange} />
                        <InputField label="Address Line 1" name="address1" value={formData.address1} onChange={handleChange} />
                        <InputField label="Address Line 2" name="address2" value={formData.address2} onChange={handleChange} />
                        <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
                        <InputField label="State" name="state" value={formData.state} onChange={handleChange} />
                        <InputField label="Zipcode" name="zipcode" value={formData.zipcode} onChange={handleChange} />
                        <InputField label="Country" name="country" value={formData.country} onChange={handleChange} />
                    </div>
                </Section>

                {/* Document Uploads */}
                <Section title="Document Uploads">
                    <DocumentUploader label="Upload Liquor License" name="liquorLicenseUrl" onChange={handleChange} />
                </Section>

                {/* Store Timings & Holidays */}
                <Section title="Store Timings & Holidays">
                    <div className="flex flex-col lg:flex-row lg:gap-8 space-y-6 lg:space-y-0">
                        {/* Weekdays */}
                        <TimeRow
                            label="Weekdays"
                            openTime={formData.weekDaysOpenTime}
                            closeTime={formData.weekDaysCloseTime}
                            openName="weekDaysOpenTime"
                            closeName="weekDaysCloseTime"
                            onTimeChange={handleTimeChange}
                        />

                        {/* Weekends */}
                        <TimeRow
                            label="Weekends"
                            openTime={formData.weekendOpenTime}
                            closeTime={formData.weekendCloseTime}
                            openName="weekendOpenTime"
                            closeName="weekendCloseTime"
                            onTimeChange={handleTimeChange}
                        />
                    </div>
                    {/* Store Holidays */}
                    <div className="grid grid-cols-1 gap-4 mt-6">
                        <label className="font-semibold">Store Holidays</label>

                        {/* Render each holiday date picker */}
                        {formData.holidayDates.map((date, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <DatePickerField
                                    name={`holidayDate_${index}`}
                                    value={date}
                                    onChange={(e) => handleHolidayChange(index, e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveHoliday(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <PrimaryButton
                            type="button"
                            onClick={handleAddHoliday}
                            className="text-blue-500 hover:text-blue-700 w-fit mt-2"
                        >
                            + Add Holiday
                        </PrimaryButton>
                    </div>


                </Section>

                {/* Submit */}
                <div className="flex justify-center gap-4 mt-8">
                    <PrimaryButton type="submit">{isPending ? 'Submitting...' : 'Submit'}</PrimaryButton>
                </div>
            </form>
        </div>
    );
};

const Section = ({ title, children }) => (
    <div className="border p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
    </div>
);

const TimeRow = ({ label, openTime, closeTime, openName, closeName, onTimeChange }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 flex-1 min-w-0">
        <label className="font-semibold col-span-1 whitespace-nowrap">{label}</label>
        <div className="flex flex-wrap items-center gap-2 col-span-2 w-full min-w-0">
            <div className="flex-1 min-w-[120px]">
                <TimePickerField name={openName} value={openTime} onChange={(e) => onTimeChange(openName, e.target.value)} />
            </div>
            <span className="text-gray-600">to</span>
            <div className="flex-1 min-w-[120px]">
                <TimePickerField name={closeName} value={closeTime} onChange={(e) => onTimeChange(closeName, e.target.value)} />
            </div>
        </div>
    </div>
);

export default Onboarding;
