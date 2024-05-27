// definition of functions that perform writing operations
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createEvent,
  /* updateEvent, */
  createAssessment,
  createTicket,
  updateTicket,
} from "./api";

// Mutation for creating an event
export function useCreateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createEvent(data),
    onMutate: () => {
      console.log("Creating event...");
    },
    onError: (error) => {
      console.error("Error creating event:", error);
    },
    onSuccess: (data) => {
      console.log("Event created successfully:", data);
    },
    onSettled: async (_, error) => {
      console.log("Create event mutation settled");
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["events"] });
      }
    },
  });
}

/* // Mutation for updating an event
export function useUpdateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => updateEvent(data),
    onMutate: () => {
      console.log("Updating event...");
    },
    onError: (error) => {
      console.error("Error updating event:", error);
    },
    onSuccess: (data) => {
      console.log("Event updated successfully:", data);
    },
    onSettled: async (_, error, variables) => {
      console.log("Update event mutation settled");
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["events"] });
        await queryClient.invalidateQueries({
          queryKey: ["event", { id: variables.id }],
        });
      }
    },
  });
} */

// Mutation for creating an assessment
export function useCreateAssessment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createAssessment(data.eventId, data), // Pass eventId as the first argument
    onMutate: () => {
      console.log("Creating assessment...");
    },
    onError: (error) => {
      console.error("Error creating assessment:", error);
    },
    onSuccess: (data) => {
      console.log("Assessment created successfully:", data);
    },
    onSettled: async (_, error) => {
      console.log("Create assessment mutation settled");
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["assessments"] });
      }
    },
  }); 
}



// Mutation for creating a ticket
export function useCreateTicket() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ eventId, ...data }) => createTicket(eventId, data), 
    onMutate: () => {
      console.log("Creating ticket...");
    },
    onError: (error) => {
      console.error("Error creating ticket:", error);
    },
    onSuccess: (data) => {
      console.log("Ticket created successfully:", data);
    },
    onSettled: async (_, error) => {
      console.log("Create ticket mutation settled");
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["tickets"] });
      }
    },
  });
}

// Mutation to update a ticket
export function useUpdateTicket() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ ticketId, data }) => updateTicket(ticketId, data),
    onMutate: () => {
      console.log("Updating ticket...");
    },
    onError: (error) => {
      console.error("Error updating ticket:", error);
    },
    onSuccess: (data) => {
      console.log("Ticket updated successfully:", data);
    },
    onSettled: async (_, error, { ticketId }) => {
      console.log("Update ticket mutation settled");
      if (error) {
        console.error(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["tickets"] });
        await queryClient.invalidateQueries({
          queryKey: ["ticket", { ticketId }],
        });
      }
    },
  });
}
