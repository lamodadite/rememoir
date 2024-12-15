import { Calendar, Book, Clock, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { render } from "react-dom";
export default function StudyManager() {
  const [studyRecords, setStudyRecords] = useState([
    {
      id: 1,
      date: "2024-01-15",
      subject: "Mathematics",
      subcategory: "Linear Algebra",
      content:
        "Covered linear algebra concepts including matrices, vectors, and linear transformations. Practiced solving systems of equations using various methods.",
    },
    {
      id: 2,
      date: "2024-01-14",
      subject: "Physics",
      subcategory: "Quantum Mechanics",
      content:
        "Studied quantum mechanics fundamentals - wave functions, Schrödinger equation, and probability density. Worked through example problems on particle in a box.",
    },
    {
      id: 3,
	  
      date: "2024-01-13",
      subject: "Computer Science",
      subcategory: "Data Structures",
      content:
        "Deep dive into data structures - implemented binary search trees and practiced balancing algorithms. Analyzed time complexity for various operations.",
    },
  ]);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    subject: "",
    subcategory: "",
    content: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      id: studyRecords.length + 1,
      ...formData,
    };
    setStudyRecords([newRecord, ...studyRecords]);
    setFormData({
      date: new Date().toISOString().split("T")[0],
      subject: "",
      subcategory: "",
      content: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <main className="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Add Study Record</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
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
                  value={formData.date}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="flex-1">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <div className="relative">
                <Book className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter subject"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="subcategory"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subcategory
            </label>
            <div className="relative">
              <Book className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                id="subcategory"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter subcategory"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Study Notes
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your study notes here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Save Record
          </button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Study History</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {studyRecords.map((record) => (
            <article
              key={record.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <time dateTime={record.date}>
                    {new Date(record.date).toLocaleDateString()}
                  </time>
                </div>
                <button
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  onClick={() => alert(`Reviewing: ${record.subject}`)}
                >
                  Review
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>

              <h3 className="text-lg font-semibold mb-1">{record.subject}</h3>
              <p className="text-gray-500 text-sm mb-2">{record.subcategory}</p>
              <p className="text-gray-600 line-clamp-3">{record.content}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
render(<StudyManager />, document.getElementById("root"));
