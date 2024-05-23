// definition of how to interact with the API
import axiosInstance from "./axiosInstance";

// Event
export const createEvent = async (data) => {

  for (let pair of data.entries()) {
    console.log("haai", pair[0]+ ': ' + pair[1]);
}
  try {
    const response = await axiosInstance.post("/event", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar requisição:", error);
    throw error;
  }
};

export const getAllEvents = async () => {
  return (await axiosInstance.get("/event/events")).data;
};

export const getEventById = async (eventId) => {
  return (await axiosInstance.get(`/event/${eventId}`)).data;
};

export const getEventName = async () => {
  return (await axiosInstance.get("/event/name")).data;
};

export const getMyEvents = async () => {
  return (await axiosInstance.get("/event/myEvent")).data;
};

export const getEventFeed = async (eventId) => {
  return (await axiosInstance.get(`/event/feed/${eventId}`)).data;
};

export const getCardEvent = async () => {
  return (await axiosInstance.get("/event/card")).data;
};

// Assessment
export const createAssessment = async (eventId, data) => {
  return (await axiosInstance.post(`/assessment/${eventId}`, data)).data;
};

export const getAssessmentWithEvent = async (eventId) => {
  return (await axiosInstance.get(`/assessment/assessments/${eventId}`)).data;
};

// Comments Event
export const getAllCommentsByEventId = async (eventId) => {
  return (await axiosInstance.get(`/assessment/comments/${eventId}`)).data;
};

// Dashboard Event
export const getAverageOfEvent = async (eventId) => {
  return (await axiosInstance.get(`/dashboard/average/${eventId}`)).data;
};

export const getHighPointsGraph = async (eventId) => {
  return (await axiosInstance.get(`/dashboard/highPoints/${eventId}`)).data;
};

export const getSuggestionsBasedOnAssessment = async (eventId) => {
  return (await axiosInstance.get(`/dashboard/suggestion/${eventId}`)).data;
};

// Ticket Event
export const createTicket = async (eventId, data) => {
  console.log("API call to create ticket with eventId:", eventId);
  return (await axiosInstance.post(`/ticket/${eventId}`, data)).data;
};

export const updateTicket = async (ticketId, data) => {
  return (
    await axiosInstance.patch(`/ticket/${ticketId}`, data)
  ).data;
};