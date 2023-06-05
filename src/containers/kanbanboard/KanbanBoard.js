import React, { useState } from 'react';
import './KanbanBoard.css'; // Import the CSS file for styling
import { PlusCircleFilled, DeleteFilled, ClockCircleFilled } from "@ant-design/icons";

const KanbanBoard = () => {
  const [columns, setColumns] = useState([
    { title: 'To Do', items: [{title: 'Update the asset inventory database', description: 'The asset inventory database is a critical tool that enables efficient tracking and management of various assets owned by our firm. This task involves updating the database to ensure accurate and up-to-date information.'}, {title: "Enhance Reporting and Analytics Capabilities", description: "Improve the firm's reporting and analytics capabilities to provide comprehensive insights to clients. Identify relevant key performance indicators (KPIs), develop advanced reporting templates, and integrate data visualization tools to enhance data-driven decision-making."}]},
    { title: 'In Progress', items: [{title: "Develop Client Onboarding Process Improvement Strategy", description: "Evaluate the current client onboarding process and identify areas for improvement. Collaborate with stakeholders to streamline procedures, enhance efficiency, and ensure a seamless experience for new clients joining the firm."}]},
    { title: 'Done', items: [{title: "Compliance Procedures for Regulatory Compliance", description: "Conduct a thorough review of the firm's compliance procedures to ensure adherence to regulatory requirements. Identify any gaps or potential areas of non-compliance and develop an action plan to address them, maintaining the firm's reputation and legal standing."}, {title: 'Conduct Market Research for New Investment Opportunities', description: "Research and analyze potential investment opportunities in emerging markets to diversify the firm's portfolio. Gather relevant data, evaluate market trends, and provide recommendations for consideration."}] }
  ]);

  const handleDragStart = (event, columnIdx, itemIdx) => {
    event.dataTransfer.setData('columnIdx', columnIdx);
    event.dataTransfer.setData('itemIdx', itemIdx);
  };

  const handleDragOver = (event, columnIdx) => {
    event.preventDefault();
  };

  const handleDrop = (event, columnIdx) => {
    event.preventDefault();
    const draggedColumnIdx = parseInt(event.dataTransfer.getData('columnIdx'));
    const draggedItemIdx = parseInt(event.dataTransfer.getData('itemIdx'));
    const draggedItem = columns[draggedColumnIdx].items[draggedItemIdx];

    if (draggedColumnIdx !== columnIdx) {
      const updatedColumns = [...columns];
      updatedColumns[draggedColumnIdx].items.splice(draggedItemIdx, 1);
      updatedColumns[columnIdx].items.push(draggedItem);
      setColumns(updatedColumns);
    }
  };

  const handleAddCard = (columnIdx) => {
    const cardTitle = prompt('Enter card title:');
    if (cardTitle) {
      const cardDescription = prompt('Enter card description:');
      const updatedColumns = [...columns];
      updatedColumns[columnIdx].items.push({ title: cardTitle, description: cardDescription });
      setColumns(updatedColumns);
    }
    console.log(columns);
  };

  const handleDeleteCard = (columnIdx, itemIdx) => {
    const updatedColumns = [...columns];
    updatedColumns[columnIdx].items.splice(itemIdx, 1);
    setColumns(updatedColumns);
    console.log(columns);
  };

  return (
    <div className="project-wrapper">
      <div className="indv-project">
        <h1>Asset Management Project</h1>
        <p className="project-description" style={{marginBottom: 0}}><b>Role: </b>Admin</p>
        <p className="project-description"><b>Description: </b>Our asset management firm is a leading provider of comprehensive investment solutions, dedicated to assisting individuals, institutions, and organizations in achieving their financial goals. With a strong commitment to delivering exceptional service and generating sustainable returns, we specialize in managing diverse portfolios across various asset classes.</p>
        <div className="kanban-board">
          {columns.map((column, columnIdx) => (
            <div
              key={columnIdx}
              className="kanban-column"
              onDragOver={(event) => handleDragOver(event, columnIdx)}
              onDrop={(event) => handleDrop(event, columnIdx)}
            >
              <div className="title-section">
                <h3>{column.title}</h3>
                <button
                  className="add-card-button"
                  onClick={() => handleAddCard(columnIdx)}
                >
                  <PlusCircleFilled />
                </button>
              </div>
              {column.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="kanban-item"
                  draggable
                  onDragStart={(event) => handleDragStart(event, columnIdx, itemIdx)}
                >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="item-footer">
                    {(() => {
                      if (columnIdx === 0) {
                        return (
                          <ClockCircleFilled style={{color: "red"}}/>
                        )
                      } else if (columnIdx === 1) {
                        return (
                          <ClockCircleFilled style={{color: "orange"}}/>
                        )
                      } else if (columnIdx === 2) {
                        return (
                          <ClockCircleFilled style={{color: "green"}}/>
                        )
                      }
                      else {
                        return (
                            <ClockCircleFilled/>
                          )
                      }
                    })()}

                    <button
                      className="delete-card-button"
                      onClick={() => handleDeleteCard(columnIdx, itemIdx)}
                    >
                      <DeleteFilled />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;