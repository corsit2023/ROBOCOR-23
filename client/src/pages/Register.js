import React, { useState } from "react";
import { toast } from "react-toastify";

function Register() {
  const [progressWidth, setProgressWidth] = useState(0);
  const [formStep, setFormStep] = useState(1);
  const [total, setTotal] = useState(0);
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clg: "",
    branch: "",
    usn: "",
    m1: "",
    m1email: "",
    m2: "",
    m2email: "",
    m3: "",
    m3email: "",
    eventList: [],
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (events.length === 0) toast.error("Please select atleast one event !!!");
    else {
      setProgressWidth((prev) => Number(prev) + 33.33);
      setFormStep((prev) => Number(prev) + 1);
    }
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    setProgressWidth((prev) => Number(prev) - 33.33);
    setFormStep((prev) => Number(prev) - 1);
    setEvents([]);
    setTotal(0);
  };
  const handleCheck = (e) => {
    const { value, id, checked } = e.target;

    if (checked) {
      setEvents((prev) => {
        return [...prev, id];
      });
      setTotal((prevtotal) => {
        return Number(prevtotal) + Number(value);
      });
    } else {
      setTotal((prev) => {
        return Number(prev) - Number(value);
      });
      setEvents(events.filter((e) => e !== id));
    }
  };

  return (
    <div className="container-fluid">
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <h1
          className="text-center mt-5 tracking-in-contract-bck"
          style={{ margin: "3rem .5rem" }}
        >
          Register
        </h1>

        <div className="col-11 d-flex align-items-center justify-content-around flex-column">
          <div className="progress my-4 mx-auto" style={{ width: "90%" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated "
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
          {formStep === 1 && (
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                padding: "1.5rem 2rem",
                borderRadius: "12px",
              }}
            >
              <div className="row align-items-center justify-content-center fade-in-right fade-out-left">
                <div className="col-12 col-md-6 d-flex flex-wrap align-items-center justify-content-around">
                  <div
                    className="row align-items-center justify-content-around flex-wrap"
                    style={{ width: "100%" }}
                  >
                    <div className="col-md-5 col-12 mx-1 my-3  form-check  d-flex align-items-center justify-content-around  ">
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="event1"
                          value={100}
                          onChange={handleCheck}
                          id="1"
                        />
                        <label className="form-check-label" htmlFor="1">
                          EVENT 1 : 100 ₹
                        </label>
                      </div>
                    </div>
                    <div className="col-md-5 col-12 mx-1 my-3 form-check d-flex align-items-center justify-content-around ">
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="event2"
                          value={400}
                          onChange={handleCheck}
                          id="2"
                        />
                        <label className="form-check-label" htmlFor="2">
                          EVENT 2 : 400 ₹
                        </label>
                      </div>
                    </div>{" "}
                    <div className="col-md-5 col-12 mx-1 my-3 form-check d-flex align-items-center justify-content-around ">
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="event3"
                          value={300}
                          onChange={handleCheck}
                          id="3"
                        />
                        <label className="form-check-label" htmlFor="3">
                          EVENT 3 : 300 ₹
                        </label>{" "}
                      </div>
                    </div>{" "}
                    <div className="col-md-5 col-12 mx-1 my-3 form-check d-flex align-items-center justify-content-around ">
                      <div>
                        {" "}
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="event4"
                          value={400}
                          onChange={handleCheck}
                          id="4"
                        />
                        <label className="form-check-label" htmlFor="4">
                          EVENT 4 : 400 ₹
                        </label>
                      </div>
                    </div>{" "}
                    <div className="col-md-5 col-12 mx-1 my-3 form-check d-flex align-items-center justify-content-around ">
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="event5"
                          value={100}
                          onChange={handleCheck}
                          id="5"
                        />
                        <label className="form-check-label" htmlFor="5">
                          EVENT 5 : 100 ₹
                        </label>
                      </div>
                    </div>{" "}
                    <div className="col-md-5 col-12 mx-1 my-3 form-check d-flex align-items-center justify-content-around ">
                      <div>
                        {" "}
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="event6"
                          value={150}
                          onChange={handleCheck}
                          id="6"
                        />
                        <label className="form-check-label" htmlFor="6">
                          EVENT 6 : 150 ₹
                        </label>
                      </div>
                    </div>{" "}
                    <div className="col-md-5 col-12 mx-1 my-3 form-check d-flex align-items-center justify-content-around ">
                      <div>
                        {" "}
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="event7"
                          value={200}
                          onChange={handleCheck}
                          id="7"
                        />
                        <label className="form-check-label" htmlFor="7">
                          EVENT 7 : 200 ₹
                        </label>
                      </div>
                    </div>
                    <div className="col-md-5 col-12 mx-1 my-3 form-check d-flex align-items-center justify-content-around ">
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="event7"
                          value={200}
                          onChange={handleCheck}
                          id="7"
                        />
                        <label className="form-check-label" htmlFor="7">
                          EVENT 8 : 200 ₹
                        </label>
                      </div>
                    </div>{" "}
                    <div className="col-md-5 col-12 mx-1 my-3 form-check d-flex align-items-center justify-content-around ">
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="event9"
                          value={100}
                          onChange={handleCheck}
                          id="9"
                        />
                        <label className="form-check-label" htmlFor="9">
                          EVENT 9 : 100 ₹
                        </label>
                      </div>
                    </div>{" "}
                    <div className="col-md-5 col-12 mx-1 my-3 form-check d-flex align-items-center justify-content-around ">
                      <div>
                        {" "}
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="event10"
                          value={100}
                          onChange={handleCheck}
                          id="10"
                        />
                        <label className="form-check-label" htmlFor="10">
                          EVENT 10 : 100 ₹
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-light my-3">
                    Total : {total} ₹
                  </button>
                </div>
                <div className="col-12 col-md-6 ">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your name"
                      name="name"
                      required
                      id="name"
                      value={formData.name}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="name" className="form-label">
                      TEAM LEADER NAME
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control mb-3"
                      placeholder="Enter your email"
                      name="email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      id="email"
                      value={formData.email}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="email" className="form-label">
                      EMAIL
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control mb-3"
                      placeholder="Enter your phone number"
                      name="phone"
                      pattern="^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$"
                      title="e.g +919XXXXXXXX5,99XXXXXXX5,099XXXXXXX5"
                      required
                      id="phone"
                      value={formData.phone}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="phone" className="form-label">
                      PHONE
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your usn"
                      name="usn"
                      value={formData.usn}
                      minLength={10}
                      maxLength={10}
                      title="e.g 1si23cs003,4si23cs003"
                      required
                      id="usn"
                      onChange={handleOnChange}
                    />
                    <label htmlFor="usn" className="form-label">
                      USN
                    </label>
                  </div>

                  <select
                    className="form-select form-select-lg mb-3 "
                    id="select-input"
                    value={formData.branch}
                    name="branch"
                    onChange={handleOnChange}
                    required
                    style={{
                      fontSize: "1.04rem",
                      textAlign: "left",
                      cursor: "pointer",
                      padding: ".8rem",
                    }}
                  >
                    <option value="" selected>
                      {" "}
                      BRANCH
                    </option>
                    <option value="CSE">Computer Science</option>
                    <option value="ECE">Electronics & Communication</option>
                    <option value="ISE">Information Science</option>
                    <option value="EEE">Electrical & Electronics</option>
                    <option value="AIDS">
                      Artificial Inteligence & Data Science
                    </option>
                    <option value="ETE">Electronics & Telecommunicaton</option>
                    <option value="EIE">Electronics & Instrumentation</option>
                    <option value="IEM">
                      Industrial Engineering Management
                    </option>
                    <option value="Mec">Mechanical </option>
                    <option value="CIV">Civil </option>
                    <option value="BIO">Biotechnology</option>
                    <option value="CHE">Chemical</option>
                    <option value="AIML">
                      Artificial Intelligence & Machine Learning
                    </option>
                  </select>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your college name"
                      name="clg"
                      required
                      id="clg"
                      value={formData.clg}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="clg" className="form-label">
                      COLLEGE NAME
                    </label>
                  </div>
                  <div
                    className="row align-items-center justify-content-center mx-auto"
                    style={{ width: "100%" }}
                  >
                    {" "}
                    <div className="col-12 d-flex flex-row align-items-center justify-content-end">
                      {" "}
                      <button type="submit" className="btn btn-dark ">
                        continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
          {formStep === 2 && (
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                padding: "1.5rem 2rem",
                borderRadius: "12px",
              }}
            >
              <div className="row align-items-center justify-content-center fade-in-right">
                <div className="col-12 col-md-6 d-flex flex-wrap align-items-center justify-content-around">
                  <ul>
                    <h4>
                      <strong>NOTE :</strong>
                    </h4>

                    <li>
                      If u opt for event 1 ,the team size constraint is max. 2
                    </li>
                    <li>
                      If u opt for event 2 ,the team size constraint is max. 3
                    </li>
                    <li>
                      For all other events ,the team size constraint is max. 4
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 ">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your name"
                      name="m1"
                      id="m1"
                      value={formData.m1}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="m1" className="form-label">
                      TEAM MEMBER 1 NAME
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control mb-3"
                      placeholder="Enter your email"
                      name="m1email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      id="m1email"
                      value={formData.m1email}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="m1email" className="form-label">
                      EMAIL
                    </label>
                  </div>
                  {!events.includes("1") && (
                    <>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Enter your name"
                          name="m2"
                          id="m2"
                          value={formData.m2}
                          onChange={handleOnChange}
                        />
                        <label htmlFor="m2" className="form-label">
                          TEAM MEMBER 2 NAME
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control mb-3"
                          placeholder="Enter your email"
                          name="m2email"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          id="m2email"
                          value={formData.m2email}
                          onChange={handleOnChange}
                        />
                        <label htmlFor="m2email" className="form-label">
                          EMAIL
                        </label>
                      </div>{" "}
                      {!events.includes("2") && (
                        <>
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control mb-3"
                              placeholder="Enter your name"
                              name="m3"
                              id="m3"
                              value={formData.m3}
                              onChange={handleOnChange}
                            />
                            <label htmlFor="m3" className="form-label">
                              TEAM MEMBER 3 NAME
                            </label>
                          </div>
                          <div className="form-floating">
                            <input
                              type="email"
                              className="form-control mb-3"
                              placeholder="Enter your email"
                              name="m3email"
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                              id="m3email"
                              value={formData.m3email}
                              onChange={handleOnChange}
                            />
                            <label htmlFor="m3email" className="form-label">
                              EMAIL
                            </label>
                          </div>
                        </>
                      )}{" "}
                    </>
                  )}

                  <div
                    className="row align-items-center justify-content-center mx-auto"
                    style={{ width: "100%" }}
                  >
                    {" "}
                    <div className="col-12 d-flex flex-row align-items-center justify-content-between">
                      {" "}
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={handlePrevious}
                      >
                        previous
                      </button>
                      <button type="submit" className="btn btn-dark ">
                        continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
          {formStep === 3 && <h2 style={{ color: "#fff" }}>Payment Gateway</h2>}
        </div>
      </div>
    </div>
  );
}

export default Register;
