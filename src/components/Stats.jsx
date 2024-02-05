import React from "react";
import Cards from "./Cards";
import { STATE_DATA } from "../../data";

function Stats() {
  return (
    <>
      <section id="about" className="bg-secondary">
        <div className="max-w-screen-xl flex flex-wrap gap-12 items-center justify-around mx-auto py-12 px-6">
          {STATE_DATA.map((item) => (
            <Cards
              key={item.label}
              iconUrl={item.iconUrl}
              count={item.count}
              label={item.label}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Stats;
