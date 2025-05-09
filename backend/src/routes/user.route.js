import express from "express"
import { getRecommendedUsers, getMyFriends, sendFriendResquest } from "../controllers/user.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router()

// apply protectRoute middleware to all routes
router.use(protectRoute)

router.get("/", getRecommendedUsers)
router.get("/friends", getMyFriends)

router.post("/friend-request/:id", sendFriendResquest)

export default router