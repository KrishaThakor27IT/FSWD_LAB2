const task = {
    title: "Complete Python Course",
    dueTime: 1,
    priority: "High",
};
 const tasks = [];
 function addTask(task) {
    try {
        if (!task.title || !task.dueTime || !task.priority) {
            throw new Error("Task must have title, dueTime, and priority.");
        }
        tasks.push(task);
        console.log("Task added successfully!");
    } catch (error) {
        console.error(error.message);
    }
}
addTask({ title: "Submit Report", dueTime: 2, priority: "High" });
addTask({ title: "Prepare Meeting Slides", dueTime: 10, priority: "Medium" });
function sortTasksByPriority() {
    tasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    console.log("Tasks sorted by priority:", tasks);
}
sortTasksByPriority();
// tasks.js
 function getTasksDueWithin(minutes) {
    const now = 0; // Assume current time is 0 minutes from now
    const dueTasks = tasks.filter(task => task.dueTime <= now + minutes);
    console.log(`Tasks due within ${minutes} minutes:`, dueTasks);
    return dueTasks;
}
getTasksDueWithin(10);
function scheduleReminders() {
    tasks.forEach(task => {
        setTimeout(() => {
            console.log(`Reminder: Task "${task.title}" is due now!`);
        }, task.dueTime * 10000); // Convert minutes to milliseconds
    });
}
try {
    addTask({ title: "Incomplete Task" }); // Missing dueTime and priority
} catch (error) {
    console.error("Error adding task:", error.message);
}

scheduleReminders();