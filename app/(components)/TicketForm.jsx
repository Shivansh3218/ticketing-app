"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function TicketForm() {

const router= useRouter();


  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    status: "Not Started",
    progress: 0,
    category: "Other",
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setTicketData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  
    e.preventDefault();

    const res = await fetch("/api/tickets", {
        method: "POST",
        body: JSON.stringify(ticketData),
        "content-type": "application/json",
        });

        if(!res.ok){
            throw new Error("Failed to create ticket")
        }
        router.refresh();
        router.push("/");

  };

  const [ticketData, setTicketData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          required
          value={ticketData.title}
        />
        <label htmlFor="">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChange}
          required
          value={ticketData.description}
          rows="5"
        />

        <label htmlFor="">Category</label>
        <select
          name="category"
          id=""
          value={ticketData.category}
          onChange={handleChange}
        >
          <option value="Other">Other</option>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
        </select>

        <label htmlFor="">Priority</label>
        <div >  
        <input
          type="radio"
          name="priority"
          id="priority-1"
          onChange={handleChange}
          value={1}
          checked={ticketData.priority == 1}
        />
        <label htmlFor="">1</label>
        <input
          type="radio"
          name="priority"
          id="priority-2"
          onChange={handleChange}
          value={2}
          checked={ticketData.priority == 2}
        />
        <label htmlFor="">2</label>
        <input
          type="radio"
          name="priority"
          id="priority-3"
          onChange={handleChange}
          value={3}
          checked={ticketData.priority == 3}
        />
        <label htmlFor="">3</label>

        </div>
        <label htmlFor="">Progress</label>
        <input
          type="range"
          name="progress"
          id="progress"
          value={ticketData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
      
        <label htmlFor="">Status</label>
        <select
          name="status"
          id=""
          value={ticketData.status}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="started"> Started</option>
          <option value="Done">Done</option>
        </select>


        <input type="submit" className="btn" value="Create Ticket"/>


      </form>
    </div>
  );
}

export default TicketForm;
