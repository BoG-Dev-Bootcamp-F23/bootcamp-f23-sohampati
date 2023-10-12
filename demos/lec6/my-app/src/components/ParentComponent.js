import ChildComponent from "./ChildComponent";

const data = [
  {
    name: "nathan",
    role: "instructor",
    semesters: 3,
  },
  {
    name: "zini",
    role: "ta",
    semesters: 2,
  },
  {
    name: "long",
    role: "ta",
    semesters: 2,
  },
];

export default function ParentComponent() {
  return (
    <div>
      <h1>Bits of Good Developer Bootcamp Directory</h1>
      {data.map((person) => {
        return <ChildComponent {...person} />;
      })}
    </div>
  );
}
