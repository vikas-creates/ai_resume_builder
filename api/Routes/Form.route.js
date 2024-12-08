import express from "express"
import { formDetails } from "../Controllers/Form.controller.js"

const router = express.Router()

router.post("/add", formDetails)

export default router
