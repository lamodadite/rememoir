import React from "react";
import { Calendar } from "lucide-react";

export default function DateInput({ value, onChange }) {
  return (
    <div className="flex-1">
      <label
        htmlFor="date"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Date
      </label>
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="date"
          id="date"
          name="date"
          value={value}
          onChange={onChange}
          className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
    </div>
  );
}