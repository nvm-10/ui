import React, { useState } from 'react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('waiting');
    const [logs, setLogs] = useState('');
    const [showLogWindow, setShowLogWindow] = useState(false);

    const jobs = {
        waiting: [
            { id: 1, name: 'Job 1', status: 'Waiting' },
            { id: 2, name: 'Job 2', status: 'Waiting' },
        ],
        running: [
            { id: 3, name: 'Job 3', status: 'Running' },
        ],
        completed: [
            { id: 4, name: 'Job 4', status: 'Completed' },
        ],
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleViewLogs = (jobName) => {
        setLogs(`Logs for ${jobName}\n----------------\nTask started...\nTask in progress...\nTask completed successfully!`);
        setShowLogWindow(true);
    };

    const closeLogWindow = () => {
        setShowLogWindow(false);
    };

    return (
        <div className="dashboard-container d-flex">
            {/* Left Panel: Submit Task */}
            <div className="left-panel p-5">
                <h3 className="mb-4 text-center">Submit a Task</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="taskName" className="form-label">Task Name</label>
                        <input type="text" id="taskName" className="form-control" placeholder="Enter task name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="taskDetails" className="form-label">Task Details</label>
                        <textarea id="taskDetails" className="form-control" rows="4" placeholder="Enter task details"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="priority" className="form-label">Priority</label>
                        <select id="priority" className="form-control">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="deadline" className="form-label">Deadline</label>
                        <input type="date" id="deadline" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit Task</button>
                </form>
            </div>

            {/* Right Panel: Job Tabs */}
            <div className="right-panel flex-grow-1 p-4">
                {/* Tabs for Job Categories */}
                <div className="tabs mb-3">
                    {['waiting', 'running', 'completed'].map((tab) => (
                        <button
                            key={tab}
                            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)} Jobs
                        </button>
                    ))}
                </div>

                {/* Job List */}
                <div className="job-list">
                    {jobs[activeTab].map((job) => (
                        <div key={job.id} className="job-item d-flex justify-content-between align-items-center">
                            <span>{job.name}</span>
                            <button
                                className="btn btn-secondary btn-sm"
                                onClick={() => handleViewLogs(job.name)}
                            >
                                View Logs
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Log Window */}
            {showLogWindow && (
                <div className="log-window">
                    <div className="log-content">
                        <pre>{logs}</pre>
                        <button className="btn btn-danger" onClick={closeLogWindow}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
