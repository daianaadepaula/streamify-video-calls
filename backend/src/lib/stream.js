import { StreamChat } from "stream-chat"
import "dotenv/config"

const ApiKey = process.env.STEAM_API_KEY
const ApiSecret = process.env.STEAM_API_SECRET
if (!ApiKey || !ApiSecret) {
	console.error("Stream API key or Secret is missing")
}
const streamClient = StreamChat.getInstance(ApiKey, ApiSecret)
export const upsertStreamUser = async (userData) => {
	try {
		await streamClient.upsertUsers([userData])
		return userData
	} catch (error) {
		console.error("Error upserting Stream user: ", error)
	}
}
 
// TODO do it later
export const generateStreamToken = (userId) => { }