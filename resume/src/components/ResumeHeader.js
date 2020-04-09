import React from "react";

const ResumeHeader = ({ basics }) => {
  const { name, label, summary, picture } = basics;

  return (
    <div className="resume-header">
      {picture ? <img src={picture} alt={name} /> : null}
      <h1>{name}</h1>
      {label ? <h2>{label}</h2> : null}
      {summary ? <p>{summary}</p> : null}
    </div>
  );
};

export default ResumeHeader;
