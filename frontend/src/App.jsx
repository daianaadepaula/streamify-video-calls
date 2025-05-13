import { Route, Routes } from "react-router"
import axios from "axios"
import { useEffect, useState } from "react"

import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import NotificationsPage from './pages/NotificationsPage.jsx'
import CallPage from './pages/CallPage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import OnboardingPage from './pages/OnboardingPage.jsx'

import { Toaster } from "react-hot-toast"
import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "./lib/axios.js"

const App = () => {
	// tanstack query crash course
	const { data, isLoading, error } = useQuery({
		queryKey: ["todos"],
		queryFn: async () => {
			const res = await axiosInstance.get("/auth/me")
			return res.data
		},
		retry: false, // auth check
	})
	console.log(data)
	return (
		<div className="h-screen" data-theme="night" >
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/notifications" element={<NotificationsPage />} />
				<Route path="/call" element={<CallPage />} />
				<Route path="/chat" element={<ChatPage />} />
				<Route path="/onboarding" element={<OnboardingPage />} />
			</Routes>

			<Toaster />
		</div>
	)
}

export default App