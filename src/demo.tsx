"use client";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialData = {
  columns: {
    new: {
      name: "New",
      items: [
        { id: "1", name: "Company A" },
        { id: "2", name: "Company B" },
      ],
    },
    contacted: {
      name: "Contacted",
      items: [],
    },
    won: {
      name: "Won",
      items: [],
    },
  },
};

function CRMBoard() {
  const [columns, setColumns] = useState(initialData.columns);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const draggedItem = sourceCol.items[source.index];

    // Remove from source
    const sourceItems = [...sourceCol.items];
    sourceItems.splice(source.index, 1);

    // Add to destination
    const destItems = [...destCol.items];
    destItems.splice(destination.index, 0, draggedItem);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceCol,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destCol,
        items: destItems,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-6 p-6 overflow-x-auto">
        {Object.entries(columns).map(([colId, col]) => (
          <Droppable key={colId} droppableId={colId}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-white rounded shadow p-4 w-64 min-h-[200px]"
              >
                <h2 className="font-bold mb-4">{col.name}</h2>
                {col.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-blue-100 p-3 rounded mb-2 shadow"
                      >
                        {item.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default CRMBoard;
