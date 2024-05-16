import axiosInstance from './axiosInstance';

// Event 
export const getAllEvents = async () => {
  return (await axiosInstance.get('/event/events')).data;
};

export const getEventById = async (eventId) => {
  return (await axiosInstance.get(`/event/${eventId}`)).data;
};

export const getEventName = async () => {
  return (await axiosInstance.get('/event/name')).data;
};

export const getMyEvents = async () => {
  return (await axiosInstance.get('/event/myEvent')).data;
};

export const getEventFeed = async () => {
  return (await axiosInstance.get('/event/feed')).data;
};

export const getCardEvent = async () => {
  return (await axiosInstance.get('/event/card')).data;
};

// Assessment 
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
