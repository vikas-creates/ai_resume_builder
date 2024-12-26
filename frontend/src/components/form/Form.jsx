import React, { useState } from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"
import Form_template from "./Form_template"
import axios from "axios"

export default function Form() {
	const [openModal, setOpenModal] = useState(1)
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		designation: "",
		address: "",
		mobile: "",
		portfolioLink: "",
		githubLink: "",
		XschoolName: "",
		Xschoolperc: "",
		XschoolSYear: "",
		XschoolEYear: "",
		XIIschoolName: "",
		XIIschoolPerc: "",
		XIIschoolSYear: "",
		XIIschoolEYear: "",
		degreeCollegeName: "",
		degreeCollegePerc: "",
		degreeCollegeSYear: "",
		degreeCollegeEYear: "",
		masterDegreeCollegeName: "",
		masterDegreeCollegePerc: "",
		masterDegreeCollegeSYear: "",
		masterDegreeCollegeEYear: "",
		skill: "",
		IexpDesignation: "",
		IexpCompany: "",
		IexpSYear: "",
		IexpEYear: "",
		IexpRole: "",
		IIexpDesignation: "",
		IIexpCompany: "",
		IIexpSYear: "",
		IIexpEYear: "",
		IIexpRole: "",
		IIIexpDesignation: "",
		IIIexpCompany: "",
		IIIexpSYear: "",
		IIIexpEYear: "",
		IIIexpRole: "",
		summary: "",
	})
	const OpenModal = (modalNumber) => {
		setOpenModal(modalNumber)
	}

	const handleChange = async (e) => {
		const { name, value } = e.target
		const updatedData = { ...formData, [name]: value }

		setFormData(updatedData)

		// Automatically send updated data to API
		try {
			const response = await axios.post(
				"http://localhost:9000/form/add",
				updatedData
			)
			console.log("Data sent successfully:", response.data)
		} catch (error) {
			console.error("Error sending data:", error)
		}
	}

	return (
		<div>
			<Navbar />
			{openModal == 1 && (
				<div className="flex justify-between gap-4">
					<div class="ml-20 flex-1 mb-5 max-w-4xl font-[sans-serif] p-6">
						<h1 className=" text-3xl font-semibold mb-10 mt-4">
							Fill Up Your Resume
						</h1>

						<form>
							<h1 className="text-2xl font-semibold mb-10">
								General Details
							</h1>
							<div class="grid sm:grid-cols-2 gap-8">
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Full Name
									</label>
									<input
										name="name"
										type="text"
										value={formData.name}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Full Name"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Designation
									</label>
									<input
										name="designation"
										type="text"
										value={formData.designation}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Designation"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Address
									</label>
									<input
										name="address"
										type="text"
										value={formData.address}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Address"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Email Id
									</label>
									<input
										name="email"
										type="text"
										value={formData.email}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Email"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Mobile No.
									</label>
									<input
										name="mobile"
										type="number"
										value={formData.mobile}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter mobile number"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Portfolio Link
									</label>
									<input
										name="portfolioLink"
										type="text"
										value={formData.portfolioLink}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Link"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Github Link
									</label>
									<input
										name="githubLink"
										type="text"
										value={formData.githubLink}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Link"
									/>
								</div>
							</div>

							<div class="!mt-12">
								<button
									onClick={() => OpenModal(2)}
									type="button"
									class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
								>
									Next
								</button>
							</div>
						</form>
					</div>
					<Form_template />
				</div>
			)}
			{openModal == 2 && (
				<div className="flex justify-between gap-4">
					<div class="ml-20 flex-1 mb-5 max-w-4xl font-[sans-serif] p-6">
						<h1 className=" text-3xl font-semibold mb-10 mt-4">
							{" "}
							Fill Up Your Resume
						</h1>

						<form>
							<h1 className="text-2xl font-semibold mb-10">
								Education
							</h1>
							<h1 className="text-xl font-semibold mb-5">
								1. X/10th
							</h1>
							<div class="grid sm:grid-cols-2 gap-8">
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										School Name
									</label>
									<input
										name="XschoolName"
										type="text"
										value={formData.XschoolName}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter School Name"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Percentage
									</label>
									<input
										name="XschoolPerc"
										type="text"
										value={formData.XschoolPerc}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter in percentage"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Starting Year
									</label>
									<input
										name="XschoolSYear"
										type="text"
										value={formData.XschoolSYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2018)"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Ending Year
									</label>
									<input
										name="XschoolEYear"
										type="text"
										value={formData.XschoolEYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2019)"
									/>
								</div>
							</div>
							<h1 className="text-xl font-semibold mb-5 mt-10">
								2. XII/12th/Diploma
							</h1>
							<div class="grid sm:grid-cols-2 gap-8">
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										School/Institution Name
									</label>
									<input
										name="XIIschoolName"
										type="text"
										value={formData.XIIschoolName}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter School Name"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Percentage
									</label>
									<input
										name="XIIschoolPerc"
										type="text"
										value={formData.XIIschoolPerc}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter in percentage"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Starting Year
									</label>
									<input
										name="XIIschoolSYear"
										type="text"
										value={formData.XIIschoolSYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2018)"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Ending Year
									</label>
									<input
										name="XIIschoolEYear"
										type="text"
										value={formData.XIIschoolEYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2019)"
									/>
								</div>
							</div>
							<h1 className="text-xl font-semibold mb-5 mt-10">
								3. Degree
							</h1>
							<div class="grid sm:grid-cols-2 gap-8">
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										College Name
									</label>
									<input
										name="degreeCollegeName"
										type="text"
										value={formData.degreeCollegeName}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter College Name"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Percentage
									</label>
									<input
										name="degreeCollegePerc"
										type="text"
										value={formData.degreeCollegePerc}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter in percentage"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Starting Year
									</label>
									<input
										name="degreeCollegeSYear"
										type="text"
										value={formData.degreeCollegeSYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2018)"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Ending Year
									</label>
									<input
										name="degreeCollegeEYear"
										type="text"
										value={formData.degreeCollegeEYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2019)"
									/>
								</div>
							</div>
							<h1 className="text-xl font-semibold mb-5 mt-10">
								4. Master's Degree
							</h1>
							<div class="grid sm:grid-cols-2 gap-8">
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										College Name
									</label>
									<input
										name="masterDegreeCollegeName"
										type="text"
										value={formData.masterDegreeCollegeName}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter College Name"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Percentage
									</label>
									<input
										name="masterDegreeCollegePerc"
										type="text"
										value={formData.masterDegreeCollegePerc}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter in percentage"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Starting Year
									</label>
									<input
										name="masterDegreeCollegeSYear"
										type="text"
										value={formData.masterDegreeCollegeSYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2018)"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Ending Year
									</label>
									<input
										name="masterDegreeCollegeEYear"
										type="text"
										value={formData.masterDegreeCollegeEYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2019)"
									/>
								</div>
							</div>
							<div class="!mt-12 flex gap-4">
								<button
									onClick={() => OpenModal(1)}
									type="button"
									class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
								>
									Back
								</button>
								<button
									onClick={() => OpenModal(3)}
									type="button"
									class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
								>
									Next
								</button>
							</div>
						</form>
					</div>
					<div>
						<Form_template />
						<Form_template />
					</div>
				</div>
			)}
			{openModal == 3 && (
				<div className="flex justify-between gap-4">
					<div class=" flex-1 max-w-4xl ml-20 font-[sans-serif] p-6">
						<h1 className=" text-3xl font-semibold mb-10 mt-4">
							Fill Up Your Resume
						</h1>

						<form>
							<h1 className="text-2xl font-semibold mb-5">
								Experience
							</h1>
							<div class="grid sm:grid-cols-2 gap-8">
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Skills
									</label>
									<input
										name="skills"
										type="text"
										value={formData.XschoolName}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Your Skills"
									/>
								</div>
							</div>
							<h1 className="text-xl font-semibold mb-5 mt-10">
								1. Experience
							</h1>
							<div class="grid sm:grid-cols-2 gap-8">
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Designation
									</label>
									<input
										name="IexpDesignation"
										type="text"
										value={formData.IexpDesignation}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Designation"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Company
									</label>
									<input
										name="IexpCompany"
										type="text"
										value={formData.IexpCompany}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Company"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Starting Year
									</label>
									<input
										name="IexpSYear"
										type="text"
										value={formData.IexpSYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2019)"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Ending Year
									</label>
									<input
										name="IexpEYear"
										type="text"
										value={formData.IexpEYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2020)"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Role in Company
									</label>
									<textarea
										name="IexpRole"
										type="text"
										value={formData.IexpRole}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Your Role in Company"
									/>
								</div>
							</div>
							<h1 className="text-xl font-semibold mb-5 mt-10">
								2. Experience
							</h1>
							<div class="grid sm:grid-cols-2 gap-8">
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Designation
									</label>
									<input
										name="IIexpDesignation"
										type="text"
										value={formData.IIexpDesignation}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Designation"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Company
									</label>
									<input
										name="IIexpCompany"
										type="text"
										value={formData.IIexpCompany}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Company"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Starting Year
									</label>
									<input
										name="IIexpSYear"
										type="text"
										value={formData.IIexpSYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2019)"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Ending Year
									</label>
									<input
										name="IIexpEYear"
										type="text"
										value={formData.IIexpEYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2020)"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Role in Company
									</label>
									<textarea
										name="IIexpRole"
										type="text"
										value={formData.IIexpRole}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Your Role in Company"
									/>
								</div>
							</div>
							<h1 className="text-xl font-semibold mb-5 mt-10">
								3. Experience
							</h1>
							<div class="grid sm:grid-cols-2 gap-8">
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Designation
									</label>
									<input
										name="IIIexpDesignation"
										type="text"
										value={formData.IIIexpDesignation}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Designation"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Company
									</label>
									<input
										name="IIIexpCompany"
										type="text"
										value={formData.IIIexpCompany}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Company"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Starting Year
									</label>
									<input
										name="IIIexpSYear"
										type="text"
										value={formData.IIIexpSYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2019)"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Ending Year
									</label>
									<input
										name="IIIexpEYear"
										type="text"
										value={formData.IIIexpEYear}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Example (2020)"
									/>
								</div>
								<div>
									<label class="text-gray-800 text-sm mb-2 block">
										Role in Company
									</label>
									<textarea
										name="IIIexpRole"
										type="text"
										value={formData.IIIexpRole}
										onChange={handleChange}
										class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
										placeholder="Enter Your Role in Company"
									/>
								</div>
							</div>
							<h1 className="text-xl font-semibold mb-5 mt-10">
								3. About Me
							</h1>
							<div>
								<label class="text-gray-800 text-sm mb-2 block">
									Summary
								</label>
								<textarea
									name="summary"
									type="text"
									value={formData.summary}
									onChange={handleChange}
									class="bg-gray-200 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
									placeholder="Summary About Yourself"
								/>
							</div>

							<div class="!mt-12 gap-4 flex">
								<button
									onClick={() => OpenModal(2)}
									type="button"
									class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
								>
									Back
								</button>
								<button
									type="button"
									class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
					<div>
						<Form_template />
						<Form_template />
						<Form_template />
					</div>
				</div>
			)}
			<Footer />
		</div>
	)
}
