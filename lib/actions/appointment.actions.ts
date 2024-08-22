'use server';

import { ID } from 'node-appwrite';
import { APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases } from '../appwrite.config';
import { parseStringify } from '../utils';

export const createAppointment = async (appointment: CreateAppointmentParams) => {
  try {
    const newAppointment = await databases.createDocument(DATABASE_ID!, APPOINTMENT_COLLECTION_ID!, ID.unique(), appointment);

    return parseStringify(newAppointment);
  } catch (error) {
    console.error('An error occurred while creating a new appointment:', error);
  }
};

export const getAppointments = async (userId: string) => {
  try {
    const appointments = await databases.getDocument(DATABASE_ID!, APPOINTMENT_COLLECTION_ID!, userId);
    return parseStringify(appointments);
  } catch (error) {
    console.error('An error occurred while fetching appointments:', error);
  }
};

export const updateAppointment = async ({ appointmentId, userId, timeZone, appointment, type }: UpdateAppointmentParams) => {
  try {
    const updatedAppointment = await databases.updateDocument(DATABASE_ID!, APPOINTMENT_COLLECTION_ID!, appointmentId, appointment);

    if (!updatedAppointment) throw Error;

    return parseStringify(updatedAppointment);
  } catch (error) {
    console.error('An error occurred while scheduling an appointment:', error);
  }
};
