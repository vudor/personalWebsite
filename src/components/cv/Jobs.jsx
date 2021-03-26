import React from 'react';
export default function Jobs({ items }) {
  return (
    <>
      {items.map((job) => {
        return (
          <section className="section mx-6 my-4 p-6" key={JSON.stringify(job)}>
            <h1
              className="title has-text-primary"
              style={{ textTransform: 'uppercase' }}
            >
              {job.title}
            </h1>
            <h2 className="subtitle ">
              <div className="level">
                <div className="level-left has-text-weight-medium">
                  <p>{job.company}</p>
                </div>
                <div className="level-right">
                  <p>{`${job.start} - ${job.end}`}</p>
                </div>
              </div>
            </h2>
            <div className="content">
              <p>{job.description}</p>
              {job.qualifications.length ? (
                <ul className="menu-list">
                  {job.qualifications.map((entry) => (
                    <li key={`job-${entry}`}>{entry}</li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
