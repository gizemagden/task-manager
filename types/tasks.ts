export interface Task {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  comments: TaskComment[];
}

export interface TaskComment {
  id: string;
  text: string;
  username: string;
  date: string;
}
