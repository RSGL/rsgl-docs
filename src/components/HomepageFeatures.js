import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    description: (
      <>
        RSGL is very easy to use with the simple library design and the detailed
        documentation
      </>
    ),
  },
  {
    title: "Build GUIs Fast",
    description: (
      <>
        It is very easy to build GUIs with RSGL. Feel free to go ahead and read
        the introduction to get started!
      </>
    ),
  },
  {
    title: "Fast",
    description: <>RSGL is designed to be simple and fast.</>,
  },
];

const Feature = ({ title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomepageFeatures = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <h3>Work in progress</h3>
      </div>
    </section>
  );
};

export default HomepageFeatures;
