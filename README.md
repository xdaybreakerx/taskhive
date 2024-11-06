# taskhive

An express API for a task management / issue tracker

## Context

Wanted to create a express.js API for practice

Asked ChatGPT 4o to give me a list of features to implement with user stories and acceptance criteria. Full list can be found [here](./docs/userstories.md)

### Proposed Core Features

1. Authentication and Authorization
    - User Registration/Login: Implement JWT-based authentication to secure the API.
    - Roles & Permissions: Different roles like admin, project manager, and team member, with permission-based access to various features.
2. Project and Board Management
    - Project Creation: CRUD operations for managing projects.
    - Boards and Columns: Allow each project to have boards with customizable columns (e.g., “To Do”, “In Progress”, “Done”).
    - Task Cards: Create, update, delete, and move task cards across columns.
3. Task and Incident Management
    - Task Details: Title, description, assignees, due date, priority, and status.
    - Incident Reporting: Track incidents with unique identifiers, priority levels, and resolution statuses.
    - Assignment and Ownership: Assign tasks or incidents to team members.
4. Comments and Activity Logs
    - Comments: Allow team members to leave comments on tasks or incidents.
    - Activity Log: Track changes to tasks, including status changes, assignment updates, and comments.
5. Search and Filtering
    - Search: Search tasks by title, description, priority, or assignee.
    - Filter: Filter tasks or incidents by status, priority, due date, or assigned team member.
6. Notifications
    - User Notifications: Notify users of new assignments, status updates, or comments on tasks they’re involved in.
    - Rate Limiting: Limit notification requests to avoid spamming.
7. File Attachments
    - Attachment Handling: Allow users to upload attachments or link resources to tasks or incidents.

### Proposed Stretch Features

1. Sprint and Milestone Management
    - Sprint Creation: Track tasks within sprints for agile project management.
    - Milestones: Add milestones and associate tasks with specific milestones for better tracking.
2. Analytics and Reporting
    - Task Statistics: Provide stats on completed, overdue, and pending tasks.
    - Incident Reports: Summarize incident types, resolution times, and frequencies.
3. Audit and History
    - Change History: Track and display a comprehensive history of task and incident changes for accountability.
    - Audit Log: Keep a secure log of all changes for compliance.
4. User Mentions and Notifications
    - @Mentions: Enable tagging users in comments.
    - Notification Preferences: Allow users to configure their notification preferences.
5. Webhooks and Integrations
    - Third-Party Integration: Add integrations with tools like Slack, email, or calendar systems for seamless workflows.
    - Webhooks: Allow project managers to set up webhooks to notify external services of specific events, like status changes.
