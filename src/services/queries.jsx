// Used to fetch (read) data from an API
import { useQuery } from "@tanstack/react-query";
import {
  getAllEvents,
  getEventById,
  getEventName,
  getMyEvents,
  getEventFeed,
  getCardEvent,
  getAssessmentWithEvent,
  getAllCommentsByEventId,
  getAverageOfEvent,
  getHighPointsGraph,
  getSuggestionsBasedOnAssessment,
} from "../services/api";

// Event 
export function useAllEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });
}

export function useEventById(eventId) {
  return useQuery({
    queryKey: ["event", { eventId }],
    queryFn: () => getEventById(eventId),
    enabled: !!eventId,
  });
}

export function useEventName() {
  return useQuery({
    queryKey: ["eventName"],
    queryFn: getEventName,
  });
}

export function useMyEvents() {
  return useQuery({
    queryKey: ["myEvents"],
    queryFn: getMyEvents,
  });
}

export function useEventFeed(eventId) {
  return useQuery({
    queryKey: ["eventFeed", { eventId }],
    queryFn: () => getEventFeed(eventId),
    enabled: !!eventId,
  });
}

export function useCardEvent() {
  return useQuery({
    queryKey: ["cardEvent"],
    queryFn: getCardEvent,
  });
}

// Assessment 
export function useAssessmentWithEvent(eventId) {
  return useQuery({
    queryKey: ["assessment", { eventId }],
    queryFn: () => getAssessmentWithEvent(eventId),
    enabled: !!eventId,
  });
}

// Comments Event 
export function useAllCommentsByEventId(eventId) {
  return useQuery({
    queryKey: ["comments", { eventId }],
    queryFn: () => getAllCommentsByEventId(eventId),
    enabled: !!eventId,
  });
}

// Dashboard Event
export function useAverageOfEvent(eventId) {
  return useQuery({
    queryKey: ["average", { eventId }],
    queryFn: () => getAverageOfEvent(eventId),
    enabled: !!eventId,
  });
}

export function useHighPointsGraph(eventId) {
  return useQuery({
    queryKey: ["highPoints", { eventId }],
    queryFn: () => getHighPointsGraph(eventId),
    enabled: !!eventId,
  });
}

export function useSuggestionsBasedOnAssessment(eventId) {
  return useQuery({
    queryKey: ["suggestions", { eventId }],
    queryFn: () => getSuggestionsBasedOnAssessment(eventId),
    enabled: !!eventId,
  });
}
