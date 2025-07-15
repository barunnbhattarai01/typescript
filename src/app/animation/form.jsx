"use client"
import React, { useState } from "react";
import { Building2, Contact, Briefcase, Mail, Phone, IndianRupee, Star, Trash, Pencil } from "lucide-react";



function Form() {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="bg-slate-300 p-4 w-[400px] rounded-lg shadow-md">
      
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-x-4">
          <Building2 className="text-gray-700" />
          <input type="text" placeholder="Company" className="w-96 bg-white h-7 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        
        <div className="flex items-center gap-x-4">
          <Contact className="text-gray-700" />
          <input type="text" placeholder="Contact Name" className="w-96 bg-white h-7 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        
        <div className="flex items-center gap-x-4">
          <Briefcase className="text-gray-700" />
          <input type="text" placeholder="Opportunity" className="w-96 bg-white h-7 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        
        <div className="flex items-center gap-x-4">
          <Mail className="text-gray-700" />
          <input type="email" placeholder="Contact Email" className="w-96 bg-white h-7 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        
        <div className="flex items-center gap-x-4">
          <Phone className="text-gray-700" />
          <input type="tel" placeholder="Contact Phone" className="w-96 bg-white h-7 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        
        <div className="flex items-center gap-x-4">
          <IndianRupee className="text-gray-700" />
          <input type="number" placeholder="Amount" className="w-44 bg-white h-7 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <div className="flex gap-2 ml-auto">
            {[1, 2, 3].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
              >
                <Star
                  fill={star <= rating ? "#facc15" : "none"}
                  stroke="#facc15"
                  className="w-6 h-6"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <div className="flex gap-3">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded transition-colors">
            Add
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded transition-colors">
            <Pencil />
          </button>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded transition-colors">
          <Trash/>
        </button>
      </div>
      
    </div>
  );
}

export default Form;
