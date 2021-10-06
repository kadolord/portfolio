/* This example requires Tailwind CSS v2.0+ */

import React from "react";
import { Layout } from "../../layout/Layout";

interface skillProps {}

export const Skills: React.FC<skillProps> = ({}) => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Skills</h1>
      </div>
      <header className="bg-white shadow"></header>
      <main></main>
    </Layout>
  );
};
