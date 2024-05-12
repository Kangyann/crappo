import axios from "axios";
import ENDPOINT from "infrastructure/api/endPoint";
import React, { useState } from "react";
const EmailForm = () => {
  const [email, setEmail] = useState("");
  const postData = async (postData) => {
    try {
      const response = await axios.post(ENDPOINT.SUBSCRIBE, { data: postData });
      console.log("Data berhasil dikirim:", response.data);
    } catch (error) {
      console.error("Gagal mengirim data:", error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await postData({ email });
  };
  console.log(email);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email Address:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailForm;
