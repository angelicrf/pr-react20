import React, { useState, Suspense, use } from "react";

const DisplayComponent = ({ holdData }) => {
  const allData = use(holdData);

  return (
    <>
      <ul>
        {allData.map((dt, index) => (
          <li key={index}>{dt.myname}</li>
        ))}
      </ul>
    </>
  );
};

const NewsContainer = ({ holdData }) => (
  <Suspense fallback={<p>Loading...</p>}>
    <DisplayComponent holdData={holdData} />
  </Suspense>
);

export default function UseSuspense() {
  const [thisData, setData] = useState([{ myname: "default", msg: "failed" }]);
  const [newsPromise, setNewsPromise] = useState(
    () => new Promise((resolve) => resolve(Promise.resolve(thisData)), 2000)
  );

  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          const newData = [...thisData, { myname: "angy", msg: "success" }];
          setData(newData);
          setNewsPromise(Promise.resolve(newData));

          resolve(newData);
        },

        2000
      );
    });
  };

  const handleUpdate = () => {
    fetchData().then((data) => {
      console.log("newData added: ", data);
    });
  };
  return (
    <div>
      <h3>
        Updated data <button onClick={handleUpdate}>Refresh</button>
      </h3>
      <NewsContainer holdData={newsPromise} />
    </div>
  );
}
