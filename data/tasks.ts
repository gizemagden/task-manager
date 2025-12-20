import { Task } from "@/types/tasks";

const tasks: Task[] = [
  {
    id: "1",
    title: "Layout improvements",
    author: "gizemagden",
    description: "",
    date: "",
    comments: [],
  },
  {
    id: "2",
    title: "Backend connection",
    author: "gizemagden",
    description: "",
    date: "",
    comments: [],
  },
  {
    id: "3",
    title: "Test task",
    author: "gizemagden",
    description: "",
    date: "",
    comments: [],
  },
  {
    id: "4",
    title: "Test task 2",
    author: "gizemagden",
    description: "",
    date: "",
    comments: [
      {
        id: "11",
        text: "Example comment",
        date: "",
        username: "seconduser",
      },
    ],
  },
  {
    id: "5",
    title: "Test task 3",
    author: "gizemagden",
    description: "",
    date: "",
    comments: [],
  },
];

export default tasks;
