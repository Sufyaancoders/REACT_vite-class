import { useState } from 'react'
import './App.css'

function App() {
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification:""
  });
console.log(formData);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
      //[event.target.name ]: event.target.value
    });
  }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Registration Form</h2>
              </div>
            </div>
            <form className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose font-medium text-gray-700" htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={changeHandler}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    id="firstName"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose font-medium text-gray-700" htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={changeHandler}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    id="lastName"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose font-medium text-gray-700" htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={changeHandler}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    id="email"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose font-medium text-gray-700" htmlFor="country">Country</label>
                  <select
                    name="country"
                    id="country"
                    value={formData.country}
                    onChange={changeHandler}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  >
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="uae">UAE</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose font-medium text-gray-700" htmlFor="streetAddress">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="Street Address"
                    value={formData.streetAddress}
                    onChange={changeHandler}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    id="streetAddress"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose font-medium text-gray-700" htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={changeHandler}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    id="city"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose font-medium text-gray-700" htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={changeHandler}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    id="state"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="leading-loose font-medium text-gray-700" htmlFor="postalCode">Postal Code</label>
                  <input
                    type="number"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={changeHandler}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    id="postalCode"
                  />
                </div>

                <fieldset className="mt-4">
                  <legend className="text-base font-medium text-gray-900">By Email</legend>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="comments"
                        name="comments"
                        checked={formData.comments}
                        onChange={changeHandler}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <div className="ml-3">
                        <label htmlFor="comments" className="font-medium text-gray-700">Comments</label>
                        <p className="text-gray-500 text-sm">Get notified when someone posts a comment</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="candidate"
                        name="candidate"
                        checked={formData.candidate}
                        onChange={changeHandler}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <div className="ml-3">
                        <label htmlFor="candidate" className="font-medium text-gray-700">Candidate</label>
                        <p className="text-gray-500 text-sm">Get notified when someone posts a comment</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="offers"
                        name="offers"
                        checked={formData.offers}
                        onChange={changeHandler}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <div className="ml-3">
                        <label htmlFor="offers" className="font-medium text-gray-700">Offers</label>
                        <p className="text-gray-500 text-sm">Get notified when someone posts a comment</p>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-4">
                  <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="pushEverything"
                        name="pushNotification"
                        value="Everything"
                        onChange={changeHandler}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <label htmlFor="pushEverything" className="ml-3 font-medium text-gray-700">
                        Everything
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="pushEmail"
                        name="pushNotification"
                        value="Same as email"
                        onChange={changeHandler}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <label htmlFor="pushEmail" className="ml-3 font-medium text-gray-700">
                        Same as Email
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="pushNothing"
                        name="pushNotification"
                        value="No Push Notification"
                        onChange={changeHandler}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <label htmlFor="pushNothing" className="ml-3 font-medium text-gray-700">
                        No Push Notification
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div className="pt-4 flex items-center space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


