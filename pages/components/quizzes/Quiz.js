import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Quiz({ question }) {
    const inputStandard = "bg-gray-50 border border-gray-500 text-gray-900 placeholder-gray-700 text-sm rounded-lg focus:ring-gray-500 dark:bg-gray-700 focus:border-gray-500 block w-half p-2.5 dark:text-gray-500 dark:placeholder-gray-500 dark:border-gray-500"
    const inputSuccess = "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-half p-2.5 dark:bg-gray-700 dark:border-green-500"
    const inputFailure = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-half p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
    const buttonStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-1 rounded"

    const [appearance, setAppearance] = useState(inputStandard);
    const { register, handleSubmit } = useForm();

    const onFormSubmit = (data) => {
        if (data.answer == question.answer) {
            setAppearance(inputSuccess);
            alert("Correct Answer");
        } else {
            setAppearance(inputFailure);
            alert("Incorrect Response. Please try again.");
        }
    };

    const onErrors = (errors) => {
        alert(errors)
    };

    return (
        <div className="text-left">
            <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-500">{question.question}</label>
                <input type="text" placeholder="KV Answer" name="answer" className={appearance} {...register('answer')} />
                <button className={buttonStyle}>Submit</button>
                <button className={buttonStyle} onClick={() => { alert("ANSWER: " + question.answer) }}>Answer</button>
            </form>
        </div>
    )
}