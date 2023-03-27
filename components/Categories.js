import React, { Component, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryCard from "./CatagoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category" ]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      {categories.map((category) =>(
        <CategoryCard
        key={category._id}
        imgUrl={urlFor(category.image).url()}
        title={category.name}
      />
      ))}

    </ScrollView>
  );
};

export default Categories;
