import React, { useEffect, useState } from "react";
import "./Filter.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import Slider from "@mui/material/Slider";
import { getAllColors } from "../../../api/service/product/color/getAllColors";
import axios from "axios";

const Filter = () => {
  const [value, setValue] = useState([200, 10000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [brandsData] = useState([
    { name: "Adidas", count: 2 },
    { name: "Balmain", count: 7 },
    { name: "Balenciaga", count: 10 },
    { name: "Burberry", count: 39 },
    { name: "Kenzo", count: 95 },
    { name: "Givenchy", count: 1092 },
    { name: "Zara", count: 48 },
  ]);

  const [colorCodes, setColorCodes] = useState([]);
  const getColors = async () => {
    try {
      const response = await getAllColors();
      if (response) {
        setColorCodes(response.all_Colors);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const [getAllCategories, setGetAllCategories] = useState([]);
  const fetchAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://ehbackendmain.onrender.com/vendor/getAllCategories",
        { withCredentials: true }
      );

      const categories = response.data?.data;

      if (Array.isArray(categories)) {
        const formattedCategories = categories.map((cat) => ({
          label: cat.name,
          value: cat._id,
        }));

        setGetAllCategories(categories);
      } else {
        console.error("Unexpected category format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getColors();
    fetchAllCategories();
  }, []);

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredBrands = brandsData.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterSizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const sizeOptions = [
    {
      label: "Common Sizes",
      options: [
        { label: "XS", value: "XS" },
        { label: "S", value: "S" },
        { label: "M", value: "M" },
        { label: "L", value: "L" },
        { label: "XL", value: "XL" },
        { label: "XXL", value: "XXL" },
        { label: "XXXL", value: "XXXL" },
      ],
    },
    {
      label: "Numeric Sizes",
      options: Array.from({ length: 10 }, (_, i) => {
        const size = 28 + i * 2;
        return { label: size.toString(), value: size.toString() };
      }),
    },
    {
      label: "Shoe Sizes",
      options: Array.from({ length: 7 }, (_, i) => {
        const size = 6 + i;
        return { label: size.toString(), value: size.toString() };
      }),
    },
  ];

  return (
    <div>
      <div className="filterSection">
        <div className="filterCategories">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Product Categories</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {getAllCategories?.map((category) => (
                <p
                  key={category._id}
                  onClick={() => toggleCategory(category._id)}
                  style={{
                    margin: 0,
                    padding: "8px 12px",
                    cursor: "pointer",
                    backgroundColor: selectedCategories.includes(category._id)
                      ? "#FBE7B570"
                      : "transparent",
                    borderLeft: selectedCategories.includes(category._id)
                      ? "1px solid #000"
                      : "0px",
                  }}
                >
                  {category.name.toUpperCase()}
                </p>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filterColors">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Color</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {
                <div className="filterColorBtn">
                  {colorCodes?.map((color, index) => (
                    <button
                      key={index}
                      className={`colorButton ${
                        selectedColors.includes(color) ? "selected" : ""
                      }`}
                      style={{
                        backgroundColor: color,
                      }}
                      onClick={() => handleColorChange(color)}
                    />
                  ))}
                </div>
              }
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filterSizes">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Sizes</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {sizeOptions.map((group) => (
                <div key={group.label} style={{ marginBottom: "12px" }}>
                  <p style={{ fontWeight: "bold", margin: "8px 0" }}>
                    {group.label}
                  </p>
                  <div className="sizeButtons">
                    {group.options.map((sizeObj) => (
                      <button
                        key={sizeObj.value}
                        className={`sizeButton ${
                          selectedSizes.includes(sizeObj.value)
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => handleSizeChange(sizeObj.value)}
                      >
                        {sizeObj.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filterPrice">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Price</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                min={200}
                max={10000}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `₹${value}`}
                sx={{
                  color: "#f2b870",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "white",
                    border: "2px solid black",
                    width: 18,
                    height: 18,
                  },
                }}
              />

              <div className="filterSliderPrice">
                <div className="priceRange">
                  <p>
                    Min Price: <span>₹{value[0]}</span>
                  </p>
                  <p>
                    Max Price: <span>₹{value[1]}</span>
                  </p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Filter;
