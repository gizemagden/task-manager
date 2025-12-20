import {
  Table,
  TableHeader,
  TableBody,
  // TableFooter,
  TableHead,
  TableRow,
  TableCell,
  // TableCell,
  // TableCaption,
} from "@/components/ui/table";
// import Link from "next/link";
// import tasks from "@/data/tasks";
// import { Task } from "@/types/tasks";

interface TasksTableProps {
  limit?: string;
  title?: string;
}

const tableData = [
  {
    title: "Task 1",
    author: "Author 1",
    date: new Date(),
  },
  {
    title: "Task 2",
    author: "Author 2",
    date: new Date(),
  },
  {
    title: "Task 3",
    author: "Author 3",
    date: new Date(),
  },
  {
    title: "Task 4",
    author: "Author 4",
    date: new Date(),
  },
  {
    title: "Task 5",
    author: "Author 5",
    date: new Date(),
  },
  {
    title: "Task 6",
    author: "Author 6",
    date: new Date(),
  },
];
const TasksTable = ({ title }: TasksTableProps) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ?? "Tasks"}</h3>
      <Table>
        {/* <TableCaption>A list of tasks</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.title}</TableCell>
              <TableCell>{data.author}</TableCell>
              <TableCell>{data.date.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TasksTable;
