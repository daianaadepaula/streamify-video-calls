import express from "express"
import { getRecommendedUsers, getMyFriends, sendFriendResquest, acceptFriendResquest, getFriendResquests, getOutgoingFriendReqs } from "../controllers/user.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router()

// apply protectRoute middleware to all routes
router.use(protectRoute)

router.get("/", getRecommendedUsers)
router.get("/friends", getMyFriends)

router.post("/friend-request/:id", sendFriendResquest)
router.put("/friend-request/:id/accept", acceptFriendResquest)

router.get("/friend-requests", getFriendResquests)
router.get("/outgoing-friend-requests", getOutgoingFriendReqs)

export default router