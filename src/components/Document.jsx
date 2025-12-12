import "../styles/Document.css";

export default function Document({data}) {
  return (
    <div className={"document"}>
      <Resume data={data}/>
    </div>
  );
}

function Resume({data}) {
  return (
    <div className={"resume"}>
    </div>
  );
}

