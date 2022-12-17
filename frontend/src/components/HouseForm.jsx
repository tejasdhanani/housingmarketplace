import { useState } from "react";
import { useDispatch } from "react-redux";
import { createHouse } from "../features/houses/houseSlice";

import React from "react";
import FormItem from "./FormItem";

function HouseForm() {
  const initialState = {
    title: "",
    city: "",
    postalCode: "",
    description: "",
    rent: 0,
    sqFt: 0,
    type: "",
    laundry: "",
    bedroom: 0,
    bathroom: 0,
    petsAllowed: false,
    canSmoke: false,
    isFurnished: false,
    lease: "",
    walkthroughVideo: "",
    image: "",
  };

  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  const onChange = (e) => {
    if (e.target.type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    dispatch(createHouse(formData));
    setFormData(initialState);
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <div className="form-group">
          <FormItem
            htmlFor="title"
            name="title"
            placeholder="Enter house name"
            type="text"
            value={formData.title}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input
            type="file"
            name="image"
            onChange={onChange}
            files={formData.image}
          />
        </div>

        <div className="form-group">
          <FormItem
            htmlFor="city"
            name="city"
            placeholder="Enter city name"
            type="text"
            value={formData.city}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <FormItem
            htmlFor="postalCode"
            name="postal Code"
            placeholder="Enter postalCode name"
            type="text"
            value={formData.postalCode}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <FormItem
            htmlFor="description"
            name="description"
            placeholder="Enter description name"
            type="text"
            value={formData.description}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <FormItem
            htmlFor="rent"
            name="rent"
            placeholder="Enter rent name"
            type="number"
            value={formData.rent}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <FormItem
            htmlFor="sqFt"
            name="sq ft"
            placeholder="Enter sqFt name"
            type="number"
            value={formData.sqFt}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <FormItem
            htmlFor="type"
            name="type"
            placeholder="Enter type name"
            type="text"
            value={formData.type}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <FormItem
            htmlFor="laundry"
            name="laundry"
            placeholder="Enter laundry name"
            type="text"
            value={formData.laundry}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <FormItem
            htmlFor="bedroom"
            name="bedroom"
            placeholder="Enter number of bedroom"
            type="number"
            value={formData.bedroom}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <FormItem
            htmlFor="bathroom"
            name="bathroom"
            placeholder="Enter number of bathrooms"
            type="number"
            value={formData.bathroom}
            onChange={onChange}
          />
        </div>

        <div className="form-group-checkbox">
          <FormItem
            htmlFor="petsAllowed"
            name="pets allowed"
            placeholder="Enter if petsAllowed"
            type="checkbox"
            value={formData.petsAllowed}
            onChange={onChange}
          />
        </div>

        <div className="form-group-checkbox">
          <FormItem
            htmlFor="canSmoke"
            name="smoking allowed"
            placeholder="Enter if canSmoke"
            type="checkbox"
            value={formData.canSmoke}
            onChange={onChange}
          />
        </div>

        <div className="form-group-checkbox">
          <FormItem
            htmlFor="isFurnished"
            name="is Furnished"
            placeholder="Enter if isFurnished"
            type="checkbox"
            value={formData.isFurnished}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <FormItem
            htmlFor="lease"
            name="lease"
            placeholder="Enter lease length"
            type="text"
            value={formData.lease}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <FormItem
            htmlFor="walkthroughVideo"
            name="walk Through Video Link"
            placeholder="Enter walkthroughVideo url"
            type="text"
            value={formData.walkthroughVideo}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add a House
          </button>
        </div>
      </form>
    </div>
  );
}

export default HouseForm;
