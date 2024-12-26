import mongoose from "mongoose"

//this schema is integrated in formSchema and this schema includes details of one full fields of 10th(including schoolname,percentage etc), 12th and so on.
const educationSchema = new mongoose.Schema({
	level: {
		type: String,
		enum: ["10th", "12th", "graduation", "post-graduation"],
	},
	schoolname: {
		level: "10th",
		type: String,
	},
	percentage: {
		level: "10th",
		type: String,
	},
	startingyear: {
		level: "10th",
		type: Date,
	},
	endingyear: {
		level: "10th",
		type: Date,
	},
})

const experienceSchema = new mongoose.Schema({
	level: {
		type: String,
		enum: ["exp1", "exp2", "exp3"],
	},
	designation: {
		type: String,
	},
	Company: {
		type: String,
	},
	startingyear: {
		type: String,
	},
	endingyear: {
		type: String,
	},
	role: {
		type: String,
	},
})

const formSchema = new mongoose.Schema({
	fullname: {
		type: String,
		// required: true,
	},
	designation: {
		type: String,
		// required: true,
	},
	address: {
		type: String,
		// required: true,
	},
	email: {
		type: String,
		// required: true,
	},
	mobile: {
		type: String,
		// required: true,
	},
	portfolio: {
		type: String,
		validate: {
			validator: function (v) {
				return /^(ftp|http|https):\/\/[^ "]+$/.test(v) // URL validation
			},
			message: (props) => `${props.value} is not a valid URL!`,
		},
	},
	github: {
		type: String,
		validate: {
			validator: function (v) {
				return /^(ftp|http|https):\/\/[^ "]+$/.test(v) // URL validation
			},
			message: (props) => `${props.value} is not a valid URL!`,
		},
	},
	education: {
		type: [educationSchema],
	},
	skills: {
		type: String,
	},
	experience: {
		type: [experienceSchema],
	},
	summary: {
		type: String,
	},
})

//this function will ensure the predefined education like first will be 10th then 12th and so on.same with explevels they define levels of experience.
formSchema.pre("save", function (next) {
	const predefinedlevels = [
		"10th",
		"12th",
		"graduation",
		"postgraduation",
	]
	const explevels = ["exp1", "exp2", "exp3"]
	this.education.forEach((entry, index) => {
		entry.level = predefinedlevels[index] || "unknown"
	})
	this.experience.forEach((entry, index) => {
		entry.level = explevels[index] || "unknown"
	})
	next()
})

const form = mongoose.model("form", formSchema)

export default form
