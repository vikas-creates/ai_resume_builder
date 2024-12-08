import form from "../Models/Form.model.js"

export const formDetails = async (req, res) => {
	try {
		const newForm = new form(req.body)
		await newForm.save()
		res.status(200).send("User has been created")
	} catch (error) {
		console.log(error)
	}
}
